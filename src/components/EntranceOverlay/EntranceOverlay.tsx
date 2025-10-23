"use client";

import { useState } from "react";
import styles from "./EntranceOverlay.module.css";

interface EntranceOverlayProps {
  onEnter?: () => void;
}

export default function EntranceOverlay({ onEnter }: EntranceOverlayProps) {
  const [isEntering, setIsEntering] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);

  const handleEnter = () => {
    setIsEntering(true);
    setTimeout(() => {
      setShowOverlay(false);
      onEnter?.();
    }, 2000); // Match ink spread animation duration
  };

  if (!showOverlay) return null;

  return (
    <>
      {/* Main Overlay with Paper Texture */}
      <div className={`${styles.overlay} ${isEntering ? styles.entering : ""}`}>
        {/* Mobile Preloader Image */}
        <img
          src="/images/landing/oasisLogo.png"
          alt="OASIS 2025"
          className={styles.mobilePreloader}
        />

        {/* Info Container */}
        <div className={styles.infoContainer}>
          <div className={styles.btnContainer}>
            <button
              className={styles.enterButton}
              onClick={handleEnter}
              disabled={isEntering}
            >
              <span className={styles.enterButtonText}>Enter</span>
            </button>
          </div>
        </div>

        {/* Info Text */}
        <div className={styles.infoText}>
          Welcome to OASIS 2025: Whispers of Edo. Experience Asia's largest
          student-run cultural festival celebrating traditional Japanese culture.
        </div>
      </div>

      {/* Ink Spread Sketch Overlay - Mask Effect */}
      {isEntering && (
        <div className={styles.sketchOverlay}></div>
      )}
    </>
  );
}
