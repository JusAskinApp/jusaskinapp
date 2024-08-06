import React from "react";
import { useParams } from "react-router-dom";
import CourseAccordion from "./CourseContent";
const CourseHomePage = () => {
  const { id } = useParams();
  const courses = [
    {
      title: "Web Development",
      description: "Learn how to build websites and web apps.",
    },
    {
      title: "Data Science",
      description: "Learn data analysis and machine learning.",
    },
    {
      title: "Graphic Design",
      description: "Learn how to design stunning graphics.",
    },
  ];
  const courses1 = [
    {
      title: "Course 1",
      data: [
        { title: "Lesson 1.1", description: "Introduction to Course 1" },
        { title: "Lesson 1.2", description: "Deep dive into Course 1" },
      ],
    },
    {
      title: "Course 2",
      data: [
        { title: "Lesson 2.1", description: "Introduction to Course 2" },
        { title: "Lesson 2.2", description: "Advanced topics in Course 2" },
      ],
    },
    {
      title: "Course 3",
      data: [
        { title: "Lesson 3.1", description: "Basics of Course 3" },
        { title: "Lesson 3.2", description: "Intermediate topics in Course 3" },
      ],
    },
  ];
  return (
    <>
      <div className="bg-gray-100 p-6 font-sans">
        <header className="bg-white shadow p-6">
          <div className="container mx-auto">
            <h1 className="text-4xl font-bold text-gray-800">
              100 Days Of Code - 2024 Web Development Bootcamp
            </h1>
            <p className="text-gray-600 mt-2">
              Learn web development from A to Z in 100 days - from "basic" to
              "advanced", it's all included!
            </p>
          </div>
        </header>

        <main className="container mx-auto mt-6">
          <section className="bg-white p-6 shadow mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              What you'll learn
            </h2>
            <ul className="list-disc list-inside mt-4 text-gray-600">
              <li>
                How the web works and how to get started as a web developer
              </li>
              <li>Build websites, web apps and web services</li>
              <li>
                Build frontend user interfaces with HTML, CSS & JavaScript
              </li>
              <li>
                Build backend processes with NodeJS, Express & SQL + NoSQL
                databases
              </li>
              <li>
                Add advanced features like user authentication, file upload or
                database queries to websites
              </li>
            </ul>
          </section>

          <section className="bg-white p-6 shadow mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              Requirements
            </h2>
            <ul className="list-disc list-inside mt-4 text-gray-600">
              <li>
                No prior web development or programming knowledge required
              </li>
              <li>Just a computer or Mac to get started</li>
            </ul>
          </section>

          <section className="bg-white p-6 shadow mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              Course Description
            </h2>
            <p className="mt-4 text-gray-600">
              Join the most comprehensive web development bootcamp on Udemy!
              This course teaches you web development and turns you into a web
              developer in 100 days - or allows you to refresh key essentials
              and expand your existing knowledge.
            </p>
          </section>
          <section className="bg-white p-6 shadow mb-6">
            <h1 className="text-2xl font-bold text-left my-6">Course Content</h1>
            <CourseAccordion courses={courses1} />
          </section>
          <section className="bg-white p-6 shadow mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">Instructor</h2>
            <div className="flex items-center mt-4">
              <img
                src="https://via.placeholder.com/100"
                alt="Instructor"
                className="w-24 h-24 rounded-full mr-4"
              />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Maximilian Schwarzmüller
                </h3>
                <p className="text-gray-600">
                  Instructor, Web Developer, and Educator
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white p-6 shadow">
            <h2 className="text-2xl font-semibold text-gray-800">
              Who this course is for
            </h2>
            <ul className="list-disc list-inside mt-4 text-gray-600">
              <li>Beginners who want to become web developers</li>
              <li>
                Experienced developers who want to dive into more advanced
                topics
              </li>
              <li>
                Students interested in exploring course examples and exercises
              </li>
            </ul>
          </section>
       
        </main>
      </div>
    </>
  );
};

export default CourseHomePage;
