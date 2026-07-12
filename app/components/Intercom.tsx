import { useEffect } from "react";

// Loads the Intercom widget after hydration completes. Previously this ran as
// a raw inline <script> in the HTML shell, which (when document.readyState
// was already "complete" by the time it executed) synchronously inserted an
// <iframe> into <body> mid-hydration, corrupting React's node-matching walk
// and triggering a hydration-mismatch error. Doing it in an effect guarantees
// it only touches the DOM after React has taken over.
interface IntercomFn {
  (...args: unknown[]): void;
  q: unknown[];
  c: (args: unknown[]) => void;
}

declare global {
  interface Window {
    intercomSettings?: { api_base: string; app_id: string };
    Intercom?: IntercomFn;
  }
}

export default function Intercom() {
  useEffect(() => {
    window.intercomSettings = { api_base: "https://api-iam.intercom.io", app_id: "odbfthyr" };

    if (typeof window.Intercom === "function") {
      window.Intercom("reattach_activator");
      window.Intercom("update", window.intercomSettings);
      return;
    }

    const i = ((...args: unknown[]) => i.c(args)) as IntercomFn;
    i.q = [];
    i.c = (args: unknown[]) => i.q.push(args);
    window.Intercom = i;

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://widget.intercom.io/widget/odbfthyr";
    document.body.appendChild(script);
  }, []);

  return null;
}
