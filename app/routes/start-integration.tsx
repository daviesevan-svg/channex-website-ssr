import IntegrationLimits from "@/components/IntegrationLimits";
import { AI_BUILD_DESCRIPTION, AI_SKILL_URL } from "@/data/integration-copy";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { pageMeta } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, AlertCircle, ArrowRight, ExternalLink } from "lucide-react";
import type { Route } from "./+types/start-integration";
import { Link } from "react-router";

export const meta: Route.MetaFunction = ({ location }) =>
  pageMeta(
    {
      title: "Start Integration | Channel Manager API for PMS",
      description: "Start integrating your PMS with Channex's white-label channel manager API.",
    },
    location,
  );

const StartIntegration = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 lg:px-6 max-w-4xl">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4 font-inter">
              Start Integration
            </h1>
            <p className="text-lg text-muted-foreground font-inter leading-relaxed">
              Channex is an API platform designed to help Property Management Systems (PMS) seamlessly connect with multiple Online Travel Agencies (OTAs). Our service simplifies the complexity of OTA integrations, allowing you to focus on building great PMS experiences while we handle the connectivity.
            </p>
          </div>

          <aside className="rounded-lg border border-primary/20 bg-primary/5 p-5 mb-8 font-inter">
            <p className="font-semibold mb-2">Connecting your first property?</p>
            <p className="text-muted-foreground leading-relaxed">Before the API steps, read about OTA authorization, what you can automate, certification and going live.{" "}<Link to="/connect-first-property" className="text-primary underline underline-offset-4">Read the first-property guide</Link>.</p>
          </aside>

          <p className="text-muted-foreground leading-relaxed mb-4">{AI_BUILD_DESCRIPTION}</p>
          <a href={AI_SKILL_URL} className="inline-block mb-4 text-primary underline underline-offset-4">Use the Channex integration skill for Claude Code</a>
          <IntegrationLimits />

          {/* Prerequisites */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-foreground mb-4 font-inter">
                Prerequisites
              </h2>
              <p className="text-muted-foreground mb-4 font-inter">
                Before starting your integration with Channex, please ensure the following:
              </p>
              <ul className="space-y-3">
                {[
                  "You are a PMS or a software system capable of managing property availability, rates, and reservations.",
                  "You have a developer (or technical team) who can build and maintain the integration using our RESTful API.",
                  "You have access to at least one hotel/property account to use for testing availability, rates, and booking flows.",
                  "Your system can securely store API credentials and manage authentication",
                  "You are able to process and synchronise inventory updates in real time (recommended for best results).",
                  "(Optional but recommended) You have a clear plan for how your system will handle booking modifications, cancellations, and overbookings."
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground font-inter">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Step 1 */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="default" className="text-sm font-semibold">Step 1</Badge>
                <h2 className="text-2xl font-semibold text-foreground font-inter">
                  Get Access and Prepare Your Environment
                </h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 font-inter">
                    1. Review the API Documentation
                  </h3>
                  <p className="text-muted-foreground font-inter mb-2">
                    Start by reading our API docs at docs.channex.io. This will help you understand the API structure, authentication, and key workflows for your integration.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 font-inter">
                    2. Create a Staging Account
                  </h3>
                  <p className="text-muted-foreground font-inter mb-2">
                    Sign up for a free account on our Staging Environment at staging.channex.io.
                  </p>
                  <p className="text-muted-foreground font-inter">
                    The staging environment lets you safely build and test your integration before going live.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 font-inter">
                    3. Generate an API Key
                  </h3>
                  <p className="text-muted-foreground font-inter">
                    After creating your account, generate an API key to authenticate your API requests.{" "}
                    <Button 
                      variant="link" 
                      className="p-0 h-auto font-inter"
                      onClick={() => window.open('https://docs.channex.io/application-documentation/api-key-access#setup-an-api-key', '_blank')}
                    >
                      API Key Setup <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Step 2 */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="default" className="text-sm font-semibold">Step 2</Badge>
                <h2 className="text-2xl font-semibold text-foreground font-inter">
                  Create Your Property, Rooms, and Rates
                </h2>
              </div>
              
              <p className="text-muted-foreground mb-4 font-inter">
                We recommend creating properties, room types, and rate plans via the API. This approach speeds up onboarding and reduces the risk of manual data entry errors.
              </p>

              <div className="space-y-4">
                {[
                  { title: "Create a Property", desc: "Use the API to create a property (hotel or rental)." },
                  { title: "Add Room Types", desc: "Define the rooms available at your property (e.g., Single Room, Suite)." },
                  { title: "Set Up Rate Plans", desc: "Create rate plans for your rooms (e.g., Standard Rate, Non-Refundable)." }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <h4 className="font-semibold text-foreground font-inter">{item.title}</h4>
                      <p className="text-sm text-muted-foreground font-inter">{item.desc}</p>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="font-inter"
                      onClick={() => {
                        const urls = [
                          'https://docs.channex.io/api-v.1-documentation/hotels-collection#create-property',
                          'https://docs.channex.io/api-v.1-documentation/room-types-collection#create-room-type', 
                          'https://docs.channex.io/api-v.1-documentation/rate-plans-collection#create-rate-plan'
                        ];
                        window.open(urls[index], '_blank');
                      }}
                    >
                      View API Guide <ExternalLink className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Step 3 */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="default" className="text-sm font-semibold">Step 3</Badge>
                <h2 className="text-2xl font-semibold text-foreground font-inter">
                  Send Availability, Prices, and Restrictions
                </h2>
              </div>
              
              <p className="text-muted-foreground mb-4 font-inter">
                You'll need to update your property's availability, prices, and restrictions using two separate API calls:
              </p>

              <div className="space-y-4 mb-6">
                {[
                  { title: "Update Availability", desc: "Use this API to send the number of available rooms for each date." },
                  { title: "Update Prices & Restrictions", desc: "Use this API to send daily rates and apply restrictions such as minimum stay or closed dates." }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <h4 className="font-semibold text-foreground font-inter">{item.title}</h4>
                      <p className="text-sm text-muted-foreground font-inter">{item.desc}</p>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="font-inter"
                      onClick={() => {
                        const urls = [
                          'https://docs.channex.io/api-v.1-documentation/ari#update-availability',
                          'https://docs.channex.io/api-v.1-documentation/ari#update-rate-and-restrictions'
                        ];
                        window.open(urls[index], '_blank');
                      }}
                    >
                      View API Guide <ExternalLink className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                ))}
              </div>

              <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-green-800 dark:text-green-400 font-inter">
                      Verify Your Updates:
                    </h4>
                    <ul className="text-green-700 dark:text-green-300 text-sm mt-1 space-y-1 font-inter">
                      <li>• Check the API response for confirmation that your update was successful.</li>
                      <li>• You can also log in to the Channex UI to double-check your availability and prices are correct.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Step 4 */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="default" className="text-sm font-semibold">Step 4</Badge>
                <h2 className="text-2xl font-semibold text-foreground font-inter">
                  Receive Bookings
                </h2>
              </div>
              
              <p className="text-muted-foreground mb-6 font-inter">
                This is the final technical step before certification. You will need to receive new bookings from OTAs through Channex and save them into your PMS. After receiving a booking, you should also update your property's availability — even though Channex will already send automatic updates to OTAs. This ensures your system stays in sync.
              </p>

              <div className="border-l-4 border-primary pl-4 mb-6">
                <h3 className="text-lg font-semibold text-foreground mb-2 font-inter">
                  Two Ways to Receive Bookings
                </h3>
                <p className="text-muted-foreground font-inter">
                  You can choose Pull or Push, or combine both for better reliability. Both methods are scalable when implemented correctly.
                </p>
              </div>

              {/* Pull Method */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-foreground mb-3 font-inter">
                  Option 1: Pull Method (Recommended for Simplicity)
                </h3>
                <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-4">
                  <p className="text-blue-800 dark:text-blue-300 font-inter">
                    Use the Booking Revisions Feed API to check for new bookings across all properties.{" "}
                    <Button 
                      variant="link" 
                      className="p-0 h-auto text-blue-600 dark:text-blue-400 font-inter"
                      onClick={() => window.open('https://docs.channex.io/api-v.1-documentation/bookings-collection#booking-revisions-feed', '_blank')}
                    >
                      Booking Revisions Feed <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground font-inter">Best Practice:</p>
                      <p className="text-muted-foreground text-sm font-inter">
                        Always request bookings for all properties in one API call. Avoid checking per property — this causes unnecessary load and many API calls per hour.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-blue-500 mt-0.5" />
                    <p className="text-muted-foreground text-sm font-inter">
                      If no new bookings are available, the API will return an empty result.
                    </p>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                    <p className="font-semibold text-foreground mb-2 font-inter">When you receive a booking:</p>
                    <ul className="text-muted-foreground text-sm space-y-1 font-inter">
                      <li>• Save it in your PMS.</li>
                      <li>• Acknowledge the booking to confirm receipt: <Button variant="link" className="p-0 h-auto text-sm font-inter" onClick={() => window.open('https://docs.channex.io/api-v.1-documentation/bookings-collection#acknowledge-booking-revision-receiving', '_blank')}>Acknowledge Booking <ArrowRight className="h-3 w-3 ml-1" /></Button></li>
                    </ul>
                    <p className="text-sm text-orange-600 dark:text-orange-400 mt-2 font-inter">
                      Acknowledging is mandatory. Without it, Channex will continue sending the booking in the feed.
                    </p>
                  </div>
                </div>
              </div>

              {/* Push Method */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-foreground mb-3 font-inter">
                  Option 2: Push Method (Webhook Notifications)
                </h3>
                <p className="text-muted-foreground mb-4 font-inter">
                  Channex can send a Webhook to your system as soon as a booking is created.
                </p>

                <div className="space-y-3 mb-4">
                  <p className="text-muted-foreground font-inter">
                    • Create your webhook here: <Button variant="link" className="p-0 h-auto font-inter" onClick={() => window.open('https://docs.channex.io/api-v.1-documentation/webhook-collection#create-webhook', '_blank')}>Create Webhook <ArrowRight className="h-4 w-4 ml-1" /></Button>
                  </p>
                  <p className="text-muted-foreground font-inter">• Your webhook URL must use HTTPS.</p>
                  <p className="text-muted-foreground font-inter">• Your server must respond with a success status code (200 OK) even if an error occurs in your PMS (e.g., overbooking).</p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                  <p className="font-semibold text-foreground mb-2 font-inter">When you receive a webhook:</p>
                  <ol className="text-muted-foreground text-sm space-y-1 font-inter">
                    <li>1. Pull the booking revision by ID: <Button variant="link" className="p-0 h-auto text-sm font-inter" onClick={() => window.open('https://docs.channex.io/api-v.1-documentation/bookings-collection#get-booking-revision-by-id', '_blank')}>Get Booking by ID <ArrowRight className="h-3 w-3 ml-1" /></Button></li>
                    <li>2. Save the booking in your PMS.</li>
                    <li>3. Acknowledge the booking: <Button variant="link" className="p-0 h-auto text-sm font-inter" onClick={() => window.open('https://docs.channex.io/api-v.1-documentation/bookings-collection#acknowledge-booking-revision-receiving', '_blank')}>Acknowledge Booking <ArrowRight className="h-3 w-3 ml-1" /></Button></li>
                  </ol>
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mt-4">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5" />
                    <div>
                      <p className="font-semibold text-yellow-800 dark:text-yellow-400 font-inter">Important:</p>
                      <p className="text-yellow-700 dark:text-yellow-300 text-sm font-inter">
                        Even if using webhooks, you must implement the Pull method as a backup, running every 15–20 minutes (cron job). This ensures you don't miss bookings if a webhook fails.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Final Step */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="secondary" className="text-sm font-semibold">Final Step</Badge>
                <h2 className="text-2xl font-semibold text-foreground font-inter">
                  Certification
                </h2>
              </div>
              
              <p className="text-muted-foreground mb-6 font-inter">
                Before going live in production, your integration must pass the Channex Certification Process. This ensures your system works reliably and efficiently.
              </p>

              <h3 className="text-lg font-semibold text-foreground mb-3 font-inter">
                What We Look For During Certification:
              </h3>
              <ul className="space-y-2 mb-6">
                {[
                  "Your integration is efficient and does not flood our servers with unnecessary API calls.",
                  "You are using the correct API endpoints and following best practices.",
                  "Any workflows that could cause overbookings or missed updates are addressed before launch."
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground font-inter">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-4 mb-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <p className="text-green-800 dark:text-green-400 font-inter">
                      View the full certification tests here:{" "}
                      <Button 
                        variant="link" 
                        className="p-0 h-auto text-green-600 dark:text-green-400 font-inter"
                        onClick={() => window.open('https://docs.channex.io/api-v.1-documentation/pms-certification-tests', '_blank')}
                      >
                        Certification Test Guide <ArrowRight className="h-4 w-4 ml-1" />
                      </Button>
                    </p>
                    <p className="text-green-700 dark:text-green-300 text-sm mt-1 font-inter">
                      If your PMS doesn't support a specific feature, just let us know in the test notes.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-red-600 mt-0.5" />
                    <div>
                      <p className="font-semibold text-red-800 dark:text-red-400 font-inter">Important:</p>
                      <ul className="text-red-700 dark:text-red-300 text-sm mt-1 space-y-1 font-inter">
                        <li>• Do not use Postman or manual API tools for the certification test.</li>
                        <li>• All actions must be performed through your application to demonstrate a working integration.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <p className="font-semibold text-blue-800 dark:text-blue-400 mb-1 font-inter">Final Review:</p>
                      <p className="text-blue-700 dark:text-blue-300 text-sm font-inter">
                        Once you complete the certification tests and submit the form, we'll arrange a live screen-sharing session to:
                      </p>
                      <ul className="text-blue-700 dark:text-blue-300 text-sm mt-1 space-y-1 font-inter">
                        <li>• Review your test results</li>
                        <li>• Watch your application perform key API operations in real time</li>
                        <li>• Answer any final questions</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-primary transition-all duration-300 font-inter"
              onClick={() => window.open('https://docs.channex.io/', '_blank')}
            >
              Get Started with API Documentation
              <ExternalLink className="h-5 w-5 ml-2" />
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default StartIntegration;
