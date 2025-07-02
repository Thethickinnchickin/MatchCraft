import React, { useState } from 'react';

const JobInput = ({ onSubmit }) => {
  const [jobDesc, setJobDesc] = useState('');

  const handleSubmit = async () => {
    onSubmit(jobDesc);
  };

  return (
    <div className="mb-4">
      <label className="block mb-2 font-medium">Paste Job Description</label>
      <textarea
        className="w-full border rounded p-2"
        rows="6"
        value={jobDesc}
        onChange={(e) => setJobDesc(e.target.value)}
      />
      <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded" onClick={handleSubmit}>
        Analyze
      </button>
    </div>
  );
};

export default JobInput;
