import React, { useState } from "react";
import "./GenerateFile.css";

const GenerateFile = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleGenerate = () => {
    if (selectedFile) {
      alert(`File "${selectedFile.name}" is uploaded successfully!`);
    } else {
      alert("Please select a file first!");
    }
  };

  return (
    <div className="generate-file-container">
      <div className="instructions">
        <h4>What Is This About:</h4>
        <p>
          Transform your user stories into BDD feature file scenarios seamlessly.
        </p>
        <h4>How To Use:</h4>
        <ol>
          <li>
            Prepare your user stories in an Excel sheet, with each user story in a
            separate row.
          </li>
          <li>
            Upload the excel sheet and click on the{" "}
            <button className="generate-button-disabled">Generate BDD</button> button.
          </li>
          <li>
            Our Gen AI engine will then generate BDD scenarios based on your user
            stories.
          </li>
          <li>
            After the scenarios are generated, click on the{" "}
            <button className="download-button-disabled">Download</button> button to
            save the BDD scenario Excel file to your device.
          </li>
        </ol>
        <p>
          <strong>File Format:</strong> Xlsx, xls Format
        </p>
      </div>
      <div className="file-upload-section">
        <input
          type="file"
          className="file-input"
          onChange={handleFileChange}
          accept=".xlsx,.xls"
        />
        <button className="generate-button" onClick={handleGenerate}>
          Generate BDD
        </button>
      </div>
    </div>
  );
};

export default GenerateFile;
