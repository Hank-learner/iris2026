"use client";

import { useState } from "react";
import styles from "./AboutPage.module.css";
import VideoPlayer from "./VideoPlayer";
import LetterCarousel from "./LetterCarousel";

export default function AboutPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentLetter, setCurrentLetter] = useState(0);

  return (
    <div className={styles.aboutContainer}>
      {/* Background */}
      <div className={styles.backgroundContainer}>
        <img
          src="/images/aboutus/backg.png"
          alt="Background"
          className={styles.bgImage}
        />
        <div className={styles.paperTexture}></div>
      </div>

      {/* Content 3D Container */}
      <div className={styles.content3D}>
        {/* Heading */}
        <div className={styles.aboutHeading}>
          <img
            src="/svgs/aboutus/abtus.svg"
            alt="About Us"
            className={styles.aboutBanner}
          />
          <h1 className={styles.aboutTitle}>About OASIS</h1>
        </div>

        {/* Video Player Section */}
        <VideoPlayer isPlaying={isPlaying} setIsPlaying={setIsPlaying} />

        {/* Description Text */}
        <div className={styles.descriptionContainer}>
          <div className={styles.description}>
            <p>
              OASIS, the annual cultural festival of BITS Pilani, Pilani Campus, stands as one of
              Asia&apos;s largest and most vibrant student-run cultural festivals. For over five decades,
              OASIS has been a celebration of creativity, talent, and cultural diversity.
            </p>
            <p>
              This year, we embrace the theme <strong>&quot;Whispers of Edo&quot;</strong> - a journey through
              the rich tapestry of traditional Japanese culture. From the elegant art forms to the
              philosophical depth, we invite you to experience the magic of the Edo period.
            </p>
            <p>
              Join us for three days of mesmerizing performances, thought-provoking competitions,
              spectacular showcases, and unforgettable memories. OASIS 2025 promises to be an
              immersive experience that transcends boundaries and celebrates the spirit of youth.
            </p>
          </div>
        </div>

        {/* Letter Carousel */}
        <LetterCarousel
          currentLetter={currentLetter}
          setCurrentLetter={setCurrentLetter}
        />

        {/* Stats Section */}
        <div className={styles.statsContainer}>
          <div className={styles.stat}>
            <h3 className={styles.statNumber}>53+</h3>
            <p className={styles.statLabel}>Years of Legacy</p>
          </div>
          <div className={styles.stat}>
            <h3 className={styles.statNumber}>50K+</h3>
            <p className={styles.statLabel}>Footfall</p>
          </div>
          <div className={styles.stat}>
            <h3 className={styles.statNumber}>300+</h3>
            <p className={styles.statLabel}>Colleges</p>
          </div>
          <div className={styles.stat}>
            <h3 className={styles.statNumber}>100+</h3>
            <p className={styles.statLabel}>Events</p>
          </div>
        </div>
      </div>
    </div>
  );
}
