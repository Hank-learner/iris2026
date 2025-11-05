"use client";

import { useEffect, useState } from "react";
import styles from "./LandingPage.module.css";
import CountdownTimer from "./CountdownTimer";
import SocialLinks from "./SocialLinks";

export default function LandingPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.wrapper}>
      {/* Background Container with Parallax */}
      <div className={styles.backgroundContainer}>
        {/* Desktop Background */}
        <div className={styles.desktopBackground}>
          <img
            src="/images/landing/background1.png"
            alt="Edo Mountains"
            className={styles.landingImage}
            style={{
              transform: `translateY(${scrollY * 0.5}px)`,
            }}
          />
        </div>

        {/* Mobile Background */}
        <div className={styles.mobileBackgroundContainer}>
          <img
            src="/svgs/landing/mobileBackground.svg"
            alt="Background"
            className={styles.mobileBackground}
          />
          <img
            src="/images/landing/mobileMountains.png"
            alt="Mountains"
            className={styles.mobileMountains}
            style={{
              transform: `translateY(${scrollY * 0.3}px)`,
            }}
          />
          <img
            src="/images/landing/mobileCloud.png"
            alt="Clouds"
            className={styles.mobileCloud}
            style={{
              transform: `translateX(${scrollY * 0.2}px)`,
            }}
          />
        </div>

        {/* Logo Container */}
        <div className={styles.logoContainer}>
          <img
            src="/images/landing/oasisLogo.png"
            alt="OASIS 2025"
            className={styles.logo}
          />
        </div>
      </div>

      {/* Countdown Timer */}
      <CountdownTimer />

      {/* Scroller for Content */}
      <div className={styles.scrollerWrapper}>
        <div className={styles.scroller}>
          <div className={styles.landingContainer}>
            {/* Register Button */}
            {/* <div className={styles.registerBtnContainer}>
              <a href="/register" className={styles.registerBtn}>
                <img
                  src="/svgs/landing/registerBtn.svg"
                  alt="Register"
                  className={styles.registerBtn}
                />
                <img
                  src="/svgs/landing/mobileRegisterBtn.svg"
                  alt="Register"
                  className={styles.mobileRegisterBtn}
                />
                <span className={styles.registerBtnText}>Register Now</span>
              </a>
            </div> */}

            {/* Foreground Container with Tree */}
            <div className={styles.foregroundContainer}>
              <div className={styles.treeContainer}>
                <div className={styles.tree}>
                  {/* Desktop Tree */}
                  <img
                    src="/images/landing/tree1.png"
                    alt="Tree"
                    className={styles.treeDesktop}
                  />
                  {/* Mobile Tree */}
                  <img
                    src="/images/landing/treeMob.png"
                    alt="Tree"
                    className={styles.treeMob}
                  />

                  {/* Social Links Component */}
                  <SocialLinks />
                </div>

                {/* Tree Extender for Scroll */}
                {/* <div className={styles.treeExtender}></div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Container for About Us Section */}
      <div className={styles.bottomContainer}>
        <div className={styles.bottomOverlay}></div>
        <div className={styles.aboutUsContainer}>
          <div className={styles.aboutUsWrapper}>
            {/* About Us content will go here */}
            <h2 style={{ fontFamily: "var(--font-japan-ramen)", fontSize: "3rem", textAlign: "center", color: "#f2dd7c" }}>
              About OASIS
            </h2>
            <p style={{ fontFamily: "Abhaya Libre", fontSize: "1.2rem", textAlign: "center", maxWidth: "800px", margin: "2rem auto", lineHeight: "1.8" }}>
              OASIS is the annual cultural festival of BITS Pilani, Pilani Campus.
              It is a 3-4 day festival held in the month of October-November.
              This year marks the 53rd edition of OASIS, celebrating the theme
              &quot;Whispers of Edo&quot; - a journey through traditional Japanese culture.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
