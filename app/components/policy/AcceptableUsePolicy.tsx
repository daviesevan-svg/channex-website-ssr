const AcceptableUsePolicy = () => {
  return (
    <div id="acceptable" className="space-y-6 border-t pt-8">
      <h2 className="text-3xl font-bold text-foreground font-inter">
        Acceptable Use Policy
      </h2>
      
      <div className="space-y-6 text-muted-foreground font-inter leading-relaxed">
        <div>
          <p>
            Here at Channex, our goal is to help you and your team do the best work of your lives, every day. To do this, we need to keep our products and services running smoothly, quickly, and without distraction. For this to happen, we need help from you, our users. We need you not to misuse or abuse our products and services.
          </p>
          <p className="mt-4">
            To describe exactly what we mean by "misuse" or "abuse" – and help us identify such transgressions, and react accordingly – we've created this Acceptable Use Policy. Under this policy, we reserve the right to remove content that is inconsistent with the spirit of the guidelines, even if it's something that is not forbidden by the letter of the policy. In other words, if you do something that isn't listed here verbatim, but it looks or smells like something listed here, we may still remove it.
          </p>
          <p className="mt-4">
            You'll see the word "services" a lot throughout this page. That refers to all websites owned or operated by Channex (such as Channex.io, and any related websites, sub-domains and pages) as well as any hosted services operated by Channex.
          </p>
          <p className="mt-4">
            Use your judgment, and let's be kind to each other so we can keep creating great things. You can find all the legal fine print at the bottom of this page.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-foreground mb-4">Here's what we won't allow:</h3>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-foreground mb-3">Disruption</h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>Compromising the integrity of our systems. This could include probing, scanning, or testing the vulnerability of any system or network that hosts our services.</li>
            <li>Tampering with, reverse-engineering, or hacking our services, circumventing any security or authentication measures, or attempting to gain unauthorised access to the services, related systems, networks, or data</li>
            <li>Modifying, disabling, or compromising the integrity or performance of the services or related systems, network or data</li>
            <li>Deciphering any transmissions to or from the servers running the services</li>
            <li>Overwhelming or attempting to overwhelm our infrastructure by imposing an unreasonably large load on our systems that consume extraordinary resources (CPUs, memory, disk space, bandwidth, etc.), such as:
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Using "robots," "spiders," "offline readers," or other automated systems to sends more request messages to our servers than a human could reasonably send in the same period of time by using a normal browser</li>
                <li>Going far beyond the use parameters for any given service as described in its corresponding documentation</li>
                <li>Consuming an unreasonable amount of storage for music, videos, pornography, etc., in a way that's unrelated to the purposes for which the services were designed</li>
              </ul>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-foreground mb-3">Wrongful activities</h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>Misrepresentation of yourself, or disguising the origin of any content (including by "spoofing", "phishing", manipulating headers or other identifiers, impersonating anyone else, or falsely implying any sponsorship or association with Channex or any third party)</li>
            <li>Using the services to violate the privacy of others, including publishing or posting other people's private and confidential information without their express permission, or collecting or gathering other people's personal information (including account names or information) from our services</li>
            <li>Using our services to stalk, harass, or post direct, specific threats of violence against others</li>
            <li>Using the Services for any illegal purpose, or in violation of any laws (including without limitation data, privacy, and export control laws)</li>
            <li>Accessing or searching any part of the services by any means other than our publicly supported interfaces (for example, "scraping")</li>
            <li>Using meta tags or any other "hidden text" including Channex's or our suppliers' product names or trademarks</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-foreground mb-3">Inappropriate communications</h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>Using the services to generate or send unsolicited communications, advertising, chain letters, or spam</li>
            <li>Soliciting our users for commercial purposes, unless expressly permitted by Channex</li>
            <li>Disparaging Channex or our partners, vendors, or affiliates</li>
            <li>Promoting or advertising products or services other than your own without appropriate authorisation</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-foreground mb-3">Inappropriate content</h4>
          <p>Posting, uploading, sharing, submitting, or otherwise providing content that:</p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Infringes Channex's or a third party's intellectual property or other rights, including any copyright, trademark, patent, trade secret, moral rights, privacy rights of publicity, or any other intellectual property right or proprietary or contractual right</li>
            <li>You don't have the right to submit</li>
            <li>Is deceptive, fraudulent, illegal, obscene, defamatory, libelous, threatening, harmful to minors, pornographic (including child pornography, which we will remove and report to law enforcement, including the National Center for Missing and Exploited Children), indecent, harassing, hateful</li>
            <li>Encourages illegal or tortious conduct or that is otherwise inappropriate</li>
            <li>Attacks others based on their race, ethnicity, national origin, religion, sex, gender, sexual orientation, disability, or medical condition</li>
            <li>Contains viruses, bots, worms, scripting exploits, or other similar materials</li>
            <li>Is intended to be inflammatory</li>
            <li>Could otherwise cause damage to Channex or any third party</li>
          </ul>
        </div>

        <div className="bg-muted/50 p-6 rounded-lg">
          <p>
            In this Acceptable Use Policy, the term "content" means: (1) any information, data, text, software, code, scripts, music, sound, photos, graphics, videos, messages, tags, interactive features, or other materials that you post, upload, share, submit, or otherwise provide in any manner to the services and (2) any other materials, content, or data you provide to Channex or use with the Services.
          </p>
        </div>

        <div className="bg-destructive/10 border border-destructive/20 p-6 rounded-lg">
          <p className="font-semibold text-destructive mb-2">Enforcement</p>
          <p>
            Without affecting any other remedies available to us, Channex may permanently or temporarily terminate or suspend a user's account or access to the services without notice or liability if Channex (in its sole discretion) determines that a user has violated this Acceptable Use Policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AcceptableUsePolicy;