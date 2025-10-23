"use client";

import { useEffect, useState } from "react";
import styles from "./Preloader.module.css";

interface PreloaderProps {
  onLoadComplete?: () => void;
}

export default function Preloader({ onLoadComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate asset loading with progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsLoading(false);
            onLoadComplete?.();
          }, 500);
          return 100;
        }
        // Randomize progress increments for realistic feel
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onLoadComplete]);

  if (!isLoading) return null;

  return (
    <div className={styles.preloader}>
      <div className={styles.loadingContainer}>
        {/* Spinning Loader */}
        <img
          src="/logo2.png"
          alt="Loading"
          className={styles.loader}
        />
        
        {/* Progress Bar */}
        <div className={styles.progressBar}>
          <div
            className={styles.progressFill}
            style={{ width: `${progress}%` }}
          />
        </div>
        
        {/* Percentage Display */}
        <div className={styles.percentage}>
          {Math.round(progress)}%
        </div>
      </div>
    </div>
  );
}
