/* 
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

*/
import React, { useState } from 'react';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks, ${form.name}! I'll get back to you soon.`);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className={`${darkMode ? 'bg-gray-900 text-gray-200' : 'bg-white text-gray-900'} min-h-screen font-sans`}>
      <header className="p-4 flex justify-between items-center border-b border-gray-700">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        <button
          onClick={toggleDarkMode}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1 rounded"
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </header>

      <main className="max-w-3xl mx-auto p-6 space-y-12">
        {/* Home */}
        <section>
          <h2 className="text-4xl font-bold mb-2">Hi, I’m [Your Name]</h2>
          <p>Welcome to my portfolio! I’m a Software QA & Test Engineer passionate about automation, manual testing, and cloud computing.</p>
        </section>

        {/* About */}
        <section>
          <h2 className="text-3xl font-semibold mb-2">About Me</h2>
          <p>
            Currently pursuing my Master’s in IT & Management at UT Dallas, with 2.5+ years of experience at Cognizant and UBS.
            Skilled in automation testing, cloud computing, and software quality assurance.
          </p>
        </section>

        {/* Skills */}
        <section>
          <h2 className="text-3xl font-semibold mb-2">Skills</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Manual & Automation Testing (Selenium, TestNG)</li>
            <li>API Testing (Postman, RestAssured)</li>
            <li>CI/CD (Jenkins)</li>
            <li>Cloud Computing (AWS Certified)</li>
            <li>Programming Languages: Java, Python, SQL</li>
            <li>Tools: Jira, HP ALM, Swagger</li>
          </ul>
        </section>

        {/* Projects */}
        <section>
          <h2 className="text-3xl font-semibold mb-2">Projects</h2>
          <ul className="space-y-4">
            <li>
              <strong>UserDash:</strong> Django web app for CRUD operations and REST APIs.
            </li>
            <li>
              <strong>FinanceViz:</strong> Data visualization project in Python improving performance.
            </li>
            <li>
              <strong>Serverless Website:</strong> Built with AWS S3, Lambda, and DynamoDB for cost-efficient hosting.
            </li>
          </ul>
        </section>

        {/* Experience */}
        <section>
          <h2 className="text-3xl font-semibold mb-2">Experience</h2>
          <ul className="space-y-4">
            <li>
              <strong>Systems Analyst - UT Dallas (Feb 2024 – Present):</strong> Lead proctor managing exam integrity and operations.
            </li>
            <li>
              <strong>Programmer Data Analyst - Cognizant/UBS (Nov 2020 – Aug 2023):</strong> Automated testing and regression for financial apps.
            </li>
          </ul>
        </section>

        {/* Certifications */}
        <section>
          <h2 className="text-3xl font-semibold mb-2">Certifications</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>AWS Certified Cloud Practitioner</li>
            <li>ISTQB Foundation Level</li>
          </ul>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-3xl font-semibold mb-2">Education</h2>
          <ul className="space-y-4">
            <li>
              <strong>Master of Science in IT & Management</strong> — University of Texas at Dallas, Expected May 2025 (GPA 3.5)
            </li>
            <li>
              <strong>Master of Science in Computer Science</strong> — Savitribai Phule Pune University, June 2022 (GPA 3.69)
            </li>
          </ul>
        </section>

        {/* Resume */}
        <section>
          <h2 className="text-3xl font-semibold mb-2">Resume</h2>
          <p>
            Download my resume{' '}
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="text-indigo-600 underline">
              here
            </a>.
          </p>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-3xl font-semibold mb-2">Contact Me</h2>
          <form onSubmit={handleSubmit} className="max-w-md space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className={`w-full p-2 rounded border ${darkMode ? 'bg-gray-800 border-gray-700 text-gray-200' : 'bg-white border-gray-300 text-gray-900'}`}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className={`w-full p-2 rounded border ${darkMode ? 'bg-gray-800 border-gray-700 text-gray-200' : 'bg-white border-gray-300 text-gray-900'}`}
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              className={`w-full p-2 rounded border resize-none ${darkMode ? 'bg-gray-800 border-gray-700 text-gray-200' : 'bg-white border-gray-300 text-gray-900'}`}
            />
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded"
            >
              Send
            </button>
          </form>
        </section>
      </main>

      <footer className={`text-center p-4 ${darkMode ? 'bg-gray-800 text-gray-500' : 'bg-gray-100 text-gray-700'}`}>
        © {new Date().getFullYear()} [Your Name]. All rights reserved.
      </footer>
    </div>
  );
}
