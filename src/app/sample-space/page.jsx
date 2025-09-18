"use client";
import "./sample-space.css";

import Nav from "@/components/Nav/Nav";
import ConditionalFooter from "@/components/ConditionalFooter/ConditionalFooter";
import CTAWindow from "@/components/CTAWindow/CTAWindow";
import Copy from "@/components/Copy/Copy";
import { Link2 } from "lucide-react";

const page = () => {
  return (
    <>
      <Nav />
      <div className="page sample-space">
        <section className="sample-space-hero">
          <div className="sample-space-hero-img">
            <img src="/spaces/ridonew.png" alt="Arcade Residence Lisbon" />
          </div>
          <div className="sample-space-hero-overlay"></div>
          <div className="container">
            <div className="sample-space-hero-header">
              <Copy delay={1} animateOnScroll={false}>
                <h1>Rido Platform</h1>
              </Copy>
            </div>
            <div className="sample-space-content">
              <div className="sample-space-col">
                <Copy delay={1.05} animateOnScroll={false}>
                  <p>Ride Hailing App</p>
                </Copy>
              </div>
              <div className="sample-space-col">
                <div className="sample-space-content-wrapper">
                  <Copy delay={1.1} animateOnScroll={false}>
                    <p style={{ gap: "6px" }}
                      onClick={() => {
                        window.open("https://rido-frontend.onrender.com/", "_blank")
                      }}>View Project
                      <span style={{ justifySelf: "center", alignSelf: "center" }}><Link2 size={16} style={{
                        transform: "rotate(-45deg)"
                      }} /></span>
                    </p>
                  </Copy>
                </div>
                <div className="sample-space-content-wrapper">
                  <Copy delay={1.15} animateOnScroll={false}>
                    <h3>
                      {/* Arcade Residence is a study in rhythm and light, where
                      colonnades and vaulted thresholds frame daily life with
                      quiet grandeur. */}
                      Rido Platform is a study in motion and flow, where user
                      actions and backend logic enable seamless rides with
                      quiet precision.
                    </h3>
                    <h3>
                      {/* The design combines classical proportions with a
                      contemporary sensitivity, creating a home that feels both
                      rooted in tradition and attuned to the present moment. */}
                      The build combines real-time tracking with a modern
                      tech stack, creating an app that feels both grounded in
                      function and tuned for today’s users.
                    </h3>
                  </Copy>
                </div>
                <div className="sample-space-content-wrapper sample-space-meta">
                  <div className="sample-space-hero-row">
                    <div className="sample-space-hero-sub-col">
                      <Copy delay={0.2}>
                        <p>Date Completed</p>
                        <p>2024</p>
                      </Copy>
                    </div>
                    <div className="sample-space-hero-sub-col">
                      <Copy delay={0.2}>
                        <p>Project Type</p>
                        <p>Fullstack Web Application</p>
                        <p>Ride Hailing Service</p>
                      </Copy>
                    </div>
                  </div>
                </div>
                <div className="sample-space-content-wrapper sample-space-meta">
                  <div className="sample-space-hero-row">
                    <div className="sample-space-hero-sub-col">
                      <Copy delay={0.35}>
                        <p>Tech Stack</p>
                        <p>Leaflet Routing</p>
                        <p>Openstreet Maps</p>
                        <p>Socket.io</p>
                      </Copy>
                    </div>
                    <div className="sample-space-hero-sub-col">
                      <Copy delay={0.35}>
                        <p>Core Features</p>
                        <p>Chat,Payments,History</p>
                        <p>Driver,Passenger,Admin Auth</p>
                      </Copy>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section >
        <section className="sample-space-details sample-space-details-1">
          <div className="container">
            <div className="sample-space-col">
              <Copy delay={0.1}>
                <p>Architectural Story</p>
              </Copy>
            </div>
            <div className="sample-space-col">
              <Copy delay={0.1}>
                <h3>
                  {/* At Arcade Residence, the sequence of arches creates a measured
                  rhythm that guides movement through the home. Each passage
                  frames daylight differently, shifting the mood as one moves
                  from courtyard to living space.  */}
                  In Rido Platform, the flow of screens creates a smooth journey
                  that guides users through the app.Each module handles tasks
                  efficiently, shifting context as one moves from booking to
                  tracking rides.
                </h3>

                <h3>
                  {/* Materials were chosen for their quiet permanence: pale stone,
                  lime plaster, and timber accents. These textures invite touch
                  and age gracefully, ensuring the house evolves in character
                  with time. */}
                  Features were chosen for their lasting value: real-time maps,
                  user auth, driver chat, and trip history. These elements scale
                  well and improve steadily, ensuring the platform grows with
                  demand.
                </h3>
              </Copy>
              <div className="sample-space-details-img">
                <img src="/spaces/rido2.png" alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="sample-space-details sample-space-details-2">
          <div className="container">
            <div className="sample-space-col">
              <Copy delay={0.1}>
                <p>Spatial Qualities</p>
              </Copy>
            </div>
            <div className="sample-space-col">
              <div className="sample-space-content-wrapper sample-space-meta">
                <div className="sample-space-hero-row">
                  <div className="sample-space-hero-sub-col">
                    <Copy delay={0.1}>
                      <p>Atmosphere</p>
                      <p>Calm</p>
                      <p>Softened acoustics</p>
                      <p>Filtered light</p>
                    </Copy>
                  </div>
                  <div className="sample-space-hero-sub-col">
                    <Copy delay={0.1}>
                      <p>Flow</p>
                      <p>Passages</p>
                      <p>Guided movement</p>
                      <p>Rhythmic</p>
                    </Copy>
                  </div>
                </div>
              </div>
              <div className="sample-space-content-wrapper sample-space-meta">
                <div className="sample-space-hero-row">
                  <div className="sample-space-hero-sub-col">
                    <Copy delay={0.2}>
                      <p>Materials</p>
                      <p>Lime plaster walls</p>
                      <p>Local stone flooring</p>
                      <p>Timber inlays</p>
                    </Copy>
                  </div>
                  <div className="sample-space-hero-sub-col">
                    <Copy delay={0.2}>
                      <p>Natural Elements</p>
                      <p>Court planting</p>
                      <p>Daylight wells</p>
                      <p>Cross ventilation</p>
                    </Copy>
                  </div>
                </div>
              </div>
              <div className="sample-space-details-img">
                <img
                  src="/sample-space/sample-space-2.jpg"
                  alt="Arcade Residence interiors and light"
                />
              </div>
              <Copy delay={0.2}>
                <h3>
                  {/* Every choice within the residence was guided by sensory
                  experience. The aim was not only to frame views but to shape
                  how sound, touch, and temperature are felt as one moves
                  through the home. */}
                  Every choice in my process is guided by user experience. The
                  aim is not only to display data but to shape how users click,
                  scroll, and interact as they move through the app.
                </h3>
              </Copy>
            </div>
          </div>
        </section>
        <CTAWindow
          img="/spaces/ecomstore.png"
          header="Next Project"
          callout="Built for swiftness and clarity"
          description="A focus on clean code and precision, each app invites ease. Logic, design, and flow come together."
        // description="A study in restraint and resonance, this space invites quietude. Materials, light, and layout come together."

        />
      </div >
      <ConditionalFooter />
    </>
  );
};

export default page;
