"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Navigation.module.css";

// Define a type for the link structure for better type safety
interface NavLink {
  href: string;
  label: string;
  newTab?: boolean; // Optional property to indicate opening in a new tab
}

export default function Navigation() {
  const [isDesktop, setIsDesktop] = useState<boolean>(true);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 769);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen((v) => !v);
  const closeSidebar = () => setSidebarOpen(false);

  // UPDATED: Added newTab: true for the Brochure link
  const navLinks: NavLink[] = [
    { href: "/", label: "Home" },
    { href: "/events", label: "Events" },
    { href: "/gallery", label: "Gallery" },
    { href: "/team", label: "Team" },
    { href: "/brochure/iris-brochure.pdf", label: "Brochure", newTab: true },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      {isDesktop && (
        <header className={styles.desktopHeader}>
          <nav className={styles.desktopNav}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={styles.desktopLink}
                // LOGIC ADDED: Apply target and rel attributes conditionally
                target={link.newTab ? "_blank" : "_self"}
                rel={link.newTab ? "noopener noreferrer" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </header>
      )}

      {/* Mobile View */}
      {!isDesktop && (
        <>
          <nav className={`${styles.nav} ${sidebarOpen ? styles.hideHamburger : ""}`}>
            <button
              className={styles.hamMenuBtn}
              onClick={toggleSidebar}
              aria-label="Open menu"
            >
              <img src="/svgs/landing/moonHam.svg" alt="Menu" className={styles.moon} />
            </button>
          </nav>

          <div className={`${styles.sidebarContainer} ${sidebarOpen ? styles.sidebarOpen : ""}`}>
            <div className={styles.sidebarOverlay} onClick={closeSidebar} />

            <aside className={styles.sidebar}>
              <button
                className={styles.sidebarClose}
                onClick={closeSidebar}
                aria-label="Close menu"
              >
                <img src="/svgs/landing/hamX.svg" alt="Close" className={styles.hamX} />
              </button>

              <div className={styles.sidebarNav}>
                {navLinks.map((link, idx) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={styles.sidebarItem}
                    onClick={closeSidebar}
                    // LOGIC ADDED: Apply target and rel attributes conditionally
                    target={link.newTab ? "_blank" : "_self"}
                    rel={link.newTab ? "noopener noreferrer" : undefined}
                    style={{ "--i": idx + 1 } as React.CSSProperties}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className={styles.mwd}>
                Made with <img src="/icons/love.png" alt="love" className={styles.loveIcon} /> by S&IT, IRIS
              </div>
            </aside>
          </div>

          <div className={`${styles.wrapper} ${sidebarOpen ? styles.mask : ""}`} />
        </>
      )}
    </>
  );
}