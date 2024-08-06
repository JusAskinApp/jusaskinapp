// src/CourseAccordion.js
import { useState } from 'react';

const CourseItem = ({ course, isOpen, onClick }) => (
  <div className="border border-gray-200 rounded-md mb-2">
    <button
      onClick={onClick}
      className="w-full text-left p-4 bg-gray-100 hover:bg-gray-200 transition-colors flex justify-between items-center"
    >
      <span className="font-semibold">{course.title}</span>
      <span>{isOpen ? '−' : '+'}</span>
    </button>
    {isOpen && (
      <div className="p-4 bg-gray-50">
        {course.data.map((item, index) => (
          <div key={index} className="mb-2">
            <h3 className="text-lg font-medium">{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    )}
  </div>
);

const CourseAccordion = ({ courses }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full  mx-auto">
      {courses.map((course, index) => (
        <CourseItem
          key={index}
          course={course}
          isOpen={openIndex === index}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};

export default CourseAccordion;
