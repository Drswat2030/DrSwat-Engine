
// Script to handle basic interactivity (optional future AI analysis)
console.log("DrSwat Engine Loaded. Ready for data analysis.");

function analyzeText() {
    const input = document.getElementById("userInput").value;
    const result = document.getElementById("result");

    if (!input.trim()) {
        result.textContent = "الرجاء إدخال نص للتحليل.";
        return;
    }

    const words = input.trim().split(/\s+/);
    const wordCount = words.length;

    let positiveWords = ["نجاح", "أمل", "قوة", "فرح", "تقدم", "سلام", "حياة"];
    let negativeWords = ["خوف", "ضعف", "حزن", "تعب", "يأس", "قلق", "وحدة"];

    let positiveCount = words.filter(word => positiveWords.includes(word)).length;
    let negativeCount = words.filter(word => negativeWords.includes(word)).length;

    result.innerHTML = `
        ✅ عدد الكلمات: ${wordCount}<br>
        💚 كلمات إيجابية: ${positiveCount}<br>
        ⚠️ كلمات سلبية: ${negativeCount}
    `;
}

document.getElementById("openModal").onclick = function() {
  document.getElementById("modal").style.display = "block";
};

document.getElementById("closeModal").onclick = function() {
  document.getElementById("modal").style.display = "none";
};

window.onclick = function(event) {
  if (event.target == document.getElementById("modal")) {
    document.getElementById("modal").style.display = "none";
  }
};

<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>منصة صوت وحياة - DrSwat Engine</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>منصة صوت وحياة - DrSwat Engine</h1>
        <p>تحليل، تحفيز، تمكين</p>
    </header>

    <main>
        <section id="analysis">
            <h2>تحليل النص</h2>
            <textarea id="inputText" placeholder="اكتب النص هنا..."></textarea>
            <button onclick="analyzeText()">ابدأ التحليل</button>
            <div id="result"></div>
        </section>
    </main>

    <footer>
        <p>© 2025 صوت وحياة - جميع الحقوق محفوظة</p>
    </footer>

    <script src="script.js"></script>
</body>
</html
