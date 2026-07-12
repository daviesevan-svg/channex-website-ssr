import { Link } from "react-router";

const Partners = () => {
  const partners = [
    { name: "Booking.com" },
    { name: "Expedia" },
    { name: "Airbnb" },
    { name: "Hostelworld" }
  ];

  return (
    <section className="py-16 bg-background border-y border-border/50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider font-inter">
              TRUSTED BY LEADING PLATFORMS
            </h2>
            <p className="text-lg text-muted-foreground font-inter">
              Connect seamlessly with the world's largest OTAs
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {partners.map((partner, index) => (
              <div 
                key={partner.name}
                className="flex items-center justify-center p-6 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-2xl font-bold text-muted-foreground/40 hover:text-muted-foreground/60 transition-colors duration-300 font-inter">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
          
          <div className="pt-8">
            <p className="text-sm text-muted-foreground font-inter">
              <Link to="/integrations" className="hover:text-primary transition-colors duration-300 cursor-pointer">
                + 50 more OTA connections available
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
