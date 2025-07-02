import React from 'react';

const CoverLetter = ({ letter }) => {
  if (!letter) return null;

  return (
    <div className="my-6">
      <h2 className="text-xl font-bold mb-2">Generated Cover Letter</h2>
      <pre className="bg-gray-100 p-4 rounded whitespace-pre-wrap">{letter}</pre>
    </div>
  );
};

export default CoverLetter;
