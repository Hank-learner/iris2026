"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import styles from "./ContactPage.module.css";

interface TeamMember {
  name: string;
  role: string;
  phone: string;
  email: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Ahan Sharma",
    role: "President",
    phone: "+91 98765 43210",
    email: "ahan@oasis.org",
    image: "/images/contact/Ahan.png",
  },
  {
    name: "Arshita Verma",
    role: "Vice President",
    phone: "+91 98765 43211",
    email: "arshita@oasis.org",
    image: "/images/contact/Arshita.png",
  },
  {
    name: "Aryan Patel",
    role: "General Secretary",
    phone: "+91 98765 43212",
    email: "aryan@oasis.org",
    image: "/images/contact/Aryan.png",
  },
  {
    name: "Ayushmaan Singh",
    role: "Joint Secretary",
    phone: "+91 98765 43213",
    email: "ayushmaan@oasis.org",
    image: "/images/contact/Ayushmaan.png",
  },
  {
    name: "Dhruv Malhotra",
    role: "Treasurer",
    phone: "+91 98765 43214",
    email: "dhruv@oasis.org",
    image: "/images/contact/Dhruv.png",
  },
  {
    name: "Ishita Kapoor",
    role: "Marketing Head",
    phone: "+91 98765 43215",
    email: "ishita@oasis.org",
    image: "/images/contact/Ishita.png",
  },
  {
    name: "Pranav Reddy",
    role: "Events Coordinator",
    phone: "+91 98765 43216",
    email: "pranav@oasis.org",
    image: "/images/contact/Pranav.png",
  },
  {
    name: "Rahul Gupta",
    role: "Technical Head",
    phone: "+91 98765 43217",
    email: "rahul@oasis.org",
    image: "/images/contact/Rahul.png",
  },
];

export default function ContactPage() {
  return (
    <div className={styles.contactPageWrapper}>
      {/* Background */}
      <div className={styles.backgroundContainer}>
        <div className={styles.leftBg}>
          <img
            src="/images/contact/Door1.png"
            alt=""
            className={styles.bgImage}
          />
        </div>
        <div className={styles.rightBg}>
          <img
            src="/images/contact/Door2.png"
            alt=""
            className={styles.bgImage}
          />
        </div>
        <div className={styles.horiBar}></div>
        <div className={styles.paperTexture}></div>
      </div>

      {/* Contact Page Content */}
      <div className={styles.contactPage}>
        {/* Heading */}
        <div className={styles.contactHeading}>
          <img
            src="/images/contact/contact-banner.png"
            alt="Contact Us"
            className={styles.contactBanner}
          />
          <h1 className={styles.contactTitle}>Contact Us</h1>
        </div>

        {/* Contact Info Section */}
        <div className={styles.contactInfoSection}>
          <h2 className={styles.sectionTitle}>Get in Touch</h2>
          <div className={styles.contactInfo}>
            <div className={styles.infoCard}>
              <MapPin className={styles.infoIcon} size={32} />
              <h3>Address</h3>
              <p>BITS Pilani, Pilani Campus</p>
              <p>Vidya Vihar, Pilani</p>
              <p>Rajasthan - 333031, India</p>
            </div>
            <div className={styles.infoCard}>
              <Mail className={styles.infoIcon} size={32} />
              <h3>Email</h3>
              <p>
                <a href="mailto:contact@oasis.org">contact@oasis.org</a>
              </p>
              <p>
                <a href="mailto:info@oasis.org">info@oasis.org</a>
              </p>
            </div>
            <div className={styles.infoCard}>
              <Phone className={styles.infoIcon} size={32} />
              <h3>Phone</h3>
              <p>
                <a href="tel:+911596244700">+91 1596 244700</a>
              </p>
              <p>
                <a href="tel:+911596245073">+91 1596 245073</a>
              </p>
            </div>
          </div>
        </div>

        {/* Doors Section */}
        <div className={styles.contactDoors}>
          <img
            src="/images/contact/DoorsCombined.png"
            alt="Doors"
            className={styles.doorsImage}
          />
          <img
            src="/images/contact/DoorsMobile.png"
            alt="Doors"
            className={styles.doorsImageMobile}
          />
        </div>

        {/* Team Section */}
        <div className={styles.contactSection}>
          <h2 className={styles.sectionTitle}>Meet the Team</h2>
          <div className={styles.contactContent}>
            {teamMembers.map((member) => (
              <div key={member.name} className={styles.teamCard}>
                <div className={styles.teamImageContainer}>
                  <img
                    src={member.image}
                    alt={member.name}
                    className={styles.teamImage}
                  />
                  <div className={styles.teamOverlay}></div>
                </div>
                <div className={styles.teamInfo}>
                  <h3 className={styles.teamName}>{member.name}</h3>
                  <p className={styles.teamRole}>{member.role}</p>
                  <div className={styles.teamContact}>
                    <a href={`tel:${member.phone}`} className={styles.contactLink}>
                      <Phone size={16} />
                      <span>{member.phone}</span>
                    </a>
                    <a href={`mailto:${member.email}`} className={styles.contactLink}>
                      <Mail size={16} />
                      <span>{member.email}</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
