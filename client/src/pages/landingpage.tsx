// src/components/LandingPage.tsx

import React from "react";
import "../css/LandingPage.css";
import { Link } from "react-router-dom";
import colorful from '../assets/MinuteMovesColorful.png';
import logo from '../assets/Logopic.png';

export default function LandingPage() {
  return (
    <div className="landing-page">
      <h1 className="title">Welcome to MinuteMoves!</h1>
      <p className="content">
        Personalized Fitness and Food for Every Goal: Make the most of your time with brief, targeted workouts and nutrition that support your individual goals.
      </p>

      <div className="main-cards">
        {/* Left-hand Card */}
        <div className="left-card">
          {/* Tagline Card */}
          <div className="tagline-card">
            <p className="tagline-text">Minutes That Matter! </p>
          </div>

          {/* Three Cards */}
          <div className="three-cards">
            <div className="small-card top-card">
              <p>Fuel Your Goals, Minute by Minute: Fitness and Food Tailored to Your Path.</p>
            </div>
            <div className="small-card middle-card">
              <p>Achieve More in Minutes: Small Efforts, Big Results, Your Unique Way.</p>
            </div>
            <div className="small-card bottom-card">
              <p>One Minute, One Step Closer: Fitness & Nutrition That Fits Your Goals.</p>
            </div>
          </div>

          {/* Image Placeholder Below Three Cards */}
          <div className="image-placeholder">
            <img src={logo} alt="Placeholder Image" className="placeholder-image" />
          </div>
        </div>

        {/* Right-hand Card with Image and Text Cards */}
        <div className="right-card">
          <div className="image-card top-image-card">
            <img src={colorful} alt="Image 1" className="card-image" />
          </div>

          {/* First Text Card Below Image */}
          <div className="text-card">
            <p>Empower your fitness journey with tools that are easy to follow, tailored to your needs, and designed for real progress!</p>
          </div>

          {/* Second Text Card Below First Text Card */}
          <div className="text-card">
            <p>Track your daily progress and celebrate each milestone along the way with MinuteMoves!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

