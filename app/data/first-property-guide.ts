import { AI_BUILD_DESCRIPTION, AI_SKILL_URL, SYNC_DESCRIPTION, CONTENT_ROADMAP, limitations } from "@/data/integration-copy";
import { PLATFORM_FEE, HOTEL_BASE_RATE, VR_BASE_RATE } from "@/data/pricing";

// Shared by the server-rendered guide and its Markdown mirror.
export const guideTitle = "Built a PMS? Connect your first Booking.com or Airbnb property.";
export const guideDescription = "A practical guide for PMS developers and AI-assisted builders: OTA access, sandbox testing, certification, and your first live property.";
export const guideIntro = `${SYNC_DESCRIPTION} ${AI_BUILD_DESCRIPTION} This guide covers the steps that need a property owner or the Channex team.`;

export const guideSections = [
  {
    id: "fit", title: "1. Check the fit", owner: "You and your developer",
    paragraphs: [
      "Channex supports commercial PMS products and in-house property software. If you are building with an AI coding agent, use this guide to scope the integration and the technical documentation to implement it. Generated code still needs testing, maintenance and certification before production.",
      `There is no minimum property count. The monthly platform fee is $${PLATFORM_FEE}, plus $${HOTEL_BASE_RATE} per connected hotel or $${VR_BASE_RATE.toFixed(2)} per vacation rental unit before volume discounts and extras, excluding VAT. A single-property integration still carries the platform fee.`,
      "Your PMS needs to maintain availability, prices and reservations, keep API credentials on the server, and handle booking changes and cancellations reliably. If you are unsure whether your system is ready, send the team your property type, channels and supported workflows.",
    ],
    links: [{ label: "Pricing and extras", href: "/pricing" }, { label: "Discuss your integration", href: "/contact" }],
  },
  {
    id: "access", title: "2. Understand who connects what", owner: "Developer · property owner · Channex",
    paragraphs: [
      "Your PMS integrates with Channex's API; Channex handles the channel connections. Follow the Channex integration path rather than starting a separate direct API integration for each OTA. The property owner still needs to authorize the connection to their OTA account.",
      "For Booking.com, the property requests Channex as its connectivity provider in the extranet, then the rooms and rate plans are mapped in Channex. For Airbnb, follow the Airbnb account authorization and listing mapping guide. Keep the account owner available for these steps.",
      "This guide connects existing OTA listings. Channex cannot currently create OTA listings or update content such as photos, facilities and amenities. Manage those directly in the OTA extranet; see the limitations and roadmap below.",
    ],
    links: [{ label: "Booking.com connection guide", href: "https://docs.channex.io/channel-mapping-guides/booking.com" }, { label: "Airbnb connection guide", href: "https://docs.channex.io/channel-mapping-guides/airbnb" }],
  },
  {
    id: "scope", title: "3. Choose your first integration scope", owner: "You and your developer",
    paragraphs: [
      "Start with availability, rates, restrictions and reservation delivery. Map your PMS property, room types and rate plans to their Channex IDs. For a vacation rental, model the inventory your PMS actually sells; do not copy a multi-room hotel example unchanged.",
      "You can create inventory through the API and embed Channex's channel mapping interface in your PMS using a one-time access token. This lets property users manage their connections within your product; OTA authorization and certification still have their own steps.",
      "Messaging and reviews are optional add-ons. Support is channel-specific: the messaging documentation covers Booking.com and Airbnb; the reviews documentation covers Airbnb, Expedia and Booking.com. Check the dedicated API docs for any additional feature you plan to offer.",
    ],
    links: [{ label: "PMS integration guide", href: "https://docs.channex.io/guides/pms-integration-guide" }, { label: "Embed channel mapping", href: "https://docs.channex.io/api-v.1-documentation/channel-iframe" }, { label: "Messaging API", href: "https://docs.channex.io/api-v.1-documentation/messages-collection" }, { label: "Reviews API", href: "https://docs.channex.io/api-v.1-documentation/reviews-collection" }],
  },
  {
    id: "limitations", title: "What Channex doesn’t support yet", owner: "Current scope and roadmap",
    paragraphs: [...limitations.map((item) => `${item.title}: ${item.description}`), CONTENT_ROADMAP],
    links: [{ label: "Discuss your requirements", href: "/contact" }],
  },
  {
    id: "sandbox", title: "4. Prove the flow in staging", owner: "Your developer or coding agent",
    paragraphs: [
      "For Claude Code, the Channex integration skill linked below provides implementation guidance. Other AI builders can use this guide, its Markdown version and the API documentation. Review and test generated code against the certification scenarios.",
      "Create a free staging account and generate an API key. Begin with the authenticated read below, then follow Start Integration to create your test property, rooms and rates. The staging environment is separate from production.",
      "Send availability separately from rates and restrictions. Batch changes and use a queue that respects the published rate limits. Test new reservations, modifications and cancellations using the documented test accounts or certification alternatives.",
      "For booking delivery, use the Booking Revisions Feed. With webhooks, fetch the specific revision, save it durably in your PMS, then acknowledge that revision. Also poll the feed as a backup every 15–20 minutes. A webhook HTTP response and a booking revision acknowledgement are separate actions.",
      "Make repeated delivery safe: identify bookings and revisions by their IDs so a retry cannot create another reservation or deduct inventory twice. Recalculate availability from the saved reservation state and send the resulting count. Test recovery after an outage as well as the happy path.",
    ],
    links: [{ label: "Channex integration skill for Claude Code", href: AI_SKILL_URL }, { label: "Start Integration", href: "/start-integration" }, { label: "API reference", href: "https://docs.channex.io/api-v.1-documentation/api-reference" }, { label: "Booking revisions", href: "https://docs.channex.io/api-v.1-documentation/bookings-collection" }, { label: "Rate limits", href: "https://docs.channex.io/api-v.1-documentation/rate-limits" }],
  },
  {
    id: "certification", title: "5. Complete certification", owner: "Your developer and Channex",
    paragraphs: [
      "Production access requires Channex certification. Run the published scenarios through your application, collect the requested task IDs and booking evidence, and submit the certification form linked in the documentation. A live screen-sharing review follows.",
      "The tests cover full sync, incremental updates, restrictions, booking delivery and rate limits. Record any unsupported features in the test notes; the review determines whether the integration is ready. A successful API request alone is not certification.",
      "Arrange a person who can demonstrate the application and explain its update and recovery logic. Confirm the review schedule and production access steps with the team; building an integration in hours does not guarantee production approval in that time.",
    ],
    links: [{ label: "Certification scenarios and submission", href: "https://docs.channex.io/api-v.1-documentation/pms-certification-tests" }],
  },
  {
    id: "go-live", title: "6. Connect one live property carefully", owner: "Developer and property owner",
    paragraphs: [
      "After approval, set up production credentials and inventory mapping. Coordinate the switch with the property owner if another channel manager is already connected. Follow the channel-specific activation instructions; a sandbox connection does not transfer the live property automatically.",
      "Before opening inventory for sale, reconcile future reservations and blocked dates with your PMS so your first availability update reflects existing commitments. Booking.com's guide includes pulling future reservations. Check the corresponding import workflow for each channel, and match imported reservations to existing records to avoid duplicates.",
      "Prepare the required full sync and verify room and rate mappings, currency, prices and restrictions as part of activation. A success response from Channex alone does not establish that every OTA is showing the intended inventory: check channel logs and the OTA's displayed values too.",
    ],
    links: [{ label: "Channel management", href: "https://docs.channex.io/application-documentation/channels-management" }, { label: "Booking.com activation and imports", href: "https://docs.channex.io/channel-mapping-guides/booking.com" }],
  },
  {
    id: "operations", title: "7. Keep the connection healthy", owner: "Your operations team",
    paragraphs: [
      "Monitor sync errors, unmapped bookings and disconnected channels. Keep failed updates queued for recovery, alert someone who can fix mapping problems, and retain enough context to trace a reservation or inventory change across both systems.",
      "Channex can adjust availability when reservations arrive, while your PMS also sends availability updates. Serialize and reconcile your PMS updates so an older count cannot overwrite a newer reservation state. For example, once the last available unit is booked, a delayed update must not reopen it for sale.",
      "Use the best-practice and webhook documentation to implement recovery. If a channel rejects an update or the inventory does not agree, investigate the channel logs and involve support before assuming the connection is healthy.",
    ],
    links: [{ label: "Best practices", href: "https://docs.channex.io/guides/best-practices-guide" }, { label: "Webhooks and sync errors", href: "https://docs.channex.io/api-v.1-documentation/webhook-collection" }, { label: "Service status", href: "https://status.channex.io/" }],
  },
];

export const firstRequest = `# Set CHANNEX_API_KEY to your staging API key in your server environment.
curl --fail-with-body 'https://staging.channex.io/api/v1/properties' \\
  --header "user-api-key: $CHANNEX_API_KEY" \\
  --header 'Accept: application/json'`;
