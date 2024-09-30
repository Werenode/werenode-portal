// src/components/TwitterFeed.js
import React, { useEffect } from 'react';

const TwitterFeed = ({ profile }) => {
  useEffect(() => {
    // Load Twitter widgets script
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div>
      <a
        className="twitter-timeline"
        data-theme="light"
        data-tweet-limit="5"
        href={`https://twitter.com/${profile}`}
      >
        Tweets by @{profile}
      </a>
    </div>
  );
};

export default TwitterFeed;
