from io import BytesIO
from pdfminer.high_level import extract_text

def extract_resume_text(file_storage):
    # file_storage is a FileStorage object from Flask (request.files['resume'])
    in_memory_file = BytesIO(file_storage.read())
    text = extract_text(in_memory_file)
    return text
