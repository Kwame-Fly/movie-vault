import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-600">About Movie-Vault</h1>
      <p className="text-lg md:text-xl text-gray-700 text-center max-w-3xl">
        Movie-Vault is your one-stop destination for discovering movies by genre, searching for titles, 
        and exploring a curated selection of films. Whether you're in the mood for action, comedy, or drama, 
        Movie-Vault has got you covered.
      </p>
      <p className="text-lg md:text-xl text-gray-700 text-center mt-4 max-w-3xl">
        Built using modern web technologies like React, our goal is to deliver a seamless and enjoyable 
        movie discovery experience.
      </p>
    </div>
  );
};

export default About;
