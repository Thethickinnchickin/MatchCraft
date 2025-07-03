import React from 'react';
import Loader from './Loader';

const MatchResults = ({ result, loading }) => {
  if (loading) return <Loader />;

  if (!result) return null;

  return (
    <div className="my-4">
      <h2 className="text-xl font-bold mb-4">Match Score: {result.match_score}%</h2>

      <div className="mb-2">
        <p className="font-semibold text-green-800">Matched Keywords:</p>
        <div className="flex flex-wrap gap-2 mt-1">
          {result.matched_keywords.map((word, i) => (
            <span key={i} className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
              {word}
            </span>
          ))}
        </div>
      </div>

      <div>
        <p className="font-semibold text-red-700 mt-4">Missing Keywords:</p>
        <div className="flex flex-wrap gap-2 mt-1">
          {result.missing_keywords.map((word, i) => (
            <span key={i} className="bg-red-100 text-red-700 px-2 py-1 rounded text-sm">
              {word}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MatchResults;

