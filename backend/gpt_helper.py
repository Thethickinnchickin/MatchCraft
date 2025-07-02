import openai
import os

from openai import OpenAI
from dotenv import load_dotenv
load_dotenv()

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

def generate_cover_letter(resume_text, job_description):
    prompt = f"""
You are a professional career assistant. Write a tailored cover letter for a job application.
Use the following RESUME and JOB DESCRIPTION.

RESUME:
{resume_text}

JOB DESCRIPTION:
{job_description}

Keep it short, specific, and professional. Use bullet points if needed.
"""

    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "user", "content": prompt}
        ],
        temperature=0.7,
    )

    return response.choices[0].message.content.strip()
