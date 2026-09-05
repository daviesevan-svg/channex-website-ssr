export const AI_BUILD_TITLE = "Build in hours with AI";
export const AI_BUILD_DESCRIPTION = "AI-assisted developers can build a working integration in hours. Going live also requires testing, Channex certification and OTA account authorization.";
export const SYNC_DESCRIPTION = "Send availability, rates and restrictions; receive reservations, modifications and cancellations.";
export const API_RESPONSE_NOTE = "API response time measures the response from Channex, not delivery to an OTA. Channel processing and delivery times vary.";
export const SUPPORT_HOURS = "Replies during UK/European working hours";
export const SUPPORT_NOTE = "You can send a message any time. Replies may take longer outside working hours.";
export const AI_SKILL_URL = "https://github.com/daviesevan-svg/channex-claude-skill";
export const limitations = [
  { title: "OTA listing creation", description: "Channex cannot currently create listings on OTAs. Create your listings directly on the OTA, then connect them to Channex." },
  { title: "Listing content", description: "Channex cannot currently update listing content such as images, facilities and amenities on OTAs. Manage that content directly in each OTA's extranet." },
  { title: "Reservation changes", description: "A PMS generally cannot change dates or cancel an OTA reservation through Channex. Guests usually make those changes through the OTA where they booked, and Channex delivers the updates to your PMS. Some channel-specific actions are available, such as reporting a no-show to Booking.com." },
  { title: "Channel differences", description: "A supported channel does not necessarily support every pricing option, restriction, messaging or review feature. Check the channel-specific documentation before implementing a workflow." },
];
export const CONTENT_ROADMAP = "Listing creation and content management are planned for Booking.com and Airbnb only in 2027. This is a roadmap target, not a guaranteed release date.";
