"use client";

import { useState } from "react";
import styles from "./EventsPage.module.css";
import SearchBar from "./SearchBar";
import EventsList from "./EventsList";
import EventsBackground from "./EventsBackground";

export type EventCategory = "Dance" | "Drama" | "Music" | "Photography" | "Text" | "Miscellaneous";

export interface Event {
  id: string;
  title: string;
  category: EventCategory;
  description: string;
  date?: string;
  time?: string;
  venue?: string;
  image?: string;
}

// Sample events data - Replace with actual data
const eventsData: Event[] = [
  {
    id: "1",
    title: "Classical Dance Performance",
    category: "Dance",
    description: "Experience the grace of traditional Indian classical dance forms",
    date: "Oct 25, 2025",
    time: "6:00 PM",
    venue: "Main Auditorium",
  },
  {
    id: "2",
    title: "Street Play Competition",
    category: "Drama",
    description: "Witness powerful performances addressing social issues",
    date: "Oct 26, 2025",
    time: "4:00 PM",
    venue: "Central Lawn",
  },
  {
    id: "3",
    title: "Battle of Bands",
    category: "Music",
    description: "Rock the night with the best college bands",
    date: "Oct 27, 2025",
    time: "8:00 PM",
    venue: "Open Air Theatre",
  },
  {
    id: "4",
    title: "Photography Exhibition",
    category: "Photography",
    description: "Explore stunning visual narratives captured through lens",
    date: "Oct 25-27, 2025",
    time: "All Day",
    venue: "Art Gallery",
  },
  {
    id: "5",
    title: "Poetry Slam",
    category: "Text",
    description: "Express yourself through the power of words",
    date: "Oct 26, 2025",
    time: "5:00 PM",
    venue: "Literature Hall",
  },
  {
    id: "6",
    title: "Cosplay Contest",
    category: "Miscellaneous",
    description: "Bring your favorite characters to life",
    date: "Oct 27, 2025",
    time: "3:00 PM",
    venue: "Convention Center",
  },
  {
    id: "7",
    title: "Contemporary Fusion",
    category: "Dance",
    description: "A blend of modern and traditional dance forms",
    date: "Oct 26, 2025",
    time: "7:00 PM",
    venue: "Main Auditorium",
  },
  {
    id: "8",
    title: "Acoustic Night",
    category: "Music",
    description: "Unplugged melodies under the stars",
    date: "Oct 25, 2025",
    time: "9:00 PM",
    venue: "Amphitheater",
  },
];

export default function EventsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<EventCategory | "All">("All");

  const filteredEvents = eventsData.filter((event) => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || event.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className={styles.eventsContainer}>
      {/* Events Background with decorations */}
      <EventsBackground category={selectedCategory} />

      {/* Events Content */}
      <div className={styles.eventsSubContainer}>
        {/* Heading */}
        <div className={styles.eventsHeading}>
          <img
            src="/svgs/events/top.svg"
            alt="Events"
            className={styles.eventsBanner}
          />
          <h1 className={styles.eventsTitle}>Events</h1>
        </div>

        {/* Search Bar */}
        <SearchBar
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        {/* Events List */}
        <EventsList events={filteredEvents} />

        {/* No Results Message */}
        {filteredEvents.length === 0 && (
          <div className={styles.noResults}>
            <p>No events found matching your criteria.</p>
            <p className={styles.noResultsHint}>Try adjusting your search or category filter.</p>
          </div>
        )}
      </div>
    </div>
  );
}
