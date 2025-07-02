from job_analyzer import analyze_job_description
from resume_parser import extract_resume_text

def compute_match_score(resume_text, job_text):
    resume_keywords = set(analyze_job_description(resume_text))
    job_keywords = set(analyze_job_description(job_text))

    matched = resume_keywords & job_keywords
    missing = job_keywords - resume_keywords

    score = int((len(matched) / len(job_keywords)) * 100) if job_keywords else 0

    return {
        'match_score': score,
        'matched_keywords': list(matched),
        'missing_keywords': list(missing)
    }
