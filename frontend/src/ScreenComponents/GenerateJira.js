import React, { useState } from "react";
import "./GenerateJira.css";

const GenerateJira = () => {
  const [formData, setFormData] = useState({
    url: "",
    email: "",
    password: "",
    board: "",
    sprint: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (formData.url && formData.email && formData.password && formData.board && formData.sprint) {
      alert("BDD scenarios will be generated for the given Jira details!");
    } else {
      alert("Please fill out all fields!");
    }
  };

  return (
    <div className="generate-jira-wrapper">
      <div className="generate-jira-instructions">
        <h4>What Is This About:</h4>
        <p>
          Transform your user stories into BDD feature file scenarios seamlessly using Jira.
        </p>
        <h4>How To Use:</h4>
        <ol>
          <li>Enter the required Jira details.</li>
          <li>
            Click on the{" "}
            <button className="generate-jira-button-disabled">Generate BDD From Jira</button>{" "}
            button to generate BDD scenarios.
          </li>
          <li>
            Our Gen AI engine will then generate BDD scenarios based on your user stories.
          </li>
          <li>
            After the scenarios are generated, click on the{" "}
            <button className="generate-jira-download-button-disabled">Download</button> button to save
            the BDD scenario Excel file to your device.
          </li>
        </ol>
      </div>
      <div className="generate-jira-form-section">
        <label htmlFor="url">URL:</label>
        <input
          type="text"
          id="url"
          name="url"
          value={formData.url}
          onChange={handleChange}
          placeholder="https://user.atlassian.net"
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="abc@xyz.com"
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <label htmlFor="board">Board Name:</label>
        <select
          id="board"
          name="board"
          value={formData.board}
          onChange={handleChange}
        >
          <option value="">Select Board</option>
          <option value="Board 1">Board 1</option>
          <option value="Board 2">Board 2</option>
          <option value="Board 3">Board 3</option>
        </select>
        <label htmlFor="sprint">Sprint (Active):</label>
        <select
          id="sprint"
          name="sprint"
          value={formData.sprint}
          onChange={handleChange}
        >
          <option value="">Select Sprint</option>
          <option value="Sprint 1">Sprint 1</option>
          <option value="Sprint 2">Sprint 2</option>
          <option value="Sprint 3">Sprint 3</option>
        </select>
        <button className="generate-jira-submit-button" onClick={handleSubmit}>
          Generate BDD From Jira
        </button>
      </div>
    </div>
  );
};

export default GenerateJira;
