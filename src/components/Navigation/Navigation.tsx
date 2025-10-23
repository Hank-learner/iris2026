"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Navigation.module.css";

export default function Navigation() {
  const [hamOpen, setHamOpen] = useState(false);
  const [mainHamOpen, setMainHamOpen] = useState(false);

  const toggleHam = () => {
    setHamOpen(!hamOpen);
  };

  const toggleMainHam = () => {
    setMainHamOpen(!mainHamOpen);
  };

  const closeAll = () => {
    setMainHamOpen(false);
    setHamOpen(false);
  };

  return (
    <>
      {/* Navigation Bar with Hamburger Button */}
      <nav className={styles.nav}>
        <button
          className={styles.hamMenuBtn}
          onClick={toggleHam}
          aria-label="Open menu"
        >
          <img
            src="/svgs/landing/moon1.svg"
            alt="Menu"
            className={styles.moon}
          />
        </button>
      </nav>

      {/* First Level Hamburger Container */}
      <div
        className={`${styles.hamContainer} ${hamOpen ? styles.hamOpen : ""}`}
      >
        {/* Blur Background */}
        <div className={styles.blur} onClick={toggleHam}></div>

        {/* Hamburger Menu Content */}
        <div className={styles.translateHam}>
          <button
            className={styles.hamButton}
            onClick={toggleMainHam}
            aria-label="Open main menu"
          >
            <img
              src="/svgs/landing/hamBack.svg"
              alt="Menu Background"
              className={styles.hamBack}
            />
          </button>

          {/* Close Button */}
          <button
            className={styles.closeBtn}
            onClick={closeAll}
            aria-label="Close menu"
          >
            <img
              src="/svgs/landing/hamX.svg"
              alt="Close"
              className={styles.hamX}
            />
          </button>
        </div>
      </div>

      {/* Second Level - Main Hamburger Menu */}
      <div
        className={`${styles.mainHamContainer} ${
          mainHamOpen ? styles.mainHamOpen : ""
        }`}
      >
        <div className={styles.showMainHam}>
          {/* Main Ham Background */}
          <div className={styles.mainHamBg}>
            {/* Cloud decorations */}
            <img
              src="/svgs/landing/hamClouds/cloud1.min.svg"
              alt=""
              className={styles.cloud1}
            />
            <img
              src="/svgs/landing/hamClouds/cloud2.min.svg"
              alt=""
              className={styles.cloud2}
            />
            <img
              src="/svgs/landing/hamClouds/cloud3.min.svg"
              alt=""
              className={styles.cloud3}
            />
          </div>

          {/* Navigation Items */}
          <div className={styles.navItems}>
            <Link href="/" className={styles.navItem} onClick={closeAll}>
              <img
                src="/svgs/landing/homeIcon.svg"
                alt="Home"
                className={styles.navIcon}
              />
              <span>Home</span>
            </Link>

            <Link href="/events" className={styles.navItem} onClick={closeAll}>
              <img
                src="/svgs/landing/eventsIcon.svg"
                alt="Events"
                className={styles.navIcon}
              />
              <span>Events</span>
            </Link>

            <Link href="/about" className={styles.navItem} onClick={closeAll}>
              <img
                src="/svgs/landing/aboutusIcon.svg"
                alt="About Us"
                className={styles.navIcon}
              />
              <span>About Us</span>
            </Link>

            <Link href="/contact" className={styles.navItem} onClick={closeAll}>
              <img
                src="/svgs/landing/heartIcon.svg"
                alt="Contact"
                className={styles.navIcon}
              />
              <span>Contact</span>
            </Link>

            <Link
              href="/register"
              className={`${styles.navItem} ${styles.registerItem}`}
              onClick={closeAll}
            >
              <span>Register</span>
            </Link>
          </div>

          {/* Back Button */}
          <button
            className={styles.backBtn}
            onClick={toggleMainHam}
            aria-label="Go back"
          >
            <img
              src="/svgs/registration/back.svg"
              alt="Back"
              className={styles.backIcon}
            />
          </button>

          {/* Footer Text */}
          <div className={styles.mwd}>Made with ❤️ by Dept. of Visual Media</div>
        </div>
      </div>

      {/* Background Overlay Mask */}
      <div
        className={`${styles.wrapper} ${hamOpen ? styles.mask : ""} ${
          hamOpen || mainHamOpen ? styles.pointerNoneEvent : ""
        }`}
      />
    </>
  );
}
