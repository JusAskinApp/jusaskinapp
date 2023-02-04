import React from "react";
import statement from '../assets/statement.png'

function Statement() {
  return (
    <div className="my-10 md:my-20">
      <div className="grid grid-co1-1 md:grid-col-2 container mx-auto px-6 md:flex">
        <div className="w-full md:w-1/2">
          <img src={statement} alt="About us" className="float-right" />
        </div>
        <div className="w-full md:w-1/2 mt-8 md:p-16">
          <h3 className="text-lg font-medium mb-2">
            Statement
          </h3>
          <h2 className="text-5xl font-medium text-black mt-5">
            Social Learning made easy!
          </h2>
          <p className="text-gray-700 text-base leading-relaxed mt-5">
            Unlock your full potential by connecting with a community of
            like-minded individuals and subject matter experts. With Jus Askin,
            you can learn at your own pace and reach your goals in a
            personalized and efficient way. Join us today and start your journey
            to lifelong learning.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Statement;
