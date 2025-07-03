import React from 'react';
import Loading from './Loading';

const CoverLetter = ({ letter, loading }) => {
  if (loading) return <Loading />;

  if (!letter) return null;

  return (
    <div className="my-6">
      <h2 className="text-xl font-bold mb-2">Generated Cover Letter</h2>
      <pre className="bg-gray-100 p-4 rounded whitespace-pre-wrap">{letter}</pre>
    </div>
  );
};

export default CoverLetter;
