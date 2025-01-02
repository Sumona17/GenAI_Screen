import React from "react";
import "./secondScreen.css";

const SecondScreen = () => {
  return (
    <div className="screen-container">
      {/* First Card */}
      <div className="card-small">
        <p className="card-text">GenAI</p>
      </div>

      {/* Second Card */}
      <div className="card-large">
        <p className="card-text">
          Google – Flask
          <br />
          OpenAI
          <br />
          Anthropic
          <br />
          LangChain
          <br />
          Agentic AI
        </p>
      </div>
    </div>
  );
};

export default SecondScreen;
