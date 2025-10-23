"use client";

import { useState, FormEvent } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./RegistrationPage.module.css";

interface FormData {
  name: string;
  email: string;
  phone: string;
  college: string;
  city: string;
  year: string;
  events: string[];
}

const eventCategories = [
  "Dance", 
  "Drama", 
  "Music", 
  "Photography", 
  "Text/Literary", 
  "Miscellaneous"
];

export default function RegistrationPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    college: "",
    city: "",
    year: "",
    events: [],
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEventToggle = (event: string) => {
    setFormData((prev) => ({
      ...prev,
      events: prev.events.includes(event)
        ? prev.events.filter((e) => e !== event)
        : [...prev.events, event],
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Registration submitted successfully! (This is a demo)");
  };

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className={styles.registrationPageWrapper}>
      {/* Background */}
      <div className={styles.backgroundContainer}>
        <img
          src="/svgs/registration/bg-extended.svg"
          alt="Background"
          className={styles.bgImage}
        />
        <img
          src="/svgs/registration/bg-mobile.svg"
          alt="Background"
          className={styles.bgImageMobile}
        />
        <div className={styles.paperTexture}></div>
      </div>

      {/* Registration Content */}
      <div className={styles.registrationPage}>
        {/* Navigation Arrows */}
        <button
          className={`${styles.navArrow} ${styles.leftArrow}`}
          onClick={prevStep}
          disabled={step === 1}
          aria-label="Previous step"
        >
          <ChevronLeft size={32} />
        </button>

        <button
          className={`${styles.navArrow} ${styles.rightArrow}`}
          onClick={nextStep}
          disabled={step === 3}
          aria-label="Next step"
        >
          <ChevronRight size={32} />
        </button>

        {/* Heading */}
        <div className={styles.registrationHeading}>
          <img
            src="/images/registration/reg-banner.png"
            alt="Register"
            className={styles.registrationBanner}
          />
          <h1 className={styles.registrationTitle}>Register for OASIS 2025</h1>
        </div>

        {/* Form Container */}
        <div className={styles.formContainer}>
          <form onSubmit={handleSubmit} className={styles.form}>
            {/* Step Indicators */}
            <div className={styles.stepIndicators}>
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  className={`${styles.stepIndicator} ${
                    step === s ? styles.stepActive : ""
                  } ${step > s ? styles.stepCompleted : ""}`}
                >
                  {s}
                </div>
              ))}
            </div>

            {/* Step 1: Personal Information */}
            {step === 1 && (
              <div className={styles.formStep}>
                <h2 className={styles.stepTitle}>Personal Information</h2>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.label}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className={styles.input}
                    placeholder="Enter your full name"
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.label}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={styles.input}
                    placeholder="your.email@example.com"
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="phone" className={styles.label}>
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className={styles.input}
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>
            )}

            {/* Step 2: College Information */}
            {step === 2 && (
              <div className={styles.formStep}>
                <h2 className={styles.stepTitle}>College Information</h2>
                <div className={styles.formGroup}>
                  <label htmlFor="college" className={styles.label}>
                    College/University Name *
                  </label>
                  <input
                    type="text"
                    id="college"
                    name="college"
                    value={formData.college}
                    onChange={handleInputChange}
                    required
                    className={styles.input}
                    placeholder="Enter your college name"
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="city" className={styles.label}>
                    City *
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    className={styles.input}
                    placeholder="Enter your city"
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="year" className={styles.label}>
                    Year of Study *
                  </label>
                  <select
                    id="year"
                    name="year"
                    value={formData.year}
                    onChange={handleInputChange}
                    required
                    className={styles.select}
                  >
                    <option value="">Select year</option>
                    <option value="1">1st Year</option>
                    <option value="2">2nd Year</option>
                    <option value="3">3rd Year</option>
                    <option value="4">4th Year</option>
                    <option value="5">5th Year</option>
                    <option value="postgrad">Postgraduate</option>
                  </select>
                </div>
              </div>
            )}

            {/* Step 3: Event Selection */}
            {step === 3 && (
              <div className={styles.formStep}>
                <h2 className={styles.stepTitle}>Event Preferences</h2>
                <p className={styles.stepDescription}>
                  Select the event categories you&apos;re interested in:
                </p>
                <div className={styles.eventSelection}>
                  {eventCategories.map((event) => (
                    <button
                      key={event}
                      type="button"
                      onClick={() => handleEventToggle(event)}
                      className={`${styles.eventBtn} ${
                        formData.events.includes(event) ? styles.eventBtnActive : ""
                      }`}
                    >
                      {event}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Form Navigation */}
            <div className={styles.formNavigation}>
              {step > 1 && (
                <button
                  type="button"
                  onClick={prevStep}
                  className={styles.navBtn}
                >
                  Previous
                </button>
              )}
              {step < 3 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className={`${styles.navBtn} ${styles.navBtnPrimary}`}
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  className={`${styles.navBtn} ${styles.navBtnPrimary}`}
                >
                  Submit Registration
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
