"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./LetterCarousel.module.css";

interface LetterCarouselProps {
  currentLetter: number;
  setCurrentLetter: (index: number) => void;
}

const letters = [
  "/svgs/aboutus/letter1.svg",
  "/svgs/aboutus/letter2.svg",
  "/svgs/aboutus/letter3.svg",
  "/svgs/aboutus/letter4.svg",
  "/svgs/aboutus/letter5.svg",
  "/svgs/aboutus/letter6.svg",
  "/svgs/aboutus/letter7.svg",
  "/svgs/aboutus/letter8.svg",
];

export default function LetterCarousel({
  currentLetter,
  setCurrentLetter,
}: LetterCarouselProps) {
  const nextLetter = () => {
    setCurrentLetter((currentLetter + 1) % letters.length);
  };

  const prevLetter = () => {
    setCurrentLetter((currentLetter - 1 + letters.length) % letters.length);
  };

  return (
    <div className={styles.carouselContainer}>
      <h2 className={styles.carouselHeading}>Explore Our Legacy</h2>

      <div className={styles.carousel}>
        {/* Previous Button */}
        <button
          className={`${styles.carouselBtn} ${styles.prevBtn}`}
          onClick={prevLetter}
          aria-label="Previous letter"
        >
          <ChevronLeft size={32} />
        </button>

        {/* Letter Display */}
        <div className={styles.letterContainer}>
          <div className={styles.letterWrapper}>
            <img
              src={letters[currentLetter]}
              alt={`OASIS 2025 Letter ${currentLetter + 1}`}
              className={styles.letter}
            />
          </div>

          {/* Letter Indicators */}
          <div className={styles.indicators}>
            {letters.map((_, index) => (
              <button
                key={index}
                className={`${styles.indicator} ${
                  index === currentLetter ? styles.indicatorActive : ""
                }`}
                onClick={() => setCurrentLetter(index)}
                aria-label={`Go to letter ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>

        {/* Next Button */}
        <button
          className={`${styles.carouselBtn} ${styles.nextBtn}`}
          onClick={nextLetter}
          aria-label="Next letter"
        >
          <ChevronRight size={32} />
        </button>
      </div>
    </div>
  );
}
