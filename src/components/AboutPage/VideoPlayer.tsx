"use client";

import { Play, Pause, SkipBack, SkipForward } from "lucide-react";
import styles from "./VideoPlayer.module.css";

interface VideoPlayerProps {
  isPlaying: boolean;
  setIsPlaying: (playing: boolean) => void;
}

export default function VideoPlayer({ isPlaying, setIsPlaying }: VideoPlayerProps) {
  return (
    <div className={styles.videoSection}>
      {/* Video Container with 3D Effect */}
      <div className={styles.videoWrapper}>
        {/* Fan Decorations */}
        <img
          src="/svgs/aboutus/fan.png"
          alt=""
          className={`${styles.fan} ${styles.fan1}`}
        />
        <img
          src="/svgs/aboutus/fan.png"
          alt=""
          className={`${styles.fan} ${styles.fan2}`}
        />

        {/* Video Player */}
        <div className={styles.vid}>
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="OASIS 2025 - Whispers of Edo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className={styles.videoIframe}
          ></iframe>
        </div>

        {/* Video Controls */}
        <div className={styles.controls}>
          <div className={styles.buttonContainer}>
            <button className={styles.controlBtn} aria-label="Previous">
              <SkipBack size={24} />
            </button>
            <button
              className={`${styles.controlBtn} ${styles.playBtn}`}
              onClick={() => setIsPlaying(!isPlaying)}
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? <Pause size={28} /> : <Play size={28} />}
            </button>
            <button className={styles.controlBtn} aria-label="Next">
              <SkipForward size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
