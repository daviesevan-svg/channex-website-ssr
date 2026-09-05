const AcceptableUsePolicy = () => {
  return (
    <div id="acceptable" className="space-y-6 border-t pt-8">
      <h2 className="text-3xl font-bold text-foreground font-inter">
        Acceptable Use Policy
      </h2>
      <p className="text-sm text-muted-foreground font-inter italic">
        Effective from: 17 August 2026
      </p>

      <div className="space-y-6 text-muted-foreground font-inter leading-relaxed">
        <div>
          <p>
            Channex moves live availability, rates and bookings between accommodation providers and the channels they sell on. When the platform is misused, the damage lands on other people — a property whose rooms are oversold, a guest charged for a stay that does not exist, a channel that suspends a connection everyone depends on. This policy sets out what we do not allow.
          </p>
          <p className="mt-4">
            It applies to everyone using the Services, and it forms part of the Customer Agreement. "Services" means the Channex platform and APIs, and the websites we operate, including channex.io and its subdomains. "Content" means any data, text, code, images or other material you submit to, or transmit through, the Services.
          </p>
          <p className="mt-4">
            We apply this policy to the substance of what you do, not only to the wording below. If something is not listed here but is clearly of the same kind, we may still act on it.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-foreground mb-4">Inventory, rates and bookings</h3>
          <p className="mb-3">These matter most, because they affect guests and channels directly.</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Listing, connecting or managing a property you do not own or are not authorised to act for</li>
            <li>Publishing availability you do not have, or rates you do not intend to honour</li>
            <li>Using the Services to take bookings you know you cannot fulfil</li>
            <li>Misrepresenting a property, its location, its facilities or its licensing status on a connected channel</li>
            <li>Using the Services in a way that breaches your own agreement with a connected channel, or that is designed to circumvent that channel's rules on rates, parity, cancellation or content</li>
            <li>Submitting deliberately false or manipulated booking, cancellation or modification data</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-foreground mb-4">Disruption and system integrity</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Probing, scanning or testing the vulnerability of any system or network hosting the Services, unless we have agreed to it in writing in advance</li>
            <li>Tampering with, reverse engineering or attacking the Services, circumventing any security or authentication measure, or attempting to gain unauthorised access to the Services, related systems, networks or data</li>
            <li>Modifying, disabling or otherwise compromising the integrity or performance of the Services</li>
            <li>Intercepting or deciphering transmissions to or from the servers running the Services</li>
            <li>Placing an unreasonable load on our infrastructure — including exceeding documented API rate limits, polling far more often than the documentation provides for, or running automated processes that consume disproportionate resources</li>
            <li>Sharing user credentials, or accessing the Services through an account that was not issued to you</li>
            <li>Accessing the Services by any means other than our published interfaces and APIs, including scraping</li>
          </ul>
          <p className="mt-4">
            If you believe you have found a security vulnerability, please report it to support@channex.io. We will not pursue a good-faith researcher who reports a genuine issue promptly and does not access or alter other customers' data.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-foreground mb-4">Wrongful activity</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Using the Services for any unlawful purpose, or in breach of any applicable law — including data protection, consumer, tax, export control and local accommodation licensing laws</li>
            <li>Misrepresenting who you are, or disguising the origin of Content — including spoofing, phishing, manipulating headers or identifiers, impersonating another person or business, or falsely implying a relationship with Channex</li>
            <li>Using the Services to violate someone's privacy — publishing other people's private or confidential information without permission, or harvesting personal information from the Services</li>
            <li>Using the Services to stalk, harass or threaten anyone</li>
            <li>Reselling, sublicensing or providing access to the Services to a third party without a signed agreement permitting it (see Section 14 of the Customer Agreement)</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-foreground mb-4">Messaging and guest communications</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Sending unsolicited communications, advertising or spam through the Services. We take a zero tolerance approach to this — see Section 6.2 of the Customer Agreement</li>
            <li>Messaging guests for any purpose other than servicing their booking, unless you have their consent and a lawful basis to do so</li>
            <li>Sending messages that do not comply with applicable marketing, consumer and travel regulations</li>
          </ul>
          <p className="mt-4">
            If you provide the Services to your own clients, your terms with them must prohibit the same conduct.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-foreground mb-4">Content</h3>
          <p className="mb-3">Do not submit or transmit Content that:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>infringes anyone's intellectual property or other rights, or that you do not have the right to submit</li>
            <li>is deceptive, fraudulent, defamatory, obscene, threatening or harassing</li>
            <li>is pornographic or sexually explicit. The transmission of adult content through the Services is prohibited</li>
            <li>attacks or demeans people on the basis of race, ethnicity, national origin, religion, sex, gender, sexual orientation, disability or medical condition</li>
            <li>contains viruses, worms, scripting exploits or similar harmful material</li>
          </ul>
          <p className="mt-4">
            Child sexual abuse material will be removed and reported to law enforcement and to the appropriate authority — in the United Kingdom, the Internet Watch Foundation, and elsewhere the equivalent body, including the National Center for Missing and Exploited Children in the United States.
          </p>
        </div>

        <div className="bg-destructive/10 border border-destructive/20 p-6 rounded-lg">
          <p className="font-semibold text-destructive mb-2">Enforcement</p>
          <p>
            Where we believe this policy has been breached, we will normally tell you and give you a reasonable opportunity to put it right. Where the breach is urgent — for example where it threatens the security of the Services, exposes guests to harm, or puts a channel connection at risk for other customers — we may suspend access immediately and tell you promptly afterwards. Suspension and termination are governed by Sections 12 and 13 of the Customer Agreement, and this does not affect any other remedy available to us.
          </p>
          <p className="mt-3">
            To report a suspected breach of this policy, email support@channex.io.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AcceptableUsePolicy;
