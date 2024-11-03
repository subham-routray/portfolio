import React from 'react';
import cv from './me'; // Make sure to adjust the import based on your file structure

const Portfolio = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <header className="text-center">
        <h1 className="text-3xl font-bold text-gray-800">{cv.name}</h1>
        <div className="mt-2">
          <a href={`tel:${cv.contact.phone}`} className="text-gray-600">{cv.contact.phone}</a>
          <span className="mx-2">|</span>
          <a href={`mailto:${cv.contact.email}`} className="text-gray-600">{cv.contact.email}</a>
          <span className="mx-2">|</span>
          <a href={cv.contact.linkedIn} className="text-gray-600" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
        <p className="mt-4 text-gray-600">{cv.profile}</p>
      </header>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800">Work Experience</h2>
        {cv.workExperience.map((job, index) => (
          <div key={index} className="mt-4 border-b pb-4">
            <h3 className="text-xl font-bold text-gray-800">{job.position}</h3>
            <p className="text-gray-600">{job.company}, {job.location}</p>
            <p className="text-gray-500">{job.dates}</p>
            <ul className="list-disc list-inside mt-2 text-gray-600">
              {job.responsibilities.map((responsibility, i) => (
                <li key={i}>{responsibility}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800">Education</h2>
        <div className="mt-4">
          <h3 className="text-xl font-bold text-gray-800">{cv.education.degree}</h3>
          <p className="text-gray-600">{cv.education.major}</p>
          <p className="text-gray-500">{cv.education.completionDate}, {cv.education.institution}</p>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800">Core Skills</h2>
        <ul className="mt-2 grid grid-cols-2 gap-4 text-gray-600">
          {cv.coreSkills.map((skill, index) => (
            <li key={index} className="bg-gray-200 p-2 rounded">{skill}</li>
          ))}
        </ul>
      </section>

      <footer className="mt-8 text-center">
        <p className="text-gray-500">{cv.declaration}</p>
      </footer>
    </div>
  );
};

export default Portfolio;
