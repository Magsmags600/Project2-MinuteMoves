import "../css/initialpage.css";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <>
      <h1 className="loginpage">Welcome to your Personal Fitness Tracker</h1>

      <p className="content">
        This is an application where you can get assistance on creating a meal
        plan, workout routine, and also to track your progress to help you toward your fitness goals. We hope you enjoy!
      </p>
      
      <a target="_blank"  className="logo">
          <img src="/pixel-speech-bubble.gif" className="speechbubble" alt="chatgptlogo" />
        </a>
      <div className="loginbtn">
   
      <a target="_blank">
          <img src="../assets/OpenAI-logo.png" className="chatgptImage" alt="chatgptlogo" />
          
        </a>
        <Link to="/Login">
          <button>Login</button>
        </Link>
        <Link to="/CreateAccount">
          <button>Create Login</button>
        </Link>
      </div>
    </>
  );
}


