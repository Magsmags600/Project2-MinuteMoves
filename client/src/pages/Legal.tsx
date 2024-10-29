// src/pages/Legal.tsx

import React from "react";

interface LegalProps {
  section: "about" | "privacy" | "terms" | "contact";
}

const Legal: React.FC<LegalProps> = ({ section }) => {
  const renderContent = () => {
    switch (section) {
      case "about":
        return (
          <section style={styles.section}>
            <h2 style={styles.heading}>About MinuteMoves</h2>
            <p style={styles.text}>
              MinuteMoves is designed to help you achieve your fitness and wellness goals efficiently and effectively...
            </p>
          </section>
        );
      case "privacy":
        return (
          <section style={styles.section}>
            <h2 style={styles.heading}>Data Privacy Policy</h2>
            <p style={styles.text}>
              MinuteMoves is committed to protecting your personal information...
            </p>
          </section>
        );
      case "terms":
        return (
          <section style={styles.section}>
            <h2 style={styles.heading}>Terms and Conditions</h2>
            <p style={styles.text}>
              Welcome to MinuteMoves. By accessing and using this application...
            </p>
          </section>
        );
      case "contact":
        return (
          <section style={styles.section}>
            <h2 style={styles.heading}>Contact Us</h2>
            <p style={styles.text}>If you have any questions, feel free to reach out to us:</p>
            <p style={styles.text}>Email: support@minutemoves.com</p>
            <p style={styles.text}>Phone: +1 (123) 456-7890</p>
          </section>
        );
      default:
        return null;
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Legal Information</h1>
      {renderContent()}
    </div>
  );
};

const styles = {
  container: {
    padding: "2rem",
    backgroundColor: "#D3D0CBFF",
    color: "#2E5266FF",
    maxWidth: "800px",
    margin: "auto",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    fontSize: "2rem",
    textAlign: "center" as "center",
    marginBottom: "2rem",
    color: "#2b74c2",
  },
  section: {
    marginBottom: "2rem",
    padding: "1rem",
    backgroundColor: "#B8C0FF",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    fontSize: "1.5rem",
    color: "#d46108",
    marginBottom: "1rem",
  },
  text: {
    fontSize: "1rem",
    color: "#2E5266FF",
    lineHeight: "1.6",
    marginBottom: "1rem",
  },
};

export default Legal;
