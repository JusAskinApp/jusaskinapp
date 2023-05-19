import React from 'react';
import urlRegex from 'url-regex';

function UrlParser(content) {
  const urls = content.match(urlRegex({ strict: false })) || [];
  
  // Split the content into parts based on URLs
  const parts = content.split(urlRegex());

  // Create an array of React elements
  const elements = parts.map((part, index) => {
    if (urls[index]) {
      // If the part is a URL, return an anchor tag
      return (
        <a style={{ color: 'blue', textDecoration: 'underline' }} href={urls[index]} target="_blank" rel="noopener noreferrer">
          {urls[index]}
        </a>
      );
    } else {
      // If the part is not a URL, return it as is
      return part;
    }
  });

  return elements;
}

export default UrlParser;
