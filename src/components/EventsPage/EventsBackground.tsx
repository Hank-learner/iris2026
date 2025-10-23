"use client";

import { useEffect, useState } from "react";
import styles from "./EventsBackground.module.css";
import type { EventCategory } from "./EventsPage";

interface EventsBackgroundProps {
  category: EventCategory | "All";
}

export default function EventsBackground({ category }: EventsBackgroundProps) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.backgroundContainer}>
      {/* Main Background */}
      <div className={styles.mainBackground}>
        <img
          src="/images/events/backg.png"
          alt="Background"
          className={styles.bgImage}
        />
      </div>

      {/* Star Decorations */}
      <div className={styles.decorations}>
        <img
          src="/svgs/events/star.svg"
          alt=""
          className={`${styles.star} ${styles.star1}`}
          style={{
            transform: `translateY(${scrollY * 0.2}px) rotate(${scrollY * 0.1}deg)`,
          }}
        />
        <img
          src="/svgs/events/star2.svg"
          alt=""
          className={`${styles.star} ${styles.star2}`}
          style={{
            transform: `translateY(${scrollY * 0.15}px) rotate(${-scrollY * 0.1}deg)`,
          }}
        />
        <img
          src="/svgs/events/star.svg"
          alt=""
          className={`${styles.star} ${styles.star3}`}
          style={{
            transform: `translateY(${scrollY * 0.25}px) rotate(${scrollY * 0.15}deg)`,
          }}
        />
      </div>

      {/* Cloud Decorations */}
      <div className={styles.clouds}>
        <img
          src="/svgs/events/cl1.svg"
          alt=""
          className={`${styles.cloud} ${styles.cloud1}`}
          style={{
            transform: `translateX(${scrollY * 0.1}px)`,
          }}
        />
        <img
          src="/svgs/events/cl2.svg"
          alt=""
          className={`${styles.cloud} ${styles.cloud2}`}
          style={{
            transform: `translateX(${-scrollY * 0.08}px)`,
          }}
        />
      </div>

      {/* Paper Texture Overlay */}
      <div className={styles.paperTexture}></div>
    </div>
  );
}
