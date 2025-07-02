import React from 'react';

const UploadResume = ({ onUpload }) => {
  const handleChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('resume', file);

    const res = await fetch('http://localhost:5000/upload_resume', {
      method: 'POST',
      body: formData
    });

    const data = await res.json();
    onUpload(data.resume_text);
  };

  return (
    <div className="mb-4">
      <label className="block mb-2 font-medium">Upload Resume (PDF)</label>
      <input type="file" accept="application/pdf" onChange={handleChange} />
    </div>
  );
};

export default UploadResume;
