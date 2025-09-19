import React, { useEffect, useRef } from "react";
import "./Cursor.css";
import gsap from "gsap";
import { MdOutlineArrowOutward } from "react-icons/md";
import AnimatedButton from "../AnimatedButton/AnimatedButton";

const Cursor = () => {
  const cursorRef = useRef(null);
  const iconRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const icon = iconRef.current;
    const projects = document.querySelectorAll(".featured-project-card-img");

    gsap.set(cursor, {
      scale: 0.1,
    });

    gsap.set(icon, {
      scale: 0,
    });

    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    projects.forEach((project) => {
      project.addEventListener("mouseenter", () => {
        gsap.to(cursor, {
          scale: 1,
          duration: 0.5,
          ease: "power2.out",
          onStart: () => {
            gsap.to(icon, {
              scale: 1,
              duration: 0.3,
              ease: "power2.out",
            });
          },
        });
      });

      project.addEventListener("mouseleave", () => {
        gsap.to(icon, {
          scale: 0,
          duration: 0.3,
          ease: "power2.out",
          onStart: () => {
            gsap.to(cursor, {
              scale: 0.1,
              duration: 0.5,
              ease: "power2.out",
            });
          },
        });
      });
    });

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      projects.forEach((project) => {
        project.removeEventListener("mouseenter", () => { });
        project.removeEventListener("mouseleave", () => { });
      });
    };
  }, []);

  return (
    <div className="cursor" ref={cursorRef}>
      <div className="cursor-icon" ref={iconRef}>
        <MdOutlineArrowOutward size={28} />
      </div>
    </div>
    // <AnimatedButton label="View Project" route="/test" />
  );
};

export default Cursor;
