// src/components/LandingPage.tsx

import React from "react";
import "../css/LandingPage.css";
import { Link } from "react-router-dom";
import colorful from '../assets/MinuteMovesColorful.png';


export default function LandingPage() {
  return (
    <div className="landing-page">
      <h1 className="title">Welcome to Your Personal Fitness Tracker</h1>
      <p className="content">
        This is an application where you can get assistance on creating a meal
        plan, workout routine, and track your progress toward your fitness goals.
      </p>

      <div className="main-cards">
        {/* Left-hand Card */}
        <div className="left-card">
          {/* Tagline Card */}
          <div className="tagline-card">
            <p className="tagline-text">Tagline - Minute Moves... and meals. "xyz"</p>
          </div>

          {/* Three Cards */}
          <div className="three-cards">
            <div className="small-card top-card">
              <p>Small changes, big results</p>
            </div>
            <div className="small-card middle-card">
              <p>Your goals, your plan</p>
            </div>
            <div className="small-card bottom-card">
              <p>We support your journey</p>
            </div>
          </div>
        </div>

        {/* Right-hand Card with Image Cards */}
        <div className="right-card">
          <div className="image-card top-image-card">
            <img src={colorful} alt="Image 1" className="card-image" />
          </div>
          
         </div>
      </div>
    </div>
  );
}
