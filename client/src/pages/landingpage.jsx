import "../css/landingpage.css";

export default function About() {
  return (
    <>
      <h1 className="loginpage">Welcome to your Personal Fitness Tracker</h1>
      <p className="content">
        This is an application where you can get assiatance on creating a meal
        plans, workout routine, and track your progress to help you toward your fitness goals. We hope you enjoy!
      </p>
      <a target="_blank"  className="logo">
          <img src="/pixel-speech-bubble.gif" className="speechbubble" alt="chatgptlogo" />
        </a>
      <div className="loginbtn">
   
      <a target="_blank">
          <img src="/OpenAI-Logo.png" className="chatgptImage" alt="chatgptlogo" />
        </a>
        <button>Login </button>
        <button> Create Login </button>
      </div>
    </>
  );
}
