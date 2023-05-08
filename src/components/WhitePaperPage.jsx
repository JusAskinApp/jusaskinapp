import React from "react";
import Navbar from "../components/NavbarComponent";
import Footer from "../components/Footer";

function WhitePaperPage() {
  return (
    <div className="text-center">
      <Navbar />
      <h2 className="text-5xl font-bold mb-6 mt-10 lg:text-7xl">
        JusAskin White Paper
      </h2>
      <div className="container mx-auto px-6 py-2 flex flex-row items-center justify-between ">
      <div className="items-center mb-10">
        <h3 className="text-2xl lg:text-4xl text-left text-gray-700">Jus Askin: Empowering Global Communities through Knowledge Sharing</h3>
      <p className="text-left text-gray-700 mt-5">
        In today's fast-paced and constantly evolving world, access to
        information and knowledge is key to success. But not everyone has equal
        access to knowledge and resources, creating disparities and barriers to
        progress.<br></br>
        <br></br>
        At Jus Askin, we believe that everyone deserves access to knowledge and
        the opportunity to learn and grow. That's why we've created a global
        community that facilitates knowledge sharing and collaborative
        problem-solving across industries, regions, and cultures.<br></br>
        <br></br>
        Our platform enables individuals and organizations to connect with
        experts and peers from around the world, sharing insights, ideas, and
        best practices to address complex challenges and seize new
        opportunities.<br></br>
        <br></br>
        But our vision goes beyond simply providing a platform for knowledge
        exchange. We're also committed to making knowledge accessible and
        actionable, ensuring that every member of our community has the tools
        and resources they need to turn knowledge into action.<br></br>
        <br></br>
        That's where JASigma comes in. Developed by Jus Askin, JASigma is a
        problem-solving tool that leverages proven methodologies and best
        practices to help individuals and organizations tackle complex
        challenges and drive meaningful change.<br></br>
        <br></br>
        JASigma recommends tools and steps for users to follow, guiding them
        through a comprehensive problem-solving process that has been tested and
        refined over time. And with a focus on continuous improvement, JASigma
        is constantly updated and optimized to ensure that users have access to
        the latest tools and techniques for tackling their most pressing
        challenges.<br></br>
        <br></br>
        But JASigma isn't just a problem-solving tool - it's also a way to give
        back. Through JASigma, a portion of our proceeds are directed towards
        the Creator Fund, supporting individuals and organizations around the
        world in their pursuit of knowledge and innovation.<br></br>
        <br></br>
        At Jus Askin, we're proud of our global reach, with members from every
        corner of the world connecting and collaborating on our platform. We
        believe that diversity and inclusion are essential for meaningful
        knowledge sharing and problem-solving, and we're committed to creating a
        community that reflects these values.<br></br>
        <br></br>
        Whether you're an individual looking to expand your knowledge and
        skills, or an organization seeking to solve complex challenges and drive
        innovation, Jus Askin and JASigma are here to support you on your
        journey. Join us today and be a part of a global community that is
        changing the world through knowledge sharing.
      </p>
      </div>
      </div>
      <Footer/>
    </div>
  );
}

export default WhitePaperPage;
