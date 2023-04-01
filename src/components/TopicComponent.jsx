import React, { useState } from "react";
import TopicImage from "../assets/image107.png";
import Document from "./Document";
import RecommendedTopic from "./RecommendedTopic";

function TopicComponent() {
  const [showAnotherComponent, setShowAnotherComponent] = useState(false);

  const handleRecommendedTopicClick = () => {
    setShowAnotherComponent(true);
  };
  return (
    <div>
      <p className="text-lg font-bold">Recommended Topics</p>
      <RecommendedTopic
        url={TopicImage}
        title="tuttle"
        onClick={handleRecommendedTopicClick}
      />
      {showAnotherComponent && <Document/>}
    </div>
  );
}

export default TopicComponent;
