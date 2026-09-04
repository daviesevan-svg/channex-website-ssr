const SecurityPolicy = () => {
  return (
    <div id="security" className="space-y-6 border-t pt-8">
      <h2 className="text-3xl font-bold text-foreground font-inter">
        Security Policy
      </h2>
      <p className="text-sm text-muted-foreground font-inter italic">
        Effective from: 17 August 2026
      </p>

      <div className="space-y-6 text-muted-foreground font-inter leading-relaxed">
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-4">Overview</h3>
          <p>
            The Channex connectivity platform lets accommodation providers, property management systems and independent software vendors connect to distribution channels and exchange availability, rate and booking data. Protecting that data is central to the service — a failure here affects our customers' businesses and their guests, not just us. We take a risk-based approach to security, and this policy sets out the measures we have in place.
          </p>
          <p className="mt-4">
            No single control protects customer data. What protects it is a set of layers — the physical security of the facilities our infrastructure runs in, network and system controls above that, and the access rules that determine what any individual can reach. This policy describes each layer, and is explicit about which parts we operate ourselves and which we rely on our providers for.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-foreground mb-4">Where your data is hosted</h3>
          <p className="mb-4">
            <strong>Channex does not operate its own data centres.</strong> The platform runs on infrastructure provided by Amazon Web Services and DigitalOcean.
          </p>
          <p className="mb-4">
            <strong>Platform data is hosted in the European Union.</strong> We use EU regions for the Channex platform and its databases, so the availability, rate and booking data you send us — including guest personal data — is stored in the EU.
          </p>
          <p>
            Some supporting services we use, such as website analytics, may process limited data outside the EU. Where that involves a restricted transfer of personal data, we put the appropriate safeguards in place — see the International transfers section of our Privacy Policy. A current list of our subprocessors is available on request from support@channex.io.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-foreground mb-4">Standards and compliance</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Our controls are designed in line with the ISO 27001 information security standard</li>
            <li>Our handling of cardholder data is designed in line with the PCI DSS technical requirements, and card processing is carried out by PCI compliant service providers</li>
            <li>We meet our obligations under the UK GDPR and the Data Protection Act 2018, and put the UK International Data Transfer Agreement or Addendum, or the European Commission's standard contractual clauses, in place with customers, partners and suppliers where a restricted transfer requires them</li>
          </ul>
          <p className="mt-4">
            Where we say our controls are <em>designed in line with</em> a standard, we mean we have adopted the practices that standard describes, not that we hold a certification against it. Channex is not itself certified to ISO 27001 or PCI DSS. Our infrastructure and payment providers do hold their own certifications, and their current status is available on request from support@channex.io.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-foreground mb-4">What data do we store?</h3>
          <p className="mb-4">
            Channex stores the data needed to operate the platform: information about your organisation, its properties and its users, and the booking data that must pass between your systems and the channels you connect. We store only what the Services require, and we process booking and guest data as your processor, on your instructions — see the Data Protection Addendum in Section 21 of the Customer Agreement.
          </p>

          <div className="space-y-3">
            <p><strong>For authentication:</strong></p>
            <ul className="list-disc pl-6">
              <li>Usernames and email addresses, and credentials stored as salted hashes</li>
            </ul>

            <p><strong>For channel management:</strong></p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Property details — name, address, contact email, facilities, images, room types, rate plans, availability, prices and restriction data</li>
              <li>Booking data — including, where present, the booker's name and address, guest names, and payment card details</li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-foreground mb-4">Physical security</h3>
          <p className="mb-4">
            Physical security is provided by our infrastructure providers, Amazon Web Services and DigitalOcean, at their own facilities. Channex personnel have no physical access to those facilities. The providers' data centres hold current certifications to major information security standards, including ISO 27001 and PCI DSS, and their published controls include:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Multi-factor access control, including keycard and biometric protocols, with continuous interior and exterior surveillance</li>
            <li>Access restricted to authorised data centre personnel, with prior clearance and escort required to enter a production area</li>
            <li>Background screening of data centre staff</li>
            <li>Redundant power and cooling, including N+1 UPS and HVAC</li>
          </ul>
          <p className="mt-4">
            Current certifications and audit reports for each provider are published by them, and we can point you to the relevant documents on request.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-foreground mb-4">Process and policy</h3>
          <p className="mb-4">
            The first layer of defence is a defined set of security processes. Channex applies a number of process and policy measures that keep security a priority at our most important layer — our people.
          </p>

          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Change control</h4>
              <p>
                A formal change control process reduces the risk associated with system changes. It tracks changes made to our systems and verifies that risks have been assessed, inter-dependencies explored, and the necessary policies and procedures considered and applied, before any change is authorised.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Training</h4>
              <p>
                Channex employees authorised to access the platform undergo periodic training on compliance with our security policies. Personnel who may handle sensitive customer data receive regular training covering security, auditing, access control and data protection compliance.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Authorised access</h4>
              <p>
                Operational access to production systems is limited to a restricted set of Channex operations personnel who need it for their role. Access requires individual named credentials with multi-factor authentication, is granted on a least-privilege basis, is reviewed periodically, and is revoked promptly when someone changes role or leaves. Administrative access is separated from general employee systems, and privileged actions are logged for audit.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-foreground mb-4">Infrastructure</h3>
          <p className="mb-4">
            Between the hosting layer and the Channex application layer sits the infrastructure that supports the platform. Security is applied consistently across it.
          </p>

          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Firewalls</h4>
              <p>
                All network access to our virtual hosts is protected by a multi-layered firewall operating in deny-all mode. Inbound access is permitted only on explicitly opened ports, and only to the hosts that require it. Database servers sit behind an additional firewall and are not reachable from the internet.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Networking</h4>
              <p>
                Platform servers are allocated to security groups with specific network-level settings, supplemented by stateful firewalls at the individual instance level. Separate private networks segregate production, testing and development environments, and separate end-user traffic from administrative traffic.
              </p>
              <p className="mt-2">
                Traffic is segregated across three tiers — the public-facing application tier, the internal service tier, and the data tier — with access between them permitted only on explicitly opened ports.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Encryption</h4>
              <p>
                Data transmitted between you and the platform, and between the platform and connected channels, is encrypted in transit using TLS. Data at rest is encrypted using the encryption facilities provided by our hosting providers.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-foreground mb-4">Systems hardening</h3>
          <p className="mb-4">
            The platform uses a number of coordinated technologies, and many capabilities they ship with are not required. Consistent with industry practice, we review the stack to identify unnecessary services and remove or disable them, reducing the surface available to an attacker.
          </p>

          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-2">No root access</h4>
              <p>
                All customer access to the platform is through our user interface, our APIs and dedicated tools, each requiring authentication with privileges appropriate to the request. Customers do not have root or administrative access to any part of the underlying technology stack; access is only ever via the application layer.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Unnecessary ports closed</h4>
              <p>
                As described under Firewalls, any port on any server or virtual host that is not required for the operation of the platform is disabled.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Security patches</h4>
              <p>
                We have policies and procedures in place to keep all components of the platform — operating systems, hypervisors, middleware, databases and application dependencies — updated with their vendors' security patches.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-foreground mb-4">Data retention</h3>
          <p className="mb-4">
            Customer data is not stored for longer than it is needed. We require data about properties, bookings and users in order to operate the platform, and we remove it according to the schedule below, or earlier on request.
          </p>
          <p className="mb-4">
            Data is also removed if it becomes out of date or no longer valid. This can happen through the removal of a connected service, the termination of an account, or other events originating from connected service providers.
          </p>

          <p className="mb-3"><strong>While an account is open:</strong></p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Availability, rate and restriction data is removed for past dates daily.</li>
            <li>Credit card information is held until 7 days after the booking departure date, then deleted.</li>
            <li>Bookings are deleted once they reach 2 years after the departure date.</li>
          </ul>

          <p className="mb-3 mt-5"><strong>After an account is cancelled or terminated:</strong></p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Account data — usernames, credentials, properties, channels and bookings — is deleted within 30 days of cancellation, or sooner on request. The 30-day window exists so that data can be exported during the period described in Section 13.7 of the Customer Agreement.</li>
            <li>Where the retention rules above would give different answers, the shorter period applies: cancelling an account deletes its bookings within 30 days, regardless of departure date.</li>
            <li>We retain the minimum data the law requires us to keep — for example invoice records for seven years, and guest registration information where it must be provided to local health and safety or police authorities — until that obligation expires. Retained data is isolated and protected from further processing.</li>
            <li>Data held on backup media is deleted on the normal backup rotation cycle, and is not restored into production after an account is deleted.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-foreground mb-4">Reporting a vulnerability</h3>
          <p>
            If you believe you have found a security vulnerability in the Channex platform, please report it to support@channex.io. We will acknowledge your report and keep you informed while we investigate. We will not pursue a good-faith researcher who reports a genuine issue promptly and does not access, alter or retain other customers' data.
          </p>
        </div>

        <div className="bg-muted/50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-foreground mb-4">In summary</h3>
          <p>
            A mature security posture needs coordinated attention across technology, policy, procedure and people. The risk-based approach described here is intended to give strength at every layer, and to be clear about where our responsibilities end and our providers' begin.
          </p>
          <p className="mt-4">
            If you are evaluating Channex and need more detail — a completed security questionnaire, provider audit reports, or the subprocessor list — email support@channex.io and we will help.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SecurityPolicy;
