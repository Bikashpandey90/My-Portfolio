"use client";
import "./HowWeWork.css";

import { useEffect, useRef, useState } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import Copy from "../Copy/Copy";

gsap.registerPlugin(ScrollTrigger);

const HowWeWork = () => {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef(null);
  const stepsRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const scrollTriggersRef = useRef([]);

  const checkMobile = () => {
    setIsMobile(window.innerWidth <= 1000);
  };

  useEffect(() => {
    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  useGSAP(
    () => {
      if (!stepsRef.current) return;

      const steps = stepsRef.current.querySelectorAll(".how-we-work-step");
      gsap.set(steps, { opacity: 0, x: -40 });

      ScrollTrigger.create({
        trigger: stepsRef.current,
        start: "top 75%",
        once: true,
        animation: gsap.to(steps, {
          opacity: 1,
          x: 0,
          duration: 0.3,
          stagger: -0.1,
          ease: "none",
        }),
      });
    },
    { scope: stepsRef }
  );

  useEffect(() => {
    const container = containerRef.current;
    const header = headerRef.current;
    const cards = cardsRef.current;

    if (!container || !header || !cards) return;

    if (!isMobile) {
      const mainTrigger = ScrollTrigger.create({
        trigger: container,
        start: "top top",
        endTrigger: cards,
        end: "bottom bottom",
        pin: header,
        pinSpacing: false,
      });
      scrollTriggersRef.current.push(mainTrigger);

      const cardElements = cards.querySelectorAll(".how-we-work-card");

      cardElements.forEach((card, index) => {
        const cardTrigger = ScrollTrigger.create({
          trigger: card,
          start: "top center",
          end: "bottom center",
          onEnter: () => setActiveStep(index),
          onEnterBack: () => setActiveStep(index),
          onLeave: () => {
            if (index < cardElements.length - 1) {
              setActiveStep(index + 1);
            }
          },
          onLeaveBack: () => {
            if (index > 0) {
              setActiveStep(index - 1);
            }
          },
        });
        scrollTriggersRef.current.push(cardTrigger);
      });
    }

    return () => {
      scrollTriggersRef.current.forEach((trigger) => trigger.kill());
      scrollTriggersRef.current = [];
    };
  }, [isMobile]);

  return (
    <div className="how-we-work" ref={containerRef}>
      <div className="how-we-work-col how-we-work-header" ref={headerRef}>
        <div className="container">
          <div className="how-we-work-header-content">
            <div className="how-we-work-header-callout">
              <Copy delay={0.1}>
                <p>Process in focus</p>
              </Copy>
            </div>
            <Copy delay={0.15}>
              <h3>
                {/* From first sketches to final details, our process is shaped to
                bring clarity and rhythm */}
                From first ideas to finished applications, our approach is shaped to
                bring seamless functionality.
              </h3>
            </Copy>
            <div className="how-we-work-steps" ref={stepsRef}>
              <div
                className={`how-we-work-step ${activeStep === 0 ? "active" : ""
                  }`}
              >
                <p className="how-we-work-step-label">Step</p>
                <p className="how-we-work-step-index">1</p>
              </div>
              <div
                className={`how-we-work-step ${activeStep === 1 ? "active" : ""
                  }`}
              >
                <p className="how-we-work-step-label">Step</p>
                <p className="how-we-work-step-index">2</p>
              </div>
              <div
                className={`how-we-work-step ${activeStep === 2 ? "active" : ""
                  }`}
              >
                <p className="how-we-work-step-label">Step</p>
                <p className="how-we-work-step-index">3</p>
              </div>
              <div
                className={`how-we-work-step ${activeStep === 3 ? "active" : ""
                  }`}
              >
                <p className="how-we-work-step-label">Step</p>
                <p className="how-we-work-step-index">4</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="how-we-work-col how-we-work-cards" ref={cardsRef}>
        <div className="how-we-work-card">
          <div className="how-we-work-card-img">
            <img src="/how-we-work/newprocess1.png" alt="" />
          </div>
          <div className="how-we-work-card-copy">
            <div className="how-we-work-card-index-label">
              <h3>Discovery & Planning</h3>
            </div>
            <p className="md">
              {/* We begin with listening and study. Site, climate, and daily
              routines inform the brief so we can define aims, constraints, and
              measures of success with clarity. */}
              I begin by understanding your goals,your users and your product's
              vision. The foundation of every project is solid planning and clear
              communication.
            </p>
          </div>
        </div>
        <div className="how-we-work-card">
          <div className="how-we-work-card-img">
            <img src="/how-we-work/newprocess2.png" alt="" />
          </div>
          <div className="how-we-work-card-copy">
            <div className="how-we-work-card-index-label">
              <h3>Architecture Design</h3>
            </div>
            <p className="md">
              {/* We set guiding principles for light, massing, and flow. Quick
              models and diagrams test options and reveal the direction that
              best serves the brief. */}
              After planning, I focus on setting creating a scalable,clean
              architecture that will ensure the smooth functioning of the
              entire application.
            </p>
          </div>
        </div>
        <div className="how-we-work-card">
          <div className="how-we-work-card-img">
            <img src="/how-we-work/newdevelopment.png" alt="" />
          </div>
          <div className="how-we-work-card-copy">
            <div className="how-we-work-card-index-label">
              <h3>Development</h3>
            </div>
            <p className="md">
              {/* We develop drawings and specifications across structure, services,
              and joinery. Materials and samples are reviewed in natural light
              while budget and timeline stay in view. */}
              Leveraging the MERN stack, I develop both front-end and back-end,ensuring
              seamless integration and responsiveness across all devices.
            </p>
          </div>
        </div>
        <div className="how-we-work-card">
          <div className="how-we-work-card-img">
            <img src="/how-we-work/newprocess4.png" alt="" />
          </div>
          <div className="how-we-work-card-copy">
            <div className="how-we-work-card-index-label">
              <h3>Testing & Deployment</h3>
            </div>
            <p className="md">
              {/* We oversee construction with care and precision. After final
              review and finishing, we hand over a space that is ready to live
              in, complete with guidance for long term care. */}
              After rigorous testing and optimization to ensure performance and
              functionality, the final product is deployed, ensuring an optimized
              user experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
