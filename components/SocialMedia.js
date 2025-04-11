import React from "react";

export default function SocialMedia() {
  return (
    <div className="fixed bottom-4 left-4 flex flex-col space-y-2">
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700"
      >
        Facebook
      </a>
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-pink-500 text-white p-3 rounded-full shadow-lg hover:bg-pink-600"
      >
        Instagram
      </a>
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-400 text-white p-3 rounded-full shadow-lg hover:bg-blue-500"
      >
        Twitter
      </a>
    </div>
  );
}
