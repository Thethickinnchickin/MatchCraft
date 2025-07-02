from flask import Flask, request, jsonify
from flask_cors import CORS
from resume_parser import extract_resume_text
from job_analyzer import analyze_job_description
from match_scoring import compute_match_score
from gpt_helper import generate_cover_letter
from dotenv import load_dotenv
load_dotenv()


app = Flask(__name__)
CORS(app)

@app.route('/upload_resume', methods=['POST'])
def upload_resume():
    if 'resume' not in request.files:
        return jsonify({'error': 'No resume file provided'}), 400

    file = request.files['resume']
    text = extract_resume_text(file)
    return jsonify({'resume_text': text})

@app.route('/analyze_job', methods=['POST'])
def analyze_job():
    data = request.get_json()
    job_text = data.get('job_description', '')
    keywords = analyze_job_description(job_text)
    return jsonify({'keywords': keywords})

@app.route('/match_score', methods=['POST'])
def match_score():
    data = request.get_json()
    resume_text = data.get('resume_text', '')
    job_text = data.get('job_description', '')

    score_data = compute_match_score(resume_text, job_text)
    return jsonify(score_data)

@app.route('/generate_cover_letter', methods=['POST'])
def cover_letter():
    data = request.get_json()
    resume_text = data.get('resume_text', '')
    job_description = data.get('job_description', '')

    try:
        letter = generate_cover_letter(resume_text, job_description)
        return jsonify({'cover_letter': letter})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
