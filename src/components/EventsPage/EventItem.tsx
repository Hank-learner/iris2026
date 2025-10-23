"use client";

import { Calendar, Clock, MapPin } from "lucide-react";
import styles from "./EventItem.module.css";
import type { Event } from "./EventsPage";

interface EventItemProps {
  event: Event;
}

const categoryIcons: Record<string, string> = {
  Dance: "/images/events/dance.png",
  Drama: "/images/events/drama.png",
  Music: "/images/events/music.png",
  Photography: "/images/events/photography.png",
  Text: "/images/events/text.png",
  Miscellaneous: "/images/events/misc.png",
};

export default function EventItem({ event }: EventItemProps) {
  return (
    <div className={styles.eventItem}>
      {/* Category Icon */}
      <div className={styles.eventIcon}>
        <img
          src={categoryIcons[event.category] || "/images/events/misc.png"}
          alt={event.category}
          className={styles.categoryIcon}
        />
      </div>

      {/* Event Content */}
      <div className={styles.eventContent}>
        <h3 className={styles.eventTitle}>{event.title}</h3>
        <p className={styles.eventCategory}>{event.category}</p>
        <p className={styles.eventDescription}>{event.description}</p>

        {/* Event Details */}
        <div className={styles.eventDetails}>
          {event.date && (
            <div className={styles.eventDetail}>
              <Calendar size={16} className={styles.detailIcon} />
              <span>{event.date}</span>
            </div>
          )}
          {event.time && (
            <div className={styles.eventDetail}>
              <Clock size={16} className={styles.detailIcon} />
              <span>{event.time}</span>
            </div>
          )}
          {event.venue && (
            <div className={styles.eventDetail}>
              <MapPin size={16} className={styles.detailIcon} />
              <span>{event.venue}</span>
            </div>
          )}
        </div>
      </div>

      {/* Hover Overlay */}
      <div className={styles.eventOverlay}>
        <button className={styles.viewDetailsBtn}>View Details</button>
      </div>
    </div>
  );
}
