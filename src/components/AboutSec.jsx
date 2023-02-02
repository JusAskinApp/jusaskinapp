import React from "react";
import about from "../assets/about.png";

function AboutUs() {
  return (
    <div className="bg-gray-200 my-20" style={{paddingTop:'2.5rem'}}>
      <div className="container mx-auto px-6 flex">
        <div className="w-full md:w-1/2 ml-4 mt-8">
        <h3 className="text-lg font-medium bg-gray-200 mb-2">About Jus Askin</h3>
          <h2 className="text-5xl font-medium text-black mt-5">
            Share knowledge, skills and learn from others.
          </h2>
          <p className="text-gray-700 text-base leading-relaxed mt-5">
            Jus Askin is a social learning platform that connects users with
            similar interests and questions. It allows users to share their
            knowledge and skills and learn from others through discussions and
            resources. Jus Askin enables users to expand their knowledge and
            build their skills in a collaborative and supportive community.
            Whether you're a beginner or an expert, Jus Askin is the perfect
            place to learn, share, and grow.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <img src={about} alt="About us" className="float-right" />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
