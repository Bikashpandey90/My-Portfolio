"use client";
import "./studio.css";

import Nav from "@/components/Nav/Nav";
import ConditionalFooter from "@/components/ConditionalFooter/ConditionalFooter";
import HowWeWork from "@/components/HowWeWork/HowWeWork";
import Spotlight from "@/components/Spotlight/Spotlight";
import CTAWindow from "@/components/CTAWindow/CTAWindow";
import Copy from "@/components/Copy/Copy";

const page = () => {
  return (
    <>
      <Nav />
      <div className="page studio">
        <section className="studio-hero">
          <div className="container">
            <div className="studio-hero-col">
              <Copy delay={0.85}>
                <p>
                  {/* We see design as more than construction. It is an ongoing
                  dialogue between people, material, and place, shaped with
                  care, and built to endure. */}
                  I see development as more than code.It is about crafting
                  powerful experiences and scalable solutions that create
                  lasting digital impact.
                </p>
              </Copy>
            </div>
            <div className="studio-hero-col">
              <Copy delay={0.85}>
                <h2>
                  {/* Our studio exists to create spaces that feel honest, lived in,
                  and quietly transformative. Every project begins with
                  listening and ends with an environment. */}
                  I create digital experiences that streamline user journeys, boost
                  performance, and scale efficiently— focusing on clean architecture
                  and full-stack JavaScript solutions.
                </h2>
              </Copy>
              <div className="studio-hero-hero-img">
                {/* <img src="/studio/studio.png" alt="" /> */}
                <img src="/studio/latestenhanced.jpg" alt="" />

              </div>
            </div>
          </div>
        </section>
        <section className="more-facts">
          <div className="container">
            <div className="more-facts-items">
              <div className="fact">
                <Copy delay={0.1}>
                  <p>Projects Completed</p>
                  <h2>50+</h2>
                </Copy>
              </div>
              <div className="fact">
                <Copy delay={0.2}>
                  <p>Technologies mastered</p>
                  <h2>10+</h2>
                </Copy>
              </div>
              <div className="fact">
                <Copy delay={0.3}>
                  <p>Collaborations</p>
                  <h2>20+</h2>
                </Copy>
              </div>
              <div className="fact">
                <Copy delay={0.4}>
                  <p>
                    Hours logged
                  </p>
                  <h2>3K+</h2>
                </Copy>
              </div>
              <div className="fact">
                <Copy delay={0.5}>
                  <p>Lines of code written
                  </p>
                  <h2>1M+</h2>
                </Copy>
              </div>
            </div>
          </div>
        </section>
        <section className="how-we-work-container">
          <div className="container">
            <HowWeWork />
          </div>
        </section>
        <CTAWindow
          // img="/studio/about-cta-window.jpg"
          img="/studio/check.png"
          header="The Archive"
          callout="Designs that speak through code"
          // description="Each project tells a story of light, material, and rhythm. Explore how ideas take shape and grow into lasting environments."
          description="Each project tells a story of logic, design, and flow. Explore how ideas take shape and grow into lasting applications."

        />
        <Spotlight />
      </div>
      <ConditionalFooter />
    </>
  );
};

export default page;
