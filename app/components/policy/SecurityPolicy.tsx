const SecurityPolicy = () => {
  return (
    <div id="security" className="space-y-6 border-t pt-8">
      <h2 className="text-3xl font-bold text-foreground font-inter">
        Security Policy
      </h2>
      
      <div className="space-y-6 text-muted-foreground font-inter leading-relaxed">
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-4">Executive Overview</h3>
          <p>
            The Channex Enterprise Connectivity Platform is designed to help Enterprises and Independent Software Vendors (ISVs) securely connect channels and deliver them to hotels, customers, and or partners. Channex realizes that helping to protect our customer's data, ensure proper security regulations, and mitigate any potential risk is essential to building trust and delivering a high-level of service. Channex takes a risk based approach to security and this paper will detail the many different measures and technologies in place to protect our customers.
          </p>
          <p className="mt-4">
            Our security implementation allows us to adhere to the following best practices, demonstrating our commitment to customer security and privacy:
          </p>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li>Abides by the ISO27001 security technical specifications</li>
            <li>Abides by the PCI DSS security technical specifications</li>
            <li>Abides by the EU Data Directive by entering into Model Clauses with applicable customers, partners, and suppliers</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-foreground mb-4">What Data Do We Store?</h3>
          <p className="mb-4">
            Channex only stores metadata about your organisation and your organisation's properties and users.
          </p>
          
          <div className="space-y-3">
            <p><strong>We store the following data for the purpose of authentication:</strong></p>
            <ul className="list-disc pl-6">
              <li>Usernames and/or email addresses</li>
            </ul>

            <p><strong>We store the following data for the purpose of channel management:</strong></p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Property Details (Name, Address, Email, Facilities, Images, rooms types, rates plans and Availability, prices and restriction data.)</li>
              <li>Booking Metadata (including if present: Customer name, guest names, customer address, customer card details)</li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-foreground mb-4">Defense in Depth</h3>
          <p>
            As you'll see from any best-in-class SaaS provider, there is no single layer that protects customer data, but rather a well-architected solution that considers every layer from the physical security measures at the data center, all the way through the access privileges that determine what data an individual user can access. Channex, as a connectivity provider, uses this approach to protect customer data.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-foreground mb-4">Process & Policy</h3>
          <p className="mb-4">
            The first layer of defense is having a well-defined and comprehensive set of security processes and policies to ensure the security of our customers' data and users. Channex's employs a number of process and policy measures that instill security as a key priority at our most core layer…. our people.
          </p>

          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Change Control</h4>
              <p>
                A formal change control process minimises the risk associated with system changes. The process enables tracking of changes made to the systems and verifies that risks have been assessed, inter-dependencies are explored and necessary policies and procedures have been considered and applied before any change is authorised.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Training</h4>
              <p>
                Channex employees authorised to access the Channex platform undergo periodic training to focus employee attention to compliance with corporate security policies. For example, Channex DevOps and Professional Services personnel who may handle sensitive customer data and information will regularly undergo security, auditing, access, and compliance training (e.g. for GDPR)
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Authorised Access</h4>
              <p>
                In addition to restricted personnel entering the production area, operational access is limited to only a restricted set of Channex operations employees. Access is controlled via a physically separate network that is isolated from the Channex corporate network that serves its general employee population ensuring that only personnel authorised to access the data centre may do so. All Channex personnel with physical or operational access to production environments are subject to training and all activities are logged for audit-ability.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-foreground mb-4">Physical</h3>
          <p className="mb-4">
            All Channex data centres are certified to major InfoSec standards, including ISO 27001 and PCI DSS. These data centres also feature N+1 redundant HVAC and UPS. The physical security adheres to the best practices in the industry and include:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Keycard protocols, biometric scanning protocols, and around-the-clock interior and exterior surveillance</li>
            <li>Access limited to authorised datacenter personnel—no one can enter the production area without prior clearance and appropriate escort</li>
            <li>Every data centre employee undergoes thorough background security checks</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-foreground mb-4">Infrastructure</h3>
          <p className="mb-4">
            Between the physical datacenter layer and the Channex Enterprise Connectivity Platform application layer is the infrastructure that supports our solution. Throughout the infrastructure, security is implemented in a comprehensive and coordinated fashion to enhance the safety and security of customer data.
          </p>

          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Firewalls</h4>
              <p>
                All network access to the virtual hosts is protected by a multi-layered firewall operating in a deny-all mode. Internet access is only permitted on explicitly opened ports for only a subset of specified virtual hosts. For an additional layer of security, all database servers reside behind an additional firewall.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Networking</h4>
              <p>
                Channex platform servers are allocated to the respective security groups, characterised by specific security settings (TCP/IP level), supplemented by individual instance level stateful firewalls. Separate VLANs are used to split production, testing and development environments as well as to segregate end-user and administrative traffic.
              </p>
              <p className="mt-2">
                Channex employs a three-tier security model:
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-foreground mb-4">Systems Hardening</h3>
          <p className="mb-4">
            Just like any SaaS offering, the Channex Enterprise Connectivity Platform utilises many well coordinated technologies to deliver our service, yet there may be many capabilities that are not required. Consistent with industry best practices, Channex DevOps closely inspects the entire solution to identify unnecessary services and remove and/or disable these capabilities to reduce vulnerabilities to security threats.
          </p>

          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-2">No Root Access</h4>
              <p>
                All customer access to the Channex Enterprise Connectivity Platform is controlled through user interfaces (UI), APIs, and/or dedicated tools. Use of any of these methods of access require a username and password with privileges appropriate for the requested access.
              </p>
              <p className="mt-2">
                Customers do not have root or administrative access to any portion of the Enterprise Insights Platform technology stack and access is permitted only via the Enterprise Insights Platform application layer (UI or API).
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Shutdown All Unnecessary Ports</h4>
              <p>
                As previously mentioned in the Firewalls section, any ports on any server and/or virtual host not required for the operation of the Channex Enterprise Connectivity Platform is disabled eliminating additional opportunities for external intrusion.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Security Patches</h4>
              <p>
                Channex has rigorous policies and procedures in place to update all components of the Channex Enterprise Connectivity Platform, including operating systems, VM hypervisors, middleware, databases, etc. with their vendors' security patches.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-foreground mb-4">Data Retention</h3>
          <p className="mb-4">
            Customer data is not stored for longer that it is needed. We require data about properties, bookings and users to deliver accurate data visualisations, and remove this data either upon request, or after a period [30 days max] after the account is terminated.
          </p>
          <p className="mb-4">
            Data is also removed if deemed out of date, or no longer valid. This can happen from removal of connected services, termination of accounts, or other events originating from connected service providers.
          </p>
          
          <ul className="list-disc pl-6 space-y-1">
            <li>Bookings will be deleted once they reach 2 years after departure date.</li>
            <li>Availability, Rates and Restriction data is removed for past dates daily.</li>
            <li>Credit Card information is held until 7 days after booking departure.</li>
            <li>Account data (Username, password, properties, channels & bookings) will be deleted within 30 days of account cancellation or on request.</li>
          </ul>
        </div>

        <div className="bg-muted/50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-foreground mb-4">Conclusion</h3>
          <p>
            Here at Channex, we pride ourselves on the vigilance we employ to protect our customers' data assets and we continually stress that a mature security organisation requires coordinated dedication across technology, policy, procedures, and people. This dedication is underscored by the risk-based approach laid out in this document to demonstrate strength at every layer of security, minimising any potential vulnerability or weakness.
          </p>
          <p className="mt-4">
            We want our customers to know their data is sufficiently protected by this approach and welcome the opportunity to discuss these practices and approaches further.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SecurityPolicy;