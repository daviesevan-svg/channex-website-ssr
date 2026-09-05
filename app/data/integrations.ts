import type { Integration } from "@/types/integration";

export const integrations: Integration[] = [
  {
    id: "agoda", 
    name: "Agoda",
    description: "One of Asia's leading OTAs with a strong presence in Southeast Asia and global reach. Agoda offers competitive rates and extensive inventory for leisure and business travelers.",
    icon: "/lovable-uploads/agoda-logo.webp",
    categories: ["OTA", "Global", "Asia"],
    slug: "agoda",
    longDescription: "Agoda is a premier online travel agency that connects travelers with accommodations worldwide, with a particular strength in the Asian market. As part of Booking Holdings Inc., Agoda provides a platform for hotels, vacation rentals, and unique stays to reach millions of travelers globally. Known for its competitive pricing, extensive inventory, and user-friendly booking experience, Agoda is an essential channel for properties looking to expand their reach in Asia and beyond.",
    features: [
      "Dominant presence in Asia-Pacific markets",
      "Real-time rate and availability management", 
      "Multi-currency and payment method support",
      "Local language customer service",
      "Mobile-first booking experience",
      "Competitive commission structure",
      "Global reach with strong Asian market presence",
      "Multi-language and multi-currency support",
      "24/7 customer support",
      "Marketing and promotional opportunities",
      "Advanced analytics and reporting",
      "Flexible cancellation policies",
      "Integration with loyalty programs"
    ],
    useCases: [
      "Hotels targeting Asian markets",
      "Properties seeking global OTA exposure", 
      "Accommodations wanting competitive rates visibility",
      "Hotels looking to increase international bookings",
      "Properties in popular tourist destinations",
      "Businesses targeting mobile-savvy travelers"
    ],
    apiCapabilities: [
      "Real-time availability and rate synchronization",
      "Booking management and modifications",
      "Property and room type configuration", 
      "Guest data and booking details access",
      "Cancellation and no-show handling",
      "Marketing content management",
      "Performance analytics and reporting"
    ],
    setupSteps: [
      "Register as an Agoda partner",
      "Complete property verification process",
      "Upload property photos and descriptions", 
      "Set up room types and amenities",
      "Configure rates and availability calendar",
      "Connect via Channex API integration",
      "Test booking flow and synchronization",
      "Go live and start receiving bookings"
    ],
    website: "https://partner.agoda.com",
    screenshots: [
      "",
      "", 
      "",
      ""
    ], 
    pricing: {
      model: "Commission-based per booking",
      details: "Competitive commission rates with no setup or monthly fees. Commission is only charged on successful bookings.",
      features: [
        "No setup or joining fees",
        "Commission only on confirmed bookings",
        "Marketing support and promotional opportunities",
        "Free partner dashboard and analytics", 
        "24/7 partner support",
        "Regular payment cycles"
      ]
    },
    integrationFeatures: {
      dataSync: ["Reservations", "Rates", "Availability", "Property Data", "Guest Information"],
      realTime: true,
      webhooks: true,
      bulkOperations: true,
      customFields: false
    }
  },
  {
    website: "https://bookingfactory.io/",
    id: "1",
    name: "Booking Factory",
    description: "A modern PMS designed for small to medium-sized accommodations, offering tools to manage bookings, automate operations, and optimize revenue. Features include channel management, direct booking tools, and guest communication, all in one easy-to-use platform.",
    icon: "/lovable-uploads/pms-catalog-booking-factory.webp",
    categories: ["PMS", "Europe"],
    slug: "booking-factory",
    longDescription: "Booking Factory is a comprehensive cloud-based Property Management System specifically designed for small to medium-sized accommodations. Our all-in-one platform streamlines your daily operations with powerful booking management, automated workflows, and integrated channel management. Whether you're running a boutique hotel, bed & breakfast, or vacation rental, Booking Factory provides the tools you need to maximize efficiency and revenue while delivering exceptional guest experiences.",
    features: [
      "Real-time booking management across all channels",
      "Automated guest communication and email workflows",
      "Integrated channel manager for 50+ OTAs",
      "Dynamic pricing and revenue optimization",
      "Multi-property management dashboard",
      "Mobile-responsive guest portal",
      "Comprehensive reporting and analytics",
      "24/7 customer support with live chat",
      "Housekeeping management and scheduling",
      "Payment processing with multiple gateways",
      "Guest review management",
      "Maintenance request tracking"
    ],
    useCases: [
      "Boutique hotels seeking streamlined operations",
      "Bed & breakfast owners wanting to automate workflows",
      "Small hotel chains managing multiple properties",
      "Vacation rental managers optimizing bookings",
      "Independent hoteliers looking to increase direct bookings",
      "Properties wanting to improve guest communication",
      "Accommodations needing better housekeeping coordination"
    ],
    apiCapabilities: [
      "RESTful API with comprehensive endpoints",
      "Real-time availability and rate synchronization",
      "Booking creation and modification webhooks",
      "Guest data management and GDPR compliance",
      "Property and room type configuration",
      "Reporting data export functionality",
      "Payment gateway integration",
      "Third-party app integration support"
    ],
    setupSteps: [
      "Sign up for your Booking Factory account",
      "Complete the property setup wizard with room types and amenities",
      "Configure your rates and availability calendar",
      "Connect your preferred payment gateways",
      "Set up automated email templates for guest communication",
      "Integrate with your existing OTAs through Channex",
      "Train your staff using our comprehensive tutorials",
      "Go live and start accepting bookings"
    ],
    screenshots: [
      "",
      "", 
      "",
      ""
    ],
    pricing: {
      model: "Subscription-based with tiered plans",
      details: "Flexible pricing based on the number of rooms and properties you manage. All plans include core PMS features with advanced tools available in higher tiers.",
      features: [
        "No setup or installation fees",
        "Free data migration from existing systems",
        "All integrations included at no extra cost",
        "24/7 technical support",
        "Regular feature updates and improvements",
        "30-day free trial with full access",
        "Cancel anytime with no long-term contracts"
      ]
    },
    integrationFeatures: {
      dataSync: ["Reservations", "Rates", "Availability", "Guest Profiles", "Property Data", "Financial Reports"],
      realTime: true,
      webhooks: true,
      bulkOperations: true,
      customFields: true
    }
  },
  {
    website: "https://abodebooking.com/",
    aliases: ["Abode"],
    id: "2",
    name: "AbodeBooking",
    description: "A flexible PMS tailored for vacation rentals and small accommodations, offering tools for booking management, automation, and guest communication. Ideal for properties seeking simplicity and efficiency in operations.",
    icon: "/lovable-uploads/pms-catalog-abodebooking.webp",
    categories: ["PMS", "Vacation Rentals", "Asia Pacific"],
    slug: "abode",
    longDescription: "Abode is a user-friendly Property Management System designed specifically for vacation rentals, short-term rentals, and small accommodations. Built with simplicity in mind, Abode streamlines your property operations while maintaining the personal touch that guests expect. Our platform combines powerful automation with intuitive design, making it easy to manage bookings, communicate with guests, and optimize your rental business.",
    features: [
      "Automated booking confirmations and guest messaging",
      "Multi-channel calendar synchronization",
      "Smart pricing recommendations",
      "Guest screening and verification tools",
      "Maintenance and cleaning coordination",
      "Financial reporting and tax preparation",
      "Mobile app for on-the-go management",
      "Integration with smart locks and IoT devices",
      "Review management across platforms",
      "Customizable booking website builder"
    ],
    useCases: [
      "Vacation rental owners managing multiple properties",
      "Airbnb hosts seeking professional tools",
      "Small B&B operators wanting automation",
      "Property managers handling short-term rentals",
      "Real estate investors in rental business",
      "Hotel owners with apartment-style accommodations"
    ],
    apiCapabilities: [
      "RESTful API for seamless integrations",
      "Real-time booking and availability sync",
      "Guest communication automation",
      "Property and amenity management",
      "Financial data and reporting access",
      "Maintenance request workflows",
      "Review and rating synchronization"
    ],
    setupSteps: [
      "Create your Abode account and verify identity",
      "Add your properties with photos and descriptions",
      "Set up your pricing and availability calendar",
      "Configure automated guest communication templates",
      "Connect to your preferred booking channels",
      "Set up cleaning and maintenance workflows",
      "Launch your direct booking website",
      "Start accepting and managing bookings"
    ],
    screenshots: [
      "",
      "",
      ""
    ],
    pricing: {
      model: "Per-property monthly subscription",
      details: "Simple pricing based on the number of properties you manage. Includes all features with no hidden fees.",
      features: [
        "Unlimited bookings and guest communications",
        "All channel integrations included",
        "24/7 customer support",
        "Free setup and onboarding",
        "No commission fees on direct bookings",
        "14-day free trial"
      ]
    },
    integrationFeatures: {
      dataSync: ["Bookings", "Availability", "Rates", "Guest Data", "Reviews"],
      realTime: true,
      webhooks: true,
      bulkOperations: false,
      customFields: true
    }
  },
  {
    id: "3",
    name: "Make.com",
    description: "A versatile automation platform that connects your PMS with various apps and services to create custom workflows. Ideal for streamlining operations, automating tasks, and improving efficiency.",
    icon: "",
    categories: ["API"],
    slug: "make-com",
    longDescription: "Make.com (formerly Integromat) is a powerful visual automation platform that enables you to connect your PMS with hundreds of applications and services. Create sophisticated workflows without coding, automate repetitive tasks, and integrate your hotel operations with external tools like CRM systems, marketing platforms, and financial software. Perfect for properties that want to build custom automation solutions.",
    features: [
      "Visual workflow builder with drag-and-drop interface",
      "1000+ pre-built app integrations",
      "Advanced data transformation and filtering",
      "Real-time and scheduled automation triggers",
      "Error handling and workflow monitoring",
      "Custom webhook support",
      "Multi-step complex automations",
      "Data storage and temporary variables",
      "Conditional logic and branching",
      "Team collaboration and sharing"
    ],
    useCases: [
      "Properties wanting custom PMS integrations",
      "Hotels needing CRM synchronization",
      "Automating guest communication workflows",
      "Connecting PMS with marketing tools",
      "Financial data synchronization",
      "Custom reporting and analytics",
      "Inventory management automation"
    ],
    apiCapabilities: [
      "HTTP/REST API connectivity",
      "Webhook receivers and senders",
      "JSON and XML data processing",
      "Database connections",
      "File processing and storage",
      "Email and SMS automation",
      "Authentication protocols (OAuth, API keys)"
    ],
    setupSteps: [
      "Sign up for Make.com account",
      "Install PMS connector from app directory",
      "Authenticate your PMS connection",
      "Design your automation scenarios",
      "Test workflows with sample data",
      "Deploy and monitor automations",
      "Set up error notifications and handling"
    ],
    website: "https://make.com",
    screenshots: [
      "",
      "",
      ""
    ],
    pricing: {
      model: "Usage-based with free tier",
      details: "Pay only for the operations you use. Free tier includes 1,000 operations per month. Scale up as your automation needs grow.",
      features: [
        "Free tier with 1,000 operations/month",
        "No setup or monthly fees for free tier",
        "Pay-as-you-scale pricing model",
        "Enterprise plans available",
        "All integrations included",
        "24/7 community support"
      ]
    },
    integrationFeatures: {
      dataSync: ["Custom Data", "Webhooks", "API Calls", "File Processing"],
      realTime: true,
      webhooks: true,
      bulkOperations: true,
      customFields: true
    }
  },
  {
    aliases: ["Front Desk Master"],
    id: "4",
    name: "FrontDeskMaster",
    description: "A robust PMS for hostels, hotels, and small accommodations, offering features like channel management, automation, and reporting. Ideal for properties seeking an all-in-one, user-friendly platform.",
    icon: "/lovable-uploads/pms-catalog-frontdeskmaster.webp",
    categories: ["PMS", "Budget", "Europe"],
    slug: "front-desk-master",
    longDescription: "Front Desk Master is a comprehensive Property Management System designed specifically for hostels, budget hotels, and small accommodations. Built to handle high-volume, budget-conscious operations, our platform offers powerful booking management, automated workflows, and detailed reporting. Perfect for properties that need to manage multiple guests per room, group bookings, and cost-effective operations.",
    features: [
      "Multi-guest room management for hostels",
      "Group booking and allocation tools", 
      "Automated check-in/check-out processes",
      "Integrated payment processing",
      "Housekeeping and maintenance scheduling",
      "Guest communication automation",
      "Detailed financial reporting",
      "Channel manager for 40+ OTAs",
      "Walk-in booking management",
      "Staff scheduling and permissions",
      "Inventory and supplies tracking"
    ],
    useCases: [
      "Hostels managing dormitory-style accommodations",
      "Budget hotels with high guest turnover",
      "Backpacker accommodations",
      "Youth hostels and student housing",
      "Small hotels focusing on cost efficiency",
      "Properties with shared room configurations"
    ],
    apiCapabilities: [
      "RESTful API for system integration",
      "Real-time availability and booking sync",
      "Guest management and check-in automation",
      "Payment processing integration",
      "Reporting data export",
      "Third-party app connectivity",
      "Bulk operations for group management"
    ],
    setupSteps: [
      "Register for Front Desk Master account",
      "Configure property settings and room types",
      "Set up dormitory and shared room configurations",
      "Configure payment gateways and pricing",
      "Train staff on the hostel-specific features",
      "Connect to booking channels via Channex",
      "Set up automated guest communications",
      "Go live with full operations"
    ],
    website: "https://www.frontdeskmaster.io/cloud-pms/",
    screenshots: [
      "",
      "",
      ""
    ],
    pricing: {
      model: "Affordable monthly subscription per property",
      details: "Budget-friendly pricing designed for hostels and small accommodations. No per-bed fees, just simple property-based pricing.",
      features: [
        "Unlimited beds and guest management",
        "All channel integrations included",
        "Free staff training and support",
        "No setup or installation fees",
        "Cancel anytime flexibility",
        "30-day money-back guarantee"
      ]
    },
    integrationFeatures: {
      dataSync: ["Bookings", "Availability", "Guest Data", "Payments", "Room Assignments"],
      realTime: true,
      webhooks: true,
      bulkOperations: true,
      customFields: false
    }
  },
  {
    id: "5",
    name: "Omnihotelier",
    description: "Integrate your PMS with Omnihotelier to streamline bookings, optimize revenue, and enhance guest management. Ideal for properties seeking comprehensive hospitality solutions.",
    icon: "",
    categories: ["IBE", "PMS"],
    slug: "omnihotelier",
    longDescription: "Omnihotelier is a comprehensive hospitality platform that combines Internet Booking Engine (IBE) capabilities with powerful PMS integration features. Designed for hotels that want to maximize direct bookings while maintaining seamless operations, Omnihotelier offers advanced revenue optimization, guest management, and booking engine technologies in one integrated solution.",
    features: [
      "Advanced Internet Booking Engine with conversion optimization",
      "Real-time availability and rate management",
      "Revenue optimization and dynamic pricing",
      "Guest profile and preference management",
      "Multi-language and multi-currency support",
      "Mobile-responsive booking interface",
      "Integration with major PMS systems",
      "Advanced analytics and reporting",
      "Loyalty program management",
      "Group booking functionality"
    ],
    useCases: [
      "Hotels wanting to increase direct bookings",
      "Properties seeking revenue optimization",
      "Hotels needing advanced booking engine features",
      "Accommodations targeting international guests",
      "Properties with complex rate structures",
      "Hotels implementing loyalty programs"
    ],
    apiCapabilities: [
      "RESTful API for seamless PMS integration",
      "Real-time booking and availability sync",
      "Guest data and preference management",
      "Revenue and pricing optimization",
      "Analytics and reporting data access",
      "Multi-property support",
      "Third-party integration capabilities"
    ],
    setupSteps: [
      "Register for Omnihotelier account",
      "Configure your property and room inventory",
      "Set up your booking engine and customize design",
      "Integrate with your existing PMS system",
      "Configure pricing and revenue optimization rules",
      "Set up guest communication templates",
      "Train staff on the platform features",
      "Launch and monitor performance"
    ],
    website: "https://omnihotelier.com",
    screenshots: [
      "",
      "",
      ""
    ],
    pricing: {
      model: "Revenue-based commission model",
      details: "Pay only for successful bookings generated through our platform. No upfront costs or monthly fees.",
      features: [
        "No setup or monthly subscription fees",
        "Commission only on confirmed bookings",
        "All features included in every plan",
        "Free booking engine customization",
        "24/7 technical support",
        "Performance analytics included"
      ]
    },
    integrationFeatures: {
      dataSync: ["Bookings", "Rates", "Availability", "Guest Profiles", "Revenue Data"],
      realTime: true,
      webhooks: true,
      bulkOperations: true,
      customFields: true
    }
  },
  {
    id: "7",
    slug: "hotelnetwork",
    name: "Hotelnetwork",
    description: "Connect your PMS with HotelNetwork to expand your reach through its distribution channels. Ideal for properties seeking greater visibility and diverse booking sources.",
    icon: "/lovable-uploads/6aba2cfe-3309-4b59-ba28-b19cda8e32e4.png",
    categories: ["Distribution", "OTA"]
  },
  {
    id: "8",
    slug: "pricetravel",
    name: "PriceTravel",
    description: "Reach travelers across Latin America. Ideal for properties targeting regional tourists and travel agencies.",
    icon: "/lovable-uploads/pricetravel-logo.webp",
    categories: ["Regional", "OTA", "Latin America"],
    website: "https://www.pricetravel.com/",
  },
  {
    id: "9",
    slug: "getaroom",
    name: "Getaroom",
    description: "Streamline bookings and expand your reach to global travelers. Ideal for properties seeking increased visibility through diverse distribution channels.",
    icon: "/lovable-uploads/a008ef7d-2bb3-4f59-a31d-95660d6140e5.png",
    categories: ["Global", "OTA", "Distribution"],
    website: "https://www.getaroom.com/",
  },
  {
    id: "10",
    slug: "szallas",
    name: "Szallas",
    description: "Connect with Hungary's leading travel platform. Ideal for properties targeting travelers in Central and Eastern Europe.",
    icon: "/images/integrations/ota-szallas.svg",
    categories: ["Regional", "Europe", "OTA"],
    website: "https://szallas.hu"
  },
  {
    id: "11",
    slug: "roombeast",
    name: "Roombeast",
    description: "Ideal for properties aiming to simplify operations and boost visibility in the Latam market.",
    icon: "/images/integrations/ota-roombeast.webp",
    categories: ["Regional", "Latin America", "OTA"],
    website: "https://roombeast.com/",
  },
  {
    id: "12",
    name: "Hostelworld",
    description: "For Hostels & Budget Stays. Ideal for properties seeking global travellers and social, budget-conscious guests.",
    icon: "/lovable-uploads/hostelworld-logo.png",
    categories: ["Global", "Budget", "OTA"],
    slug: "hostelworld",
    longDescription: "Hostelworld is the world's leading hostel booking platform, connecting over 13 million young travelers annually with unique accommodation experiences. Specializing in budget-friendly, social accommodations, Hostelworld is the go-to platform for backpackers, gap year travelers, and adventure seekers. Our integration helps properties tap into this vibrant, social travel community.",
    features: [
      "Global network of budget travelers",
      "Social travel community focus",
      "Backpacker and gap year traveler targeting",
      "Group booking capabilities for travel groups",
      "Real-time availability and pricing",
      "Guest review and rating system",
      "Mobile-optimized booking experience",
      "Multi-bed room management",
      "Flexible cancellation policies",
      "Social features and traveler connections",
      "Local activity and tour recommendations",
      "24/7 customer support"
    ],
    useCases: [
      "Hostels and budget accommodations",
      "Backpacker-focused properties",
      "Social accommodations with shared spaces",
      "Budget hotels targeting young travelers",
      "Properties in popular backpacker routes",
      "Accommodations near universities and colleges",
      "Adventure and activity-focused locations"
    ],
    apiCapabilities: [
      "Hostelworld Partner API",
      "Real-time bed and room availability sync",
      "Multi-bed room configuration",
      "Group booking management",
      "Guest communication and messaging",
      "Review and rating synchronization",
      "Performance analytics for budget segment",
      "Promotional content management"
    ],
    setupSteps: [
      "Apply for Hostelworld partner account",
      "Complete property verification process",
      "Set up hostel profile with social features",
      "Configure room types and bed configurations",
      "Connect via Channex integration platform",
      "Optimize content for backpacker audience",
      "Set up competitive pricing for budget market",
      "Launch and engage with traveler community"
    ],
    website: "https://hostelworld.com",
    screenshots: [
      "",
      "",
      ""
    ],
    pricing: {
      model: "Commission-based on completed bookings",
      details: "Competitive commission rates for budget accommodation segment. No upfront costs or monthly fees.",
      features: [
        "No listing or setup fees",
        "Commission only on confirmed stays",
        "Free access to global backpacker community",
        "Social media marketing support",
        "Budget traveler market insights",
        "24/7 customer service support",
        "Seasonal promotion opportunities"
      ]
    },
    integrationFeatures: {
      dataSync: ["Bookings", "Bed Availability", "Rates", "Guest Data", "Reviews", "Social Features"],
      realTime: true,
      webhooks: true,
      bulkOperations: true,
      customFields: false
    }
  },
  {
    id: "13",
    name: "Airbnb",
    description: "Sync your PMS with Airbnb to manage bookings, rates, and availability effortlessly. Perfect for short-term rentals and unique stays.",
    icon: "/lovable-uploads/airbnb-logo.webp",
    categories: ["Global", "Vacation Rentals", "OTA"],
    slug: "airbnb",
    longDescription: "Airbnb is the world's leading marketplace for unique stays and experiences. Our seamless integration allows property managers to effortlessly synchronize their listings, manage bookings, and optimize pricing across this global platform that connects millions of hosts with travelers seeking authentic accommodations.",
    features: [
      "Automated listing synchronization",
      "Dynamic pricing optimization",
      "Guest communication tools",
      "Multi-calendar management",
      "Instant booking capabilities",
      "Professional hosting tools",
      "Performance insights",
      "Mobile app integration",
      "Smart pricing recommendations",
      "Guest screening tools"
    ],
    useCases: [
      "Vacation rental properties",
      "Unique and boutique accommodations",
      "Multi-property portfolio managers",
      "Hosts seeking global reach",
      "Properties targeting experience-focused travelers",
      "Short-term rental investors"
    ],
    apiCapabilities: [
      "REST API integration",
      "Real-time availability updates",
      "Pricing synchronization",
      "Booking management",
      "Guest messaging",
      "Review handling",
      "Calendar synchronization",
      "Photo management"
    ],
    setupSteps: [
      "Set up your Airbnb host account",
      "Complete identity verification",
      "Create your property listings",
      "Connect through Channex integration",
      "Configure pricing and availability rules",
      "Test booking flow and go live"
    ],
    website: "https://airbnb.com",
    screenshots: [
      "",
      "",
      ""
    ],
    pricing: {
      model: "Host service fee on bookings",
      details: "Airbnb charges a service fee for each booking. No upfront costs to list your property.",
      features: [
        "Free to list your property",
        "Global marketing exposure",
        "24/7 customer support",
        "Host protection insurance",
        "Secure payment processing",
        "Mobile management apps"
      ]
    },
    integrationFeatures: {
      dataSync: ["Bookings", "Availability", "Rates", "Guest Messages", "Reviews"],
      realTime: true,
      webhooks: true,
      bulkOperations: false,
      customFields: false
    }
  },
  {
    id: "15",
    slug: "hotelbeds",
    name: "Hotelbeds",
    description: "Link your PMS with Hotelbeds to access a global B2B travel network. Perfect for properties seeking partnerships with travel agents and tour operators.",
    icon: "/lovable-uploads/hotelbeds-logo.webp",
    categories: ["B2B", "Global", "Distribution", "OTA"],
    website: "https://www.hotelbeds.com/",
  },
  {
    id: "16",
    name: "Trip.com",
    description: "Attract travellers from Asia and beyond. Ideal for properties seeking a global audience with a focus on Asian markets.",
    icon: "/lovable-uploads/tripcom-logo.webp",
    categories: ["Asia", "Global", "OTA"],
    slug: "trip-com",
    longDescription: "Trip.com is China's leading online travel platform and one of the world's largest travel service providers. With over 400 million users globally, Trip.com offers unparalleled access to Chinese outbound travelers and growing Asian markets. Our integration enables properties to tap into this massive and lucrative market segment with localized services and payment methods.",
    features: [
      "Access to 400+ million global users",
      "Dominant presence in Chinese travel market",
      "Multi-language platform support",
      "Local payment method integration (Alipay, WeChat Pay)",
      "Chinese traveler preference optimization",
      "24/7 multilingual customer service",
      "Mobile-first booking experience",
      "Group booking and corporate travel solutions",
      "Trip.com loyalty program integration",
      "Local destination guides and recommendations",
      "Real-time translation services",
      "Cultural preference customization"
    ],
    useCases: [
      "Properties targeting Chinese travelers",
      "Hotels in popular Asian destinations",
      "Accommodations seeking Asian market expansion",
      "Properties near major tourist attractions",
      "Hotels offering cultural experiences",
      "Business travel focused accommodations",
      "Properties in gateway cities for Asian travelers"
    ],
    apiCapabilities: [
      "Trip.com Partner API connectivity",
      "Real-time inventory and rate management",
      "Multi-language booking processing",
      "Local payment method integration",
      "Guest preference and cultural data sync",
      "Group booking management",
      "Performance analytics for Asian markets",
      "Review and rating synchronization"
    ],
    setupSteps: [
      "Apply for Trip.com partner program",
      "Complete property verification and compliance check",
      "Set up property profile with Chinese market focus",
      "Configure local payment methods and currency",
      "Integrate via Channex connectivity solution",
      "Optimize content for Chinese traveler preferences",
      "Set up customer service in local languages",
      "Launch and monitor Asian market performance"
    ],
    website: "https://trip.com",
    screenshots: [
      "",
      "",
      "",
      ""
    ],
    pricing: {
      model: "Market-specific commission rates",
      details: "Competitive commission structure tailored to Asian markets. Special rates available for strategic properties and destinations.",
      features: [
        "No setup or joining fees",
        "Market-competitive commission rates",
        "Access to Chinese payment methods",
        "Local currency settlement options",
        "Marketing support for Asian campaigns",
        "Dedicated account management",
        "Cultural training and support resources"
      ]
    },
    integrationFeatures: {
      dataSync: ["Bookings", "Rates", "Availability", "Guest Preferences", "Payment Data", "Cultural Data"],
      realTime: true,
      webhooks: true,
      bulkOperations: true,
      customFields: true
    }
  },
  {
    id: "17",
    slug: "despegar",
    name: "Despegar",
    description: "Latin America's leading travel platform. Ideal for properties targeting travellers across the region.",
    icon: "/lovable-uploads/5497aac5-58cb-4673-9dc0-3513cb38f1a0.png",
    categories: ["Latin America", "Regional", "OTA"]
  },
  {
    id: "18",
    slug: "traveloka",
    name: "Traveloka",
    description: "Reach travellers across Southeast Asia. Ideal for properties targeting this fast-growing regional market.",
    icon: "/lovable-uploads/traveloka-logo.webp",
    categories: ["Asia", "Regional", "OTA"],
    website: "https://www.traveloka.com/",
  },
  {
    id: "19",
    name: "VRBO",
    description: "Manage vacation rental bookings seamlessly. Perfect for properties offering unique stays and family-friendly accommodations.",
    icon: "/lovable-uploads/vrbo-logo.webp",
    categories: ["Vacation Rentals", "Global", "OTA"],
    slug: "vrbo",
    longDescription: "VRBO (Vacation Rentals by Owner) is the world's leading vacation rental marketplace, specializing in whole-home rentals for families and groups. As part of Expedia Group, VRBO connects property owners with travelers seeking authentic, home-like experiences. Our integration provides comprehensive tools for managing vacation rental bookings and property optimization across this premium platform.",
    features: [
      "Whole-home vacation rental focus",
      "Family and group traveler targeting",
      "Premium property showcasing",
      "Advanced calendar and availability management",
      "Guest screening and verification tools",
      "Flexible cancellation policy options",
      "Property protection and insurance",
      "Local experience recommendations",
      "Multi-property portfolio management",
      "Seasonal pricing optimization",
      "Guest review and rating system",
      "24/7 customer support"
    ],
    useCases: [
      "Vacation rental property owners",
      "Whole-home rental specialists",
      "Properties targeting families and groups",
      "Premium vacation accommodation providers",
      "Multi-property vacation rental managers",
      "Seasonal rental properties",
      "Properties in popular vacation destinations"
    ],
    apiCapabilities: [
      "VRBO Partner API integration",
      "Real-time availability and pricing sync",
      "Booking and reservation management",
      "Multi-calendar synchronization"
    ],
    setupSteps: [
      "Create VRBO property manager account",
      "List your vacation rental properties",
      "Complete property verification process",
      "Set up comprehensive property descriptions and photos",
      "Configure pricing and availability calendars",
      "Connect via Channex integration platform",
      "Optimize listings for family and group bookings",
      "Launch and monitor booking performance"
    ],
    website: "https://vrbo.com",
    screenshots: [
      "",
      "",
      "",
      ""
    ],
    pricing: {
      model: "Annual subscription or pay-per-booking",
      details: "Choose between annual subscription model or pay-per-booking commission. Subscription offers lower total costs for active properties.",
      features: [
        "Two flexible pricing models available",
        "No listing fees for basic package",
        "Priority placement opportunities",
        "Advanced property promotion tools",
        "Guest damage protection included",
        "24/7 customer service support",
        "Marketing and advertising benefits"
      ]
    },
    integrationFeatures: {
      dataSync: ["Bookings", "Availability", "Rates", "Guest Data", "Property Details"],
      realTime: true,
      webhooks: true,
      bulkOperations: true,
      customFields: true
    }
  },
  {
    id: "20",
    slug: "google-hotels-and-vacation-rentals",
    name: "Google Hotels & Vacation Rentals",
    description: "Showcase your property directly in search results. Ideal for hotels and vacation rentals seeking increased visibility and direct bookings.",
    icon: "/lovable-uploads/google-hotels-logo.png",
    categories: ["Vacation Rentals", "Distribution", "OTA"]
  },
  {
    id: "21",
    slug: "tiket",
    name: "Tiket",
    description: "Reach travellers across Indonesia and beyond. Perfect for properties targeting Southeast Asian markets.",
    icon: "/lovable-uploads/tiket-logo.webp",
    categories: ["Asia", "Regional", "OTA"]
  },
  {
    id: "22",
    slug: "mg-bedbank",
    name: "MG Bedbank",
    description: "Access Southeast Asia's leading B2B travel distribution network. Ideal for properties seeking connections with travel agents and wholesalers.",
    icon: "/lovable-uploads/mg-bedbank-logo.png",
    categories: ["B2B", "Asia", "Distribution", "OTA"]
  },
  {
    id: "23",
    slug: "hrs",
    name: "HRS",
    description: "Streamline bookings for business travelers and corporate clients. Ideal for properties targeting the corporate travel market.",
    icon: "/lovable-uploads/hrs-logo.webp",
    categories: ["Corporate", "Global", "B2B", "OTA"],
    website: "https://www.hrs.com/",
  },
  {
    id: "24",
    slug: "hipcamp",
    name: "Hipcamp",
    description: "Ideal for campsites, glamping, and unique nature-focused properties.",
    icon: "/lovable-uploads/hipcamp-logo.webp",
    categories: ["Outdoor", "Vacation Rentals", "OTA"],
    website: "https://www.hipcamp.com/",
  },
  {
    id: "225",
    slug: "edreams",
    name: "eDreams",
    description: "Connect with one of Europe's leading OTAs. Perfect for properties targeting European and global leisure travelers.",
    icon: "/lovable-uploads/edreams-logo.webp",
    categories: ["OTA", "Europe", "Global"],
    website: "https://www.edreams.com/"
  },
  {
    id: "25",
    slug: "travelgatex",
    name: "TravelgateX",
    description: "Access a global marketplace of travel distributors. Ideal for properties seeking broad B2B connectivity and increased distribution.",
    icon: "/images/integrations/ota-travelgatex.svg",
    categories: ["B2B", "Global", "Distribution", "OTA"]
  },
  {
    id: "26",
    slug: "hopper",
    name: "Hopper",
    description: "Connect with Hopper to reach a mobile-first audience seeking personalised travel deals. Ideal for properties targeting tech-savvy, price-conscious travellers.",
    icon: "/lovable-uploads/7b05812a-9203-4c34-b995-9a7fcbd64216.png",
    categories: ["OTA", "Global"],
    website: "https://www.hopper.com/",
  },
  {
    // Tagged OTA, so this one HAS a detail page — hence the longer fields. All
    // of it is from reconline.com; their own site is the only source used.
    //
    // Logo is the three-bar mark, on Evan's explicit call after being shown
    // that it is RETIRED. reconline.com served it as _images/rec_logo.gif
    // until Dec 2025; by Mar 2026 the redesign had replaced it with a CSS
    // text wordmark, and their Hospitality Net profile logo — re-uploaded
    // May 2026 — is the plain wordmark too. Revisit if we ever want the
    // directory to track their current identity.
    //
    // Sourced from HotelMinder's partner directory, the only copy anywhere
    // with both real resolution and transparency: their own site never
    // served it larger than 137x23, and the vector on Guesty's marketplace
    // is a potrace job whose letter counters are knocked out by a white
    // layer painted on top, so it cannot be made transparent. Cropped from
    // 500x500 to its ink bounds (500x86); pixels are otherwise untouched.
    id: "27",
    slug: "reconline",
    name: "Reconline",
    description: "Swiss GDS distribution specialist that lists independent hotels in Amadeus, Sabre and Travelport, reaching corporate travel programmes and travel-agency demand. Connects through the channel manager a hotel already runs rather than replacing it, and is priced per actualised booking with no setup fee and no monthly minimum.",
    longDescription: "reconline AG has specialised in GDS distribution for independent hotels for over 20 years, working from Zermatt in Switzerland. The Global Distribution Systems — Amadeus, Sabre and Travelport — are where corporations, travel management companies and agencies book, and they have traditionally been hard for an independent property to reach without a brand affiliation. reconline handles the listing and the ongoing rate, availability and inventory sync across all three, integrating with the channel manager the hotel already uses instead of asking it to switch. Setup is a roughly 30-minute profile, hotels are typically live across all three systems within ten days, and they pay only for bookings that actualise — no setup fee, no monthly minimum. Travel agent commissions are settled automatically through Onyx CenterSource.",
    icon: "/images/integrations/ota-reconline.webp",
    categories: ["Distribution", "Global", "B2B", "OTA"],
    features: [
      "Listing in Amadeus, Sabre and Travelport",
      "Connects through the hotel's existing channel manager",
      "Rate, availability and inventory sync across all three GDS",
      "Live within about ten days of a 30-minute setup",
      "Priced per actualised booking — no setup fee, no monthly minimum",
      "Automated travel agent commission handling via Onyx CenterSource",
      "Site and support in English, German, French, Spanish and Italian"
    ],
    useCases: [
      "Independent hotels chasing corporate and managed-travel demand",
      "Properties wanting GDS reach without a brand affiliation",
      "Hotels already running a channel manager and adding a channel",
      "Properties selling to travel agencies and travel management companies"
    ],
    website: "https://www.reconline.com/",
  },
  {
    id: "28",
    slug: "hostelhop",
    name: "Hostelhop",
    description: "For budget-conscious and social travelers. Ideal for hostels and shared accommodations seeking increased visibility.",
    icon: "/lovable-uploads/64209784-51e7-4dcd-9fdf-29491a43908f.png",
    categories: ["Budget", "Global", "OTA"]
  },
  {
    id: "29",
    slug: "makemytrip",
    name: "MakeMyTrip",
    description: "India's leading travel platform. Perfect for properties targeting travellers across India and beyond.",
    icon: "/lovable-uploads/7ad7313e-823b-4d7b-81ef-2c6ff7dde322.png",
    categories: ["Asia", "Regional", "OTA"]
  },
  {
    id: "30",
    slug: "roibos",
    name: "Roibos",
    description: "A robust B2B travel platform. Ideal for properties seeking connections with tour operators, travel agents, and wholesalers worldwide.",
    icon: "/lovable-uploads/da970051-848f-499c-a8cc-2c650fae0caf.webp",
    categories: ["B2B", "Global", "Distribution", "OTA"],
    website: "https://roibos.com/",
  },
  {
    id: "31",
    slug: "hyperguest",
    name: "Hyperguest",
    description: "Access a direct, commission-free B2B distribution network. Ideal for properties seeking to optimize margins and connect with travel agents globally.",
    icon: "/lovable-uploads/da51353c-aaa9-4fa4-ba27-c0c34f952887.webp",
    categories: ["B2B", "Global", "Distribution", "OTA"],
    website: "https://www.hyperguest.com/",
  },
  {
    id: "32",
    slug: "inntopia",
    name: "Inntopia",
    description: "Connect your PMS with Inntopia to streamline bookings and packaging for resorts, hotels, and vacation rentals. Ideal for properties targeting year-round leisure and group travelers.",
    icon: "/images/integrations/ota-inntopia.webp",
    categories: ["Vacation Rentals", "OTA"],
    website: "https://www.inntopia.com/",
  },
  {
    id: "33",
    slug: "travia",
    name: "Travia",
    description: "Travia is a B2B distribution marketplace connecting agencies and accommodation providers with live availability, direct bookings, and seamless contracting.",
    icon: "/images/integrations/ota-travia.svg",
    categories: ["B2B", "Distribution", "Global", "OTA"],
    website: "https://travia.io/",
    features: [
      "Unique partner-to-partner contracting within the system",
      "Customer mapping - properties can see what agent is booking",
      "Flexible booking limit",
      "Direct messaging in three different locations between partners",
      "Allotments with automatic release & block-out dates",
      "Dashboard with reports such as booking details and pace reports",
      "No fixed monthly cost - limiting the risk for properties"
    ]
  },
  {
    id: "34",
    slug: "mitchell-corp",
    name: "Mitchell Corp",
    description: "Ideal for properties targeting domestic and international travelers exploring New Zealand.",
    icon: "/lovable-uploads/mitchell-logo.jpeg",
    categories: ["Regional", "Australia", "OTA"]
  },
  {
    id: "35",
    slug: "wink",
    name: "Wink",
    description: "Connect with Wink to streamline bookings and enhance distribution through its travel platform. Ideal for properties seeking innovative solutions to reach modern travelers.",
    icon: "/images/integrations/ota-wink.webp",
    categories: ["Distribution", "OTA"]
  },
  {
    id: "36",
    slug: "hookusbookus",
    name: "Hookusbookus",
    description: "Integrate with Hookusbookus to streamline bookings and connect with travelers seeking unique accommodations. Ideal for properties offering personalized and distinctive experiences.",
    icon: "",
    categories: ["OTA", "Vacation Rentals"],
    website: "https://hookusbookus.com/",
  },
  {
    id: "37",
    slug: "spot2nite",
    name: "Spot2nite",
    description: "Connect with Spot2Nite to manage bookings for RV parks and campgrounds seamlessly. Ideal for properties catering to travelers seeking outdoor and road trip adventures.",
    icon: "/images/integrations/ota-spot2nite.webp",
    categories: ["Outdoor", "Vacation Rentals", "OTA"]
  },
  {
    // Renamed from "Camping Vision" on Evan's confirmation; campingvision.com
    // now redirects to travel.vacanceselect.com.
    //
    // id carries the old slug rather than the original "38", so
    // /integrations/camping-vision still 301s to the new URL through the
    // loader's legacy-id path. Nothing is lost by retiring "38": the entry
    // only became an OTA in d3058d0, so that URL never served a detail page.
    //
    // Their mark reads "VacanceSelect | Travel" — the partner-facing arm, and
    // the only lockup the partner site publishes — so the plain brand name
    // comes from this entry rather than from the image. Stacked rather than
    // the horizontal version, which is 9:1 and renders 12px tall in the
    // channel slot against 39px for this one.
    id: "camping-vision",
    name: "VacanceSelect",
    description: "European distribution platform for family holidays, connecting campsites, holiday parks and resorts with travellers through its own consumer brands — VacanceSelect, Allcamps, LuxCamp, Friferie and Dansk Bilferie — each aimed at a different family segment. Over 25 years in the market, with more than 100 staff across offices in Breda, Copenhagen, Geneva and Hamburg, and partner support that runs to named account managers, marketing campaigns and booking-data insights.",
    icon: "/images/integrations/ota-vacanceselect.webp",
    categories: ["OTA", "Outdoor", "Europe", "Vacation Rentals"],
    slug: "vacanceselect",
    website: "https://travel.vacanceselect.com"
  },
  {
    id: "39",
    slug: "ratedock",
    name: "Ratedock",
    description: "Streamline rate and inventory distribution across multiple channels. Ideal for properties seeking efficient and centralized management solutions.",
    icon: "",
    categories: ["Distribution", "OTA"]
  },
  {
    id: "40",
    slug: "emerging-travel-group",
    name: "Emerging Travel Group",
    description: "Integrate your PMS with Emerging Travel Group platforms like RateHawk, RoundTrip, and ZenHotels to reach B2B, corporate, and individual travelers all over the world.",
    icon: "/images/integrations/etg-logo.svg",
    categories: ["Europe", "Regional", "OTA"]
  },
  {
    id: "41",
    slug: "opengds-com",
    name: "OpenGDS.com",
    description: "Streamline distribution and connect with local travel agents and OTAs.",
    icon: "/images/integrations/ota-opengds.svg",
    categories: ["Distribution", "B2B", "OTA"]
  },
  {
    id: "42",
    slug: "hrs-australia",
    name: "HRS Australia",
    description: "Seamlessly connect your PMS with HRS Australia to manage bookings, rates, and availability in real-time. Ideal for hotels looking to expand their reach in the Australian market.",
    icon: "",
    categories: ["Australia", "Regional", "OTA"]
  },
  {
    id: "43",
    slug: "moverii",
    name: "Moverii",
    description: "Ideal for properties seeking a user-friendly solution to streamline operations and enhance guest experiences.",
    icon: "/lovable-uploads/moverii-logo.png",
    categories: ["OTA", "Activities"],
    website: "https://moverii.de/",
  },
  {
    id: "44",
    name: "Booking.com",
    description: "Connect your PMS to Booking.com for seamless management of rates, availability, and reservations. Ideal for all property types aiming for global reach.",
    icon: "/lovable-uploads/bookingcom-logo.webp",
    categories: ["OTA", "Global"],
    slug: "booking-com",
    longDescription: "Booking.com is the world's leading digital travel company, connecting properties with millions of travelers worldwide. Our integration provides real-time synchronization of rates, availability, and reservations, ensuring your property maintains optimal visibility and booking efficiency across this massive platform.",
    features: [
      "Real-time rate and availability sync",
      "Instant booking confirmations",
      "Multi-language support",
      "Mobile-optimized listings",
      "Advanced pricing tools",
      "Guest review management",
      "24/7 technical support",
      "Performance analytics dashboard"
    ],
    useCases: [
      "Hotels seeking maximum global exposure",
      "Properties targeting international travelers",
      "Accommodations looking to increase direct bookings",
      "Businesses wanting comprehensive booking management",
      "Properties needing multi-currency support"
    ],
    apiCapabilities: [
      "RESTful API integration",
      "Real-time XML connectivity",
      "Webhook notifications",
      "Bulk operations support",
      "Rate loading and management",
      "Inventory synchronization",
      "Booking modifications",
      "Cancellation handling"
    ],
    setupSteps: [
      "Create your Booking.com Extranet account",
      "Complete property verification process",
      "Configure your Channex integration settings",
      "Map your room types and rate plans",
      "Test the connection with sample bookings",
      "Go live and monitor performance"
    ],
    website: "https://booking.com",
    screenshots: [
      "",
      "",
      ""
    ],
    pricing: {
      model: "Commission-based",
      details: "No setup fees. You only pay when you receive bookings through our platform.",
      features: [
        "No monthly subscription fees",
        "Commission only on confirmed bookings",
        "Free listing creation and management",
        "Access to global marketing campaigns",
        "24/7 customer support included"
      ]
    },
    integrationFeatures: {
      dataSync: ["Rates", "Availability", "Bookings", "Guest Data", "Property Info"],
      realTime: true,
      webhooks: true,
      bulkOperations: true,
      customFields: true
    }
  },
  {
    id: "45",
    name: "Expedia",
    description: "Integrate your PMS with Expedia to streamline bookings, rates, and availability. Perfect for properties targeting a wide, global audience.",
    icon: "/lovable-uploads/expedia-logo.webp",
    categories: ["OTA", "Global"],
    slug: "expedia",
    longDescription: "Expedia Group is one of the world's largest online travel companies, reaching over 750 million people annually across its family of brands including Expedia.com, Hotels.com, and Vrbo. Our integration provides seamless connectivity to this massive distribution network, enabling properties to manage rates, availability, and bookings across multiple Expedia Group platforms from a single interface.",
    features: [
      "Multi-brand exposure across Expedia Group portfolio",
      "Real-time rate and inventory synchronization",
      "Advanced revenue management tools",
      "Automated booking confirmations and modifications",
      "Guest review management across platforms",
      "Performance analytics and market insights",
      "Mobile-optimized listings",
      "24/7 technical support",
      "Dynamic packaging opportunities",
      "Group booking capabilities",
      "Last-minute deals promotion",
      "Loyalty program integration"
    ],
    useCases: [
      "Hotels seeking maximum global distribution",
      "Properties targeting North American markets",
      "Accommodations wanting package deal exposure",
      "Hotels looking to increase weekend occupancy",
      "Properties needing comprehensive market data",
      "Businesses targeting corporate travelers",
      "Hotels wanting loyalty program benefits"
    ],
    apiCapabilities: [
      "EQC (Expedia QuickConnect) API",
      "Real-time availability and rate updates",
      "Booking retrieval and management",
      "Property and room type configuration",
      "Rate plan and inventory management",
      "Guest data synchronization",
      "Promotional content management",
      "Performance reporting data"
    ],
    setupSteps: [
      "Apply for Expedia Partner Central account",
      "Complete property verification and quality review",
      "Set up your property profile and photos",
      "Configure rate plans and room inventory",
      "Connect via Channex EQC integration",
      "Test booking flow and data synchronization",
      "Optimize listing content for better visibility",
      "Launch and monitor performance metrics"
    ],
    website: "https://expedia.com",
    screenshots: [
      "",
      "",
      "",
      ""
    ],
    pricing: {
      model: "Commission-based on bookings",
      details: "Pay only when guests book and stay. No upfront costs or monthly fees. Commission rates vary by property type and market.",
      features: [
        "No setup or listing fees",
        "Commission only on completed stays",
        "Free access to marketing campaigns",
        "Complimentary property photos",
        "24/7 customer service support",
        "Performance marketing opportunities",
        "Flexible rate and inventory management"
      ]
    },
    integrationFeatures: {
      dataSync: ["Bookings", "Rates", "Availability", "Guest Data", "Reviews", "Property Content"],
      realTime: true,
      webhooks: true,
      bulkOperations: true,
      customFields: true
    }
  },
  {
    id: "46",
    name: "Pricepoint",
    description: "Connect your PMS with Pricepoint RMS to automate pricing and optimize revenue. Ideal for properties seeking dynamic rate management and increased profitability.",
    icon: "",
    categories: ["RMS"]
  },
  {
    id: "47",
    name: "Rategenie",
    description: "Integrate your PMS with Rategenie to automate dynamic pricing and maximize revenue. Ideal for properties seeking smarter rate management and improved occupancy.",
    icon: "",
    categories: ["RMS"]
  },
  {
    id: "48",
    name: "Elastic Hotel",
    description: "Connect your PMS with Elastic Hotel to optimize your distribution strategy and enhance channel management. Ideal for properties seeking flexible and efficient connectivity solutions.",
    icon: "",
    categories: ["RMS"]
  },
  {
    id: "49",
    name: "Room Price Genie",
    description: "Integrate your PMS with RoomPriceGenie to simplify dynamic pricing and maximize revenue. Ideal for small to medium-sized properties seeking easy and effective rate management.",
    icon: "",
    categories: ["RMS"]
  },
  {
    id: "50",
    name: "Cultbooking",
    description: "Integrate your PMS with CultBooking to enhance direct bookings through customizable booking engines. Ideal for properties seeking to increase direct revenue and reduce commission costs.",
    icon: "",
    categories: ["IBE"]
  },
  {
    id: "51",
    name: "GuestTraction",
    description: "Connect your PMS with GuestTraction to streamline bookings and enhance guest experiences through innovative tools. Ideal for properties aiming to attract and retain travelers in the Australasian market.",
    icon: "",
    categories: ["IBE", "Australia"]
  },
  {
    id: "52",
    name: "Zapier",
    description: "A powerful automation platform that connects your PMS with thousands of apps to streamline workflows. Ideal for automating tasks like data syncing, notifications, and guest communication across multiple tools.",
    icon: "",
    categories: ["API"]
  },
  {
    website: "https://aiosell.com/property-management-system/",
    id: "53",
    name: "Aiosell",
    description: "An all-in-one property management system that combines channel management, revenue optimization, and automation tools. Ideal for properties seeking to maximize efficiency and profitability with an integrated solution.",
    icon: "/lovable-uploads/pms-catalog-aiosell.webp",
    categories: ["PMS", "Asia"]
  },
  {
    website: "https://www.reservationkey.com/reservation-software/vacation-rental-property-management",
    id: "54",
    name: "ReservationKey",
    description: "A user-friendly PMS designed for small to medium-sized accommodations, offering tools for booking management, channel integration, and guest communication. Ideal for properties seeking affordability and simplicity.",
    icon: "/lovable-uploads/pms-catalog-reservationkey.webp",
    categories: ["PMS", "Americas"]
  },
  {
    id: "56",
    name: "Ermes Hotels",
    description: "A cloud-based PMS tailored for independent hotels and small chains, offering features like booking management, channel integration, and revenue optimization. Ideal for properties seeking efficient and user-friendly solutions.",
    icon: "",
    categories: ["PMS"]
  },
  {
    website: "https://www.frontdeskexpress.com/",
    aliases: ["Front Desk Express"],
    id: "57",
    name: "FrontDesk Express",
    description: "A simple and intuitive PMS designed for small to mid-sized accommodations, providing tools for reservation management, guest tracking, and reporting. Ideal for properties seeking a streamlined and cost-effective solution.",
    icon: "",
    categories: ["PMS", "Americas"]
  },
  {
    website: "https://bananadesk.com/",
    id: "58",
    name: "BananaDesk",
    description: "A cloud-based PMS designed for hostels and budget accommodations, offering tools for reservation management, guest check-ins, and channel integration. Ideal for properties focused on efficiency and affordability.",
    icon: "/lovable-uploads/pms-catalog-bananadesk.webp",
    categories: ["PMS", "Budget", "Latin America"]
  },
  {
    id: "59",
    name: "Resmaster",
    description: "A comprehensive PMS offering booking management, channel integration, and guest communication tools. Ideal for properties seeking a reliable solution to streamline operations and boost reservations.",
    icon: "",
    categories: ["PMS"]
  },
  {
    id: "60",
    name: "GuestSmart",
    description: "A user-friendly PMS designed for small to medium-sized properties, offering features like booking management, channel integration, and guest communication. Ideal for properties seeking to enhance efficiency and improve guest experiences.",
    icon: "",
    categories: ["PMS"]
  },
  {
    website: "https://www.zaviaerp.com/pms-hotelero",
    aliases: ["Zavia ERP"],
    id: "61",
    name: "Zavia erp",
    description: "An advanced property management and enterprise resource planning system designed for the hospitality industry. Offers tools for reservations, inventory, finance, and operational management. Ideal for properties seeking an all-in-one, scalable solution.",
    icon: "/lovable-uploads/pms-catalog-zavia-erp.webp",
    categories: ["PMS", "Latin America"]
  },
  {
    website: "https://ayrton.net.br/produtos/pms-channel-manager",
    id: "62",
    name: "Ayrton",
    description: "A modern property management system designed for hotels and accommodations, offering tools for reservations, guest management, and operational efficiency. Ideal for properties seeking a seamless and intuitive management solution.",
    icon: "/lovable-uploads/pms-catalog-ayrton.webp",
    categories: ["PMS", "Latin America"]
  },
  {
    website: "https://www.johku.fi/fi/perustaomajohkusi/majoitus",
    aliases: ["Johku"],
    id: "63",
    name: "Johku Majoitus",
    description: "A versatile property management system tailored for tourism and hospitality businesses, offering tools for bookings, sales, and customer management. Ideal for properties seeking an all-in-one solution to streamline operations and enhance guest experiences.",
    icon: "/lovable-uploads/pms-catalog-johku-majoitus.webp",
    categories: ["PMS", "Europe"]
  },
  {
    website: "https://www.eksenia.com/en/",
    id: "64",
    name: "Eksenia",
    description: "A comprehensive PMS solution designed for hotels and accommodations, offering features like reservation management, channel integration, and guest services. Ideal for properties seeking to optimize operations and elevate guest experiences.",
    icon: "/lovable-uploads/pms-catalog-eksenia.webp",
    categories: ["PMS", "Europe"]
  },
  {
    website: "https://www.nokumo.net/",
    id: "65",
    name: "Nokumo",
    description: "A versatile property management system offering tools for booking management, task automation, and guest communication. Ideal for small to medium-sized accommodations seeking streamlined operations and improved efficiency.",
    icon: "/lovable-uploads/pms-catalog-nokumo.webp",
    categories: ["PMS", "Europe"]
  },
  {
    id: "66",
    name: "Igloorooms",
    description: "A property management system designed for budget accommodations and small to medium-sized properties, offering features like booking management, channel integration, and guest communication. Ideal for properties seeking a cost-effective and user-friendly solution.",
    icon: "",
    categories: ["PMS"]
  },
  {
    id: "67",
    name: "MasterYield",
    description: "A comprehensive property management and revenue optimization system, offering tools for booking management, channel connectivity, and pricing automation. Ideal for properties seeking to maximize revenue and streamline operations.",
    icon: "",
    categories: ["PMS"]
  },
  {
    website: "https://comandosoftware.com/",
    aliases: ["Comando"],
    id: "68",
    name: "Comando Software",
    description: "A modern property management system designed for hotels and accommodations, providing tools for reservations, guest management, and operational efficiency. Ideal for properties seeking an intuitive and scalable solution.",
    icon: "/lovable-uploads/pms-catalog-comando-software.webp",
    categories: ["PMS", "Latin America"]
  },
  {
    id: "69",
    name: "The Lobby Boy",
    description: "A user-friendly property management system tailored for boutique hotels and small accommodations. Offers tools for booking management, guest communication, and operations. Ideal for properties seeking simplicity and personalized service.",
    icon: "",
    categories: ["PMS"]
  },
  {
    website: "https://booktech.no/",
    aliases: ["Booktech"],
    id: "70",
    name: "Booktech / Cloud Booking",
    description: "A Norwegian property management system offering solutions for booking management, channel integration, and guest services. Ideal for accommodations seeking efficient and localized tools to streamline operations.",
    icon: "/lovable-uploads/pms-catalog-booktech-cloud-booking.webp",
    categories: ["PMS", "Europe"]
  },
  {
    website: "https://desbravador.com.br/",
    id: "71",
    name: "Desbravador",
    description: "A robust property management system designed for hotels and resorts, offering tools for reservations, financial management, and operational control. Ideal for properties in Latin America seeking a comprehensive and scalable solution.",
    icon: "/lovable-uploads/pms-catalog-desbravador.webp",
    categories: ["PMS", "Latin America"]
  },
  {
    website: "https://www.panhospitality.co.za/",
    aliases: ["PAN Hospitality"],
    id: "72",
    name: "PAN Hospitality / PANstrat",
    description: "A South African property management solution offering tools for reservations, guest management, and operational efficiency. Ideal for hotels, lodges, and guesthouses seeking a reliable and localized system to streamline their operations.",
    icon: "/lovable-uploads/pms-catalog-pan-hospitality-panstrat.webp",
    categories: ["PMS", "Africa"]
  },
  {
    website: "https://bookipro.com/property-management-system/",
    id: "73",
    name: "Bookipro",
    description: "A user-friendly property management system designed for small to medium-sized accommodations, offering features like booking management, channel integration, and guest communication. Ideal for properties seeking simplicity and efficiency.",
    icon: "/lovable-uploads/pms-catalog-bookipro.webp",
    categories: ["PMS", "Europe"]
  },
  {
    website: "https://hotelsync.com/hotel-management-solution/",
    aliases: ["OTASync"],
    id: "74",
    name: "HotelSync",
    description: "Hospitality platform for property management, reservations and distribution, formerly known as OTA Sync.",
    icon: "/lovable-uploads/pms-catalog-hotelsync.webp",
    categories: ["PMS", "Europe"]
  },
  {
    website: "https://www.pxsol.com/",
    aliases: ["Pxsol"],
    id: "75",
    name: "PXSOL",
    description: "A powerful property management and channel management solution, offering tools for booking management, rate optimization, and operational efficiency. Ideal for hotels and accommodations seeking to streamline workflows and maximize revenue.",
    icon: "/lovable-uploads/pms-catalog-pxsol.webp",
    categories: ["PMS", "Latin America"]
  },
  {
    id: "76",
    name: "Dtravel",
    description: "A decentralized platform for managing short-term rental bookings, offering tools for direct reservations, lower fees, and blockchain-based security. Ideal for property owners seeking more control and transparency in their operations.",
    icon: "",
    categories: ["PMS", "Vacation Rentals"]
  },
  {
    website: "https://winpax.com.ar/",
    aliases: ["Winpax"],
    id: "77",
    name: "WinPAX",
    description: "A user-friendly property management system designed for small to medium-sized accommodations, offering tools for booking management, guest services, and operational efficiency. Ideal for properties seeking an affordable and intuitive solution.",
    icon: "",
    categories: ["PMS", "Latin America"]
  },
  {
    id: "78",
    name: "Roomsy",
    description: "A cloud-based property management system designed for small to medium-sized accommodations, offering features like booking management, invoicing, and reporting. Ideal for properties seeking a simple and efficient way to manage operations.",
    icon: "",
    categories: ["PMS"]
  },
  {
    website: "https://www.easy-rez.com/sistema-de-gestion-hotelera-pms",
    aliases: ["Easy Rez"],
    id: "79",
    name: "Easy-rez",
    description: "A straightforward property management system offering tools for booking management, channel integration, and guest communication. Ideal for small to medium-sized accommodations seeking an easy-to-use and efficient solution.",
    icon: "/lovable-uploads/pms-catalog-easy-rez.webp",
    categories: ["PMS", "Latin America"]
  },
  {
    website: "https://thefinner.com/property-management-software/",
    id: "80",
    name: "Finner",
    description: "A modern property management system designed to streamline bookings, optimize revenue, and enhance guest experiences. Ideal for hotels and accommodations seeking an intuitive and efficient solution.",
    icon: "/lovable-uploads/pms-catalog-finner.webp",
    categories: ["PMS", "Asia"]
  },
  {
    id: "81",
    name: "TMRW Hotels",
    description: "An innovative property management solution focusing on contactless operations and digital guest experiences. Ideal for modern accommodations seeking to enhance efficiency and provide seamless self-service options for guests.",
    icon: "",
    categories: ["PMS"]
  },
  {
    id: "82",
    name: "Cortec AG",
    description: "A Swiss-based property management and technology provider offering tailored solutions for hotels and accommodations, including booking management, channel integration, and operational tools.",
    icon: "",
    categories: ["PMS"]
  },
  {
    website: "https://www.quovai.com/en/",
    id: "83",
    name: "Quovai",
    description: "A comprehensive property management solution tailored for small to medium-sized accommodations, offering tools for booking management, channel integration, and guest services. Ideal for properties seeking efficient and user-friendly software to enhance operations.",
    icon: "",
    categories: ["PMS", "Europe"]
  },
  {
    id: "84",
    name: "Turbo PMS",
    description: "A lightweight and efficient property management system designed for small to medium-sized accommodations. Features include booking management, guest communication, and channel integration. Ideal for properties seeking a fast and easy-to-use solution.",
    icon: "",
    categories: ["PMS"]
  },
  {
    website: "https://hotelsminder.com/About.aspx",
    id: "85",
    name: "Hotelsminder",
    description: "A cloud-based property management solution offering tools for booking management, channel synchronization, and operational efficiency. Ideal for small to medium-sized accommodations seeking to streamline processes and improve guest experiences.",
    icon: "/lovable-uploads/pms-catalog-hotelsminder.webp",
    categories: ["PMS", "Europe"]
  },
  {
    website: "https://hotelmu.id/fitur",
    id: "86",
    name: "HotelMU",
    description: "An Indonesia-based property management system designed to streamline hotel operations, offering features such as booking management, guest communication, and financial tracking.",
    icon: "/lovable-uploads/pms-catalog-hotelmu.webp",
    categories: ["PMS", "Asia"]
  },
  {
    id: "87",
    name: "Guest.Guru",
    description: "A specialized platform for revenue optimization and guest engagement, offering tools for dynamic pricing, upselling, and personalized communication. Ideal for properties seeking to boost revenue and enhance guest satisfaction.",
    icon: "",
    categories: ["PMS"]
  },
  {
    id: "88",
    name: "Lodging System",
    description: "A comprehensive cloud-based property management solution offering tools for reservations, channel management, and guest services. Ideal for hotels, resorts, and vacation rentals seeking to streamline operations and enhance guest experiences.",
    icon: "",
    categories: ["PMS"]
  },
  {
    website: "https://digitelia.io/en/pms",
    aliases: ["Digitelia"],
    id: "89",
    name: "Digitelia PMS",
    description: "A cutting-edge platform specializing in digital transformation for the hospitality industry, offering tools for online bookings, marketing, and operational efficiency. Ideal for properties looking to modernize and enhance their digital presence.",
    icon: "/lovable-uploads/pms-catalog-digitelia-pms.webp",
    categories: ["PMS", "Europe"]
  },
  {
    website: "https://hotelpoint.gr/property-management-software/",
    id: "90",
    name: "HotelPoint",
    description: "A Greek-based property management system offering tools for booking management, channel integration, and guest communication. Ideal for hotels and accommodations seeking a localized and efficient solution to streamline operations.",
    icon: "/lovable-uploads/pms-catalog-hotelpoint.webp",
    categories: ["PMS", "Europe"]
  },
  {
    id: "91",
    name: "OnePlace",
    description: "A Mexico-based property management platform providing tools for reservation management, channel integration, and guest communication. Ideal for accommodations in Latin America seeking an intuitive and localized solution to enhance efficiency.",
    icon: "",
    categories: ["PMS", "Latin America"]
  },
  {
    website: "https://cobber.one/cobberres-accommodation/",
    aliases: ["ResBook"],
    id: "92",
    name: "CobberRes Accommodation",
    description: "Accommodation reservation software within the Cobber platform, incorporating the former ResBook product.",
    icon: "/lovable-uploads/pms-catalog-cobberres-accommodation.webp",
    categories: ["PMS", "Asia Pacific"]
  },
  {
    id: "93",
    name: "Easy Front Desk by BrattaSoft",
    description: "A comprehensive property management solution tailored for hotels and accommodations, offering tools for reservations, billing, and operational management. Ideal for properties in Latin America.",
    icon: "",
    categories: ["PMS", "Latin America"]
  },
  {
    id: "94",
    name: "Lodgy",
    description: "A property management system designed for hotels and accommodations in Latin America, offering tools for reservation management, billing, and operational efficiency. Ideal for properties seeking a localized and comprehensive solution to optimize their operations.",
    icon: "",
    categories: ["PMS", "Latin America"]
  },
  {
    id: "95",
    name: "Sky Arabia PMS",
    description: "A cloud-based property management system tailored for hotels and accommodations in the MENA region. Offers features like booking management, channel integration, and guest services.",
    icon: "",
    categories: ["PMS"]
  },
  {
    website: "https://www.edhotels.com/bouk-pms-funktsionaalsus/",
    aliases: ["Bouk by Ed Hotels"],
    id: "96",
    name: "Bouk / ED Hotels",
    description: "A comprehensive property management solution offering tools for reservations, channel management, and revenue optimization. Ideal for hotels and accommodations seeking to enhance operations, improve guest experiences, and maximize profitability.",
    icon: "/lovable-uploads/pms-catalog-bouk-ed-hotels.webp",
    categories: ["PMS", "Europe"]
  },
  {
    id: "97",
    name: "Hotelgest",
    description: "A cloud-based property management system designed for independent hotels and small accommodations. Offers features like booking management, channel integration, and guest communication. Ideal for properties seeking a simple and efficient solution to streamline operations and boost revenue.",
    icon: "",
    categories: ["PMS"]
  },
  {
    id: "98",
    name: "ResClick",
    description: "A user-friendly property management system designed for small to medium-sized accommodations. Offers tools for booking management, channel integration, and direct booking optimization. Ideal for properties in Spanish-speaking markets",
    icon: "",
    categories: ["PMS"]
  },
  {
    id: "99",
    name: "PetroffSoft",
    description: "A Bulgarian-based property management system offering solutions for hotels and accommodations, including reservation management, billing, and reporting. Ideal for properties seeking a reliable and localized tool to streamline operations and enhance guest services.",
    icon: "",
    categories: ["PMS"]
  },
  {
    website: "https://orionpms.net/",
    aliases: ["StarHotelier"],
    id: "100",
    name: "Orion PMS",
    description: "Cloud property management software for hotel reservations and daily operations, formerly known as Star Hotelier.",
    icon: "/lovable-uploads/pms-catalog-orion-pms.webp",
    categories: ["PMS", "Europe"]
  },
  {
    id: "101",
    name: "Bitz Softwares",
    description: "A Brazilian-based property management system providing solutions for hotels, inns, and vacation rentals. Features include reservation management, financial control, and operational efficiency.",
    icon: "",
    categories: ["PMS", "Latin America"]
  },
  {
    website: "https://www.guestpro.id/hotel-cloud-pms/",
    id: "102",
    name: "GuestPro",
    description: "An Indonesia-based property management system offering tools for booking management, guest services, and operational automation. Ideal for hotels, guesthouses, and resorts in Southeast Asia seeking an intuitive and efficient solution to enhance their operations.",
    icon: "/lovable-uploads/pms-catalog-guestpro.webp",
    categories: ["PMS", "Asia"]
  },
  {
    id: "103",
    name: "NewSoft PMS",
    description: "A flexible property management system offering tools for reservations, channel management, and guest services. Ideal for hotels, resorts, and accommodations seeking a reliable solution to streamline operations and optimize efficiency.",
    icon: "",
    categories: ["PMS", "Asia"]
  },
  {
    website: "https://www.aurelian.cloud/",
    aliases: ["Callista"],
    id: "104",
    name: "Aurelian",
    description: "Hospitality property management software under the Aurelian brand, formerly Callista.",
    icon: "/lovable-uploads/pms-catalog-aurelian.webp",
    categories: ["PMS", "Asia Pacific"]
  },
  {
    id: "105",
    name: "Wander",
    description: "A modern platform for managing luxury vacation rentals, offering features like smart home integration, seamless booking management, and guest services. Ideal for high-end properties seeking to provide exceptional and tech-enabled guest experiences.",
    icon: "",
    categories: ["PMS", "Luxury", "Vacation Rentals"]
  },
  {
    aliases: ["Blue Jay PMS"],
    id: "106",
    name: "Blue Jay POS",
    description: "A cloud-based property management system from Vietnam designed for hotels seeking to streamline operations and grow revenue. Connects with 200+ OTA channels, offers booking management, channel management, and guest communication tools. 80% of hotels using Blue Jay PMS report a 20% increase in revenue.",
    icon: "/lovable-uploads/pms-catalog-blue-jay-pos.webp",
    categories: ["PMS", "Asia"],
    slug: "blue-jay-pms",
    website: "https://bluejaypos.vn/hotels"
  },
  {
    id: "107",
    name: "Book.World",
    description: "A global property management and booking platform offering tools for reservations, channel management, and guest services. Ideal for hotels and vacation rentals seeking a seamless solution to manage bookings and enhance operational efficiency across multiple channels.",
    icon: "",
    categories: ["PMS"]
  },
  {
    website: "https://www.guestpoint.com/solutions/property-management-system/",
    id: "108",
    name: "GuestPoint",
    description: "A cloud-based property management system designed for hotels, resorts, and vacation rentals. Offers features like booking management, channel integration, and guest communication tools.",
    icon: "/lovable-uploads/pms-catalog-guestpoint.webp",
    categories: ["PMS", "Australia"]
  },
  {
    website: "https://software.retreat.guru/",
    id: "109",
    name: "Retreat Guru",
    description: "A platform designed for wellness retreats and group experiences, offering tools for booking management, payment processing, and guest communication. Ideal for properties focused on retreats, wellness, and holistic experiences.",
    icon: "/lovable-uploads/pms-catalog-retreat-guru.webp",
    categories: ["PMS", "Americas"]
  },
  {
    website: "https://aaryatm.com/",
    aliases: ["Aaryatm"],
    id: "110",
    name: "Aarya Technology & Management",
    description: "A property management system designed for hotels and accommodations, offering tools for booking management, guest communication, and operational efficiency.",
    icon: "/lovable-uploads/pms-catalog-aarya-technology-management.webp",
    categories: ["PMS", "Asia"]
  },
  {
    website: "https://www.mashvisor.com/vacation-rental-software",
    id: "111",
    name: "Mashvisor",
    description: "A real estate analytics platform designed for investors and property managers, offering tools for property search, rental analysis, and investment insights. Ideal for those seeking to optimize property investments and make data-driven decisions in real estate.",
    icon: "/lovable-uploads/pms-catalog-mashvisor.webp",
    categories: ["PMS", "Americas"]
  },
  {
    website: "https://webia.fi/",
    aliases: ["Webia"],
    id: "112",
    name: "WebiaBooking",
    description: "A Finnish-based platform offering property management and reservation solutions for hotels, vacation rentals, and accommodations. Features include booking management, channel integration, and guest communication.",
    icon: "/lovable-uploads/pms-catalog-webiabooking.webp",
    categories: ["PMS", "Europe"]
  },
  {
    id: "113",
    name: "Ayenda",
    description: "A hotel chain management platform offering tools for booking management, revenue optimization, and guest services. Ideal for budget accommodations and small hotel chains in Latin America seeking to streamline operations and enhance guest experiences.",
    icon: "",
    categories: ["PMS", "Latin America"]
  },
  {
    website: "https://www.hotelmeister.com/",
    aliases: ["HotelMeister"],
    id: "114",
    name: "Hotelmeister",
    description: "A comprehensive property management system designed for hotels and accommodations, offering features like booking management, guest communication, and reporting tools.",
    icon: "/lovable-uploads/pms-catalog-hotelmeister.webp",
    categories: ["PMS", "Europe"]
  },
  {
    id: "115",
    name: "Bookelier",
    description: "A property management and booking platform designed for boutique hotels and accommodations, offering tools for reservations, guest communication, and revenue management.",
    icon: "",
    categories: ["PMS"]
  },
  {
    website: "https://servoitsolutions.ph/cloud-applications/xenia-cloud-pms/",
    aliases: ["Servoit Solutions"],
    id: "116",
    name: "Servo IT Solutions / Xenia PMS",
    description: "A Philippine-based provider of property management systems and IT solutions for the hospitality industry. Offering tools for reservation management, guest services, and operational efficiency.",
    icon: "/lovable-uploads/pms-catalog-servo-it-solutions-xenia-pms.webp",
    categories: ["PMS", "Asia"]
  },
  {
    id: "117",
    name: "Revenatium",
    description: "A revenue management platform designed for hotels and accommodations, offering tools for dynamic pricing, forecasting, and performance analysis.",
    icon: "",
    categories: ["PMS"]
  },
  {
    website: "https://atlantis.asia/services/property-management-system/",
    id: "118",
    name: "Atlantis Asia",
    description: "A provider of tailored property management and IT solutions for the hospitality industry in Asia. Offering tools for reservation management, guest communication, and operational optimization.",
    icon: "/lovable-uploads/pms-catalog-atlantis-asia.webp",
    categories: ["PMS", "Asia"]
  },
  {
    website: "https://www.zaaer.co/en",
    id: "119",
    name: "Zaaer",
    description: "A property management system offering tools for booking management, guest communication, and operational efficiency. Ideal for hotels and accommodations seeking an intuitive, cloud-based solution to streamline operations and enhance guest experiences.",
    icon: "/lovable-uploads/pms-catalog-zaaer.webp",
    categories: ["PMS", "Middle East"]
  },
  {
    id: "120",
    name: "EzyInn",
    description: "A cloud-based property management system designed for small to medium-sized accommodations, offering tools for booking management, guest communication, and channel integration.",
    icon: "",
    categories: ["PMS"]
  },
  {
    id: "121",
    name: "Big Solutions",
    description: "An Indonesia-based provider of property management and IT solutions, offering tools for hotel management, booking integration, and operational efficiency.",
    icon: "",
    categories: ["PMS", "Asia"]
  },
  {
    website: "https://www.starrez.com/solutions/student-property-management-pbsa",
    id: "122",
    name: "StarRez",
    description: "A leading property management system designed for student housing, multifamily, and vacation rentals. Offers tools for reservation management, billing, maintenance, and guest communication.",
    icon: "/lovable-uploads/pms-catalog-starrez.webp",
    categories: ["PMS", "Europe"]
  },
  {
    website: "https://software.roverpass.com/",
    id: "123",
    name: "RoverPass",
    description: "A property management platform designed for campgrounds, RV parks, and outdoor accommodations. Offers tools for reservation management, payment processing, and guest communication.",
    icon: "",
    categories: ["PMS", "Outdoor", "Americas"]
  },
  {
    id: "124",
    name: "Firefly Reservations",
    description: "A cloud-based property management system designed for vacation rentals, offering tools for booking management, guest communication, and channel integration.",
    icon: "",
    categories: ["PMS", "Outdoor"]
  },
  {
    website: "https://fitshotel.eu/",
    aliases: ["Fitshotel"],
    id: "125",
    name: "FitsHotel",
    description: "A property management system designed for the hospitality industry, offering tools for booking management, guest services, and operational efficiency.",
    icon: "/lovable-uploads/pms-catalog-fitshotel.webp",
    categories: ["PMS", "Europe"]
  },
  {
    website: "https://www.hiswen.com/",
    aliases: ["Hiswen"],
    id: "126",
    name: "Swen PMS",
    description: "A property management system offering solutions for hotel management, booking integration, and guest services. Ideal for hotels and accommodations seeking an efficient platform to streamline operations, manage bookings, and enhance guest experiences.",
    icon: "/lovable-uploads/pms-catalog-swen-pms.webp",
    categories: ["PMS", "Europe"]
  },
  {
    website: "https://bidrento.com/et/",
    id: "127",
    name: "Bidrento",
    description: "A property management and rental platform offering tools for booking management, payment processing, and guest communication.",
    icon: "/lovable-uploads/pms-catalog-bidrento.webp",
    categories: ["PMS", "Vacation Rentals", "Europe"]
  },
  {
    website: "https://www.getabed.mx/",
    aliases: ["GetaBedSuite"],
    id: "128",
    name: "Getabed",
    description: "A property management system designed for hotels, vacation rentals, and guesthouses, offering tools for booking management, guest communication, and channel integration.",
    icon: "/lovable-uploads/pms-catalog-getabed.webp",
    categories: ["PMS", "Latin America"]
  },
  {
    id: "129",
    name: "Zimple.Cloud",
    description: "A cloud-based property management system offering tools for booking management, guest communication, and operational efficiency.",
    icon: "",
    categories: ["PMS"]
  },
  {
    id: "130",
    name: "The Zenden Group",
    description: "A hospitality management platform offering solutions for property management, booking integration, and guest services.",
    icon: "",
    categories: ["PMS"]
  },
  {
    website: "https://ezcloud.vn/",
    aliases: ["EZCloud"],
    id: "131",
    name: "ezCloud",
    description: "A cloud-based property management system offering solutions for booking management, guest communication, and operational efficiency. Ideal for hotels, resorts, and guesthouses in Vietnam and Southeast Asia.",
    icon: "/lovable-uploads/pms-catalog-ezcloud.webp",
    categories: ["PMS", "Asia"]
  },
  {
    website: "https://revivotech.in/",
    aliases: ["RevivoTech"],
    id: "132",
    name: "Revivo / Hotel-X",
    description: "An India-based provider of property management and revenue optimization solutions, offering tools for booking management, dynamic pricing, and operational efficiency.",
    icon: "/lovable-uploads/pms-catalog-revivo-hotel-x.webp",
    categories: ["PMS", "Asia"]
  },
  {
    id: "133",
    name: "Citrus PMS",
    description: "A cloud-based property management system offering features for booking management, guest services, and operational efficiency.",
    icon: "",
    categories: ["PMS", "Asia"]
  },
  {
    id: "134",
    name: "Alojate Pro",
    description: "A property management system designed for vacation rentals and small accommodations, offering tools for booking management, guest communication, and financial tracking.",
    icon: "",
    categories: ["PMS"]
  },
  {
    website: "https://cflow.cakrasoft.com/",
    aliases: ["CakraSoft"],
    id: "135",
    name: "Cakrasoft",
    description: "A property management software provider offering solutions for booking management, guest services, and hotel operations.",
    icon: "/lovable-uploads/pms-catalog-cakrasoft.webp",
    categories: ["PMS", "Asia"]
  },
  {
    id: "137",
    name: "Jaras.io",
    description: "A property management system offering tools for booking management, guest communication, and operational efficiency. Ideal for hotels and accommodations seeking a user-friendly, scalable solution to streamline operations and enhance guest satisfaction.",
    icon: "",
    categories: ["PMS"]
  },
  {
    id: "138",
    name: "Host-It",
    description: "An Austrian-based property management system offering solutions for booking management, channel integration, and guest services.",
    icon: "",
    categories: ["PMS"]
  },
  {
    website: "https://sophiasolution.com/",
    aliases: ["Sophia Solution"],
    id: "139",
    name: "Sophia PMS",
    description: "A property management and hospitality solution provider offering tools for booking management, guest communication, and operational optimization.",
    icon: "/lovable-uploads/pms-catalog-sophia-pms.webp",
    categories: ["PMS", "Asia"]
  },
  {
    id: "140",
    name: "Hotelzify",
    description: "A property management system offering tools for booking management, guest communication, and channel integration.",
    icon: "",
    categories: ["PMS"]
  },
  {
    website: "https://bebetterhotels.com/",
    aliases: ["BeBetter Hotels"],
    id: "141",
    name: "Be Better Hotels",
    description: "A property management platform designed to optimize hotel operations, offering tools for booking management, guest communication, and revenue management.",
    icon: "/lovable-uploads/pms-catalog-be-better-hotels.webp",
    categories: ["PMS", "Latin America"]
  },
  {
    website: "https://www.rezstream.com/property-management-software/",
    aliases: ["RezStream"],
    id: "142",
    name: "rezStream",
    description: "A cloud-based property management system offering features for booking management, channel integration, and guest services.",
    icon: "/lovable-uploads/pms-catalog-rezstream.webp",
    categories: ["PMS", "Americas"]
  },
  {
    id: "143",
    name: "Vikey",
    description: "A cloud-based property management system offering tools for booking management, guest communication, and operational efficiency.",
    icon: "",
    categories: ["PMS"]
  },
  {
    aliases: ["Dibooq"],
    id: "144",
    name: "DiBooq",
    description: "A cloud-based vacation rental software designed for owners and property managers, offering property management, channel management, booking management, direct booking websites, guest communication, and enhanced operational efficiency.",
    icon: "/lovable-uploads/pms-catalog-dibooq.webp",
    categories: ["PMS", "Europe"],
    website: "https://www.dibooq.com/vacation-home-owner/property-management-app-pms/"
  },
  {
    id: "145",
    name: "EveryLeisure",
    description: "A property management and booking platform designed for leisure facilities, including parks, resorts, and recreational accommodations. Offers tools for reservation management, guest services, and operational efficiency.",
    icon: "",
    categories: ["PMS", "Outdoor"]
  },
  {
    id: "146",
    name: "Aplend",
    description: "A property management and booking platform designed for vacation rentals, resorts, and chalets. Offering tools for booking management, guest communication, and operational efficiency.",
    icon: "",
    categories: ["PMS", "Vacation Rentals"]
  },
  {
    id: "147",
    name: "Livedin",
    description: "A property management and guest experience platform designed for vacation rentals and boutique accommodations. Offering tools for booking management, guest communication, and personalized services.",
    icon: "",
    categories: ["PMS", "Vacation Rentals"]
  },
  {
    website: "https://gohost.vn/tinh-nang/quan-ly-khach-san-pms",
    id: "148",
    name: "GoHost",
    description: "A property management system designed for small to medium-sized accommodations, offering tools for booking management, guest services, and operational efficiency.",
    icon: "/lovable-uploads/pms-catalog-gohost.webp",
    categories: ["PMS", "Asia"]
  },
  {
    website: "https://beingidly.com/ko/services#pms",
    aliases: ["Beingidly"],
    id: "149",
    name: "Beingidly / Alls PMS",
    description: "A property management and automation platform offering tools for booking management, guest communication, and operational efficiency.",
    icon: "/lovable-uploads/pms-catalog-beingidly-alls-pms.webp",
    categories: ["PMS", "Asia"]
  },
  {
    website: "https://www.wasimil.com/",
    aliases: ["Wasimil"],
    id: "150",
    name: "Wasimil PMS",
    description: "A property management system offering solutions for booking management, guest services, and operational efficiency.",
    icon: "/lovable-uploads/pms-catalog-wasimil-pms.webp",
    categories: ["PMS", "Asia"]
  },
  {
    id: "151",
    name: "StellarStay",
    description: "A comprehensive property management system designed for vacation rentals and short-term accommodations, offering booking management, guest communication, and operational tools.",
    icon: "/lovable-uploads/4eb781f9-6627-406e-8ea6-0942d3c2f485.png",
    categories: ["PMS"],
    website: "https://www.stellarstay.com/"
  },
  {
    id: "152",
    name: "Diafasol",
    description: "A property management solution offering tools for booking management, guest communication, and operational efficiency.",
    icon: "",
    categories: ["PMS"]
  },
  {
    id: "153",
    name: "Hanz",
    description: "A property management system designed for hotels and accommodations in Vietnam, offering features like booking management, guest services, and operational optimization.",
    icon: "",
    categories: ["PMS", "Asia"]
  },
  {
    website: "https://zotel.ai/",
    aliases: ["Zotel.ai"],
    id: "155",
    name: "Zotel",
    description: "An AI-driven property management system designed to optimize hotel operations, offering features like booking management, dynamic pricing, and guest services automation.",
    icon: "/lovable-uploads/pms-catalog-zotel.webp",
    categories: ["PMS", "Asia"]
  },
  {
    id: "156",
    name: "SaffronStays",
    description: "A hospitality platform specializing in managing and booking unique, luxury vacation homes and villas. Ideal for property owners and travelers seeking curated, high-end stays in various destinations.",
    icon: "",
    categories: ["PMS"]
  },
  {
    id: "157",
    name: "Halmo",
    description: "A property management system designed for hotels and accommodations, offering tools for booking management, guest communication, and operational optimization.",
    icon: "",
    categories: ["PMS"]
  },
  {
    id: "158",
    name: "Rentware",
    description: "A property management and rental platform offering solutions for booking management, guest communication, and payment processing.",
    icon: "/lovable-uploads/rentware-logo.webp",
    categories: ["PMS", "Vacation Rentals", "Global"],
    website: "https://rentware.com/en/"
  },
  {
    website: "https://todoalojamiento.com/",
    id: "159",
    name: "TodoAlojamiento",
    description: "A property management and booking platform designed for accommodations, offering tools for reservation management, guest services, and operational optimization.",
    icon: "/lovable-uploads/pms-catalog-todoalojamiento.webp",
    categories: ["PMS", "Latin America"]
  },
  {
    id: "160",
    name: "Hosroom",
    description: "A property management system offering solutions for booking management, guest communication, and operational efficiency.",
    icon: "/images/integrations/hosroom.webp",
    categories: ["PMS"]
  },
  {
    id: "161",
    name: "Twik PMS",
    description: "A cloud-based property management system offering tools for booking management, guest services, and operational efficiency.",
    icon: "",
    categories: ["PMS"]
  },
  {
    id: "162",
    name: "JoodBooking",
    description: "A property management and booking platform designed for small to medium-sized accommodations, offering features like reservation management, guest communication, and payment processing.",
    icon: "",
    categories: ["PMS"]
  },
  {
    website: "https://trivsmart.com/products/ora-property-management-system",
    aliases: ["TrivSmart"],
    id: "163",
    name: "Smart Tech Solutions / ORA PMS",
    description: "A property management system designed to streamline hotel operations, offering tools for booking management, guest communication, and revenue optimization.",
    icon: "/lovable-uploads/pms-catalog-smart-tech-solutions-ora-pms.webp",
    categories: ["PMS", "Asia"]
  },
  {
    id: "164",
    name: "HelloHosty",
    description: "A property management and automation platform designed for vacation rental owners and managers, offering tools for booking management, guest communication, and operations automation.",
    icon: "",
    categories: ["PMS", "Vacation Rentals"]
  },
  {
    website: "https://appartman.hu/property-management-system-demo",
    aliases: ["Appartman.hu"],
    id: "165",
    name: "Appartman HU",
    description: "A property management platform focused on vacation rentals and apartments, offering tools for booking management, guest communication, and operational efficiency. Ideal for property owners in Hungary.",
    icon: "/lovable-uploads/pms-catalog-appartman-hu.webp",
    categories: ["PMS", "Vacation Rentals", "Europe"]
  },
  {
    id: "166",
    name: "Hububb",
    description: "A property management platform offering solutions for booking management, guest services, and operational efficiency. Ideal for small to medium-sized hotels, vacation rentals.",
    icon: "",
    categories: ["PMS", "Vacation Rentals"]
  },
  {
    id: "167",
    name: "Bookinglayer",
    description: "A cloud-based property management system designed for boutique accommodations, retreat centers, and activity-based businesses. Offering tools for booking management, guest communication, and payment processing.",
    icon: "",
    categories: ["PMS"]
  },
  {
    website: "https://sihoteles.com/pms-hotelero/",
    aliases: ["SIHoteles"],
    id: "168",
    name: "SI Hoteles",
    description: "A comprehensive property management system designed for hotels and accommodations, offering tools for booking management, guest services, and operational efficiency.",
    icon: "/lovable-uploads/pms-catalog-si-hoteles.webp",
    categories: ["PMS", "Latin America"]
  },
  {
    id: "169",
    name: "PassPass",
    description: "A property management and guest experience platform offering tools for booking management, contactless check-in, and guest communication.",
    icon: "",
    categories: ["PMS"]
  },
  {
    id: "170",
    name: "Ozin.ai",
    description: "An AI-powered property management system designed to optimize hotel operations, offering features like dynamic pricing, booking management, and guest communication.",
    icon: "",
    categories: ["PMS"]
  },
  {
    id: "171",
    name: "SeguriServer",
    description: "A property management and security platform offering solutions for booking management, guest communication, and data security.",
    icon: "",
    categories: ["PMS"]
  },
  {
    website: "https://mytourist.cloud/en",
    aliases: ["MyTourist Cloud"],
    id: "172",
    name: "MyTourist",
    description: "A cloud-based property management system designed for hotels, resorts, and vacation rentals. Offering tools for booking management, guest communication, and operational efficiency.",
    icon: "/lovable-uploads/pms-catalog-mytourist.webp",
    categories: ["PMS", "Europe"]
  },
  {
    id: "173",
    name: "ReyHut",
    description: "A property management and booking platform designed for small to medium-sized accommodations. Offering tools for reservation management, guest communication, and operational efficiency.",
    icon: "",
    categories: ["PMS"]
  },
  {
    id: "174",
    name: "Sojori",
    description: "A property management and booking platform designed for vacation rentals and boutique accommodations. Offering tools for booking management, guest communication, and operational optimization.",
    icon: "",
    categories: ["PMS", "Vacation Rentals"]
  },
  {
    website: "https://guestpedia.com/property-management-system-pms/",
    id: "175",
    name: "Guestpedia",
    description: "A property management system offering tools for booking management, guest communication, and operational efficiency. Ideal for hotels, resorts, and vacation rentals seeking an intuitive platform to enhance guest experiences and streamline daily operations.",
    icon: "/lovable-uploads/pms-catalog-guestpedia.webp",
    categories: ["PMS", "Asia"]
  },
  {
    website: "https://mralfred.com/",
    aliases: ["Mr. Alfred"],
    id: "176",
    name: "Mr Alfred",
    description: "A property management and guest experience platform designed for hotels, resorts, and vacation rentals. Offering tools for booking management, guest communication, and operational efficiency.",
    icon: "/lovable-uploads/pms-catalog-mr-alfred.webp",
    categories: ["PMS", "Vacation Rentals", "Middle East"]
  },
  {
    id: "177",
    name: "Project Bay",
    description: "A property management platform offering solutions for booking management, guest services, and operational efficiency. Ideal for hotels, resorts, and vacation rentals.",
    icon: "",
    categories: ["PMS"]
  },
  {
    id: "178",
    name: "Dolcerent",
    description: "A property management and rental platform designed for vacation rentals and short-term accommodations. Offering tools for booking management, payment processing, and guest communication.",
    icon: "",
    categories: ["PMS", "Vacation Rentals"]
  },
  {
    website: "https://www.hoone.io/es",
    id: "179",
    name: "Hoone",
    description: "A property management and booking platform designed for vacation rentals and small accommodations. Offering features for booking management, guest communication, and operational efficiency.",
    icon: "/lovable-uploads/pms-catalog-hoone.webp",
    categories: ["PMS", "Vacation Rentals", "Latin America"]
  },
  {
    id: "180",
    name: "B-Company",
    description: "A Swiss-based company offering property management and IT solutions for the hospitality industry. Specializing in booking management, guest services, and operational optimization",
    icon: "",
    categories: ["PMS"]
  },
  {
    id: "186",
    name: "Muaroa",
    description: "Muaroa provides website solutions for tourism and businesses in French Polynesia, including online bookings, payments, and marketing services.",
    icon: "",
    categories: ["PMS"]
  },
  {
    id: "187",
    name: "Annwn Stay",
    description: "Annwn Stay is an integrated hospitality platform offering tools like a guest app for self-check-in, a channel manager, a booking engine, and a property management system to automate operations and enhance guest experiences.",
    icon: "",
    categories: ["PMS", "Vacation Rentals"]
  },
  {
    id: "188",
    name: "TIC Rural",
    description: "TIC Rural is a booking service offering over 300 rural houses in Catalonia, Spain, providing online reservations and personalized customer support.",
    icon: "",
    categories: ["PMS", "Vacation Rentals"]
  },
  {
    id: "189",
    name: "Hotelfabrik",
    description: "Hotelfabrik is an IT consulting firm based in South Tyrol, Italy, specializing in optimizing hotel operations through services like hospitality consulting, tailored software solutions, and comprehensive technical support.",
    icon: "",
    categories: ["PMS"]
  },
  {
    id: "190",
    name: "uhotels",
    description: "UHotels.app offers digital solutions for the hospitality industry, including a guest app for service orders and payments, a booking engine integrated with systems like Fidelio and Opera, and cloud-based hotel websites with availability calendars.",
    icon: "",
    categories: ["PMS"]
  },
  {
    website: "https://openhotel.com/",
    id: "191",
    name: "OpenHotel",
    description: "OpenHotel provides a comprehensive cloud-based Property Management System (PMS) designed to streamline hotel operations. Their integrated solutions include channel management, yield management, and enterprise management tools, all developed in-house for seamless functionality.",
    icon: "",
    categories: ["PMS", "Americas"]
  },
  {
    id: "192",
    name: "BV Trip",
    description: "BV Trip is a reservation management system designed for small to medium-sized accommodations, such as bed and breakfasts and campsites.",
    icon: "",
    categories: ["PMS", "Asia"]
  },
  {
    id: "193",
    slug: "waverick",
    name: "Waverick",
    description: "Waverick Adventures is a platform that allows users to find and compare surf camps and schools across various Moroccan destinations, including Taghazout, Rabat, Imsouane, Dakhla, Casablanca, and Essaouira.",
    icon: "/images/integrations/ota-waverick.webp",
    categories: ["OTA", "Outdoor"]
  },
  {
    website: "https://hugo-hotelsoftware.com/",
    aliases: ["Hugo-hotelsoftware"],
    id: "194",
    name: "Hugo",
    description: "HUGO Hotelsoftware is a professional cloud-based hotel management system offering features such as an online booking engine, channel manager, and digital guest services.",
    icon: "/lovable-uploads/pms-catalog-hugo.webp",
    categories: ["PMS", "Europe"]
  },
  {
    id: "195",
    name: "Pricelabs",
    description: "PriceLabs is a cloud-based dynamic pricing and revenue management tool designed for the vacation and short-term rental industry. It offers automated, data-driven pricing recommendations.",
    icon: "/lovable-uploads/pricelabs-logo.png",
    categories: ["RMS"]
  },
  {
    website: "https://www.adcsystems.eu/",
    aliases: ["Adcsystems"],
    id: "196",
    name: "ADC Host",
    description: "ADC sistemi d.o.o. offers an intuitive property management system (PMS) designed for tourist accommodations, providing seamless automation and guest convenience.",
    icon: "/lovable-uploads/pms-catalog-adc-host.webp",
    categories: ["PMS", "Europe"]
  },
  {
    website: "https://stayhub.sa/",
    id: "197",
    name: "Stayhub",
    description: "StayHub is a Saudi-based property management system (PMS) designed to simplify rental operations for vacation rentals, private units, and serviced apartments. It offers centralized tools for booking management, pricing automation, smart lock integration, and compliance with local platforms like Shmoos and Absher.",
    icon: "/lovable-uploads/pms-catalog-stayhub.webp",
    categories: ["PMS", "Middle East"]
  },
  {
    id: "198",
    name: "Labuhardilla",
    description: "Labuhardilla.online is a property management system (PMS) tailored for boutique accommodations, offering tools for booking management, guest communication, and operational automation.",
    icon: "",
    categories: ["PMS"]
  },
  {
    website: "https://www.credencesoft.co.nz/",
    aliases: ["Credencesoft"],
    id: "199",
    name: "CredenceSoft / BookOnePMS",
    description: "CredenceSoft's BookOne PMS is a cloud-based property management system designed to streamline hotel operations, including front desk management, reservations, billing, housekeeping, and guest services.",
    icon: "/lovable-uploads/pms-catalog-credencesoft-bookonepms.webp",
    categories: ["PMS", "Asia Pacific"]
  },
  {
    website: "https://hotelar.com/pt-br",
    aliases: ["Hotelar"],
    id: "200",
    name: "Hotelar PMS",
    description: "Hotelar is an intuitive online property management system (PMS) designed for hotels, guesthouses, hostels, and similar accommodations. It simplifies reservation and stay management with features like drag-and-drop booking, real-time room status updates, and automated document generation.",
    icon: "/lovable-uploads/pms-catalog-hotelar-pms.webp",
    categories: ["PMS", "Latin America"]
  },
  {
    website: "https://www.priceone.ai:443/",
    id: "201",
    name: "Priceone",
    description: "PriceOne.ai is an AI-driven, all-in-one platform that integrates Property Management System (PMS), Channel Management System (CMS), and Revenue Management System (RMS) functionalities.",
    icon: "/lovable-uploads/pms-catalog-priceone.webp",
    categories: ["PMS", "Asia Pacific"]
  },
  {
    website: "https://homeyhuts.com/",
    id: "202",
    name: "Homeyhuts",
    description: "Homeyhuts is an India-based platform offering flexible property management solutions for homestays and vacation rentals. It provides tools for listing optimization, calendar synchronization, guest communication, and marketing support.",
    icon: "/lovable-uploads/pms-catalog-homeyhuts.webp",
    categories: ["PMS", "Asia Pacific"]
  },
  {
    website: "https://quartoverde.com.br/",
    id: "203",
    name: "Quartoverde",
    description: "QuartoVerde is a cloud-based property management system (PMS) tailored for small to mid-sized hospitality businesses. It offers a free plan with essential features such as unlimited reservations, guest registration.",
    icon: "/lovable-uploads/pms-catalog-quartoverde.webp",
    categories: ["PMS", "Latin America"]
  },
  {
    website: "https://www.reeka.app/",
    id: "204",
    name: "Reeka",
    description: "Reeka is a property management system (PMS) tailored for short-term rental operators, particularly in Africa.",
    icon: "/lovable-uploads/pms-catalog-reeka.webp",
    categories: ["PMS", "Africa"]
  },
  {
    id: "205",
    name: "Connectingpax",
    description: "ConnectingPax is a Brazil-based, cloud-native property management system (PMS) designed for hotels and guesthouses. It offers comprehensive modules for reservations, housekeeping, finance, and guest services, all accessible via desktop or mobile.",
    icon: "",
    categories: ["PMS", "Latin America"]
  },
  {
    website: "https://www.zafari.africa/",
    id: "206",
    name: "Zafari",
    description: "Zafari is a no-cost, Africa-focused property management and booking system designed for safari lodges, boutique hotels, and vacation rentals. It offers direct booking tools, flexible rate management (including resident/non-resident pricing), and seamless OTA synchronization.",
    icon: "/lovable-uploads/pms-catalog-zafari.webp",
    categories: ["PMS", "Africa"]
  },
  {
    website: "https://djituhs.com/property-management-system/",
    aliases: ["Djituhs"],
    id: "207",
    name: "Djitu Hospitality Solution",
    description: "Djitu Hospitality Solution is a Bali-based property management and revenue optimization company serving over 100 hotels, villas, and resorts across Indonesia.",
    icon: "/lovable-uploads/pms-catalog-djitu-hospitality-solution.webp",
    categories: ["PMS", "Asia"]
  },
  {
    id: "208",
    name: "Bedlygo",
    description: "BedlyGo is an AI-powered platform designed for short-term rental professionals, offering advanced market analysis, dynamic pricing tools, and customizable PDF reports to optimize revenue and reduce investment risk.",
    icon: "",
    categories: ["PMS"]
  },
  {
    website: "https://www.snapguest.si/",
    aliases: ["Snapguest"],
    id: "209",
    name: "SnapGuest PRO",
    description: "SnapGuest is a mobile-first property management solution tailored for short-term rental hosts and small accommodation providers in Slovenia and Croatia. It streamlines guest registration by scanning MRZ codes on passports or IDs, automatically syncing data with national systems like eTurizem (AJPES) and eVisitor.",
    icon: "/lovable-uploads/pms-catalog-snapguest-pro.webp",
    categories: ["PMS"]
  },
  {
    id: "210",
    slug: "staylist",
    name: "Staylist",
    description: "Cloud hospitality platform for destination RV parks and resorts, glamping resorts, boutique hotels and vacation rentals. Combines reservations and guest management with integrated food & beverage and retail point of sale, revenue management (dynamic pricing, demand forecasting and upsell recommendations), AI concierge and call intelligence, and USALI-framework accounting that reconciles to QuickBooks.",
    // Their own wordmark: dark #241F19 lettering with a teal accent on
    // transparent, so it reads on our light tiles as-is. Kept as SVG (12 paths,
    // no scripts or external refs) — 7 kB and sharp at any slot size.
    icon: "/lovable-uploads/pms-staylist.svg",
    categories: ["PMS", "Outdoor"],
    website: "https://staylist.com/products/pms"
  },
  {
    website: "https://hotelfriend.com/de/b/pms-for-independent-hotel",
    id: "211",
    name: "HotelFriend",
    description: "HotelFriend is a comprehensive, cloud-based Property Management System (PMS) designed to streamline hotel operations and enhance guest experiences.",
    icon: "/lovable-uploads/pms-catalog-hotelfriend.webp",
    categories: ["PMS", "Europe"]
  },
  {
    id: "212",
    slug: "pitchup",
    name: "Pitchup",
    description: "Pitchup.com is a leading online booking platform specializing in outdoor accommodations such as campsites, glamping sites, and caravan parks.",
    icon: "/lovable-uploads/82d1b7f7-d608-45d1-8f33-80c1ca408e78.png",
    categories: ["OTA", "Outdoor"]
  },
    {
    id: "213",
    slug: "tablet-michelin",
    name: "Tablet Michelin",
    description: "Connect with Tablet Hotels to showcase your property on a curated platform for boutique and luxury stays. Ideal for properties offering unique experiences and aiming to attract high-end travelers.",
    icon: "/lovable-uploads/tablet-michelin-logo.png",
    categories: ["Luxury", "Global", "OTA"]
  },
  {
    id: "214",
    slug: "didatravel",
    name: "Didatravel",
    description: "China's leading B2B travel platform. Ideal for properties targeting travel agents, tour operators, and wholesalers globally.",
    icon: "/lovable-uploads/524270f8-c22d-41b4-8acd-a5f302d9b08d.png",
    categories: ["B2B", "Asia", "Distribution", "OTA"],
    website: "https://www.didatravel.com/",
  },
  {
    id: "215",
    slug: "hoterip",
    name: "Hoterip",
    description: "A leading travel platform in Southeast Asia. Ideal for properties targeting Indonesian travelers and regional markets.",
    icon: "/images/integrations/ota-hoterip.webp",
    categories: ["Asia", "Regional", "OTA"]
  },
  {
    id: "216",
    slug: "mr-and-mrs-smith",
    name: "Mr & Mrs Smith",
    description: "A curated platform for luxury and boutique stays. Ideal for properties offering unique, high-end experiences.",
    icon: "/lovable-uploads/mrandmrssmith-logo.webp",
    categories: ["Luxury", "Global", "OTA"],
    website: "https://www.mrandmrssmith.com/",
  },
  {
    id: "217",
    slug: "hotel-tonight",
    name: "Hotel Tonight",
    description: "Attract last-minute travelers seeking great deals. Ideal for properties targeting spontaneous, mobile-first bookings.",
    icon: "/lovable-uploads/hoteltonight-logo.png",
    categories: ["OTA", "Global"]
  },
     {
    id: "218",
    slug: "bookeasy",
    name: "Bookeasy",
    description: "Australia's leading tourism destination management platform. Ideal for properties targeting local and regional travelers.",
    icon: "/lovable-uploads/592fc0e3-4382-414f-a873-fe6397751604.png",
    categories: ["Australia", "Distribution", "OTA"],
    website: "https://www.bookeasy.com/",
  },
  {
    id: "219",
    name: "HomeinLeonidio",
    description: "A specialized accommodation platform for unique stays in Leonidio, Greece. Connect with travelers seeking authentic local experiences in this charming climbing destination.",
    icon: "",
    categories: ["Regional", "Vacation Rentals", "Europe", "PMS"],
    slug: "homeinleonidio",
    website: "https://homeinleonidio.com"
  },
  {
    id: "220",
    name: "Rentzz",
    description: "Romanian property management platform for rental properties. Automates rental contracts, payments, collections, and utility management with mobile app support.",
    icon: "",
    categories: ["PMS", "Regional", "Europe"],
    slug: "rentzz",
    website: "https://rentzz.app",
    longDescription: "Rentzz is a comprehensive property management platform designed specifically for rental property owners in Romania. The platform automates the entire rental process from contract creation to utility bill management, helping landlords save time and streamline operations. With features like automatic bill collection, meter reading submissions, and real-time property performance monitoring, Rentzz makes rental property management effortless.",
    features: [
      "Automated rental contract generation",
      "Utility bill management and distribution",
      "Automatic meter reading submissions",
      "Real-time notifications for tenants and landlords",
      "Mobile application for on-the-go management",
      "Property performance dashboard",
      "Revenue and expense tracking",
      "Tenant communication tools",
      "Multi-property management support",
      "Up to 90-day free trial period"
    ]
  },
  {
    id: "221",
    name: "RunHotel",
    description: "Modern cloud-based hotel management system designed for independent hotels and small chains. Streamlines operations with booking management, channel distribution, and guest communication tools.",
    icon: "",
    categories: ["PMS", "Distribution", "Global"],
    slug: "runhotel",
    website: "https://runhotel.io",
    longDescription: "RunHotel is a comprehensive cloud-based Property Management System designed specifically for independent hotels and small hotel chains. The platform combines modern technology with intuitive design to streamline hotel operations, from booking management to guest services. With integrated channel management, revenue optimization, and guest communication tools, RunHotel helps properties maximize efficiency and profitability.",
    features: [
      "Cloud-based property management system",
      "Integrated channel manager and booking engine",
      "Real-time availability and rate management",
      "Guest communication and messaging tools",
      "Revenue management and reporting",
      "Housekeeping and maintenance coordination",
      "Mobile-responsive interface",
      "Multi-property management support",
      "Payment processing integration",
      "Automated guest check-in/check-out"
    ]
  },
  {
    aliases: ["MiniHotelman"],
    id: "222",
    name: "Mini Hotel Man",
    description: "Affordable all-in-one cloud-based hotel management system for Indian hoteliers. Integrates PMS, POS, channel manager, and revenue management in one platform.",
    icon: "/lovable-uploads/pms-catalog-mini-hotel-man.webp",
    categories: ["PMS", "Regional", "Asia"],
    slug: "minihotelman",
    website: "https://www.minihotelman.com/hotel-pms-software/",
    longDescription: "MiniHotelman is an affordable, comprehensive hotel management solution designed specifically for Indian hoteliers. This cloud-based platform integrates Property Management System (PMS), Point of Sale (POS), Channel Manager, and Revenue Management tools into one unified solution. With a focus on cost-effectiveness and user-friendly design, MiniHotelman makes advanced hotel management accessible to properties of all sizes, from budget hotels to boutique establishments.",
    features: [
      "All-in-one integrated PMS, POS, and channel manager",
      "Cloud-based system accessible from anywhere",
      "Revenue management and dynamic pricing",
      "WhatsApp integration for guest communication",
      "User-friendly interface with minimal training required",
      "Free customizations for specific hotel needs",
      "24/7 customer support",
      "Cost-effective pricing for budget hotels",
      "Real-time reporting and analytics",
      "Multi-property management support"
    ]
  },
  {
    id: "223",
    name: "Booknpay",
    description: "Booknpay is an all-in-one platform built to boost hotel and villa performance by transforming property websites into powerful direct booking channels. Equipped with a seamless Online Reservation System, it maximizes revenue potential and delivers a smoother booking experience for guests.",
    icon: "/lovable-uploads/78a66bab-8fd7-464c-a255-301401af8dde.webp",
    categories: ["IBE", "Asia"],
    slug: "booknpay",
    longDescription: "Booknpay is an innovative all-in-one platform specifically designed to boost hotel and villa performance by transforming property websites into powerful direct booking channels. With a seamless Online Reservation System at its core, Booknpay maximizes revenue potential while delivering an exceptional booking experience for guests. The platform empowers hospitality businesses to reduce dependency on third-party booking sites and increase direct bookings, ultimately improving profit margins and guest relationships.",
    features: [
      "Seamless Online Reservation System",
      "Direct booking channel transformation",
      "Revenue optimization tools",
      "Smooth guest booking experience",
      "Website integration capabilities",
      "Performance analytics dashboard",
      "Mobile-responsive booking interface",
      "Real-time availability management"
    ],
    useCases: [
      "Hotels looking to increase direct bookings",
      "Villas seeking better online presence",
      "Properties wanting to reduce OTA dependency",
      "Accommodations focusing on revenue optimization",
      "Hospitality businesses improving guest experience"
    ],
    apiCapabilities: [
      "RESTful API integration",
      "Real-time booking synchronization",
      "Website embedding capabilities",
      "Third-party system integration",
      "Custom booking flow configuration"
    ],
    setupSteps: [
      "Sign up for Booknpay account",
      "Configure property details and room types",
      "Integrate booking system with website",
      "Set up payment processing",
      "Customize booking interface design",
      "Test booking flow and go live"
    ],
    integrationFeatures: {
      dataSync: ["Reservations", "Availability", "Rates"],
      realTime: true,
      webhooks: true,
      bulkOperations: true,
      customFields: true
    }
  },
  {
    id: "224",
    name: "Ministry of Villas",
    description: "A luxury villa booking platform specializing in exceptional private villas across Asia-Pacific destinations. Offers personalized service and inspires travelers to experience the privacy and luxury of villa stays over traditional hotels.",
    icon: "/lovable-uploads/ministryofvillas-logo.webp",
    categories: ["OTA", "Vacation Rentals", "Asia"],
    slug: "ministry-of-villas",
    longDescription: "Ministry of Villas is the quintessential service for travelers seeking luxury villa accommodations across premier destinations including Bali, Thailand, Japan, Philippines, and more. We inspire travelers who would normally book a hotel to experience staying in a private villa, adding a new dimension to their holiday. Our platform makes searching for a villa a pleasure and the booking process painless, connecting guests with exceptional properties while providing villa owners with a premium distribution channel.",
    features: [
      "Curated luxury villa portfolio across Asia-Pacific",
      "Personalized villa matching and recommendation service",
      "Professional photography and marketing support",
      "Multi-language customer support",
      "Secure booking and payment processing",
      "Guest concierge services",
      "Villa owner dashboard and management tools",
      "Partnership with Mastercard Priceless Cities",
      "Detailed villa descriptions and amenities",
      "Guest review and rating system"
    ],
    useCases: [
      "Luxury villa owners seeking premium distribution",
      "High-end vacation rental properties",
      "Boutique villa collections in Asia-Pacific",
      "Properties targeting affluent leisure travelers",
      "Villas offering unique cultural experiences",
      "Multi-bedroom properties for group bookings",
      "Villa management companies expanding reach"
    ],
    apiCapabilities: [
      "Property listing and content management",
      "Real-time availability synchronization",
      "Booking management and notifications",
      "Rate and inventory updates",
      "Guest communication integration",
      "Photo and media content sync",
      "Review and rating management"
    ],
    setupSteps: [
      "Submit villa application with property details",
      "Complete property verification and quality assessment",
      "Professional photography and content creation",
      "Set up rate plans and availability calendar",
      "Configure booking policies and house rules",
      "Integration with existing PMS or channel manager",
      "Launch villa listing on platform"
    ],
    website: "https://www.ministryofvillas.com",
    pricing: {
      model: "Commission-based",
      details: "Competitive commission structure with no upfront fees. Revenue share model that aligns our success with villa owner profitability.",
      features: [
        "No setup or listing fees",
        "Professional marketing support included",
        "Performance-based commission structure",
        "Marketing and promotional opportunities",
        "Partnership benefits and exclusive programs"
      ]
    },
    integrationFeatures: {
      dataSync: ["Reservations", "Availability", "Rates", "Property Content", "Guest Reviews"],
      realTime: true,
      webhooks: true,
      bulkOperations: true,
      customFields: true
    }
  },
  {
    id: "lodgegate",
    name: "LodgeGate",
    description: "Comprehensive hospitality software solution for property management, offering booking management, guest services, and operational tools designed for hotels, resorts, and accommodation providers.",
    icon: "/lovable-uploads/pms-catalog-lodgegate.webp",
    categories: ["PMS", "Europe"],
    slug: "lodgegate",
    longDescription: "LodgeGate is a modern property management system designed specifically for the hospitality industry. Our comprehensive platform provides hotels, resorts, and accommodation providers with powerful tools to manage bookings, streamline operations, and enhance guest experiences. With a focus on user-friendly design and robust functionality, LodgeGate helps properties of all sizes optimize their operations and maximize revenue.",
    features: [
      "Comprehensive booking management system",
      "Real-time availability and rate management",
      "Guest profile and history tracking",
      "Automated guest communication workflows",
      "Housekeeping and maintenance scheduling",
      "Financial reporting and analytics",
      "Multi-property management capabilities",
      "Channel manager integration",
      "Mobile-responsive interface",
      "24/7 customer support"
    ],
    useCases: [
      "Hotels seeking comprehensive PMS solutions",
      "Resorts managing complex operations",
      "Accommodation providers needing automation",
      "Properties wanting to streamline check-in/out",
      "Hotels requiring detailed reporting",
      "Multi-property operators"
    ],
    apiCapabilities: [
      "RESTful API integration",
      "Real-time booking synchronization",
      "Guest data management",
      "Property configuration management",
      "Reporting and analytics access",
      "Third-party system integration",
      "Automated workflow triggers"
    ],
    setupSteps: [
      "Register for LodgeGate account",
      "Complete property setup and configuration",
      "Configure room types and amenities",
      "Set up rates and availability calendar",
      "Integrate with existing systems via API",
      "Train staff on platform usage",
      "Go live with booking management"
    ],
    website: "https://lodgegate.com/",
    pricing: {
      model: "Subscription-based",
      details: "Flexible pricing based on property size and feature requirements. Contact for custom pricing.",
      features: [
        "Scalable pricing options",
        "No hidden fees",
        "Free setup and onboarding",
        "24/7 technical support",
        "Regular updates included"
      ]
    },
    integrationFeatures: {
      dataSync: ["Reservations", "Rates", "Availability", "Guest Data", "Property Information"],
      realTime: true,
      webhooks: true,
      bulkOperations: true,
      customFields: true
    }
  },
  {
    id: "alaric",
    name: "Alaric",
    description: "Modern Internet Booking Engine (IBE) solution that enables hotels and accommodation providers to accept direct bookings through their website with seamless integration and user-friendly interface.",
    icon: "/images/integrations/alaric.png",
    categories: ["IBE"],
    slug: "alaric",
    longDescription: "Alaric is a cutting-edge Internet Booking Engine designed to empower hotels and accommodation providers with direct booking capabilities. With a focus on conversion optimization, seamless user experience, and powerful integration features, Alaric helps properties reduce OTA dependency and increase direct revenue. The platform offers customizable booking flows, dynamic pricing, and comprehensive analytics to maximize booking conversion rates.",
    features: [
      "Customizable booking widget for websites",
      "Real-time availability and pricing",
      "Mobile-optimized booking experience",
      "Multi-language and multi-currency support",
      "Secure payment processing",
      "Dynamic pricing and rate management",
      "Promotional code and discount management",
      "Conversion-optimized booking flow",
      "Email confirmation and communication",
      "Integration with major PMSs",
      "Analytics and booking insights",
      "Easy website integration"
    ],
    useCases: [
      "Hotels wanting to increase direct bookings",
      "Properties reducing OTA commission costs",
      "Accommodations seeking booking engine flexibility",
      "Hotels requiring customizable booking flows",
      "Properties targeting mobile bookers",
      "Businesses wanting better conversion rates"
    ],
    apiCapabilities: [
      "Real-time availability synchronization",
      "Booking creation and management",
      "Rate and inventory updates",
      "Guest information capture",
      "Payment processing integration",
      "PMS system integration",
      "Analytics and reporting API",
      "Webhook notifications"
    ],
    setupSteps: [
      "Register for Alaric account",
      "Configure property details and settings",
      "Set up room types and rate plans",
      "Customize booking widget design",
      "Integrate payment gateway",
      "Connect to PMS via Channex",
      "Embed booking engine on website",
      "Test booking flow and go live"
    ],
    website: "https://alaric.id/",
    pricing: {
      model: "Commission or Subscription-based",
      details: "Flexible pricing options available. Contact for detailed pricing information.",
      features: [
        "No setup fees",
        "Scalable pricing options",
        "Free trial available",
        "Dedicated support",
        "Regular feature updates"
      ]
    },
    integrationFeatures: {
      dataSync: ["Bookings", "Rates", "Availability", "Guest Data"],
      realTime: true,
      webhooks: true,
      bulkOperations: false,
      customFields: true
    }
  },
  {
    id: "lsi-software",
    name: "LSI Software",
    description: "Hotel Cloud by LSI Software is a comprehensive cloud-based Property Management System designed for hotels, resorts, and accommodation providers. Offers complete hotel management with integrated modules for front office, housekeeping, revenue management, and guest services.",
    icon: "/images/integrations/lsi-software.svg",
    categories: ["PMS"],
    slug: "lsi-software",
    longDescription: "LSI Software provides Hotel Cloud, a modern cloud-based Property Management System that streamlines hotel operations from front desk to back office. With over 30 years of experience in hospitality technology, LSI Software delivers robust solutions for independent hotels, hotel chains, and resort properties. Hotel Cloud offers real-time synchronization, intuitive interface, and comprehensive features for managing reservations, guest services, housekeeping, revenue optimization, and reporting.",
    features: [
      "Cloud-based PMS accessible from anywhere",
      "Real-time reservation management",
      "Front desk and check-in/check-out operations",
      "Housekeeping and maintenance management",
      "Revenue management and dynamic pricing",
      "Guest profile and CRM capabilities",
      "Multi-property management support",
      "Channel manager integration",
      "Payment processing and invoicing",
      "Comprehensive reporting and analytics",
      "Mobile-friendly interface",
      "Rate and inventory management",
      "Group bookings and allocation",
      "Night audit automation",
      "Multi-language support"
    ],
    useCases: [
      "Independent hotels seeking modern PMS",
      "Hotel chains requiring multi-property management",
      "Resorts needing comprehensive operations management",
      "Properties upgrading from legacy systems",
      "Hotels wanting cloud-based accessibility",
      "Accommodations requiring integrated channel management"
    ],
    apiCapabilities: [
      "Real-time reservation synchronization",
      "Rate and availability updates",
      "Guest data management",
      "Booking modifications and cancellations",
      "Room type and inventory management",
      "Channel manager connectivity",
      "Payment gateway integration",
      "Reporting and analytics API",
      "Webhook notifications for booking events"
    ],
    setupSteps: [
      "Contact LSI Software for account setup",
      "Configure property and room types",
      "Import existing guest and reservation data",
      "Set up rate plans and pricing",
      "Configure payment processing",
      "Connect to channel manager via Channex",
      "Train staff on system usage",
      "Go live with ongoing support"
    ],
    website: "https://lsisoftware.pl/",
    pricing: {
      model: "Subscription-based",
      details: "Monthly or annual subscription plans based on property size and features required. Contact LSI Software for custom pricing.",
      features: [
        "Scalable pricing based on property size",
        "No long-term contracts",
        "Includes training and onboarding",
        "24/7 technical support",
        "Regular software updates included",
        "Cloud hosting and maintenance included"
      ]
    },
    integrationFeatures: {
      dataSync: ["Reservations", "Rates", "Availability", "Guest Profiles", "Invoices"],
      realTime: true,
      webhooks: true,
      bulkOperations: true,
      customFields: true
    }
  },
  {
    id: "stripe",
    name: "Stripe",
    description: "The leading online payment processing platform for internet businesses. Stripe provides a complete payments infrastructure with powerful APIs, fraud prevention, and global reach for seamless guest transactions.",
    icon: "/images/integrations/stripe.png",
    categories: ["Payment Gateway"],
    slug: "stripe",
    longDescription: "Stripe is the world's most powerful and flexible payment platform, trusted by millions of businesses from startups to Fortune 500 companies. Built for developers and designed for ease of use, Stripe handles billions of dollars in transactions annually. With Channex integration, properties can seamlessly process payments, manage subscriptions, handle refunds, and automate financial workflows while providing guests with a secure, frictionless payment experience.",
    features: [
      "Secure payment processing with PCI compliance",
      "Support for 135+ currencies worldwide",
      "Credit card, debit card, and digital wallet acceptance",
      "Automated fraud detection and prevention",
      "Subscription and recurring billing management",
      "Instant payouts and flexible settlement",
      "Customizable checkout experiences",
      "Real-time transaction monitoring and reporting",
      "Refund and dispute management",
      "3D Secure authentication support",
      "Mobile-optimized payment flows",
      "Multi-currency pricing and conversion"
    ],
    useCases: [
      "Hotels processing online payments and deposits",
      "Properties accepting international guest payments",
      "Vacation rentals collecting security deposits",
      "Accommodation providers with recurring charges",
      "Properties needing automated payment reconciliation",
      "Businesses requiring multi-currency support",
      "Hotels managing refunds and chargebacks efficiently"
    ],
    apiCapabilities: [
      "Payment Intent API for secure transactions",
      "Customer management and saved payment methods",
      "Webhook events for real-time notifications",
      "Subscription and invoice management",
      "Refund and dispute handling",
      "Balance and payout reporting",
      "Connect platform for marketplace payments",
      "Radar fraud prevention integration"
    ],
    setupSteps: [
      "Create a Stripe account at stripe.com",
      "Complete business verification and KYC requirements",
      "Obtain API keys from Stripe Dashboard",
      "Configure payment methods and currencies",
      "Connect Stripe to Channex via integration settings",
      "Set up webhook endpoints for payment events",
      "Test transactions in sandbox environment",
      "Go live and start processing payments"
    ],
    website: "https://stripe.com",
    screenshots: [],
    pricing: {
      model: "Transaction-based pricing",
      details: "Pay only when you process payments. Standard rate is 2.9% + $0.30 per successful transaction. Volume discounts available for high-volume businesses.",
      features: [
        "No setup or monthly fees",
        "Pay per transaction only",
        "Volume discounts available",
        "No hidden charges or minimums",
        "Free fraud protection with Radar",
        "All payment methods included",
        "24/7 support for all users"
      ]
    },
    integrationFeatures: {
      dataSync: ["Payments", "Refunds", "Customers", "Invoices", "Subscriptions"],
      realTime: true,
      webhooks: true,
      bulkOperations: true,
      customFields: false
    }
  },
  {
    id: "hotelrez",
    slug: "hotelrez",
    name: "HotelREZ",
    description: "A global hotel representation company increasing revenue with GDS, RFPs, Direct Booking tools and unlocking global demand and marketing power.",
    longDescription: "Interface your PMS to our SynXIS CRS for GDS, IDS, OTAs connectivity and Direct Hotel Booking Solutions with demand partnerships, global reach, marketing, account management, support and best in class systems – more business at an attractive cost of sale. Unlock chain-level reach without sacrificing independence. HotelREZ, seamlessly integrated with your Channex PMS, connects you to the most powerful commercial network for independent hotels worldwide. Gain Global Preferred Status and access chain-level deals across GDS (750k agencies), OTAs, corporate RFPs, consortia, TMCs, and direct channels. HotelREZ drives higher-margin business and sustainable growth for independent and small hotel groups. As a Global Partner of Hospitality Solutions (formerly Sabre Hospitality), we use SynXis as our CRS \"pipe\", but the real value goes far beyond connectivity. We help you win more profitable business, not simply additional room nights.",
    icon: "/lovable-uploads/hotelrez-logo.webp",
    categories: ["OTA", "Distribution", "Global"],
    website: "https://hotelrez.com/",
    features: [
      "Incremental demand, not rebadging - At HotelREZ our aim is to focus your Channex property on delivering new volume and a stronger channel mix rather than simply moving existing bookings from one pipe to another.",
      "Margin-focused economics - Our model prioritises profitability. Smarter OTA deals, stronger direct share and optimised GDS costs all contribute to drive a healthier P&L over time securing higher margins that sticks.",
      "Proactive account management - Named commercial managers drive opportunities, enrol your hotel into global programmes, and support RFP performance, campaign ideas and performance insights, not just technical support."
    ],
    useCases: [
      "Global Platinum & Tier 1 Preferred GDS Connectivity under HO Chain Code - We connect your hotel to more than 750,000+ travel agents worldwide, unlocking visibility across corporate, leisure and consortia markets.",
      "Global Preferred Partnerships Across Key Channels - We secure priority Tier 1 and Platinum placement across more than 100+ OTAs, TMCs, consortia and luxury specialists.",
      "Chain-Level OTA Commercial Agreements - We leverage our buying power to negotiate chain-wide programmes and rate agreements that attract premium travellers.",
      "60 Global Offices Driving Corporate RFP and TMC Programme Access - We manage the full RFP lifecycle, positioning your property for high-value corporate and niche segment production.",
      "Worldwide Network for Global Sales Representation - We actively promote your hotel through our network of 60 international Agency sales offices.",
      "Direct Hotel Bookings Products Suite - We strengthen your direct room revenue through conversion led design, supported by live RateDisplay Widgets, metasearch visibility and continuous digital marketing.",
      "Direct Consumer Marketing via Best Loved Hotels - We showcase your property to an engaged audience of high-value travellers through our lifestyle brand."
    ]
  },
  {
    // The icon here used to hotlink a wixstatic.com URL that was not WeSpeak's
    // logo at all — it was HOLIDAY INN's mark, lifted from the client wall on
    // wespeak.pro (the path is /images/Logos/Clientes/). So this tile showed
    // another company's trademark. Replaced with WeSpeak's own stacked lockup
    // from /images/Logos/WeSpeak/fondo transparente/6.png, cropped from
    // 1563x1563 to its ink bounds and resized to 260px, ~4x the 64px slot.
    id: "wespeak",
    name: "WeSpeak",
    description: "AI-powered conversational assistant for hotels that increases direct bookings through 24/7 personalized guest interactions via WhatsApp.",
    icon: "/lovable-uploads/pms-wespeak.webp",
    categories: ["IBE"],
    slug: "wespeak",
    longDescription: "WeSpeak is an AI-powered conversational assistant designed specifically for hotels. Trusted by over 500 hotels across 20 countries, WeSpeak helps properties increase direct bookings by engaging with guests 24/7 through personalized interactions, primarily via WhatsApp. The platform reduces operational time for hotel staff by up to 90% while improving guest satisfaction with instant, professional responses in multiple languages.",
    features: [
      "AI conversational assistant available 24/7",
      "WhatsApp integration for guest communication",
      "Multi-language support for global reach",
      "Instant response to guest inquiries",
      "Personalized guest interactions",
      "Humanized and friendly communication tone",
      "Reduces staff response time by up to 90%",
      "Increases direct booking conversion"
    ],
    useCases: [
      "Hotels looking to increase direct bookings",
      "Properties wanting 24/7 guest communication",
      "Hotels seeking to reduce staff workload on inquiries",
      "Properties targeting international guests with multi-language support",
      "Hotels wanting to improve guest experience through instant responses"
    ],
    website: "https://www.wespeak.pro/"
  },
  {
    // The icon here used to hotlink levart.com.au for a file called
    // Direct-Bookings-Dark-Blue.svg, which is not a logo — it is a feature
    // illustration of a browser window with a chart and a calendar grid.
    // Replaced with their actual wordmark, Levart-Logo-Dark.svg from the same
    // site, kept as SVG and byte-identical to what they serve.
    id: "levart",
    name: "Levart",
    description: "Australian hospitality software provider offering intelligent booking engine technology, channel management, and website solutions to increase direct bookings.",
    icon: "/lovable-uploads/pms-levart.svg",
    categories: ["IBE"],
    slug: "levart",
    longDescription: "Levart provides superior software solutions for the hospitality industry, helping properties grow direct bookings, easily manage online distribution, and optimize overall profitability with intelligent technology solutions. Their suite includes an intelligent booking engine, channel manager, and website solutions, all backed by a dedicated Client Success Team.",
    features: [
      "Intelligent booking engine technology",
      "Channel management integration",
      "Website solutions for hotels",
      "Automated systems for efficiency",
      "Direct booking optimization tools",
      "Dedicated Client Success Team support",
      "Complete control over your business",
      "Time-saving automated workflows"
    ],
    useCases: [
      "Hotels looking to increase direct bookings",
      "Properties wanting efficient automated systems",
      "Hotels seeking complete control over their online distribution",
      "Properties in Australia and surrounding regions",
      "Hotels wanting dedicated support and client success management"
    ],
    website: "https://www.levart.com.au/"
  },
  {
    aliases: ["MangoBeds"],
    id: "mangobeds",
    name: "Mangobeds",
    description: "Modern PMS + booking platform that helps hotel teams manage reservations, availability, rates, guest communication, and payments all in one place.",
    icon: "/images/integrations/mangobeds.svg",
    categories: ["PMS", "Americas"],
    slug: "mangobeds",
    longDescription: "MangoBeds is a modern PMS + booking platform that helps your team manage everything in one place: reservations, availability, rates, guest communication, and payments. It's easy to set up, automates the busy work, and keeps calendars in sync to avoid double bookings. Designed for efficiency, MangoBeds streamlines daily operations so hotel staff can focus on delivering great guest experiences instead of juggling multiple systems.",
    features: [
      "All-in-one reservation management",
      "Real-time availability and rate control",
      "Integrated guest communication tools",
      "Payment processing built-in",
      "Calendar synchronization to prevent double bookings",
      "Easy setup and onboarding",
      "Automated workflows for busy work",
      "Centralized property management dashboard"
    ],
    useCases: [
      "Hotels looking for a modern all-in-one PMS solution",
      "Properties wanting to automate repetitive tasks",
      "Hotels needing real-time calendar sync across channels",
      "Teams seeking centralized guest communication",
      "Properties wanting integrated payment processing"
    ],
    website: "https://www.mangobeds.com/en/solutions/hotel-management-software"
  },
  {
    aliases: ["HighTide"],
    id: "hightide",
    name: "Hightide",
    description: "Simple but flexible reservation management software designed for surf camps, yoga retreats, adventure lodges, and unique tour operators.",
    icon: "/lovable-uploads/pms-catalog-hightide.webp",
    categories: ["PMS"],
    slug: "hightide",
    longDescription: "HighTide is a cloud-based booking software specifically built for unique businesses like surf camps, retreats, and tour operators. It simplifies reservation management by providing a flexible calendar, automated guest communication, and an integrated online store. HighTide helps small businesses streamline their operations, reduce manual work, and increase bookings through a user-friendly platform that adapts to their specific needs.",
    features: [
      "Flexible reservation management calendar",
      "Integrated online store for services and tours",
      "Automated guest communication and emails",
      "Linked availability for complex bookings",
      "Real-time booking tracking and organization",
      "Simple setup and intuitive interface",
      "Support for multiple languages and currencies",
      "Secure payment processing integrations"
    ],
    useCases: [
      "Surf camps and yoga retreats seeking flexible booking tools",
      "Tour operators wanting to sell services online",
      "Adventure lodges managing unique accommodations",
      "Small businesses looking to automate guest communication",
      "Properties needing linked availability for packages"
    ],
    website: "https://www.hightide.io/"
  },
  {
    id: "klook",
    name: "Klook",
    description: "Leading travel activities and services booking platform in Asia-Pacific, connecting millions of travelers with unique experiences, tours, and accommodations.",
    icon: "/lovable-uploads/klook-logo.webp",
    categories: ["OTA", "Global", "Asia", "Activities"],
    slug: "klook",
    longDescription: "Klook is Asia-Pacific's leading travel activities and services booking platform, offering travelers instant booking and confirmation for tours, attractions, transportation, and accommodations. With over 400,000 activities across 1,000+ destinations worldwide, Klook has become the go-to platform for travelers seeking unique experiences. Our integration enables properties to tap into Klook's massive user base of experience-seeking travelers, particularly strong in Asian markets.",
    features: [
      "Access to millions of Asian travelers",
      "Real-time rate and availability management",
      "Multi-currency support (20+ currencies)",
      "Instant booking confirmation",
      "Mobile-first platform with high conversion rates",
      "Integrated with activities and experiences",
      "Strong presence in Asia-Pacific markets",
      "Marketing and promotional opportunities",
      "24/7 customer support in multiple languages",
      "Advanced analytics and reporting tools",
      "Flexible cancellation policy management",
      "Klook Credits and loyalty program integration"
    ],
    useCases: [
      "Hotels targeting Asian travelers",
      "Properties near popular attractions and activities",
      "Accommodations seeking experience-driven guests",
      "Hotels in tourist destinations",
      "Properties wanting to reach mobile-savvy travelers",
      "Businesses targeting millennials and Gen Z travelers"
    ],
    apiCapabilities: [
      "Real-time availability and rate synchronization",
      "Booking management and modifications",
      "Property and room type configuration",
      "Guest data and booking details access",
      "Cancellation and refund handling",
      "Marketing content and photo management",
      "Performance analytics and reporting",
      "Multi-language content support"
    ],
    setupSteps: [
      "Register as a Klook accommodation partner",
      "Complete property verification and documentation",
      "Upload high-quality property photos and descriptions",
      "Configure room types, rates, and policies",
      "Set up availability calendar",
      "Connect via Channex API integration",
      "Test booking flow and data synchronization",
      "Go live and start receiving bookings"
    ],
    website: "https://www.klook.com",
    screenshots: [],
    pricing: {
      model: "Commission-based per booking",
      details: "Competitive commission rates with no upfront costs. Commission is only charged on confirmed bookings.",
      features: [
        "No setup or monthly fees",
        "Commission only on successful bookings",
        "Access to marketing campaigns and promotions",
        "Free partner dashboard and analytics",
        "Dedicated partner support team",
        "Regular payment cycles"
      ]
    },
    integrationFeatures: {
      dataSync: ["Reservations", "Rates", "Availability", "Property Data", "Guest Information"],
      realTime: true,
      webhooks: true,
      bulkOperations: true,
      customFields: false
    }
  },
  {
    id: "check24",
    name: "Check24",
    description: "Germany's leading comparison and booking platform for travel, hotels, and accommodations, connecting millions of German-speaking travelers with properties worldwide.",
    icon: "/lovable-uploads/check24-logo.webp",
    categories: ["OTA", "Europe", "Germany"],
    slug: "check24",
    longDescription: "Check24 is Germany's largest online comparison portal and one of Europe's leading travel booking platforms. With over 15 million customers and a dominant presence in German-speaking markets (Germany, Austria, Switzerland), Check24 provides hotels and accommodations with direct access to high-value European travelers. Known for its comprehensive comparison features and trusted brand reputation, Check24 is essential for properties targeting the lucrative German travel market.",
    features: [
      "Access to 15+ million German customers",
      "Real-time rate and availability management",
      "Multi-currency support (EUR, CHF)",
      "Instant booking confirmation",
      "Strong brand recognition in DACH region",
      "Integrated customer reviews and ratings",
      "Competitive rate comparison visibility",
      "Marketing and promotional opportunities",
      "German-language customer support",
      "Advanced analytics and reporting tools",
      "Flexible cancellation policy management",
      "Check24 loyalty program integration"
    ],
    useCases: [
      "Hotels targeting German-speaking travelers",
      "Properties in popular European destinations",
      "Accommodations seeking high-value guests",
      "Hotels wanting exposure in DACH markets",
      "Properties competing on price and value",
      "Businesses targeting comparison shoppers"
    ],
    apiCapabilities: [
      "Real-time availability and rate synchronization",
      "Booking management and modifications",
      "Property and room type configuration",
      "Guest data and booking details access",
      "Cancellation and refund handling",
      "Marketing content and photo management",
      "Performance analytics and reporting",
      "Multi-language content support"
    ],
    setupSteps: [
      "Register as a Check24 hotel partner",
      "Complete property verification and documentation",
      "Upload high-quality property photos and descriptions",
      "Configure room types, rates, and policies",
      "Set up availability calendar",
      "Connect via Channex API integration",
      "Test booking flow and data synchronization",
      "Go live and start receiving bookings"
    ],
    website: "https://www.check24.de",
    screenshots: [],
    pricing: {
      model: "Commission-based per booking",
      details: "Competitive commission rates for the German market with no upfront costs. Commission is only charged on confirmed bookings.",
      features: [
        "No setup or monthly fees",
        "Commission only on successful bookings",
        "Access to marketing campaigns and promotions",
        "Free partner dashboard and analytics",
        "Dedicated German-speaking partner support",
        "Regular payment cycles"
      ]
    },
    integrationFeatures: {
      dataSync: ["Reservations", "Rates", "Availability", "Property Data", "Guest Information"],
      realTime: true,
      webhooks: true,
      bulkOperations: true,
      customFields: false
    }
  }
,

  {
    id: "nuzul",
    name: "Nuzul",
    description: "Cloud-based property management system providing comprehensive hotel operations management and channel connectivity.",
    icon: "",
    categories: ["PMS", "Middle East"],
    slug: "nuzul",
    website: "https://www.nuzul.com/"
  },
  {
    aliases: ["VHP ( Part of Sindata)"],
    id: "vhp--part-of-sindata",
    name: "VHP (Sindata)",
    description: "Cloud-based property management system providing comprehensive hotel operations management and channel connectivity.",
    icon: "/lovable-uploads/pms-catalog-vhp-sindata.webp",
    categories: ["PMS", "Asia Pacific"],
    slug: "vhp--part-of-sindata",
    website: "https://sindata.net/"
  },
  {
    id: "lejuezgroup-proxy-to-opera",
    name: "Lejuezgroup (Proxy to Opera)",
    description: "Cloud-based property management system providing comprehensive hotel operations management and channel connectivity.",
    icon: "",
    categories: ["PMS", "Americas"],
    slug: "lejuezgroup-proxy-to-opera",
    website: "https://lejuezgroup.com/"
  },
  {
    id: "cropsly",
    name: "Cropsly",
    description: "Cloud-based property management system providing comprehensive hotel operations management and channel connectivity.",
    icon: "",
    categories: ["PMS", "Asia Pacific"],
    slug: "cropsly",
    website: "https://runhotel.io/"
  },
  {
    id: "stellarstay",
    name: "Stellarstay",
    description: "Cloud-based property management system providing comprehensive hotel operations management and channel connectivity.",
    icon: "",
    categories: ["PMS", "Americas"],
    slug: "stellarstay",
    website: "https://www.stellarstay.com/"
  },
  {
    aliases: ["Pumapro"],
    id: "pumapro",
    name: "Pumapro PMS",
    description: "Cloud-based property management system providing comprehensive hotel operations management and channel connectivity.",
    icon: "/lovable-uploads/pms-catalog-pumapro-pms.webp",
    categories: ["PMS", "Asia Pacific"],
    slug: "pumapro",
    website: "https://pumapro.com.au/"
  },
  {
    id: "easyrev",
    name: "Easyrev",
    description: "Cloud-based property management system providing comprehensive hotel operations management and channel connectivity.",
    icon: "",
    categories: ["PMS", "Americas"],
    slug: "easyrev",
    website: "https://easyrev.com.br/"
  },
  {
    id: "baras",
    name: "Baras",
    description: "Cloud-based property management system providing comprehensive hotel operations management and channel connectivity.",
    icon: "",
    categories: ["PMS", "Middle East"],
    slug: "baras",
    website: "https://barasglobal.com"
  },
  {
    id: "rabt",
    name: "Rabt",
    description: "Cloud-based property management system providing comprehensive hotel operations management and channel connectivity.",
    icon: "",
    categories: ["PMS", "Middle East"],
    slug: "rabt",
    website: "https://www.rabt.solutions/en/home"
  },
  {
    aliases: ["Tranquiloh"],
    id: "tranquiloh",
    name: "Tranquilo H",
    description: "Cloud-based property management system providing comprehensive hotel operations management and channel connectivity.",
    icon: "/lovable-uploads/pms-catalog-tranquilo-h.webp",
    categories: ["PMS", "Latin America"],
    slug: "tranquiloh",
    website: "https://tranquiloh.tech/"
  },
  {
    id: "fortravel",
    name: "Fortravel",
    description: "Cloud-based property management system providing comprehensive hotel operations management and channel connectivity.",
    icon: "",
    categories: ["PMS", "Europe"],
    slug: "fortravel",
    website: "https://forhotel.eu/en"
  },
  {
    id: "semantic",
    name: "Semantic",
    description: "Cloud-based property management system providing comprehensive hotel operations management and channel connectivity.",
    icon: "",
    categories: ["PMS", "Europe"],
    slug: "semantic",
    website: "https://semantic.gr/"
  },
  {
    id: "spylanditalia",
    name: "Spylanditalia",
    description: "Cloud-based property management system providing comprehensive hotel operations management and channel connectivity.",
    icon: "",
    categories: ["PMS", "Europe"],
    slug: "spylanditalia",
    website: "https://keymate.it/"
  },
  {
    id: "develab",
    name: "Develab",
    description: "Cloud-based property management system providing comprehensive hotel operations management and channel connectivity.",
    icon: "/lovable-uploads/pms-catalog-develab.webp",
    categories: ["PMS", "Asia"],
    slug: "develab",
    website: "https://develab.io/"
  },
  {
    id: "trvmglobal",
    name: "Trvmglobal",
    description: "Cloud-based property management system providing comprehensive hotel operations management and channel connectivity.",
    icon: "",
    categories: ["PMS", "Asia Pacific"],
    slug: "trvmglobal",
    website: "https://www.trvmglobal.com/"
  },
  {
    id: "tunn3lcom",
    name: "tunn3l.com",
    description: "Cloud-based property management system providing comprehensive hotel operations management and channel connectivity.",
    icon: "",
    categories: ["PMS", "Europe"],
    slug: "tunn3lcom",
    website: "https://www.tunn3l.com"
  },
  {
    id: "etg",
    name: "Etg",
    description: "Cloud-based property management system providing comprehensive hotel operations management and channel connectivity.",
    icon: "",
    categories: ["PMS", "Europe"],
    slug: "etg",
    website: "https://pms.etg.al/"
  },
  {
    id: "iroom",
    name: "iroom",
    description: "Cloud-based property management system providing comprehensive hotel operations management and channel connectivity.",
    icon: "",
    categories: ["PMS", "Middle East"],
    slug: "iroom",
    website: "https://iroom.ai/"
  },
  {
    id: "taskbeast",
    name: "Taskbeast",
    description: "Cloud-based property management system providing comprehensive hotel operations management and channel connectivity.",
    icon: "/lovable-uploads/pms-catalog-taskbeast.webp",
    categories: ["PMS", "Europe"],
    slug: "taskbeast",
    website: "https://www.taskbeast.ai/"
  },
  {
    id: "altezza",
    name: "Altezza",
    description: "Cloud-based property management system providing comprehensive hotel operations management and channel connectivity.",
    icon: "",
    categories: ["PMS"],
    slug: "altezza",
    website: "https://altezzatravel.com/"
  },
  {
    aliases: ["Viatoratech"],
    id: "viatoratech",
    name: "Viatora Tech",
    description: "Cloud-based property management system providing comprehensive hotel operations management and channel connectivity.",
    icon: "/lovable-uploads/pms-catalog-viatora-tech.webp",
    categories: ["PMS", "Africa"],
    slug: "viatoratech",
    website: "https://viatoratech.com/hotel-management.html"
  },
  {
    id: "rukiyation",
    name: "Rukiyation",
    description: "Cloud-based property management system providing comprehensive hotel operations management and channel connectivity.",
    icon: "",
    categories: ["PMS", "Asia Pacific"],
    slug: "rukiyation",
    website: "https://rukiyezara.com/"
  },
  {
    aliases: ["Digistay"],
    id: "digistay",
    name: "DigiStay",
    description: "Cloud-based property management system providing comprehensive hotel operations management and channel connectivity.",
    icon: "/lovable-uploads/pms-catalog-digistay.webp",
    categories: ["PMS", "Asia"],
    slug: "digistay",
    website: "https://digistay.ai/become-a-partner/ai-hotel-management-system"
  },
  {
    id: "fortran-house",
    name: "Fortran House",
    description: "Cloud-based property management system providing comprehensive hotel operations management and channel connectivity.",
    icon: "",
    categories: ["PMS", "Africa"],
    slug: "fortran-house",
    website: "https://fortranhouse.com/"
  },
  {
    id: "art2fly",
    name: "Art2fly",
    description: "Cloud-based property management system providing comprehensive hotel operations management and channel connectivity.",
    icon: "",
    categories: ["PMS", "Americas"],
    slug: "art2fly",
    website: "https://www.art2travel.com/"
  },
  {
    aliases: ["abouthotelier"],
    id: "abouthotelier",
    name: "Roomrack by Abouthotelier",
    description: "Cloud-based property management system providing comprehensive hotel operations management and channel connectivity.",
    icon: "/lovable-uploads/pms-catalog-roomrack-by-abouthotelier.webp",
    categories: ["PMS", "Europe"],
    slug: "abouthotelier",
    website: "https://abouthotelier.com/hotel-management-software-roomrack/"
  },
  {
    aliases: ["Heyandes"],
    id: "heyandes",
    name: "HeyAndes",
    description: "Cloud-based property management system providing comprehensive hotel operations management and channel connectivity.",
    icon: "/lovable-uploads/pms-catalog-heyandes.webp",
    categories: ["PMS", "Americas"],
    slug: "heyandes",
    website: "https://www.heyandes.com/"
  },
  {
    aliases: ["Zuzu Hospitality"],
    id: "zuzu",
    name: "ZUZU Hospitality",
    description: "All-in-one hospitality platform combining human expertise and advanced technology to help independent hotels thrive across Southeast Asia and India with smart pricing, revenue management, and distribution.",
    icon: "/lovable-uploads/zuzu-logo.webp",
    categories: ["PMS", "Asia"],
    slug: "zuzu",
    website: "https://zuzuhospitality.com/platform/property-management-software"
  },
  {
    id: "cohosting",
    name: "Cohosting",
    description: "Cloud-based property management system providing comprehensive hotel operations management and channel connectivity.",
    icon: "",
    categories: ["PMS", "Americas"],
    slug: "cohosting",
    website: "https://cohosting.com/"
  },
  {
    id: "frontdesk-tech-ltda",
    name: "Frontdesk Tech LTDA",
    description: "Cloud-based property management system providing comprehensive hotel operations management and channel connectivity.",
    icon: "",
    categories: ["PMS", "Americas"],
    slug: "frontdesk-tech-ltda",
    website: "https://frontdesktech.com/"
  },
  {
    aliases: ["Joodlab"],
    id: "joodlab",
    name: "Joodlab / Joodbooking",
    description: "Cloud-based property management system providing comprehensive hotel operations management and channel connectivity.",
    icon: "/lovable-uploads/pms-catalog-joodlab-joodbooking.webp",
    categories: ["PMS", "Middle East"],
    slug: "joodlab",
    website: "https://joodbooking.com/"
  },
  {
    aliases: ["Lsisoftware"],
    id: "lsisoftware",
    name: "LSI Software / Positive Hotel",
    description: "Cloud-based property management system providing comprehensive hotel operations management and channel connectivity.",
    icon: "/lovable-uploads/pms-catalog-lsi-software-positive-hotel.webp",
    categories: ["PMS", "Europe"],
    slug: "lsisoftware",
    website: "https://www.lsisoftware.pl/oferta/hotele/"
  },
  {
    id: "arealy",
    name: "Arealy",
    description: "Cloud-based property management system providing comprehensive hotel operations management and channel connectivity.",
    icon: "/lovable-uploads/pms-catalog-arealy.webp",
    categories: ["PMS", "Europe"],
    slug: "arealy",
    website: "https://www.area.ly/"
  },
  {
    aliases: ["Tuzgle"],
    id: "tuzgle",
    name: "Tuzgle-IT / TuHotel",
    description: "Cloud-based property management system providing comprehensive hotel operations management and channel connectivity.",
    icon: "/lovable-uploads/pms-catalog-tuzgle-it-tuhotel.webp",
    categories: ["PMS", "Latin America"],
    slug: "tuzgle",
    website: "https://tuzgle-app.com/"
  },
  {
    id: "amiqa",
    name: "Amiqa",
    description: "Cloud-based property management system providing comprehensive hotel operations management and channel connectivity.",
    icon: "/lovable-uploads/pms-catalog-amiqa.webp",
    categories: ["PMS", "Europe"],
    slug: "amiqa",
    website: "https://amiqa.io/en/pms"
  },
  {
    id: "homeit",
    name: "Homeit",
    description: "Cloud-based property management system providing comprehensive hotel operations management and channel connectivity.",
    icon: "",
    categories: ["PMS", "Europe"],
    slug: "homeit",
    website: "https://homeit.io/"
  },
  {
    id: "hospify",
    name: "Hospify",
    description: "Cloud-based property management system providing comprehensive hotel operations management and channel connectivity.",
    icon: "",
    categories: ["PMS"],
    slug: "hospify",
    website: "https://hospify.app/"
  },
  {
    id: "xlayertechnologies",
    name: "Xlayertechnologies",
    description: "Cloud-based property management system providing comprehensive hotel operations management and channel connectivity.",
    icon: "",
    categories: ["PMS", "Asia Pacific"],
    slug: "xlayertechnologies",
    website: "https://xlayertechnologies.com"
  },
  {
    id: "mettle-tec",
    name: "Mettle Tec",
    description: "Cloud-based property management system providing comprehensive hotel operations management and channel connectivity.",
    icon: "",
    categories: ["PMS", "Asia Pacific"],
    slug: "mettle-tec",
    website: "https://mettletech.co/"
  },
  {
    aliases: ["CICO Technologies LLC"],
    id: "cico-technologies-llc",
    name: "CICO",
    description: "Cloud-based property management system providing comprehensive hotel operations management and channel connectivity.",
    icon: "/lovable-uploads/pms-catalog-cico.webp",
    categories: ["PMS", "Asia Pacific"],
    slug: "cico-technologies-llc",
    website: "https://mycico.com/"
  },
  {
    id: "aron-cloud",
    name: "Aron Cloud",
    description: "Cloud-based property management system providing comprehensive hotel operations management and channel connectivity.",
    icon: "",
    categories: ["PMS", "Europe"],
    slug: "aron-cloud",
    website: "https://www.arhon.ch/"
  },
  {
    id: "gopaddi",
    name: "Gopaddi",
    description: "Cloud-based property management system providing comprehensive hotel operations management and channel connectivity.",
    icon: "",
    categories: ["PMS", "Africa"],
    slug: "gopaddi",
    website: "https://www.gopaddi.com/en"
  },
  {
    id: "sentineltech",
    name: "SentinelTech",
    description: "Cloud-based property management system providing comprehensive hotel operations management and channel connectivity.",
    icon: "",
    categories: ["PMS", "Asia Pacific"],
    slug: "sentineltech",
    website: "https://www.sentineltech.com/"
  },
  {
    aliases: ["Digital Solusindo"],
    id: "digital-solusindo",
    name: "Digital Solusindo / DSI SISTEM",
    description: "Cloud-based property management system providing comprehensive hotel operations management and channel connectivity.",
    icon: "/lovable-uploads/pms-catalog-digital-solusindo-dsi-sistem.webp",
    categories: ["PMS", "Asia Pacific"],
    slug: "digital-solusindo",
    website: "https://digitalsolusindo.id/"
  },
  {
    id: "uno-hotelsde",
    name: "uno-hotels.de",
    description: "Cloud-based property management system providing comprehensive hotel operations management and channel connectivity.",
    icon: "",
    categories: ["PMS", "Europe"],
    slug: "uno-hotelsde",
    website: "https://uno-hotels.de/"
  },
  {
    id: "raumschmidede",
    name: "raumschmide.de",
    description: "Cloud-based property management system providing comprehensive hotel operations management and channel connectivity.",
    icon: "",
    categories: ["PMS", "Europe"],
    slug: "raumschmidede",
    website: "https://www.raumschmiede.de"
  },
  {
    aliases: ["visitorapp.co"],
    id: "visitorappco",
    name: "Visitor",
    description: "Cloud-based property management system providing comprehensive hotel operations management and channel connectivity.",
    icon: "/lovable-uploads/pms-catalog-visitor.webp",
    categories: ["PMS", "Europe"],
    slug: "visitorappco",
    website: "https://www.visitor.de/"
  },
  {
    id: "hostmesa",
    name: "hostme.sa",
    description: "Cloud-based property management system providing comprehensive hotel operations management and channel connectivity.",
    icon: "",
    categories: ["PMS", "Middle East"],
    slug: "hostmesa",
    website: "https://hostme.sa/en/home-page/"
  },
  {
    id: "sooninn",
    name: "Sooninn",
    description: "Cloud-based property management system providing comprehensive hotel operations management and channel connectivity.",
    icon: "",
    categories: ["PMS", "Asia Pacific"],
    slug: "sooninn",
    website: "https://www.sooninn.com.tw/"
  },
  {
    aliases: ["biloki"],
    id: "biloki",
    name: "Biloki",
    description: "Cloud-based property management system providing comprehensive hotel operations management and channel connectivity.",
    icon: "/lovable-uploads/pms-catalog-biloki.webp",
    categories: ["PMS", "Europe"],
    slug: "biloki",
    website: "https://www.biloki.fr/fr"
  },
  {
    id: "atflow",
    name: "atflow",
    description: "Cloud-based property management system providing comprehensive hotel operations management and channel connectivity.",
    icon: "",
    categories: ["PMS", "Europe"],
    slug: "atflow",
    website: "https://atflow.fi/"
  },
  {
    aliases: ["lodgix"],
    id: "lodgix",
    name: "Lodgix",
    description: "Cloud-based property management system providing comprehensive hotel operations management and channel connectivity.",
    icon: "/lovable-uploads/pms-catalog-lodgix.webp",
    categories: ["PMS", "Americas"],
    slug: "lodgix",
    website: "https://www.lodgix.com/"
  },
  {
    id: "servos",
    name: "servos",
    description: "Cloud-based property management system providing comprehensive hotel operations management and channel connectivity.",
    icon: "",
    categories: ["PMS", "Europe"],
    slug: "servos",
    website: "https://servos.dk/"
  },
  {
    // id keeps the legacy bulk-import value so the old
    // /integrations/support@imobiznetsinc URL 301s to the clean slug.
    id: "support@imobiznetsinc",
    name: "Imobiznets",
    description: "Integrated PMS and ERP platform combining property management with enterprise resource planning for hospitality businesses.",
    icon: "",
    categories: ["PMS"],
    slug: "imobiznets",
    website: "https://imobiznets.inc/"
  },
  {
    // id keeps the legacy accented value so the old URL 301s to the ASCII slug.
    id: "o-sócio-hoteleiro",
    name: "O Sócio Hoteleiro",
    description: "Cloud-based property management system providing comprehensive hotel operations management and channel connectivity.",
    icon: "",
    categories: ["PMS", "Americas"],
    slug: "o-socio-hoteleiro",
    website: "https://osociohoteleiro.com.br/"
  },
  {
    id: "lodge-easy-srl",
    name: "Lodge Easy SRL",
    description: "Cloud-based property management system providing comprehensive hotel operations management and channel connectivity.",
    icon: "",
    categories: ["PMS", "Europe"],
    slug: "lodge-easy-srl",
    website: "https://lodgeasy.it/en/"
  },
  {
    id: "guestbox-inc",
    name: "GuestBox Inc.",
    description: "Cloud-based property management system providing comprehensive hotel operations management and channel connectivity.",
    icon: "",
    categories: ["PMS", "Americas"],
    slug: "guestbox-inc",
    website: "https://guestbox.tv/"
  },
  {
    id: "taskyinn",
    name: "Taskyinn",
    description: "Cloud-based property management system providing comprehensive hotel operations management and channel connectivity.",
    icon: "/lovable-uploads/pms-catalog-taskyinn.webp",
    categories: ["PMS", "Middle East"],
    slug: "taskyinn",
    website: "https://taskyinn.sa/ar"
  },
  {
    id: "muntadaacom",
    name: "MUNTADAACOM",
    description: "Cloud-based property management system providing comprehensive hotel operations management and channel connectivity.",
    icon: "",
    categories: ["PMS", "Middle East"],
    slug: "muntadaacom",
    website: "https://www.muntadaa.com/"
  },
  {
    id: "stayntouch",
    name: "Stayntouch",
    description: "Cloud-native, full-featured hotel property management system trusted by leading independent hotels, hotel chains, and management companies worldwide. Offers multi-property management, mobile check-in, automated upselling, and seamless integrations.",
    icon: "/lovable-uploads/stayntouch-logo.jpeg",
    categories: ["PMS", "Americas"],
    slug: "stayntouch",
    website: "https://www.stayntouch.com/cloud-pms/"
  },
  {
    id: "sahab-tech",
    name: "Sahab-Tech",
    description: "Cloud-based property management system providing comprehensive hotel operations management and channel connectivity.",
    icon: "",
    categories: ["PMS", "Middle East"],
    slug: "sahab-tech",
    website: "https://sahabhotels.com/"
  },
  {
    id: "rjourney",
    name: "RJourney",
    description: "Cloud-based property management system providing comprehensive hotel operations management and channel connectivity.",
    icon: "",
    categories: ["PMS", "Americas"],
    slug: "rjourney",
    website: "https://rjourney.com/"
  },
  {
    id: "hotels-task",
    name: "Hotels Task",
    description: "Cloud-based property management system providing comprehensive hotel operations management and channel connectivity.",
    icon: "/lovable-uploads/pms-catalog-hotels-task.webp",
    categories: ["PMS", "Middle East"],
    slug: "hotels-task",
    website: "https://hotelstask.com/"
  },
  {
    id: "turbosuite",
    name: "Turbosuite",
    description: "Connect your PMS with Turbosuite to leverage advanced pricing and revenue optimization tools. Ideal for properties seeking to maximize profitability and streamline operations.",
    icon: "",
    categories: ["PMS", "RMS", "Europe"],
    slug: "turbosuite",
    website: "https://turbosuite.com/en/"
  },
  {
    // id keeps the legacy "&" value so the old URL 301s to the clean slug.
    id: "resarva-software-&-technology",
    name: "Resarva Software & Technology",
    description: "Cloud-based property management system providing comprehensive hotel operations management and channel connectivity.",
    icon: "",
    categories: ["PMS", "Middle East"],
    slug: "resarva-software-and-technology",
    website: "https://resarva.com/"
  },
  {
    id: "resboxcom",
    name: "resbox.com",
    description: "Cloud-based property management system providing comprehensive hotel operations management and channel connectivity.",
    icon: "",
    categories: ["PMS", "Middle East"],
    slug: "resboxcom",
    website: "https://resbox.com"
  },
  {
    aliases: ["Symple Host"],
    id: "symple-host",
    name: "SympleHost",
    description: "Cloud-based property management system providing comprehensive hotel operations management and channel connectivity.",
    icon: "/lovable-uploads/pms-catalog-symplehost.webp",
    categories: ["PMS", "Asia Pacific"],
    slug: "symple-host",
    website: "https://www.symplehost.ai/en"
  },
  {
    id: "rushd",
    name: "Rushd",
    description: "Cloud-based property management system providing comprehensive hotel operations management and channel connectivity.",
    icon: "/lovable-uploads/pms-catalog-rushd.webp",
    categories: ["PMS", "Middle East"],
    slug: "rushd",
    website: "https://rushd.tech/"
  },
  {
    id: "sedgeosio",
    name: "sedgeos.io",
    description: "Cloud-based property management system providing comprehensive hotel operations management and channel connectivity.",
    icon: "",
    categories: ["PMS", "Asia Pacific"],
    slug: "sedgeosio",
    website: "https://sedgeos.io/"
  },
   {
    id: "zzzzebracom",
    name: "ZZZzebra.com",
    description: "Cloud-based property management system providing comprehensive hotel operations management and channel connectivity.",
    icon: "",
    categories: ["PMS", "Africa"],
    slug: "zzzzebracom",
    website: "https://zzzzebra.com/"
  },
  {
    id: "kassavo",
    name: "Kassavo",
    description: "Intelligent short-stay property management platform combining technology and specialized teams to automate reservations, cleaning, and pricing — helping hosts increase income with minimal effort.",
    icon: "/lovable-uploads/pms-kassavo.png",
    categories: ["PMS", "Vacation Rentals"],
    slug: "kassavo",
    website: "https://kassavo.com/"
  },
  {
    id: "hotelbee",
    name: "HotelBee",
    description: "Comprehensive cloud-based hotel management software that streamlines day-to-day operations and provides valuable business insights for hotels, B&Bs, hostels, and resorts worldwide.",
    icon: "/lovable-uploads/pms-hotelbee.webp",
    categories: ["PMS", "Hotels", "Europe"],
    slug: "hotelbee",
    website: "https://hotelbee.co/products/property-management"
  },
  {
    id: "mrhewbuc",
    name: "Mr. Hewbuc",
    description: "Custom Salesforce-integrated solutions provider offering powerful integrations, intelligent automation, and AI-enhanced services for hospitality and property management businesses.",
    icon: "/lovable-uploads/pms-mrhewbuc.png",
    categories: ["PMS"],
    slug: "mrhewbuc",
    website: "https://mrhewbuc.com/"
  },
  {
    id: "balimmo",
    name: "Balimmo",
    description: "Full-service villa investment and rental management platform in Bali, handling legal, construction, and rental operations for property investors seeking high-yield returns.",
    icon: "/lovable-uploads/pms-balimmo.webp",
    categories: ["PMS", "Vacation Rentals", "Asia Pacific"],
    slug: "balimmo",
    website: "https://balimmo.fr/"
  },
  {
    id: "nowistay",
    name: "nowistay",
    description: "AI co-host and digital welcome book for vacation rentals that automates guest communication and team management, helping property managers save time, boost review scores, and increase occupancy.",
    icon: "/lovable-uploads/pms-nowistay.png",
    categories: ["PMS", "Vacation Rentals"],
    slug: "nowistay",
    website: "https://nowistay.com/"
  },
  {
    id: "checkedinn",
    name: "CheckedInn",
    description: "Intelligent hotel PMS solution for Germany offering intuitive management of master data, reporting, staff scheduling, reservations, and occupancy planning.",
    icon: "/lovable-uploads/pms-checkedinn.ico",
    categories: ["PMS", "Hotels", "Europe"],
    slug: "checkedinn",
    website: "https://www.checked-inn.de/products/pms"
  },
  {
    id: "mcontigo",
    name: "MContigo",
    description: "Digital development and technology company building web, mobile, and app solutions for property management and hospitality businesses.",
    icon: "/lovable-uploads/pms-mcontigo.png",
    categories: ["PMS"],
    slug: "mcontigo",
    website: "https://mcontigo.com/"
  },
  {
    id: "guthuegle",
    name: "Gut Hügle",
    description: "Family-friendly adventure farm and holiday destination near Lake Constance, Germany, offering holiday apartments, restaurant, spa, and event facilities.",
    icon: "/lovable-uploads/pms-kassavo.png",
    categories: ["PMS", "Europe"],
    slug: "guthuegle",
    website: "https://guthuegle.de/"
  },
  {
    id: "bedandbreakfastitaly",
    name: "Bed-and-Breakfast.it",
    description: "Italy's leading B&B booking portal connecting travellers with thousands of bed and breakfasts, guesthouses, and small accommodations across Italy. One of the most visited Italian travel platforms for independent accommodation.",
    icon: "/lovable-uploads/ota-bedandbreakfast-it.webp",
    categories: ["OTA", "Europe"],
    slug: "bedandbreakfastitaly",
    website: "https://www.bed-and-breakfast.it/"
  },
  {
    id: "world2meet",
    name: "World2Meet (W2M)",
    description: "One of Europe's leading travel companies and tour operators, part of the Iberostar Group. W2M connects hotels and accommodation providers with a vast network of European travellers through its B2B and B2C distribution channels, specialising in sun and beach, city breaks, and holiday packages.",
    icon: "/lovable-uploads/ota-world2meet.jpeg",
    categories: ["OTA", "Europe", "B2B"],
    slug: "world2meet",
    website: "https://www.w2m.travel/"
  },
  {
    id: "uibsplatform",
    name: "UIBS | hospitality",
    description: "Microsoft Azure-certified CRS, Booking Engine, CRM, CMS, and core PMS delivering seamless, fully-branded website guest experiences and a unified single-source-of-truth platform for hoteliers and vacation rentals. Connects to Channex to keep availability, rates, inventory, and reservations accurate across all channels.",
    // Their supplied 2026 mark: a square navy badge, unlike the wide wordmark it
    // replaces. New filename rather than overwriting pms-uibs.svg, because that
    // path is stable and already cached at the edge.
    icon: "/lovable-uploads/pms-uibs-hospitality.svg",
    categories: ["PMS", "IBE", "Europe", "Global"],
    slug: "uibsplatform",
    website: "https://hospitality.uibs.net"
  },
  {
    id: "gatein",
    name: "GateIn",
    description: "UAE-based property management and hospitality technology platform providing hotels and accommodation providers with tools for reservations, guest management, and operations. Serving the Middle East hospitality market.",
    icon: "/lovable-uploads/pms-gatein.webp",
    categories: ["PMS", "Middle East"],
    slug: "gatein",
    website: "https://gatein.ae/en"
  },
  {
    aliases: ["Transitor (Comers)"],
    id: "transitor",
    name: "Transitor / Comers",
    description: "Swedish hospitality management system by Comers, offering property management, booking, and guest communication tools for accommodation providers across Scandinavia and Europe.",
    icon: "/lovable-uploads/pms-transitor.webp",
    categories: ["PMS", "Europe"],
    slug: "transitor",
    website: "https://transitor.se/"
  },
  {
    id: "roamhome",
    name: "Roamhome",
    description: "India-based property management platform designed for vacation rentals, homestays, and boutique accommodations. Provides booking management, channel connectivity, and guest experience tools for the Indian hospitality market.",
    icon: "/lovable-uploads/pms-roamhome.webp",
    categories: ["PMS", "Asia"],
    slug: "roamhome",
    website: "https://www.roamhome.in/"
  },
  {
    id: "hostomat",
    name: "Hostomat",
    description: "Cloud-based hospitality management software for hotels, guesthouses, and serviced apartments. Provides front desk operations, reservation management, and reporting tools to streamline property operations.",
    icon: "/lovable-uploads/pms-hostomat.svg",
    categories: ["PMS", "Asia"],
    slug: "hostomat",
    website: "https://www.hostomat.io/"
  },
  {
    id: "mantavillas",
    name: "Mantavillas",
    description: "Bali-based villa and luxury accommodation management platform serving the Indonesian hospitality market. Provides property management, booking, and guest services for villas and boutique properties.",
    icon: "/lovable-uploads/pms-mantavillas.webp",
    categories: ["PMS", "Asia"],
    slug: "mantavillas",
    website: "https://mantavillas.com/"
  },
  {
    id: "hostopus",
    name: "HOSTOPUS",
    description: "Turkey-based property management system for hotels, hostels, and vacation rentals. Offers reservation management, front desk operations, and reporting tools designed for the Turkish and regional hospitality market.",
    icon: "/lovable-uploads/pms-hostopus.ico",
    categories: ["PMS", "Europe", "Middle East"],
    slug: "hostopus",
    website: "https://www.hostopus.co/"
  },
  {
    id: "eurocompetence",
    name: "EURO COMPETENCE (Sforhet)",
    description: "Morocco-based hospitality technology provider offering hotel management software and digital solutions for accommodation providers across North Africa and the Middle East.",
    icon: "/lovable-uploads/pms-eurocompetence.webp",
    categories: ["PMS", "Africa", "Middle East"],
    slug: "eurocompetence",
    website: "https://sforhet.ma/"
  },
  {
    id: "hotelnative",
    name: "Hotel Native",
    description: "AI-powered hotel management platform from Costa Rica offering smart property management, guest communication, and revenue optimisation tools for independent hotels and boutique properties in Latin America and beyond.",
    icon: "/lovable-uploads/pms-hotelnative.webp",
    categories: ["PMS", "Americas"],
    slug: "hotelnative",
    website: "https://hellonative.ai"
  },
  {
    id: "emonsite",
    name: "E-monsite",
    description: "French website builder and digital platform that includes accommodation booking and reservation management tools for small hotels, guesthouses, and B&Bs. Widely used by independent accommodation providers in France.",
    icon: "/lovable-uploads/pms-emonsite.webp",
    categories: ["PMS", "IBE", "Europe"],
    slug: "emonsite",
    website: "https://www.e-monsite.com"
  },
  {
    id: "hotelpalais",
    name: "Hotel Palais d'Orient",
    description: "Moroccan boutique hotel and riad management platform providing reservation management and guest services for traditional Moroccan accommodations and heritage properties.",
    icon: "/lovable-uploads/pms-hotelpalais.webp",
    categories: ["PMS", "Africa"],
    slug: "hotelpalais",
    website: "https://hotelpalaisdorient.com/"
  },
  {
    id: "4roomsworldwide",
    name: "4Rooms Worldwide",
    description: "Spain-based global property management and distribution technology for hotels and accommodation providers. Offers multi-property management, booking engine, and channel distribution tools with a focus on international markets.",
    icon: "/lovable-uploads/pms-4roomsworldwide.webp",
    categories: ["PMS", "IBE", "Europe", "Global"],
    slug: "4roomsworldwide",
    website: "https://4rooms.tech/"
  },
  {
    id: "alsolutions",
    name: "AL Solutions",
    description: "Italian technology company providing custom software solutions for the hospitality sector, including property management systems, booking engines, and digital tools for hotels and accommodation providers across Italy.",
    icon: "/lovable-uploads/pms-alsolutionsdiarzilliluca.webp",
    categories: ["PMS", "Europe"],
    slug: "alsolutions",
    website: "https://www.alsolutions.it"
  },
  {
    id: "apar1ments",
    name: "Apar1Ments Living",
    description: "Austria-based serviced apartment and short-term rental management platform. Provides property management, booking, and guest experience tools for urban apartment operators and corporate housing providers.",
    icon: "/lovable-uploads/pms-apar1mentsliving.webp",
    categories: ["PMS", "Europe"],
    slug: "apar1ments",
    website: "https://apar1ments.com"
  },
  {
    aliases: ["Apartx"],
    id: "apartx",
    name: "ApartX",
    description: "Kazakhstan-based property management platform for apartment rentals and short-term accommodations. Provides booking management, guest communication, and operational tools for Central Asian property managers.",
    icon: "/lovable-uploads/pms-apartx.webp",
    categories: ["PMS", "Asia"],
    slug: "apartx",
    website: "https://apartx.co/"
  },
  {
    aliases: ["Sisreservas"],
    id: "sisreservas",
    name: "SistemInternet (Sisreservas)",
    description: "Brazilian hotel management and reservation system providing PMS, booking engine, and channel management tools for hotels and pousadas across Brazil. One of Brazil's established hospitality technology solutions.",
    icon: "/lovable-uploads/pms-sisreservas.webp",
    categories: ["PMS", "IBE", "Latin America"],
    slug: "sisreservas",
    website: "https://www.sisreservas.com.br/"
  },
  {
    id: "bluesquareai",
    name: "BlueSquareAI",
    description: "Albania-based AI-powered property management platform for hotels and vacation rentals. Leverages artificial intelligence for smart pricing, booking optimisation, and guest management automation.",
    icon: "/lovable-uploads/pms-bluesquareai.webp",
    categories: ["PMS", "Europe"],
    slug: "bluesquareai",
    website: "https://bluesquareai.com/"
  },
  {
    id: "bookingfwi",
    name: "Booking FWI",
    description: "Caribbean-based online booking and property management platform serving hotels and accommodations in the French West Indies (FWI). Provides reservation management and distribution tools for Caribbean hospitality providers.",
    icon: "/lovable-uploads/pms-bookingfwi.webp",
    categories: ["PMS", "IBE", "Americas"],
    slug: "bookingfwi",
    website: "https://demo.bookingfwi.com/"
  },
  {
    id: "hotelgest",
    name: "HotelGest",
    description: "Spain-based hotel management software providing PMS, front desk, and reservation tools for independent hotels and small chains across Spain and Latin America. Designed for ease of use and operational efficiency.",
    icon: "/lovable-uploads/pms-hotelgest.webp",
    categories: ["PMS", "Europe", "Americas"],
    slug: "hotelgest",
    website: "https://hotelgest.com/"
  },
  {
    id: "cozzyid",
    name: "Cozzy.id",
    description: "Indonesia-based property management platform for hotels, villas, and guesthouses. Provides reservation management, booking engine, and operational tools tailored for the Indonesian hospitality and tourism market.",
    icon: "/lovable-uploads/pms-cozzyid.jpg",
    categories: ["PMS", "Asia"],
    slug: "cozzyid",
    website: "https://cozzy.id/"
  },
  {
    id: "cruwzo",
    name: "Cruwzo",
    description: "Germany-based property management and hospitality software solution for hotels and accommodation providers. Offers streamlined front desk operations, reservation management, and reporting for European properties.",
    icon: "/lovable-uploads/pms-emonsite.webp",
    categories: ["PMS", "Europe"],
    slug: "cruwzo",
    website: "https://www.cruwzo.com/"
  },
  {
    id: "deverso",
    name: "Deverso Srl",
    description: "Italian hospitality technology company developing property management and booking solutions for hotels, resorts, and accommodation providers across Italy. Offers integrated PMS and distribution tools.",
    icon: "/lovable-uploads/pms-emonsite.webp",
    categories: ["PMS", "Europe"],
    slug: "deverso",
    website: "https://deverso.it/"
  },
  {
    aliases: ["Elev8"],
    id: "elev8suite",
    name: "ELEV8",
    description: "Switzerland-based hotel management suite providing comprehensive PMS, booking engine, and revenue management tools for independent hotels and boutique properties across Europe.",
    icon: "/lovable-uploads/pms-elev8.ico",
    categories: ["PMS", "Europe"],
    slug: "elev8suite",
    website: "https://elev8-suite.com/"
  },
  {
    id: "thefinner",
    name: "The Finner",
    description: "India-based hospitality management platform providing property management, booking, and guest experience tools for hotels, resorts, and vacation rentals across India and South Asia.",
    icon: "/lovable-uploads/pms-roamhome.webp",
    categories: ["PMS", "Asia"],
    slug: "thefinner",
    website: "https://thefinner.com"
  },
  {
    id: "hostiq",
    name: "Hostiq",
    description: "Ukraine-based property management system for hotels, hostels, and apartment rentals. Provides front desk management, online booking, and channel connectivity tools for Eastern European accommodation providers.",
    icon: "/lovable-uploads/pms-hostiq.svg",
    categories: ["PMS", "Europe"],
    slug: "hostiq",
    website: "https://hostiq.ua/eng/"
  },
  {
    aliases: ["Hotelitech"],
    id: "hotelitech",
    name: "HoteliTech",
    description: "Brazilian hospitality technology company offering PMS, booking engine, and channel management solutions for hotels and pousadas across Brazil. Focused on simplifying hotel operations for independent properties.",
    icon: "/lovable-uploads/pms-hotelitech.png",
    categories: ["PMS", "Latin America"],
    slug: "hotelitech",
    website: "https://hotelitech.com.br/pms/"
  },
  {
    id: "innetltda",
    name: "INNET LTDA",
    description: "Brazilian technology company providing hotel management software and digital solutions for hospitality providers. Offers PMS, booking tools, and operational systems for hotels and accommodation businesses in Brazil.",
    icon: "/lovable-uploads/pms-innetltda.webp",
    categories: ["PMS", "Americas"],
    slug: "innetltda",
    website: "https://innet.com.br/"
  },
  {
    id: "instantbb",
    name: "INSTANT B&B",
    description: "Italian B&B and short-term rental management platform by e-instant.it. Provides property management, online booking, and guest communication tools for bed and breakfasts and vacation rentals across Italy.",
    icon: "/lovable-uploads/pms-instantbb.webp",
    categories: ["PMS", "Europe"],
    slug: "instantbb",
    website: "https://e-instant.it"
  },
  {
    id: "jetquid",
    name: "Jet Quid",
    description: "India-based hospitality management platform offering property management, booking engine, and revenue tools for hotels and resorts. Designed to help Indian hoteliers streamline operations and increase direct bookings.",
    icon: "/lovable-uploads/pms-jetquid.webp",
    categories: ["PMS", "Asia"],
    slug: "jetquid",
  },
  {
    id: "easyconcierge",
    name: "Easy Concierge",
    description: "French property management and concierge software for vacation rentals, apartments, and boutique hotels. Provides booking management, guest communication, and operational tools for French accommodation providers.",
    icon: "/lovable-uploads/pms-easyconcierge.webp",
    categories: ["PMS", "Europe"],
    slug: "easyconcierge",
    website: "https://easy-concierge.fr/"
  },
  {
    id: "mediatarget",
    name: "Media Target",
    description: "French digital agency and hospitality technology provider offering website development, booking solutions, and digital marketing tools for hotels and accommodation businesses in France.",
    icon: "/lovable-uploads/pms-emonsite.webp",
    categories: ["PMS", "IBE", "Europe"],
    slug: "mediatarget",
    website: "https://mediatarget.fr"
  },
  {
    id: "msool",
    name: "Msool",
    description: "Saudi Arabia-based property management platform for hotels and short-term rentals. Provides reservation management, booking engine, and operational tools tailored for the Saudi Arabian and Gulf hospitality market.",
    icon: "/lovable-uploads/pms-gatein.webp",
    categories: ["PMS", "Middle East"],
    slug: "msool",
    website: "https://msool.io/"
  },
  {
    id: "mykratisi",
    name: "MyKratisi",
    description: "Greece-based property management and booking platform for hotels, villas, and vacation rentals. Offers reservation management, channel connectivity, and guest tools designed for the Greek tourism and hospitality market.",
    icon: "/lovable-uploads/pms-mykratisi.webp",
    categories: ["PMS", "Europe"],
    slug: "mykratisi",
    website: "https://mykratisi.gr/"
  },
  {
    id: "novaestate",
    name: "Nova Estate (NovaSuite)",
    description: "Singapore-based property management platform providing PMS, booking engine, and operational tools for hotels and serviced apartments. NovaSuite serves the Asia-Pacific hospitality market with cloud-based management solutions.",
    icon: "/lovable-uploads/pms-novaestate.ico",
    categories: ["PMS", "Asia"],
    slug: "novaestate",
    website: "https://www.novasuite.app/"
  },
  {
    id: "opentravelone",
    name: "OpenTravel One",
    description: "US-based hospitality technology platform leveraging OpenTravel standards for hotel distribution and connectivity. Provides API-based integration tools for property management systems and online travel agencies.",
    icon: "/lovable-uploads/pms-opentravelone.png",
    categories: ["PMS", "Global"],
    slug: "opentravelone",
    website: "https://opentravel.org/"
  },
  {
    id: "hobostays",
    name: "Hobo Stays",
    description: "India-based accommodation management platform for budget hotels, hostels, and guesthouses. Provides reservation management, booking tools, and operational systems for affordable accommodation providers across India.",
    icon: "/lovable-uploads/pms-roamhome.webp",
    categories: ["PMS", "Asia"],
    slug: "hobostays",
    website: "https://hobostays.in/"
  },
  {
    id: "raixertech",
    name: "Raixer Tech",
    description: "Spain-based smart access and property management technology company. Provides digital key, access control, and property management solutions for hotels, vacation rentals, and serviced apartments.",
    icon: "/lovable-uploads/pms-raixertechsl.png",
    categories: ["PMS", "Europe"],
    slug: "raixertech",
    website: "https://www.raixer.com"
  },
  {
    id: "resavenue",
    name: "ResAvenue",
    description: "India-based hotel reservation and distribution platform providing central reservation system (CRS), booking engine, and channel management tools for hotels across India and South Asia. One of India's established hotel technology providers.",
    icon: "/lovable-uploads/pms-roamhome.webp",
    categories: ["PMS", "IBE", "Asia"],
    slug: "resavenue",
    website: "https://www.resavenue.com/"
  },
  {
    id: "revbotid",
    name: "Revbot.id",
    description: "Indonesia-based AI-powered revenue management and property management platform for hotels and villas. Uses intelligent automation to optimise pricing, distribution, and operations for Indonesian accommodation providers.",
    icon: "/lovable-uploads/pms-revbotid.webp",
    categories: ["PMS", "Asia"],
    slug: "revbotid",
    website: "https://revbot.id/"
  },
  {
    id: "hotelier101",
    name: "Hotelier 101",
    description: "Turkey-based hotel management platform providing PMS, booking engine, and operational tools for independent hotels and small chains. Designed for the Turkish hospitality market with multi-language support.",
    icon: "/lovable-uploads/pms-hotelier101.png",
    categories: ["PMS", "Middle East"],
    slug: "hotelier101",
    website: "https://hotelier101.com/"
  },
  {
    id: "scovietnam",
    name: "SCO Vietnam",
    description: "Vietnam-based hospitality technology company providing property management and booking solutions for hotels and resorts across Vietnam and Southeast Asia. Offers localised tools for the Vietnamese tourism market.",
    icon: "/lovable-uploads/pms-scovietnam.webp",
    categories: ["PMS", "Asia"],
    slug: "scovietnam",
    website: "https://scovietnam.com"
  },
  {
    aliases: ["Sirrom Solutions"],
    id: "sirromsolutions",
    name: "Sirrom / hejGuide",
    description: "Netherlands-based hospitality technology company providing property management and booking solutions for hotels and accommodation providers across the Benelux region and Europe.",
    icon: "/lovable-uploads/pms-catalog-sirrom-hejguide.webp",
    categories: ["PMS", "Europe"],
    slug: "sirromsolutions",
    website: "https://sirrom.io/"
  },
  {
    id: "stayfleximmo",
    name: "STAYFLEX IMMO",
    description: "France-based property management platform for short-term rentals and vacation properties. Provides booking management, guest communication, and operational tools for French property managers and vacation rental owners.",
    icon: "/lovable-uploads/pms-stayfleximmo.webp",
    categories: ["PMS", "Europe"],
    slug: "stayfleximmo",
    website: "https://www.stayflex-immo.com/"
  },
  {
    id: "strabiliare",
    name: "Strabiliare",
    description: "Italian property management company and software provider for vacation rentals and boutique accommodations. Offers reservation management, booking tools, and guest experience solutions for Italian properties.",
    icon: "/lovable-uploads/pms-strabiliaresrlsunipersonale.webp",
    categories: ["PMS", "Europe"],
    slug: "strabiliare",
    website: "https://strabiliare.it/"
  },
  {
    id: "suitespotproperties",
    name: "SuiteSpot Properties",
    description: "Canada-based property management platform for hotels and serviced apartments. SuiteSpot provides operations management, maintenance tracking, and guest experience tools for hospitality providers in North America.",
    icon: "/lovable-uploads/pms-suitespot.webp",
    categories: ["PMS", "Americas"],
    slug: "suitespotproperties",
    website: "https://www.suitespot.ai/"
  },
  {
    id: "threenorthclean",
    name: "Three North Clean",
    description: "Canada-based property management and cleaning operations platform for vacation rentals and short-term accommodations. Provides operational management, housekeeping scheduling, and property maintenance tools.",
    icon: "/lovable-uploads/pms-threenorthcleaninc.webp",
    categories: ["PMS", "Americas"],
    slug: "threenorthclean",
    website: "https://threenorthclean.com/"
  },
  {
    id: "uabiluma",
    name: "UAB Iluma (J14A)",
    description: "Lithuania-based hospitality technology company providing property management and booking solutions for hotels and accommodation providers across the Baltic states and Northern Europe.",
    icon: "/lovable-uploads/pms-uabiluma.webp",
    categories: ["PMS", "Europe"],
    slug: "uabiluma",
    website: "https://www.j14a.co/"
  },
  {
    aliases: ["Ydea"],
    id: "ydea",
    name: "Ydea-Tech / Y-Concierge",
    description: "Peru-based hospitality management platform built on Odoo, providing property management, booking, and operational tools for hotels and accommodation providers across Peru and Latin America.",
    icon: "/lovable-uploads/pms-ydea.webp",
    categories: ["PMS", "Americas"],
    slug: "ydea",
    website: "https://ydea-tech.com/"
  },
  {
    id: "maiahost",
    name: "Maia Host",
    description: "France-based property management platform for vacation rentals and short-term accommodations. Provides automated booking management, guest communication, and operational tools for French property managers.",
    icon: "/lovable-uploads/pms-maiahost.svg",
    categories: ["PMS", "Europe"],
    slug: "maiahost",
  },
  {
    id: "orclaus",
    name: "Orclaus",
    description: "Spain-based hospitality technology company providing property management and booking solutions for hotels and vacation rentals. Offers integrated PMS and distribution tools for Spanish and European accommodation providers.",
    icon: "/lovable-uploads/pms-raixertechsl.png",
    categories: ["PMS", "Europe"],
    slug: "orclaus",
    website: "https://orclaus.com"
  },
  {
    id: "bedrockresidencies",
    name: "Bedrock Residencies",
    description: "Nigeria-based premium apart-hotel operator providing fully serviced short-let apartments in Lagos. Bedrock Residencies offers a seamless guest experience with modern amenities, integrated booking management, and a mobile app for direct reservations.",
    icon: "/lovable-uploads/pms-bedrockresidencies.webp",
    categories: ["PMS", "Africa"],
    slug: "bedrockresidencies",
    website: "https://bedrockresidencies.com"
  },
  {
    id: "ribat",
    name: "Ribat",
    description: "Egypt-based property management system providing hotel management and booking solutions for accommodation providers across Egypt and the Middle East. Ribat offers reservation management, front desk operations, and distribution tools for hospitality businesses.",
    icon: "",
    categories: ["PMS", "Middle East & Africa"],
    slug: "ribat",
    website: "https://ribat.io"
  },
  {
    id: "hautrip",
    name: "Hautrip",
    description: "South Korea-based accommodation platform and property management system providing booking and reservation management for hotels, guesthouses, and short-term rentals across South Korea and the Asia-Pacific region.",
    icon: "/lovable-uploads/pms-hautrip.png",
    categories: ["PMS", "Asia Pacific"],
    slug: "hautrip",
    website: "https://hautrip.com"
  },
  {
    id: "vayada",
    name: "Vayada",
    description: "Germany-based hospitality platform connecting hotels with content creators and influencers. Vayada provides property management and marketing tools that help hotels leverage creator partnerships for authentic promotion and direct bookings.",
    icon: "/lovable-uploads/pms-vayada.webp",
    categories: ["PMS", "Europe"],
    slug: "vayada",
    website: "https://vayada.com/pms"
  },
  {
    id: "nissiaholidays",
    name: "Nissiaholidays",
    description: "Greece-based villa and holiday rental management platform specializing in luxury accommodations across the Greek islands. Nissiaholidays provides booking management, guest services, and property operations for premium vacation rentals in Greece.",
    icon: "/lovable-uploads/pms-nissiaholidays.png",
    categories: ["PMS", "Europe"],
    slug: "nissiaholidays",
    website: "https://www.nissiaholidays.com"
  },
  {
    id: "hubnb",
    name: "Hubnb",
    description: "Brazil-based property management platform for short-term rentals and vacation accommodations. Hubnb provides booking management, channel distribution, and operational tools for property managers and hosts across Brazil and Latin America.",
    icon: "/lovable-uploads/pms-hubnb.webp",
    categories: ["PMS", "Americas"],
    slug: "hubnb",
    website: "https://hubnb.com.br"
  },
  {
    id: "booksuite",
    name: "Booksuite",
    description: "Brazil-based hotel e-commerce platform providing website creation, property management, and booking engine solutions. Booksuite helps hotels and accommodations in Brazil grow their direct bookings and manage their online presence.",
    icon: "/lovable-uploads/pms-booksuite.webp",
    categories: ["PMS", "Americas"],
    slug: "booksuite",
    website: "https://www.booksuite.io"
  },
  {
    id: "plubox",
    name: "PluBox",
    description: "Ukraine-based property management system specializing in daily and short-term rental management. PluBox provides booking management, channel distribution, and operational tools for vacation rental hosts and property managers.",
    icon: "/lovable-uploads/pms-plubox.svg",
    categories: ["PMS", "Europe"],
    slug: "plubox",
    website: "https://plubox.com"
  },
  {
    id: "ecommerceloka",
    name: "Ecommerceloka",
    description: "Indonesia-based hotel online sales optimization platform providing channel management and distribution solutions. Ecommerceloka helps hotels across Indonesia maximize their online revenue through major booking channels including Booking.com, Traveloka, and Tiket.com.",
    icon: "/lovable-uploads/pms-ecommerceloka.png",
    categories: ["PMS", "Asia Pacific"],
    slug: "ecommerceloka",
    website: "https://ecommerceloka.com/solusi-kami#pms"
  },
  {
    id: "ctoutvert",
    name: "Ctoutvert / Secureholiday",
    description: "France-based online booking and distribution platform specializing in outdoor accommodation, camping, and holiday parks. Ctoutvert operates the Secureholiday Platform, providing campsite and holiday park operators with online reservation management, channel distribution, and CRM tools across Europe.",
    icon: "/lovable-uploads/ota-ctoutvert.webp",
    categories: ["OTA", "Europe", "Outdoor"],
    slug: "ctoutvert",
    website: "https://www.ctoutvert.com/fr"
  },
  {
    id: "resonline",
    name: "Resonline",
    description: "Australia-based channel manager and online distribution platform providing hotels, motels, and accommodation providers with a total solution to expand their online reach globally. Resonline enables properties to manage rooms and rates across multiple booking channels with ease.",
    icon: "/lovable-uploads/ota-resonline.webp",
    categories: ["OTA", "Asia Pacific"],
    slug: "resonline",
    website: "https://www.resonline.com"
  },
  {
    id: "oomsi",
    name: "Oomsi",
    description: "Smart vacation rental management platform providing tools to reduce stress and fill calendars. Oomsi helps short-term rental operators streamline operations with automated messaging, pricing, and channel distribution.",
    icon: "/lovable-uploads/pms-oomsi.svg",
    categories: ["PMS", "Vacation Rental", "North America"],
    slug: "oomsi",
    website: "https://oomsi.com/"
  },
  {
    id: "navthan",
    name: "Navthan",
    description: "Australian property management system provider offering hospitality technology solutions for accommodation operators.",
    icon: "",
    categories: ["PMS", "Asia Pacific"],
    slug: "navthan",
    website: ""
  },
  {
    id: "luppa",
    name: "Luppa",
    description: "Argentine all-in-one management platform for hospitality businesses including hotels and accommodation providers. Luppa offers inventory management, sales tracking, and statistics for property operators.",
    icon: "/lovable-uploads/pms-luppa.webp",
    categories: ["PMS", "Latin America"],
    slug: "luppa",
    website: "https://luppa.net.ar"
  },
  {
    id: "azurecorporate",
    name: "Azure Corporate LLC",
    description: "Vacation rental management company specializing in property management solutions for short-term rental operators. Azure Corporate provides personalized services to maximize investment returns for property owners.",
    icon: "/lovable-uploads/pms-azurecorporate.webp",
    categories: ["PMS", "Vacation Rental", "North America"],
    slug: "azurecorporate",
    website: "https://azurerd.com"
  },
  {
    aliases: ["Desata"],
    id: "desata",
    name: "Desata / HostAI",
    description: "Spanish SaaS technology company creating specialized applications and tailored solutions to automate hospitality and business niche processes, combining technology, AI, and business strategy.",
    icon: "/lovable-uploads/pms-catalog-desata-hostai.webp",
    categories: ["PMS", "Europe"],
    slug: "desata",
    website: "https://desata.es/"
  },
  {
    id: "varaamokki",
    name: "Varaamokki",
    description: "Finnish holiday accommodation booking and management platform built on Apaleo, specializing in cabin and cottage rentals across Lapland and other Finnish destinations.",
    icon: "/lovable-uploads/pms-varaamokki.webp",
    categories: ["PMS", "Europe"],
    slug: "varaamokki",
    website: "https://www.varaamokki.com"
  },
  {
    aliases: ["Stellar Tourism Innovations"],
    id: "stellartourism",
    name: "Xentra",
    description: "Hospitality property management software from Xentra, the current brand used by Stellar Tourism Innovations.",
    icon: "/lovable-uploads/pms-catalog-xentra.webp",
    categories: ["PMS", "Europe"],
    slug: "stellartourism",
    website: "https://www.myxentra.com/en/features/integrations/pms"
  },
  {
    id: "norrkallan",
    name: "Norrkällan",
    description: "Swedish hospitality and retreat provider located in Vännäs, Norrland, offering hotel rooms, conference packages, and wellness retreats inspired by the nature of northern Sweden.",
    icon: "/lovable-uploads/pms-norrkallan.webp",
    categories: ["PMS", "Europe"],
    slug: "norrkallan",
    website: "https://norrkallan.se"
  },
  {
    id: "terrahospedagem",
    name: "Terra Hospedagem",
    description: "Brazilian hospitality management system provider offering property management solutions for hotels and accommodation operators in Brazil.",
    icon: "",
    categories: ["PMS", "Latin America"],
    slug: "terrahospedagem",
    website: ""
  },
  {
    id: "macpms",
    name: "MAC PMS",
    description: "Intelligent hotel management platform from Vietnam providing smart property management solutions for modern hospitality operators.",
    icon: "/lovable-uploads/pms-macpms.webp",
    categories: ["PMS", "Asia Pacific"],
    slug: "macpms",
    website: "https://www.macpms.com"
  },
  {
    id: "home2share",
    name: "Home2share",
    description: "Fast-growing German company in the serviced apartment industry, specializing in fully managed short- and long-term rental solutions for property owners and operators.",
    icon: "/lovable-uploads/pms-home2share.svg",
    categories: ["PMS", "Europe"],
    slug: "home2share",
    website: "https://home2share.de"
  },
  {
    id: "rentdari",
    name: "Rentdari",
    description: "Property management platform helping rental operators manage their properties across channels including Airbnb, with tools for contracts, concierge services, and revenue tracking.",
    icon: "/lovable-uploads/pms-rentdari.webp",
    categories: ["PMS", "Europe"],
    slug: "rentdari",
    website: "https://rentdari.com/fr"
  },
  {
    id: "zerotoone",
    name: "ZeroToOne",
    description: "Korean property management system provider offering hospitality technology solutions for accommodation operators.",
    icon: "",
    categories: ["PMS", "Asia Pacific"],
    slug: "zerotoone",
    website: "https://ztoone.kr"
  },
  {
    id: "haxa",
    name: "Haxa",
    description: "Icelandic property management system provider offering hospitality technology solutions for accommodation operators in Iceland.",
    icon: "",
    categories: ["PMS", "Europe"],
    slug: "haxa",
    website: "https://haxa.is"
  },
  {
    id: "roamkaro",
    name: "Roamkaro",
    description: "Indian hospitality technology company providing property management and booking solutions for accommodation operators across India.",
    icon: "/lovable-uploads/pms-roamkaro.webp",
    categories: ["PMS", "Asia Pacific"],
    slug: "roamkaro",
    website: "https://www.roamkaro.in"
  },
  {
    id: "roomnix",
    name: "Roomnix",
    description: "Turkish property management system helping hotels, hostels, villas, apartments, and camping/RV parks run smoothly with an intuitive calendar, fast check-in, online bookings, and effortless billing.",
    icon: "/lovable-uploads/pms-roomnix.png",
    categories: ["PMS", "Europe", "Middle East"],
    slug: "roomnix",
    website: "https://roomnix.com/hotel-pms-software"
  },
  {
    id: "yallahost",
    name: "Yallahost",
    description: "SaaS property management platform helping operators manage their rental properties with ease. Yallahost provides an intuitive PMS for short-term rental and hotel management.",
    icon: "/lovable-uploads/pms-yallahost.webp",
    categories: ["PMS", "Middle East", "Africa"],
    slug: "yallahost",
    website: "https://yallahost.io"
  },
  {
    id: "dixome",
    name: "DIXOME",
    description: "Spanish technology company providing digital solutions and services for hospitality and accommodation businesses.",
    icon: "",
    categories: ["PMS", "Europe"],
    slug: "dixome",
    website: ""
  },
  {
    id: "innexo",
    name: "innexo",
    description: "AI-driven hotel operations platform transforming hospitality management with smart pricing, housekeeping optimization, and revenue management tools for modern hotels.",
    icon: "/lovable-uploads/pms-innexo.webp",
    categories: ["PMS", "North America"],
    slug: "innexo",
    website: "https://innexo.com/"
  },
  {
    id: "simplyresa",
    name: "Simply-resa",
    description: "French all-in-one reservation management solution providing a native Channel Manager for hotels, spas, thalassotherapy centres, and wellness properties across France, Belgium, and Switzerland.",
    icon: "/lovable-uploads/pms-simplyresa.webp",
    categories: ["PMS", "Europe"],
    slug: "simplyresa",
    website: "https://simply-resa.fr/"
  },
  {
    id: "zyzsolution",
    name: "zyz solution",
    description: "Italian technology company designing and developing customized CRM and management systems for hospitality businesses, offering intelligent automation and IT infrastructure solutions.",
    icon: "",
    categories: ["PMS", "Europe"],
    slug: "zyzsolution",
    website: "https://zyzsolution.it"
  },
  {
    id: "naverpms",
    name: "Naver PMS",
    description: "Korean property management system provider offering hotel and accommodation management solutions for hospitality operators.",
    icon: "",
    categories: ["PMS", "Asia Pacific"],
    slug: "naverpms",
    website: ""
  },
  {
    id: "checkeasy",
    name: "Check Easy",
    description: "French AI-powered property inspection platform automating inventory reports with timestamped photo reports, damage detection, and dispute reduction for Airbnb concierges and property managers.",
    icon: "/lovable-uploads/pms-checkeasy.webp",
    categories: ["PMS", "Europe"],
    slug: "checkeasy",
    website: "https://www.checkeasy.co"
  },
  {
    id: "genthd",
    name: "genthd",
    description: "Japanese property management system provider offering hospitality technology solutions for accommodation operators in Japan.",
    icon: "",
    categories: ["PMS", "Asia Pacific"],
    slug: "genthd",
  },
  {
    id: "mystay",
    name: "mystay",
    description: "Portuguese hospitality platform offering direct booking solutions for villas, apartments, and hotels across Portugal, with best price guarantees and exclusive discounts for direct guests.",
    icon: "/lovable-uploads/pms-mystay.webp",
    categories: ["PMS", "Europe"],
    slug: "mystay",
    website: "https://mystay.pt"
  },
  {
    id: "appsclicks",
    name: "Appsclicks",
    description: "Israeli technology company connecting hospitality clients to the right users at the right time using AI, machine learning, data analytics, and human expertise.",
    icon: "/lovable-uploads/pms-appsclicks.webp",
    categories: ["PMS", "Middle East"],
    slug: "appsclicks",
    website: "https://appsclicks.com"
  },
  {
    id: "comfortly",
    name: "Comfortly",
    description: "US-based hotel operations platform helping small hotels manage housekeeping, maintenance, and team communication. Fully integrated with rezStream to automate operations and improve efficiency.",
    icon: "/lovable-uploads/pms-comfortly.png",
    categories: ["PMS", "North America"],
    slug: "comfortly",
    website: "https://comfort.ly/"
  },
  {
    id: "hisamichiono",
    name: "Hisamichi Ono",
    description: "Japanese property management system provider offering hospitality technology solutions for accommodation operators in Japan.",
    icon: "",
    categories: ["PMS", "Asia Pacific"],
    slug: "hisamichiono",
    website: ""
  },
  {
    id: "uttkarsh",
    name: "UTTKARSH",
    description: "Canadian property management system provider offering hospitality technology solutions for accommodation operators.",
    icon: "",
    categories: ["PMS", "North America"],
    slug: "uttkarsh",
    website: ""
  },
  {
    id: "hostport",
    name: "Host Port",
    description: "Australian hospitality technology platform simplifying bookings, automating operations, and enhancing guest experiences for accommodation providers.",
    icon: "/lovable-uploads/pms-hostport.svg",
    categories: ["PMS", "Asia Pacific"],
    slug: "hostport",
    website: "https://www.hostpms.com"
  },
  {
    id: "epia",
    name: "EPIA",
    description: "Vietnamese property management system provider offering hospitality technology solutions for accommodation operators.",
    icon: "",
    categories: ["PMS", "Asia Pacific"],
    slug: "epia",
    website: ""
  },
  {
    id: "flexglobal",
    name: "Flex",
    description: "Irish flexible short-term rental platform offering fully furnished, move-in-ready apartments for holidays, business travellers, relocations, and extended stays across London, Paris, Algiers, and more.",
    icon: "/lovable-uploads/pms-flexglobal.webp",
    categories: ["PMS", "Europe"],
    slug: "flexglobal",
    website: "https://theflex.global"
  },
  {
    id: "kolmex",
    name: "Kolmex",
    description: "Serbian property management system provider offering hospitality technology solutions for accommodation operators.",
    icon: "",
    categories: ["PMS", "Europe"],
    slug: "kolmex",
    website: ""
  },
  {
    id: "opesuites",
    name: "OpeSuites",
    description: "Colombian furnished apartment provider offering temporary stays in Bogotá, providing comfortable accommodations in prime locations for business and leisure travellers.",
    icon: "",
    categories: ["PMS", "Latin America"],
    slug: "opesuites",
    website: "https://ope.com.co"
  },
  {
    id: "hostspilot",
    name: "Hosts Pilot",
    description: "Romanian AI-powered platform offering one-click setup for Airbnb and Booking.com hosts to generate direct booking websites, guest guides, and automated guest communication.",
    icon: "/lovable-uploads/pms-hostspilot.png",
    categories: ["PMS", "Europe"],
    slug: "hostspilot",
    website: "https://hostspilot.com/pms-cost-calculator.html"
  },
  {
    id: "stayarc",
    name: "Stayarc",
    description: "UK-based all-in-one property management system and channel manager built for short-term rental hosts and vacation property owners. StayArc uses built-in AI to manage bookings, guest messages, and calendars from a unified dashboard.",
    icon: "/lovable-uploads/pms-stayarc-fav.png",
    categories: ["PMS", "Europe"],
    slug: "stayarc",
    website: "https://www.stayarc.com"
  },
  {
    id: "kan2go",
    name: "Kan2Go",
    description: "Greek cloud-based PMS giving property owners full control through a modern system designed for simple management, better organisation, and higher returns.",
    icon: "/lovable-uploads/pms-kan2go.svg",
    categories: ["PMS", "Europe"],
    slug: "kan2go",
    website: "https://kan2go.gr"
  },
  {
    id: "tenerifebsl",
    name: "Tenerife Belgique SL",
    description: "Spanish property management company guiding buyers through property purchases in Tenerife, offering full-service support from search to completion.",
    icon: "/lovable-uploads/pms-tenerifebsl.webp",
    categories: ["PMS", "Europe"],
    slug: "tenerifebsl",
    website: "https://www.tenerifeonline.com"
  },
  {
    id: "morphicai",
    name: "Morphicai",
    description: "UK-based AI co-host platform for Airbnb guest messaging, combining automated replies, AI drafts, WhatsApp host approval, and human-in-the-loop safeguards for property managers.",
    icon: "/lovable-uploads/pms-morphicai.webp",
    categories: ["PMS", "Europe"],
    slug: "morphicai",
    website: "https://www.morphicai.io"
  },
  {
    id: "adivor",
    name: "Adivor",
    description: "Mexican AI automation agency helping hospitality businesses grow with AI agents, marketing automation, and technology consulting.",
    icon: "/lovable-uploads/pms-adivor.webp",
    categories: ["PMS", "Latin America"],
    slug: "adivor",
    website: "https://adivor.com.mx"
  },
  {
    id: "insistmx",
    name: "insist",
    description: "Mexican software development company specialising in IT solutions for the hotel, restaurant, and hospitality sectors, offering management systems, advisory, and maintenance services.",
    icon: "/lovable-uploads/pms-insistmx.webp",
    categories: ["PMS", "Latin America"],
    slug: "insistmx",
    website: "https://www.insist.com.mx"
  },
  {
    id: "outhands",
    name: "Outhands",
    description: "Dutch full-service internet agency specialising in web design, web development, e-commerce, and online marketing for hospitality and other businesses.",
    icon: "",
    categories: ["PMS", "Europe"],
    slug: "outhands",
    website: ""
  },
  {
    id: "localota",
    name: "LocalOTA",
    description: "LocalOTA is an online travel agency connecting travellers with unique local accommodations, experiences, and destinations, helping property owners reach guests seeking authentic local stays.",
    icon: "/lovable-uploads/ota-localota.webp",
    categories: ["OTA", "North America"],
    slug: "localota",
    website: "https://www.localota.com"
  },
  {
    id: "kliknbook",
    name: "KliknBook",
    description: "KliknBook is a B2B online travel agency offering travel agencies exclusive access to hotel inventory across key Asian markets including Singapore, Kuala Lumpur, and Bangkok. Focused on speed, accuracy, and efficiency in hotel booking.",
    icon: "/images/integrations/ota-kliknbook.webp",
    categories: ["OTA", "B2B", "Asia"],
    slug: "kliknbook",
    website: "https://www.kliknbook.com",
    longDescription: "KliknBook is a B2B online booking platform that provides travel agencies with exclusive access to competitive hotel rates across Asia's most in-demand markets. With a focus on Singapore, Kuala Lumpur, Bangkok, and other high-demand Asian cities, KliknBook delivers a fast, accurate, and efficient booking experience. The platform is backed by state-of-the-art booking technology and dedicated customer care, making it an ideal channel for properties looking to reach the B2B travel agency market across Asia.",
    features: [
      "Exclusive B2B access for travel agencies",
      "Focus on high-demand Asian city markets",
      "Fast and accurate real-time booking",
      "Competitive preferred rates and channel manager support",
      "Dedicated customer care",
      "Online registration and agency management",
      "Multi-language support"
    ],
    useCases: [
      "Hotels targeting B2B travel agency distribution in Asia",
      "Properties in Singapore, Kuala Lumpur, Bangkok, and other Asian cities",
      "Accommodations seeking preferred rate distribution",
      "Hotels looking to expand into the Asian B2B market"
    ]
  },
  {
    id: "webbeds",
    name: "WebBeds",
    description: "WebBeds is a global B2B marketplace for the travel trade, connecting 500,000+ hotels with over 50,000 online and offline travel buyers across 50+ countries. One of the world's largest B2B hotel distribution platforms with $3.2B+ TTV.",
    icon: "/images/integrations/ota-webbeds.svg",
    categories: ["OTA", "B2B", "Global"],
    slug: "webbeds",
    website: "https://www.webbeds.com",
    longDescription: "WebBeds is one of the world's largest B2B hotel distribution marketplaces, operated by Web Travel Group. It connects global and regional hotel chains, independent hotels, apartments, resorts, and ground travel services with a network of over 50,000 travel buyers — including online travel agencies, retail travel agents, corporate travel managers, tour operators, wholesalers, and airlines. With a team of 1,900+ people in 120+ cities across 50+ countries speaking 50+ languages, WebBeds provides hotels with powerful distribution solutions, enhanced analytics, and inventory optimisation tools to maximise revenue and reach.",
    features: [
      "Access to 50,000+ global B2B travel buyers",
      "500,000+ hotel marketplace with global reach",
      "Robust API connectivity for seamless integration",
      "Trade-only online booking sites",
      "Enhanced analytics and inventory optimisation",
      "1,900+ staff across 120+ cities in 50+ countries",
      "Support for hotels, apartments, resorts, and ground services",
      "Multi-language support (50+ languages)"
    ],
    useCases: [
      "Hotels seeking global B2B distribution to travel agencies and tour operators",
      "Properties targeting corporate travel managers and wholesalers",
      "Hotel chains wanting API connectivity to a large B2B buyer network",
      "Accommodations looking to optimise inventory across global B2B channels",
      "Properties in all major global markets seeking trade distribution"
    ]
  },
  {
    id: "nuitee",
    name: "Nuitee",
    description: "Nuitee is an AI-driven B2B hotel distribution and API platform, providing developers and travel businesses with modular APIs for hotel search, rates, booking, and branded site deployment. Poised to disrupt the $75B B2B hotel market.",
    icon: "/images/integrations/ota-nuitee.svg",
    categories: ["OTA", "B2B", "Global"],
    slug: "nuitee",
    website: "https://nuitee.com",
    longDescription: "Nuitee is an AI-powered B2B hotel distribution platform designed for developers, travel businesses, and hoteliers. It offers modular APIs and agentic workflows that power hotel search, pricing, booking, and distribution at scale. With OpenAPI specs, SDKs, and a sandbox environment, Nuitee enables startups and enterprises to build and deploy travel products rapidly. For hoteliers, Nuitee provides tools to manage distribution, bookings, payments, and content optimisation through a proprietary AI mapping engine that standardises hotel identity, rooms, and media across providers. Backed by leading venture capital and described as poised to disrupt the $75B B2B hotel market.",
    features: [
      "AI-driven APIs for hotel search, rates, and booking",
      "Agentic workflows for automated travel distribution",
      "OpenAPI specs, SDKs, and developer sandbox",
      "Proprietary AI mapping and content enhancement engine",
      "Modular architecture for startups and enterprises",
      "Branded site deployment in a single sprint",
      "Distribution, booking, and payment management for hoteliers",
      "Clean hotel data standardisation across all channels"
    ],
    useCases: [
      "Travel tech companies building hotel booking products via API",
      "Hotels seeking AI-powered distribution and content optimisation",
      "Enterprises needing scalable B2B hotel connectivity",
      "Developers wanting fast hotel API integration with sandbox testing",
      "Businesses looking to standardise hotel data across multiple channels"
    ]
  },
  {
    id: "yatra",
    name: "Yatra",
    description: "Yatra is one of India's leading online travel companies, offering real-time bookings for 103,000+ hotels in India and 1.5M+ hotels worldwide. A top corporate travel services provider with 700+ corporate customers and multiple national tourism awards.",
    icon: "/images/integrations/ota-yatra.svg",
    categories: ["OTA", "Asia", "Global"],
    slug: "yatra",
    website: "https://www.yatra.com",
    longDescription: "Yatra (Yatra Online Limited) is one of India's leading online travel companies and the country's top corporate travel services provider. Founded in August 2006 and headquartered in Gurugram, India, Yatra provides real-time bookings for over 103,000 hotels in India and more than 1,500,000 hotels worldwide. The platform covers domestic and international air travel, hotel bookings, holiday packages, buses, trains, in-city activities, cabs, homestays, and cruises. With 700+ corporate customers and recognition as the Most Trusted E-Commerce Travel Brand in India (Economic Times Brand Equity Survey), Yatra is an essential distribution channel for hotels targeting the Indian market and corporate travel segment.",
    features: [
      "Real-time bookings for 103,000+ hotels in India",
      "1,500,000+ hotel inventory worldwide",
      "India's leading corporate travel services platform",
      "700+ corporate customers",
      "Domestic and international travel coverage",
      "Multi-product platform: flights, hotels, holidays, buses, trains",
      "B2B portal for travel agents",
      "Multiple national tourism award winner"
    ],
    useCases: [
      "Hotels targeting the Indian domestic travel market",
      "Properties seeking corporate travel distribution in India",
      "International hotels wanting access to Indian outbound travelers",
      "Accommodations looking to reach India's growing online travel segment",
      "Hotels targeting B2B travel agents in India"
    ]
  },
  {
    // Added Jul 2026. Facts from minedata.ch: MineData GmbH is a Swiss IT firm
    // (HQ Baar, office Konstanz) whose PMS product is Hostera, serving hotels
    // and accommodation businesses across the D-A-CH region. Hostera has no
    // site of its own, so the company domain is the link — and both names are
    // in the title because the listing search matches on name only.
    id: "minedata",
    slug: "minedata",
    name: "MineData (Hostera)",
    description: "Swiss provider whose Hostera PMS handles reservations, room planning, guest records, invoicing and reporting for hotels and accommodation businesses across the D-A-CH region.",
    icon: "/lovable-uploads/pms-minedata.webp",
    categories: ["PMS", "Europe"],
    website: "https://minedata.ch"
  },
  {
    aliases: ["Arpón Enterprise"],
    // Mexican hotel PMS, trading since 1982. Their own wordmark can't be used
    // here: assets/logo.png is a JPEG (despite the name) on a black background
    // and logo-white.png is white-on-transparent, so both disappear or box out
    // on our light tiles. The favicon is a self-contained blue tile that reads
    // correctly, so that's the mark.
    id: "arpon",
    slug: "arpon",
    name: "Arpón Enterprise",
    description: "Cloud PMS built specifically for the Mexican hotel market, covering front desk and reservations, housekeeping, point of sale, CFDI electronic invoicing and revenue reporting. Used by over 760 hotels.",
    icon: "/lovable-uploads/pms-arpon.webp",
    categories: ["PMS", "Latin America"],
    website: "https://arpon.com/"
  },
  {
    // Their only logo asset is assets/logo.png — actually a 1024px JPEG despite
    // the name, on a blue-grey studio backdrop with a baked-in drop shadow, so
    // used as-is it boxes out on our light tiles. Backdrop flood-filled to
    // transparency and resized to 192px, 2.4x the largest slot it renders in.
    //
    // Tagged Asia on Evan's confirmation. Their site names no company, entity
    // or country anywhere, so the data can't support the tag on its own — the
    // Thailand TM30 immigration export is the only geographic signal in it.
    id: "pmspilot",
    slug: "pmspilot",
    name: "PMSPilot",
    description: "Self-serve property management system for independent hotels and guesthouses, built by a hotelier rather than around a sales process — sign-up to first booking without a demo or sales call. Covers the front-desk essentials: drag-and-drop booking calendar, digital guest registration with document capture and online check-in, Stripe card payments alongside a digital cash book, automatic invoicing with PDF export, housekeeping checklists with photo damage reports, and night audit and occupancy reporting. Existing rooms, guests and bookings import from Excel or CSV. Also handles multi-property, long-term rentals, vouchers, door codes, staff time tracking and a TM30 export for Thailand immigration reporting.",
    icon: "/lovable-uploads/pms-pmspilot.webp",
    categories: ["PMS", "Asia"],
    website: "https://pmspilot.com/en"
  },
  {
    // Their mark, from their own icon.svg — path unmodified, only the fill and
    // a measured tight viewBox. Their favicon is a cream glyph on a dark badge;
    // this is the inverse lockup Evan supplied, on transparency rather than the
    // cream field, which would have shown as an off-white box on our tiles.
    //
    // Tagged North America on Evan's confirmation. Their copy points that way
    // — dollar figures, US OTAs, motels — but never states a market outright,
    // so the site alone wouldn't carry the tag.
    id: "lodgingos",
    slug: "lodgingos",
    name: "LodgingOs",
    description: "Hotel management software for independent hotels and motels, built around the hours when nobody is at the desk. Combines the front desk, a 0%-commission direct booking page and OTA channel sync in one system, so a last room sold at the desk closes across the other channels before the next refresh. Adds phone answering that takes bookings after hours and hands off anything it shouldn't handle, self check-in from a lobby tablet that verifies ID and issues a door code, housekeeping, a night audit that runs itself overnight, and ADR, RevPAR and occupancy reporting.",
    icon: "/lovable-uploads/pms-lodgingos.svg",
    categories: ["PMS", "North America"],
    website: "https://www.lodgingos.com"
  },
  {
    // Their own horizontal dark lockup (onepms-logo-hor-dark.png), unmodified
    // apart from the webp conversion. The variant their header actually renders
    // is onepms-logo-hor-light.png — a white wordmark that would vanish on our
    // light tiles. At 175px wide it is 2.7x the 64px slot it renders in.
    //
    // Asia is carried by the data, not a judgement call: the footer gives
    // ONEPMS JSC in Da Nang, and the site claims 1,000+ properties in Vietnam.
    id: "onepms",
    slug: "onepms",
    name: "OnePMS",
    description: "Cloud hotel management system from Da Nang, used by over 1,000 properties across Vietnam — homestays and small hotels through to resorts. The front desk handles individual and group reservations on hourly, daily or monthly stays, check-in and check-out with front-desk cash handling and per-staff permissions, housekeeping with room status, cleaning schedules and minibar posting from the room, and revenue and expense reporting broken down by period, source and room type. Multi-property, so a chain runs from one account, and it works the same on desktop, tablet and phone. Pre-integrated with the Vietnamese e-invoice gateways — VNPT, Easy Invoice and Fast Invoice — so invoices issue straight from the cash register under government rules. Priced on a hotel's actual room count. Sold alongside OneCMS, the vendor's own channel manager.",
    icon: "/lovable-uploads/pms-onepms.webp",
    categories: ["PMS", "Asia"],
    website: "https://onepms.net"
  },
  {
    // No logo: HostPilot publishes no brand asset anywhere. No <img> on the
    // site, no /logo.*, /icon.*, /apple-icon or opengraph-image route, and the
    // favicon is still the stock Vercel black-circle placeholder. Their header
    // lockup is built from DOM and CSS — a gradient tile, a Lucide house glyph
    // and text — in the dark-header polarity (white "Host", gradient "Pilot"),
    // so lifting it would give us white-on-white the way Nuitee and Waverick
    // did. Monogram stands until Evan supplies the light-background export.
    //
    // No region tag: their legal notice is still an unfilled template — the
    // company name, SIRET/RCS, VAT and registered office are all literal
    // "[A COMPLETER]" placeholders — so no country is disclosed. EUR pricing,
    // an FR/EN toggle and French placeholder text all point to France, but the
    // site never says it, so the tag would be inference. Vacation Rentals is
    // carried by their own copy: they describe the product as short-term
    // rental management SaaS throughout.
    id: "hostpilot",
    slug: "hostpilot",
    name: "HostPilot",
    description: "Short-term rental management software for Airbnb and Booking.com hosts, connecting to both through their APIs to sync reservations, availability and rates, with iCal kept as a complement or fallback for feeds such as Vrbo. Built around a Smart Calendar that merges bookings, blocks and availability, and a dashboard spanning multiple properties. Revenue AI reads availability, bookings, blocks and rates to flag pricing opportunities, and Listing AI drafts titles, descriptions, amenity checks and photo plans — both advisory only, with nothing published until the host approves it. Self-serve throughout: an in-product tutorial sets up the first property with no onboarding call. Priced from EUR 9 a month for a single property to EUR 149 for unlimited, on a 30-day trial.",
    icon: "",
    categories: ["PMS", "Vacation Rentals"],
    website: "https://hostpilotapp.io"
  },
  {
    // Logo is their own mark, lifted verbatim from the inline <svg> in their
    // site header — same path data and same #166534 green, with only the 36px
    // width/height dropped so it scales into the slot. OutReserve publishes no
    // logo file: their favicon.svg wraps the same mark in an opaque white
    // 1000x1000 rect, and the only lockup with the wordmark is the one baked
    // into their Open Graph banner, which is the white-on-dark variant and
    // would have vanished on our tiles. Mark alone is fine here — the channel
    // card prints the name beside the logo anyway.
    //
    // North America is carried by their own copy, not inferred: they describe
    // themselves as a North American platform, browse by US state across all
    // fifty, and offer the RV rental side in Canada.
    id: "outreserve",
    slug: "outreserve",
    name: "OutReserve",
    description: "Outdoor booking platform for the United States, covering campgrounds, RV parks, cabins, yurts and glamping sites alongside peer-to-peer RV rentals. Guests search by national park, city or state across all fifty states and filter by site type and RV class. Hosts either claim an existing listing or build a new one from scratch, then run reservations, distribution, payments and analytics from a host dashboard, with availability syncing in real time. Free to list, with no card required to start, and more than 6,000 properties on the platform by their own count.",
    icon: "/images/integrations/ota-outreserve.svg",
    categories: ["Outdoor", "Vacation Rentals", "OTA", "North America"],
    website: "https://outreserve.com"
  },
  {
    // Name is "Santara AI" with an A, not "Sentara" — the request had it as
    // Sentara, but their own site uses Santara 145 times and Sentara zero.
    //
    // Logo is their published app icon, /brand/santara-app-icon.svg, byte for
    // byte as they serve it. It is a solid #2A44DB badge, so it holds up on a
    // light tile without a variant hunt. They publish no wordmark lockup —
    // /brand/ has only the app icon and its PNG exports.
    //
    // Asia is carried by their own copy, not inferred: they describe the
    // product as built for Southeast Asia and name Bali and Vietnam as the
    // markets, including in their meta description.
    id: "santara-ai",
    slug: "santara-ai",
    name: "Santara AI",
    description: "AI-native short-term rental platform built for Southeast Asia, aimed at operators in Bali and Vietnam running anywhere from one listing to forty. Everything hangs off a 6am Morning Brief that surfaces the day's arrivals, departures, turnovers, gap nights and anything needing attention before a guest or channel raises it. Bundles the PMS with AI guest messaging, per-night dynamic pricing inside a floor and ceiling the operator sets, a direct booking site and upsells, and dispatches cleaning turnovers to cleaners over WhatsApp. Airbnb and Booking.com connect as live channels. Charges a flat monthly fee per listing that falls as the portfolio grows, takes 0% commission on bookings and upsells, and includes migration, listing setup and staff training at no cost; the one optional extra is a 3% guest-paid service fee on the direct booking engine.",
    icon: "/lovable-uploads/pms-santara-ai.svg",
    categories: ["PMS", "Vacation Rentals", "Asia"],
    website: "https://www.santara.ai"
  },
  {
    // Logo is their own /assets/images/header/ascendtravel-logo.svg, byte for
    // byte as they serve it — a coloured wordmark that needs no light/dark
    // variant. 17 KB, in line with the other wordmark SVGs in this directory.
    //
    // Asia is carried by the data, not inferred: Ascend Travel Co., Ltd. lists
    // a Bangkok head office at True Digital Park and publishes Thai tourism
    // authority licence 11/08384.
    //
    // The two-million and fifty-thousand figures come from their own Thai meta
    // description and are attributed as such. Their "Thailand's leading budget
    // accommodation platform" line is left out: budget focus is factual and in
    // the page title, "leading" is a claim nothing supports.
    id: "ascendtravel",
    slug: "ascendtravel",
    name: "Ascend Travel",
    description: "Thai booking platform aimed at the budget end of the market, listing more than two million properties worldwide and over fifty thousand in Thailand by its own count. Sells to leisure travellers and to companies from the same inventory: the corporate side sets spend limits per employee grade, routes bookings through automatic approval, and issues tax invoices to Thai requirements. Search filters run to the practical rather than the aspirational — breakfast included, EV charging. Beyond rooms it books co-working space and runs a full MICE arm covering seminars, team building, incentive and group tours, staff and private events, CSR activities, private jet charter, car rental and ticketing and visa services. Operated by Ascend Travel Co., Ltd. of Bangkok under Thai tourism authority licence 11/08384, trading since 2016.",
    icon: "/images/integrations/ota-ascendtravel.svg",
    categories: ["OTA", "Asia"],
    website: "https://hotel.ascendtravel.com"
  },
  {
    // The five entries below are Szallas Group sister brands, added together
    // with the existing Szallas entry. Three of them (Travelminit, Noclegi,
    // Hotely) serve their header logo from the same /wsngo/ path szallas.hu
    // uses, and RevNGo serves its logo and OG image straight off szalas.hu,
    // which corroborates the grouping independently of anyone telling us.
    //
    // Note on ownership: travelminit.ro's own cookie notice says it is part of
    // the Wirtualna Polska holding, so Szallas Group itself appears to sit
    // under WP rather than being the top of the tree. Described here as
    // Szallas Group brands, which is what the shared platform evidences.
    id: "travelminit",
    slug: "travelminit",
    name: "Travelminit",
    description: "Romanian accommodation channel in the Szallas Group, listing hotels, guesthouses, apartments and wellness packages across Romania. Runs the group's book-here-pay-at-the-property model, so the guest reserves online and settles with the hotel on arrival, and offers members up to 25% off through a VIP account.",
    icon: "/images/integrations/ota-travelminit.webp",
    categories: ["Regional", "Europe", "OTA"],
    website: "https://travelminit.ro"
  },
  {
    id: "noclegi",
    slug: "noclegi",
    name: "Noclegi.pl",
    description: "Polish accommodation channel in the Szallas Group, trading as Noclegi.pl by Nocowanie.pl. Covers hotels, apartments, private rooms and wellness packages, listing roughly 86,900 offers across 175 countries with more than 3.2 million guest reviews by its own count. Guests book online and pay the property on arrival.",
    icon: "/images/integrations/ota-noclegi.svg",
    categories: ["Regional", "Europe", "OTA"],
    website: "https://noclegi.pl"
  },
  {
    id: "nocowanie",
    slug: "nocowanie",
    name: "Nocowanie.pl",
    description: "Polish accommodation channel in the Szallas Group and the parent brand behind Noclegi.pl, listing around 100,000 properties in Poland and abroad. Sells Polish domestic stays alongside the outbound destinations Polish travellers book most — Croatia, Hungary, Czechia, Slovakia and Romania.",
    icon: "/images/integrations/ota-nocowanie.webp",
    categories: ["Regional", "Europe", "OTA"],
    website: "https://www.nocowanie.pl"
  },
  {
    id: "hotely",
    slug: "hotely",
    name: "Hotely.cz",
    description: "Czech accommodation channel in the Szallas Group, covering hotels, pensions, apartments and wellness stay packages. Runs the same book-here-pay-at-the-hotel model as its sister brands, with channel-specific discounts applied at booking.",
    icon: "/images/integrations/ota-hotely.svg",
    categories: ["Regional", "Europe", "OTA"],
    website: "https://www.hotely.cz"
  },
  {
    id: "revngo",
    slug: "revngo",
    name: "RevNGo.com",
    description: "The Szallas Group's cross-border brand, pooling the inventory its national sites sell separately and putting it in front of travellers moving between Central and Eastern European markets. Sells in eight languages — English, Czech, Hungarian, Romanian, Slovak, German, Polish and Croatian — and prices in seven currencies including EUR, HUF, PLN, RON, CZK, GBP and USD. Same book-here-pay-at-the-hotel model, with rates shown inclusive of taxes and fees.",
    icon: "/images/integrations/ota-revngo.svg",
    categories: ["Regional", "Europe", "OTA"],
    website: "https://revngo.com"
  },
  {
    // Logo is the SVG Evan supplied, committed byte for byte. 32 KB because it
    // is raw Inkscape output — the rounded corners are clipPaths rather than
    // rx, so the cruft is load-bearing and cannot be stripped without redrawing
    // the mark. Checked at 40px, where it still reads clearly.
    //
    // Name follows app.keyspms.com, which uses "KeysPMS" throughout and matches
    // what Evan asked for. Their other site, keyspms.com, styles it "KEYSpms"
    // and the app tab title says "Keys PMS"; there is no consistent spelling on
    // their side to defer to.
    //
    // Description is deliberately confined to product scope and list pricing.
    // It carries none of their traction claims — see the commit message for
    // why: both of their sites are unfinished generated templates, and the
    // numbers and testimonials on them do not survive a look.
    //
    // No region tag: the only location given is a San Francisco footer address
    // that sits next to a +1 (888) 555-0123 phone number, which is in the
    // reserved fictional range, so neither is evidence of anything.
    id: "keyspms",
    slug: "keyspms",
    name: "KeysPMS",
    description: "Cloud property management system for hotels, covering booking management for walk-ins, groups and OTA imports on one timeline, a real-time room grid with availability calendar and bulk rate updates, housekeeping boards with inspection checklists and maintenance tickets, and a one-click night audit with discrepancy detection and audit trails. Adds revenue tools — dynamic pricing, rate plans and occupancy forecasting — two-way OTA sync, guest profiles with ID scanning and duplicate merging, and occupancy, revenue and AR reporting. Self-serve: sign up, configure rooms and rate plans through a guided wizard, no consultant. Listed at $3 per room per month from $30, or $5 per room from $75 with the channel manager, revenue tools and API access, on a 14-day trial.",
    icon: "/lovable-uploads/pms-keyspms.svg",
    categories: ["PMS"],
    website: "https://app.keyspms.com"
  },
  {
    // Unusual entry: Syncfaro is not a PMS but a connector INTO Channex, so
    // the directory lists the thing that brings MotoPress sites to us. Tagged
    // PMS because that is the certification track they came through and what
    // Evan asked for; MotoPress itself is not in the directory.
    //
    // Their "certified Channex connector" line is the one claim here we can
    // check internally rather than take from a website — flagged to Evan, who
    // knows the certification list.
    //
    // Logo is their own rectangular lockup, logo_rectangulo.avif, converted
    // from AVIF to webp at 320px. Chosen over their round mark, which drops
    // the wordmark and sits smaller in the slot. Its background is opaque
    // #FEFEFE rather than transparent, which is invisible against our white
    // tiles but would box out if the tile colour ever changed.
    //
    // No region tag: the site names no company, country or entity anywhere,
    // and prices in EUR, which is not on its own evidence of a market.
    id: "syncfaro",
    slug: "syncfaro",
    name: "Syncfaro",
    description: "WordPress plugin that connects MotoPress Hotel Booking sites to Channex, adding the rate and availability sync MotoPress's built-in channel manager does not do. MotoPress ships iCal only, which keeps calendars roughly aligned but carries no prices; Syncfaro pushes rates per rate plan with seasons and rules intact, syncs availability in real time so a booking on one channel closes the room everywhere, and pulls channel bookings back in with their creations, amendments and cancellations. Handles multiple rate plans per room, refundable against non-refundable, each mapped to its own channel rate plan, and sends minimum-stay rules alongside prices in a single restrictions call. Runs on standard WordPress scheduling, so there is no cron or server work to do. Sold to agencies by number of sites on an annual licence — EUR 179 for one site, EUR 449 for five, EUR 1,299 for fifteen — with the operator bringing their own Channex account.",
    icon: "/lovable-uploads/pms-syncfaro.webp",
    categories: ["PMS"],
    website: "https://syncfaro.com"
  },
  {
    // Logo is their published /apple-touch-icon.png, converted to webp. It is
    // the only real brand asset the site serves — /logo.svg, /icon.svg and
    // /manifest.json all return the SPA shell rather than 404ing, so probing
    // filenames finds nothing but HTML. Matches the mark Evan supplied.
    //
    // Europe comes from Verifactu: they file booking and order invoices with
    // the Spanish tax agency, which is not something you build unless you
    // serve Spain. The footer names no company or country, and EUR pricing
    // alone would not have been enough.
    id: "estada",
    slug: "estada",
    name: "Estada",
    description: "All-in-one platform bundling a PMS, a channel manager and an AI website builder, sold to hosts, agencies and regional portals running vacation rentals, hotels or B&Bs. Pushes rates and availability to Airbnb, Booking.com, Vrbo, Expedia and 50-plus other channels alongside multi-calendar and iCal sync, and takes direct bookings through the operator's own Stripe account at no commission, either instantly or as requests approved before the guest confirms. Around that sits the operational half: rates, seasons and minimum stays, upsells and extras, payment links, invoices and e-signed contracts, invoicing filed with the Spanish tax agency through Verifactu, online check-in and guest registration, a unified inbox that can pull Airbnb and Booking.com messages in, AI content writing and translation, and separate owner, cleaner and guest portals with settlements. From EUR 15 a month for three rentals, on a 14-day trial with no setup fee.",
    icon: "/lovable-uploads/pms-estada.webp",
    categories: ["PMS", "Europe"],
    website: "https://estada.io"
  },
  // PMS catalog reviewed against vendor websites on 2026-09-05.
  // Sources and branding notes: docs/pms-catalog-review.md.
  {
    "id": "1day-pms",
    "name": "1day PMS",
    "description": "Cloud PMS for managing accommodation reservations, guests and daily property operations.",
    "icon": "/lovable-uploads/pms-catalog-1day-pms.webp",
    "categories": [
      "PMS",
      "Australia"
    ],
    "slug": "1day-pms",
    "website": "https://1day.io/"
  },
  {
    "id": "accommador",
    "name": "Accommador",
    "description": "Property management software for accommodation reservations and day-to-day operations.",
    "icon": "/lovable-uploads/pms-catalog-accommador.webp",
    "categories": [
      "PMS",
      "Australia"
    ],
    "slug": "accommador",
    "website": "https://accommador.com/features/property-management/"
  },
  {
    "id": "aetheriaos",
    "name": "Aetheriaos",
    "description": "Hospitality operating system combining property management and accommodation workflows.",
    "icon": "/lovable-uploads/pms-catalog-aetheriaos.webp",
    "categories": [
      "PMS",
      "Asia"
    ],
    "slug": "aetheriaos",
    "website": "https://aetheriaos.com/"
  },
  {
    "id": "aicilabs",
    "name": "AIciLabs",
    "description": "Hospitality software vendor offering a property management system for accommodation businesses.",
    "icon": "/lovable-uploads/pms-catalog-aicilabs.webp",
    "categories": [
      "PMS",
      "Europe"
    ],
    "slug": "aicilabs",
    "website": "https://aicilabs.com/"
  },
  {
    "id": "alojando",
    "name": "Alojando",
    "description": "PMS for managing accommodation bookings, room availability and guest operations.",
    "icon": "/lovable-uploads/pms-catalog-alojando.webp",
    "categories": [
      "PMS",
      "Americas"
    ],
    "slug": "alojando",
    "website": "https://alojando.app/"
  },
  {
    "id": "anpira",
    "name": "Anpira",
    "description": "Property management software for coordinating accommodation reservations and operations.",
    "icon": "/lovable-uploads/pms-catalog-anpira.webp",
    "categories": [
      "PMS",
      "Europe"
    ],
    "slug": "anpira",
    "website": "https://www.anpira.com/"
  },
  {
    "id": "aperfectstay",
    "name": "aPerfectStay",
    "description": "Property management platform for accommodation bookings and operational workflows.",
    "icon": "/lovable-uploads/pms-catalog-aperfectstay.webp",
    "categories": [
      "PMS",
      "Europe"
    ],
    "slug": "aperfectstay",
    "website": "https://aperfectstay.ai/"
  },
  {
    "id": "aspixr",
    "name": "Aspixr",
    "description": "Hospitality software with property management tools for accommodation operators.",
    "icon": "/lovable-uploads/pms-catalog-aspixr.webp",
    "categories": [
      "PMS",
      "Americas"
    ],
    "slug": "aspixr",
    "website": "https://www.aspixr.com/"
  },
  {
    "id": "autonomya",
    "name": "Autonomya",
    "description": "Property management platform for automating accommodation booking and operational workflows.",
    "icon": "/lovable-uploads/pms-catalog-autonomya.webp",
    "categories": [
      "PMS",
      "Europe"
    ],
    "slug": "autonomya",
    "website": "https://autonomya.fr/"
  },
  {
    "id": "bayabotech-xenia",
    "name": "BayaboTech / Xenia",
    "description": "Developer of Xenia, a hospitality property management system.",
    "icon": "/lovable-uploads/pms-catalog-bayabotech-xenia.webp",
    "categories": [
      "PMS",
      "Africa"
    ],
    "slug": "bayabotech-xenia",
    "website": "https://bayabotech.com/"
  },
  {
    "id": "bedlink",
    "name": "Bedlink",
    "description": "Accommodation management software for reservations and property operations.",
    "icon": "/lovable-uploads/pms-catalog-bedlink.webp",
    "categories": [
      "PMS",
      "Europe"
    ],
    "slug": "bedlink",
    "website": "https://www.bedlink.fr/"
  },
  {
    "id": "bedmerge",
    "name": "Bedmerge",
    "description": "Property management software for coordinating accommodation bookings and availability.",
    "icon": "/lovable-uploads/pms-catalog-bedmerge.webp",
    "categories": [
      "PMS",
      "Europe"
    ],
    "slug": "bedmerge",
    "website": "https://www.bedmerge.com/"
  },
  {
    "id": "bindroom",
    "name": "Bindroom",
    "description": "Hospitality platform with a PMS for managing reservations and property operations.",
    "icon": "/lovable-uploads/pms-catalog-bindroom.webp",
    "categories": [
      "PMS",
      "Asia"
    ],
    "slug": "bindroom",
    "website": "https://www.bindroom.com/"
  },
  {
    "id": "casotel",
    "name": "Casotel",
    "description": "Hotel PMS for reservations, operational management and electronic invoicing in Latin America.",
    "icon": "/lovable-uploads/pms-catalog-casotel.webp",
    "categories": [
      "PMS",
      "Latin America"
    ],
    "slug": "casotel",
    "website": "https://casotel.com/"
  },
  {
    "id": "checkinbuddy",
    "name": "CheckinBuddy",
    "description": "Hotel management software for reservations, guest check-in and daily operations.",
    "icon": "/lovable-uploads/pms-catalog-checkinbuddy.webp",
    "categories": [
      "PMS",
      "Asia"
    ],
    "slug": "checkinbuddy",
    "website": "https://checkinbuddy.in/"
  },
  {
    "id": "checkinn",
    "name": "Checkinn",
    "description": "Japanese accommodation management platform for bookings and property operations.",
    "icon": "/lovable-uploads/pms-catalog-checkinn.webp",
    "categories": [
      "PMS",
      "Asia"
    ],
    "slug": "checkinn",
    "website": "https://checkinn.jp/"
  },
  {
    "id": "chevalier",
    "name": "Chevalier",
    "description": "PMS for managing accommodation reservations and daily property workflows.",
    "icon": "/lovable-uploads/pms-catalog-chevalier.webp",
    "categories": [
      "PMS",
      "Europe"
    ],
    "slug": "chevalier",
    "website": "https://chevalier-pms.com/"
  },
  {
    "id": "chexta",
    "name": "Chexta",
    "description": "Hotel management software combining reservations and operational tools.",
    "icon": "/lovable-uploads/pms-catalog-chexta.webp",
    "categories": [
      "PMS",
      "Middle East"
    ],
    "slug": "chexta",
    "website": "https://chexta.com/"
  },
  {
    "id": "chiara-software-chilloso",
    "name": "Chiara Software / Chilloso",
    "description": "Italian software vendor offering the Chilloso hospitality management product.",
    "icon": "/lovable-uploads/pms-catalog-chiara-software-chilloso.webp",
    "categories": [
      "PMS",
      "Europe"
    ],
    "slug": "chiara-software-chilloso",
    "website": "https://chiara-software.it/"
  },
  {
    "id": "cobijo",
    "name": "Cobijo",
    "description": "Property management platform for accommodation bookings and daily operations.",
    "icon": "/lovable-uploads/pms-catalog-cobijo.webp",
    "categories": [
      "PMS",
      "Europe"
    ],
    "slug": "cobijo",
    "website": "https://www.cobijo.app/"
  },
  {
    "id": "deplino",
    "name": "Deplino",
    "description": "Hospitality management software for coordinating accommodation reservations and operations.",
    "icon": "/lovable-uploads/pms-catalog-deplino.webp",
    "categories": [
      "PMS",
      "Europe"
    ],
    "slug": "deplino",
    "website": "https://deplino.ro/"
  },
  {
    "id": "doorling",
    "name": "Doorling",
    "description": "Accommodation management software for bookings and property workflows.",
    "icon": "/lovable-uploads/pms-catalog-doorling.webp",
    "categories": [
      "PMS",
      "Europe"
    ],
    "slug": "doorling",
    "website": "https://doorling.it/"
  },
  {
    "id": "doorloom",
    "name": "Doorloom",
    "description": "Hospitality software for managing accommodation reservations and property operations.",
    "icon": "/lovable-uploads/pms-catalog-doorloom.webp",
    "categories": [
      "PMS",
      "Asia"
    ],
    "slug": "doorloom",
    "website": "https://doorloom.com/"
  },
  {
    "id": "easybnb",
    "name": "Easybnb",
    "description": "Property management software for short-term rental accommodation.",
    "icon": "/lovable-uploads/pms-catalog-easybnb.webp",
    "categories": [
      "PMS",
      "Europe"
    ],
    "slug": "easybnb",
    "website": "https://easybnb.it/"
  },
  {
    "id": "easyrural",
    "name": "Easyrural",
    "description": "Management software for rural accommodation and booking operations.",
    "icon": "/lovable-uploads/pms-catalog-easyrural.webp",
    "categories": [
      "PMS",
      "Europe"
    ],
    "slug": "easyrural",
    "website": "https://easyrural.net/"
  },
  {
    "id": "facility-hotel",
    "name": "Facility Hotel",
    "description": "Cloud hotel PMS with reservation, front-desk and hotel management tools.",
    "icon": "/lovable-uploads/pms-catalog-facility-hotel.webp",
    "categories": [
      "PMS",
      "Latin America"
    ],
    "slug": "facility-hotel",
    "website": "https://sistemafacilityhotel.com.br/pms/"
  },
  {
    "id": "fades-management-bedflow",
    "name": "Fades Management / BedFlow",
    "description": "Software vendor offering BedFlow, a hotel property management product.",
    "icon": "/lovable-uploads/pms-catalog-fades-management-bedflow.webp",
    "categories": [
      "PMS",
      "Europe"
    ],
    "slug": "fades-management-bedflow",
    "website": "https://fades-management.com/"
  },
  {
    "id": "finestar-hospira",
    "name": "FinestAR / Hospira",
    "description": "Hospitality technology vendor offering Hospira property management software.",
    "icon": "/lovable-uploads/pms-catalog-finestar-hospira.webp",
    "categories": [
      "PMS",
      "Europe"
    ],
    "slug": "finestar-hospira",
    "website": "https://finestar.hr/"
  },
  {
    "id": "flowhub",
    "name": "FlowHub",
    "description": "Hotel management platform for reservations and property operations.",
    "icon": "/lovable-uploads/pms-catalog-flowhub.webp",
    "categories": [
      "PMS",
      "Asia"
    ],
    "slug": "flowhub",
    "website": "https://flowhubhotel.com/"
  },
  {
    "id": "foli",
    "name": "Foli",
    "description": "Accommodation management software for bookings and operational workflows.",
    "icon": "/lovable-uploads/pms-catalog-foli.webp",
    "categories": [
      "PMS",
      "Europe"
    ],
    "slug": "foli",
    "website": "https://www.foli.si/"
  },
  {
    "id": "fom",
    "name": "Fom",
    "description": "Hospitality software offering a property management system for accommodation operators.",
    "icon": "",
    "categories": [
      "PMS",
      "Middle East"
    ],
    "slug": "fom",
    "website": "https://fom.services/pms-registration/"
  },
  {
    "id": "gerenhotel",
    "name": "GerenHotel",
    "description": "Web-based hotel management software with reservations, room status and guest check-in tools.",
    "icon": "",
    "categories": [
      "PMS",
      "Latin America"
    ],
    "slug": "gerenhotel",
    "website": "https://gerenhotel.com.br/"
  },
  {
    "id": "gohosty",
    "name": "GoHosty",
    "description": "Property management software for coordinating accommodation bookings and operations.",
    "icon": "/lovable-uploads/pms-catalog-gohosty.webp",
    "categories": [
      "PMS",
      "Americas"
    ],
    "slug": "gohosty",
    "website": "https://gohosty.com/property-management-software"
  },
  {
    "id": "guestfix",
    "name": "Guestfix",
    "description": "Hotel management software for reservations and guest operations.",
    "icon": "/lovable-uploads/pms-catalog-guestfix.webp",
    "categories": [
      "PMS",
      "Europe"
    ],
    "slug": "guestfix",
    "website": "https://guestfix.com/"
  },
  {
    "id": "hamnsystem",
    "name": "Hamnsystem",
    "description": "Booking and payment software for motorhome pitches, marinas and other outdoor accommodation.",
    "icon": "/lovable-uploads/pms-catalog-hamnsystem.webp",
    "categories": [
      "PMS",
      "Europe",
      "Outdoor"
    ],
    "slug": "hamnsystem",
    "website": "https://www.hamnsystem.se/sv/"
  },
  {
    "id": "happybooking",
    "name": "HappyBooking",
    "description": "Reservation and property management software for hotels, hostels and accommodation providers.",
    "icon": "/lovable-uploads/pms-catalog-happybooking.webp",
    "categories": [
      "PMS"
    ],
    "slug": "happybooking",
    "website": "https://www.happybooking.se/"
  },
  {
    "id": "hostalio",
    "name": "Hostalio",
    "description": "Accommodation management software for reservations and property operations.",
    "icon": "/lovable-uploads/pms-catalog-hostalio.webp",
    "categories": [
      "PMS",
      "Europe"
    ],
    "slug": "hostalio",
    "website": "https://hostalio.pl/"
  },
  {
    "id": "hostflowlab",
    "name": "Hostflowlab",
    "description": "Property management software for coordinating accommodation bookings and daily workflows.",
    "icon": "/lovable-uploads/pms-catalog-hostflowlab.webp",
    "categories": [
      "PMS",
      "Latin America"
    ],
    "slug": "hostflowlab",
    "website": "https://hostflowlab.com/"
  },
  {
    "id": "hostieboard",
    "name": "Hostieboard",
    "description": "Property management platform for accommodation booking and operational workflows.",
    "icon": "/lovable-uploads/pms-catalog-hostieboard.webp",
    "categories": [
      "PMS",
      "Europe"
    ],
    "slug": "hostieboard",
    "website": "https://hostieboard.com/"
  },
  {
    "id": "hostlio-pro",
    "name": "Hostlio Pro",
    "description": "Hospitality management platform for reservations and property operations.",
    "icon": "/lovable-uploads/pms-catalog-hostlio-pro.webp",
    "categories": [
      "PMS",
      "Americas"
    ],
    "slug": "hostlio-pro",
    "website": "https://www.hostliopro.com/"
  },
  {
    "id": "hostmanager",
    "name": "Hostmanager",
    "description": "Property management software for managing accommodation bookings and operational workflows.",
    "icon": "",
    "categories": [
      "PMS",
      "Latin America"
    ],
    "slug": "hostmanager",
    "website": "https://www.hostmanager.cl/"
  },
  {
    "id": "hoteliya",
    "name": "Hoteliya",
    "description": "Hotel management platform for reservations and property operations.",
    "icon": "",
    "categories": [
      "PMS",
      "Australia"
    ],
    "slug": "hoteliya",
    "website": "https://hoteliya.com/"
  },
  {
    "id": "hotelsystem",
    "name": "Hotelsystem",
    "description": "Hotel management software covering front-office reservations and financial administration.",
    "icon": "/lovable-uploads/pms-catalog-hotelsystem.webp",
    "categories": [
      "PMS",
      "Europe"
    ],
    "slug": "hotelsystem",
    "website": "https://hotelsystem.hu/"
  },
  {
    "id": "hotpilot",
    "name": "Hotpilot",
    "description": "AI-assisted hotel PMS for reservation management and daily hotel operations.",
    "icon": "/lovable-uploads/pms-catalog-hotpilot.webp",
    "categories": [
      "PMS",
      "Europe"
    ],
    "slug": "hotpilot",
    "website": "https://hotpilot.ai/property-management-system"
  },
  {
    "id": "igumbi",
    "name": "Igumbi",
    "description": "Hotel PMS for room reservations, guest management and accommodation administration.",
    "icon": "/lovable-uploads/pms-catalog-igumbi.webp",
    "categories": [
      "PMS",
      "Europe"
    ],
    "slug": "igumbi",
    "website": "https://www.igumbi.com/de/tour/hotel-pms"
  },
  {
    "id": "imperahost",
    "name": "Imperahost",
    "description": "Management software for vacation-rental bookings and operational workflows.",
    "icon": "/lovable-uploads/pms-catalog-imperahost.webp",
    "categories": [
      "PMS",
      "Europe"
    ],
    "slug": "imperahost",
    "website": "https://www.imperahost.es/"
  },
  {
    "id": "innexia-opm",
    "name": "Innexia OPM",
    "description": "Hotel PMS with housekeeping, revenue management, reconciliation and scheduling tools.",
    "icon": "/lovable-uploads/pms-catalog-innexia-opm.webp",
    "categories": [
      "PMS"
    ],
    "slug": "innexia-opm",
    "website": "https://innexiaopm.com/"
  },
  {
    "id": "innflowbr",
    "name": "Innflowbr",
    "description": "Hotel management software for accommodation bookings and daily operations.",
    "icon": "/lovable-uploads/pms-catalog-innflowbr.webp",
    "categories": [
      "PMS",
      "Latin America"
    ],
    "slug": "innflowbr",
    "website": "https://innflowbr.com.br/"
  },
  {
    "id": "innsyst-presidium-services",
    "name": "InnSyst (Presidium Services)",
    "description": "Cloud hotel management platform operated by Presidium Services.",
    "icon": "/lovable-uploads/pms-catalog-innsyst-presidium-services.webp",
    "categories": [
      "PMS",
      "Americas"
    ],
    "slug": "innsyst-presidium-services",
    "website": "https://innsyst.com/features/property-management"
  },
  {
    "id": "kimisuite",
    "name": "KIMISUITE",
    "description": "Business software suite with hotel reservation, property management and channel management tools.",
    "icon": "/lovable-uploads/pms-catalog-kimisuite.webp",
    "categories": [
      "PMS",
      "Europe"
    ],
    "slug": "kimisuite",
    "website": "https://kimisuite.com/en"
  },
  {
    "id": "koopsdesk",
    "name": "KoopsDesk",
    "description": "Hospitality management software for accommodation reservations and operational workflows.",
    "icon": "/lovable-uploads/pms-catalog-koopsdesk.webp",
    "categories": [
      "PMS",
      "Latin America"
    ],
    "slug": "koopsdesk",
    "website": "https://koops.app/"
  },
  {
    "id": "kunjey",
    "name": "Kunjey",
    "description": "Property management system for managing accommodation bookings and daily operations.",
    "icon": "/lovable-uploads/pms-catalog-kunjey.webp",
    "categories": [
      "PMS",
      "Middle East"
    ],
    "slug": "kunjey",
    "website": "https://kunjey.com/"
  },
  {
    "id": "lodgepedia",
    "name": "Lodgepedia",
    "description": "Hotel management software for reservations and property operations.",
    "icon": "/lovable-uploads/pms-catalog-lodgepedia.webp",
    "categories": [
      "PMS",
      "Americas"
    ],
    "slug": "lodgepedia",
    "website": "https://lodgepedia.com/"
  },
  {
    "id": "lyra",
    "name": "Lyra",
    "description": "Hospitality PMS with accommodation booking and operational management tools.",
    "icon": "/lovable-uploads/pms-catalog-lyra.webp",
    "categories": [
      "PMS",
      "Europe"
    ],
    "slug": "lyra",
    "website": "https://lyrasystem.com/b-and-b-pms/"
  },
  {
    "id": "magisolution-magotel",
    "name": "MagiSolution / MAGOTEL",
    "description": "Software vendor offering MAGOTEL for hotel reservations and operational management.",
    "icon": "/lovable-uploads/pms-catalog-magisolution-magotel.webp",
    "categories": [
      "PMS",
      "Asia"
    ],
    "slug": "magisolution-magotel",
    "website": "https://magisolution.com/"
  },
  {
    "id": "mer-yaz-l-m-hoteluter",
    "name": "Mer Yazılım / Hoteluter",
    "description": "Software vendor offering Hoteluter hotel management software.",
    "icon": "/lovable-uploads/pms-catalog-mer-yaz-l-m-hoteluter.webp",
    "categories": [
      "PMS",
      "Middle East"
    ],
    "slug": "mer-yaz-l-m-hoteluter",
    "website": "https://merbilisim.com/"
  },
  {
    "id": "merrsaah",
    "name": "Merrsaah",
    "description": "Hotel management software for accommodation reservations and property operations.",
    "icon": "/lovable-uploads/pms-catalog-merrsaah.webp",
    "categories": [
      "PMS",
      "Africa"
    ],
    "slug": "merrsaah",
    "website": "https://merrsaah.com/"
  },
  {
    "id": "minical",
    "name": "miniCal",
    "description": "Open-source property management software for accommodation reservations and front-desk operations.",
    "icon": "/lovable-uploads/pms-catalog-minical.webp",
    "categories": [
      "PMS",
      "Americas"
    ],
    "slug": "minical",
    "website": "https://www.minical.io/"
  },
  {
    "id": "mintc-stay",
    "name": "MintC Stay",
    "description": "Accommodation PMS with room calendars, rates and reservation management, connected through Channex.",
    "icon": "/lovable-uploads/pms-catalog-mintc-stay.webp",
    "categories": [
      "PMS",
      "Asia"
    ],
    "slug": "mintc-stay",
    "website": "https://mintcinc.com/"
  },
  {
    "id": "moobi-hotel",
    "name": "Moobi Hotel",
    "description": "Hotel management module covering room status, reservations, guests and billing.",
    "icon": "/lovable-uploads/pms-catalog-moobi-hotel.webp",
    "categories": [
      "PMS",
      "Asia"
    ],
    "slug": "moobi-hotel",
    "website": "https://moobi.id/hotel/"
  },
  {
    "id": "moya-sync-pms",
    "name": "MOYA SYNC PMS",
    "description": "Property management software for accommodation bookings and operational workflows.",
    "icon": "/lovable-uploads/pms-catalog-moya-sync-pms.webp",
    "categories": [
      "PMS",
      "Europe"
    ],
    "slug": "moya-sync-pms",
    "website": "https://moyasync.fr/"
  },
  {
    "id": "multistay",
    "name": "MultiStay",
    "description": "Property management software for accommodation reservations and daily operations.",
    "icon": "/lovable-uploads/pms-catalog-multistay.webp",
    "categories": [
      "PMS",
      "Americas"
    ],
    "slug": "multistay",
    "website": "https://multistay.rentals/"
  },
  {
    "id": "mybooking",
    "name": "Mybooking",
    "description": "Accommodation management platform for reservations and property operations.",
    "icon": "/lovable-uploads/pms-catalog-mybooking.webp",
    "categories": [
      "PMS",
      "Americas"
    ],
    "slug": "mybooking",
    "website": "https://www.mybooking.ai/en/"
  },
  {
    "id": "naya-people",
    "name": "Naya People",
    "description": "Developer of Naya PMS for hotel reservations and operational management.",
    "icon": "/lovable-uploads/pms-catalog-naya-people.webp",
    "categories": [
      "PMS",
      "Asia"
    ],
    "slug": "naya-people",
    "website": "https://nayapeople.com/en/products/naya-pms/all-features"
  },
  {
    "id": "neosuite",
    "name": "Neosuite",
    "description": "Hospitality management software for accommodation bookings and property operations.",
    "icon": "/lovable-uploads/pms-catalog-neosuite.webp",
    "categories": [
      "PMS",
      "Asia"
    ],
    "slug": "neosuite",
    "website": "https://neosuite.io/"
  },
  {
    "id": "newbyte",
    "name": "Newbyte",
    "description": "Software vendor offering hotel property management tools.",
    "icon": "/lovable-uploads/pms-catalog-newbyte.webp",
    "categories": [
      "PMS",
      "Latin America"
    ],
    "slug": "newbyte",
    "website": "https://newbyte.net.br/pt-br"
  },
  {
    "id": "nuru",
    "name": "Nuru",
    "description": "Hospitality software suite with hotel management and point-of-sale tools.",
    "icon": "/lovable-uploads/pms-catalog-nuru.webp",
    "categories": [
      "PMS",
      "Australia"
    ],
    "slug": "nuru",
    "website": "https://nurupos.app/"
  },
  {
    "id": "odabed",
    "name": "Odabed",
    "description": "Hotel property management system for reservations and daily operations.",
    "icon": "/lovable-uploads/pms-catalog-odabed.webp",
    "categories": [
      "PMS",
      "Europe"
    ],
    "slug": "odabed",
    "website": "https://odabed.com/"
  },
  {
    "id": "okmystay",
    "name": "OKmystay",
    "description": "PMS for hotels and holiday apartments, with booking, check-in, payment and housekeeping workflows.",
    "icon": "/lovable-uploads/pms-catalog-okmystay.webp",
    "categories": [
      "PMS",
      "Europe"
    ],
    "slug": "okmystay",
    "website": "https://www.okmystay.com/"
  },
  {
    "id": "otizi",
    "name": "Otizi",
    "description": "Accommodation management software for booking and operational workflows.",
    "icon": "/lovable-uploads/pms-catalog-otizi.webp",
    "categories": [
      "PMS",
      "Europe"
    ],
    "slug": "otizi",
    "website": "https://otizi.fr/"
  },
  {
    "id": "packxgen-simplestay-room",
    "name": "PackXGen / SimpleStay Room+",
    "description": "Software vendor offering SimpleStay Room+ property management software.",
    "icon": "/lovable-uploads/pms-catalog-packxgen-simplestay-room.webp",
    "categories": [
      "PMS",
      "Europe"
    ],
    "slug": "packxgen-simplestay-room",
    "website": "https://packxgen.com/"
  },
  {
    "id": "patelhms",
    "name": "PatelHMS",
    "description": "Hotel PMS for reservations and day-to-day property operations.",
    "icon": "",
    "categories": [
      "PMS",
      "Americas"
    ],
    "slug": "patelhms",
    "website": "https://www.patelhms.com/property-management/"
  },
  {
    "id": "quarto-studio",
    "name": "Quarto Studio",
    "description": "Hospitality management platform for accommodation reservations and property workflows.",
    "icon": "/lovable-uploads/pms-catalog-quarto-studio.webp",
    "categories": [
      "PMS",
      "Latin America"
    ],
    "slug": "quarto-studio",
    "website": "https://quarto-studio.com/"
  },
  {
    "id": "qvision-roomzy-pms",
    "name": "QVision / Roomzy PMS",
    "description": "Hospitality software vendor offering Roomzy PMS.",
    "icon": "/lovable-uploads/pms-catalog-qvision-roomzy-pms.webp",
    "categories": [
      "PMS",
      "Europe"
    ],
    "slug": "qvision-roomzy-pms",
    "website": "https://qvision.gr/"
  },
  {
    "id": "recama",
    "name": "Recama",
    "description": "Accommodation management software for booking and property operations.",
    "icon": "/lovable-uploads/pms-catalog-recama.webp",
    "categories": [
      "PMS",
      "Americas"
    ],
    "slug": "recama",
    "website": "https://recama.com/"
  },
  {
    "id": "rently",
    "name": "Rently",
    "description": "Property management software for accommodation bookings and operational workflows.",
    "icon": "/lovable-uploads/pms-catalog-rently.webp",
    "categories": [
      "PMS",
      "Middle East"
    ],
    "slug": "rently",
    "website": "https://rently.pro/"
  },
  {
    "id": "revpilot",
    "name": "RevPilot",
    "description": "Hotel property management software for reservations and daily operations.",
    "icon": "",
    "categories": [
      "PMS",
      "Asia"
    ],
    "slug": "revpilot",
    "website": "https://revpilotlabs.com/pms.html"
  },
  {
    "id": "rmos",
    "name": "RMOS",
    "description": "Hotel PMS for accommodation reservations and operational management.",
    "icon": "/lovable-uploads/pms-catalog-rmos.webp",
    "categories": [
      "PMS",
      "Middle East"
    ],
    "slug": "rmos",
    "website": "https://rmosweb.com/products/rmos-web-pms"
  },
  {
    "id": "roomconnect",
    "name": "Roomconnect",
    "description": "Hotel management software for reservations and daily property operations.",
    "icon": "/lovable-uploads/pms-catalog-roomconnect.webp",
    "categories": [
      "PMS",
      "Latin America"
    ],
    "slug": "roomconnect",
    "website": "https://roomconnect.io/"
  },
  {
    "id": "roomspilot",
    "name": "RoomsPilot",
    "description": "Property management platform with tools for managing multiple accommodation properties.",
    "icon": "/lovable-uploads/pms-catalog-roomspilot.webp",
    "categories": [
      "PMS",
      "Americas"
    ],
    "slug": "roomspilot",
    "website": "https://roomspilot.com/features/multi-property-management"
  },
  {
    "id": "rotamundos-r2-os",
    "name": "Rotamundos / R2-OS",
    "description": "Hospitality company offering the R2-OS property management product.",
    "icon": "/lovable-uploads/pms-catalog-rotamundos-r2-os.webp",
    "categories": [
      "PMS",
      "Latin America"
    ],
    "slug": "rotamundos-r2-os",
    "website": "https://rotamundos.com/"
  },
  {
    "id": "runset-pms",
    "name": "Runset PMS",
    "description": "PMS for holiday rentals and hotels, combining reservations and operational management.",
    "icon": "/lovable-uploads/pms-catalog-runset-pms.webp",
    "categories": [
      "PMS",
      "Europe"
    ],
    "slug": "runset-pms",
    "website": "https://runset.ai/pms"
  },
  {
    "id": "saam-pms",
    "name": "Saam PMS",
    "description": "Hotel PMS for managing reservations and daily property operations.",
    "icon": "/lovable-uploads/pms-catalog-saam-pms.webp",
    "categories": [
      "PMS",
      "Africa"
    ],
    "slug": "saam-pms",
    "website": "https://saampms.com/"
  },
  {
    "id": "silbeck",
    "name": "Silbeck",
    "description": "Hotel management software vendor serving accommodation businesses.",
    "icon": "",
    "categories": [
      "PMS",
      "Latin America"
    ],
    "slug": "silbeck",
    "website": "https://materiais.silbeck.com.br/ads-solicitacao-de-orcamento"
  },
  {
    "id": "skl",
    "name": "SKL",
    "description": "PMS for accommodation reservations and operational management.",
    "icon": "/lovable-uploads/pms-catalog-skl.webp",
    "categories": [
      "PMS",
      "Europe"
    ],
    "slug": "skl",
    "website": "https://www.skl.es/pms-skl/"
  },
  {
    "id": "smartsuite",
    "name": "SmartSuite",
    "description": "Hospitality software suite with a hotel property management product.",
    "icon": "/lovable-uploads/pms-catalog-smartsuite.webp",
    "categories": [
      "PMS",
      "Asia"
    ],
    "slug": "smartsuite",
    "website": "https://smartsuite.vn/vi/product/pms"
  },
  {
    "id": "staycore",
    "name": "Staycore",
    "description": "Hotel management software for reservations and property operations.",
    "icon": "/lovable-uploads/pms-catalog-staycore.webp",
    "categories": [
      "PMS",
      "Asia"
    ],
    "slug": "staycore",
    "website": "https://staycore.io/hotel-management-software-nigeria/"
  },
  {
    "id": "stayreo",
    "name": "Stayreo",
    "description": "Hotel PMS for managing accommodation reservations and daily operations.",
    "icon": "/lovable-uploads/pms-catalog-stayreo.webp",
    "categories": [
      "PMS",
      "Asia"
    ],
    "slug": "stayreo",
    "website": "https://www.stayreo.com/platform/pms"
  },
  {
    "id": "staytric",
    "name": "Staytric",
    "description": "Hotel management software for reservations and property workflows.",
    "icon": "/lovable-uploads/pms-catalog-staytric.webp",
    "categories": [
      "PMS",
      "Asia"
    ],
    "slug": "staytric",
    "website": "https://staytric.com/"
  },
  {
    "id": "tribii",
    "name": "Tribii",
    "description": "Accommodation management platform with a property management system.",
    "icon": "/lovable-uploads/pms-catalog-tribii.webp",
    "categories": [
      "PMS",
      "Europe"
    ],
    "slug": "tribii",
    "website": "https://tribii.com/product/free-pms"
  },
  {
    "id": "unihotel360",
    "name": "UniHotel360",
    "description": "Hotel management platform with a PMS for reservations and property operations.",
    "icon": "/lovable-uploads/pms-catalog-unihotel360.webp",
    "categories": [
      "PMS",
      "Asia"
    ],
    "slug": "unihotel360",
    "website": "https://unihotel360.com/solutions/pms"
  },
  {
    "id": "unozero",
    "name": "UNOZERO",
    "description": "Hospitality management software for accommodation reservations and daily operations.",
    "icon": "",
    "categories": [
      "PMS",
      "Latin America"
    ],
    "slug": "unozero",
    "website": "https://unozero.ai/"
  },
  {
    "id": "vacant",
    "name": "Vacant",
    "description": "Property management software for accommodation bookings and operational workflows.",
    "icon": "/lovable-uploads/pms-catalog-vacant.webp",
    "categories": [
      "PMS",
      "Americas"
    ],
    "slug": "vacant",
    "website": "https://vacant.com/"
  },
  {
    "id": "vectorguest",
    "name": "VectorGuest",
    "description": "Hospitality platform with property management tools for accommodation operators.",
    "icon": "/lovable-uploads/pms-catalog-vectorguest.webp",
    "categories": [
      "PMS",
      "Europe"
    ],
    "slug": "vectorguest",
    "website": "https://vectorguest.com/"
  },
  {
    "id": "vive",
    "name": "Vive",
    "description": "Hospitality management software for accommodation booking and operational workflows.",
    "icon": "/lovable-uploads/pms-catalog-vive.webp",
    "categories": [
      "PMS",
      "Latin America"
    ],
    "slug": "vive",
    "website": "https://vivetechecuador.com/"
  },
  {
    "id": "voyando",
    "name": "Voyando",
    "description": "Property management software for holiday accommodation and booking operations.",
    "icon": "/lovable-uploads/pms-catalog-voyando.webp",
    "categories": [
      "PMS",
      "Europe"
    ],
    "slug": "voyando",
    "website": "https://voyando.com/oplossingen/property-management-software-voor-vakantiehuizen/"
  },
  {
    "id": "wacheckin",
    "name": "WACheckin",
    "description": "Accommodation management platform combining reservations, check-in and guest communication tools.",
    "icon": "/lovable-uploads/pms-catalog-wacheckin.webp",
    "categories": [
      "PMS",
      "Europe"
    ],
    "slug": "wacheckin",
    "website": "https://wacheckin.com/"
  },
  {
    "id": "welasync",
    "name": "Welasync",
    "description": "Hospitality management software for accommodation reservations and property operations.",
    "icon": "/lovable-uploads/pms-catalog-welasync.webp",
    "categories": [
      "PMS",
      "Asia"
    ],
    "slug": "welasync",
    "website": "https://welasync.com/"
  },
  {
    "id": "wowstay",
    "name": "WowStay",
    "description": "Property management software for accommodation bookings and daily operations.",
    "icon": "/lovable-uploads/pms-catalog-wowstay.webp",
    "categories": [
      "PMS",
      "Asia"
    ],
    "slug": "wowstay",
    "website": "https://wowstay.live/"
  }
];
