"use client";

import styles from "./EventsList.module.css";
import EventItem from "./EventItem";
import type { Event } from "./EventsPage";

interface EventsListProps {
  events: Event[];
}

export default function EventsList({ events }: EventsListProps) {
  return (
    <div className={styles.eventsListCont}>
      <div className={styles.eventsList}>
        {events.map((event) => (
          <EventItem key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}
