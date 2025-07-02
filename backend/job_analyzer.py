import spacy

nlp = spacy.load("en_core_web_sm")

def analyze_job_description(text):
    doc = nlp(text)
    keywords = set()

    for token in doc:
        if token.pos_ in ['NOUN', 'PROPN', 'VERB'] and not token.is_stop:
            keywords.add(token.lemma_.lower())

    return list(keywords)
