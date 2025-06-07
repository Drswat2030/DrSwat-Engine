# sentiment_analysis.py

from textblob_ar import TextBlobAR

def analyze(text):
    blob = TextBlobAR(text)
    sentiment = blob.sentiment.polarity
    if sentiment > 0:
        return "إيجابية 😊"
    elif sentiment < 0:
        return "سلبية 😢"
    else:
        return "محايدة 😐"

if __name__ == "__main__":
    sample = input("أدخل جملة لتحليل المشاعر: ")
    result = analyze(sample)
    print(f"النتيجة: {result}")
