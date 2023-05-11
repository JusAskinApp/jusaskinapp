import React, { useState, useEffect } from "react";
const ChatBubble = ({ message, position, imageUrl, time }) => {
  const bubbleClass =
    position === "left"
      ? "bg-gray-300 text-gray-700"
      : "bg-blue-500 text-white";
  const positionClass = position === "left" ? "justify-start" : "justify-end";
  const positionDate = position === "left" ? "text-gray-500" : "text-white";

  const [lastMessageTime, setLastMessageTime] = useState(null);
  const formatTime = (time) => {
    const date = new Date(time);
    const dayName = new Intl.DateTimeFormat("en-US", {
      weekday: "short",
    }).format(date);
    const formattedTime = date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
    return `${dayName}, ${formattedTime}`;
  };
  const formattedTime = formatTime(time);
  const updateLastMessageTime = (time) => {
    setLastMessageTime(time);
  };

  const shouldShowDivider = (time, lastMessageTime) => {
    const timeDiff = lastMessageTime ? time - lastMessageTime : 0;
    return timeDiff > 86400000;
  };

  useEffect(() => {
    updateLastMessageTime(time);
  }, [time]);

  const showDivider = shouldShowDivider(time, lastMessageTime);
  return (
    <div>
      {/* {showDivider && ( */}
        <div className="flex justify-center text-gray-500 text-xs mt-4">
          {/* {formatTime(lastMessageTime)} */}
        </div>
      {/* )} */}
      <div className={`flex items-end ${positionClass} my-2`}>
        {position === "left" && (
          <img
            src={imageUrl}
            alt="Avatar"
            className="w-8 h-8 rounded-full mr-2 object-cover"
          />
        )}
        <div
          className={`py-2 px-4 rounded-lg max-w-xs break-words ${bubbleClass}`}
        >
          {message}
          <span className={`block text-xs ${positionDate} mt-1`}>
            {formattedTime}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ChatBubble;
