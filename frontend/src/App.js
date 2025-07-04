import React, { useState } from 'react';
import UploadResume from './components/UploadResume';
import JobInput from './components/JobInput';
import MatchResults from './components/MatchResults';
import CoverLetter from './components/CoverLetter';

function App() {
  const [resumeText, setResumeText] = useState('');
  const [jobText, setJobText] = useState('');
  const [matchResult, setMatchResult] = useState(null);
  const [coverLetter, setCoverLetter] = useState('');
  const [loading, setLoading] = useState(false);

  const handleResumeUpload = (text) => {
    setResumeText(text);
  };

  const handleAnalyze = async (jobDesc) => {
    setJobText(jobDesc);
    setLoading(true);

    try {
      const matchRes = await fetch('https://matchcraft-ll5b.onrender.com/match_score', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ resume_text: resumeText, job_description: jobDesc })
      });

      console.log("Stage 1");

      const matchData = await matchRes.json();
      setMatchResult(matchData);

      const letterRes = await fetch('https://matchcraft-ll5b.onrender.com/generate_cover_letter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ resume_text: resumeText, job_description: jobDesc })
      });

      console.log("Stage 2");

      const letterData = await letterRes.json();
      setCoverLetter(letterData.cover_letter);
      //setLoading(false);
      
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">MatchCraft</h1>
      <UploadResume onUpload={handleResumeUpload} />
      <JobInput onSubmit={handleAnalyze} loading={loading} />
      <CoverLetter letter={coverLetter} loading={loading}/>
      <MatchResults result={matchResult} loading={loading}/>
    </div>
  );
}

export default App;
