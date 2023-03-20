import React from "react";

const ChatBubble = ({ message, position, imageUrl }) => {
  const bubbleClass = position === "left" ? "bg-gray-300 text-gray-700" : "bg-blue-500 text-white";
  const positionClass = position === "left" ? "justify-start" : "justify-end";
  const content = (
    <div className={`py-2 px-4 rounded-lg max-w-xs break-words ${bubbleClass}`}>
      {message}
    </div>
  );
  return (
    <div className={`flex items-end ${positionClass} my-2`}>
      {position === "left" && (
        <img
          src={imageUrl}
          alt="Avatar"
          className="w-8 h-8 rounded-full mr-2 object-cover"
        />
      )}
      {content}
    </div>
  );
};

export default ChatBubble;
