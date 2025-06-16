/* import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
import React from "react";

export default function Portfolio() {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800 p-6">
      <header className="text-center py-6">
        <h1 className="text-4xl font-bold">Jigisha Shah</h1>
        <p className="text-lg text-gray-600">
          Software QA & Test Engineer | MS ITM @ UTD | Ex-Cognizant/UBS | AWS Certified
        </p>
        <div className="mt-4">
          <a
            href="mailto:jigishashah232000@gmail.com"
            className="text-blue-600 hover:underline"
          >
            jigishashah232000@gmail.com
          </a>
          {" | "}
          <a
            href="https://www.linkedin.com/in/jigisha-shah"
            className="text-blue-600 hover:underline"
          >
            LinkedIn
          </a>
          {" | "}
          <a
            href="https://github.com/jigisha7"
            className="text-blue-600 hover:underline"
          >
            GitHub
          </a>
        </div>
      </header>

      <section className="py-6">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p>
          I’m currently pursuing my Master’s in IT & Management at UT Dallas with a strong focus on QA, automation testing, and cloud
          computing. With 2.5+ years of experience at Cognizant/UBS and internship experience at Foot Locker and Evergreen, I bring a
          deep understanding of both manual and automation testing.
        </p>
      </section>

      <section className="py-6">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>AI-Powered Document Automation (Evergreen)</strong> – Flask, React, OpenAI, LangGraph agents for legal workflow automation.
          </li>
          <li>
            <strong>Quora & Policy Bazaar Automation</strong> – Selenium + Apache POI to test search forms and capture screenshots.
          </li>
          <li>
            <strong>AWS Serverless Hosting (CloudMagic)</strong> – Built a site using S3, DynamoDB, Lambda (workshop project).
          </li>
        </ul>
      </section>

      <section className="py-6">
        <h2 className="text-2xl font-semibold mb-4">Experience</h2>
        <ul className="space-y-4">
          <li>
            <strong>QA Intern – Foot Locker, Dallas</strong> (May 2025 – Present) <br />
            Executed 60+ test cases in JIRA, mobile testing via LambdaTest, validated GeoRadar location behavior.
          </li>
          <li>
            <strong>Student Assistant – UTD</strong> (Feb 2024 – May 2025) <br />
            Provided technical support, improved exam operations by 25%.
          </li>
          <li>
            <strong>Programmer Analyst – Cognizant/UBS, India</strong> (Nov 2020 – Aug 2023) <br />
            Manual & automation testing, HP-ALM, Swagger, SQL/XML validation, GTAF automation.
          </li>
        </ul>
      </section>

      <section className="py-6">
        <h2 className="text-2xl font-semibold mb-4">Skills & Certifications</h2>
        <p>
          <strong>Languages:</strong> Python, Java<br />
          <strong>Testing Tools:</strong> Selenium, TestNG, HP-ALM, LambdaTest, Pytest<br />
          <strong>Database:</strong> MySQL, MongoDB, SQL<br />
          <strong>Certifications:</strong> AWS Certified Cloud Practitioner<br />
          <strong>Other Tools:</strong> Jenkins, Jira, Swagger, Control-M
        </p>
      </section>

      <section className="py-6">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p>
          <a href="mailto:jigishashah232000@gmail.com" className="text-blue-600 hover:underline">
            Email Me
          </a>
        </p>
        <p>
          <a href="/Jigisha_FL_Resume.pdf" download className="text-blue-600 hover:underline">
            Download My Resume
          </a>
        </p>
      </section>

      <footer className="text-center text-sm text-gray-500 py-6">
        &copy; 2025 Jigisha Shah. All rights reserved.
      </footer>
    </div>
  );
}

//export default App;
