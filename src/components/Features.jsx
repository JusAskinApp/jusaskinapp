import React from "react";
import Card from "./Card";
import img1 from "../assets/img1.png"
import img2 from "../assets/img.png"
import img3 from "../assets/img2.png"

function Features() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center my-4 mt-20">Our App Features</h1>
      <div className="grid grid-cols-3 gap-0 mx-auto justify-center">
        <Card image={img1} heading="Wide Range of Resources" caption="Access a diverse collection of resources tailored to your interest and learning path"/>
        <Card image={img2} heading="User-Generated Content" caption="Share your own knowledge and experience with the community, and contribute to a growing collection of resources." />
        <Card image={img3} heading="Connect and Collaborate with Like-minded People" caption="Expand your knowledge and skills by connecting and collaborating with like-minded people."/>
      </div>
    </div>
  );
}

export default Features;
