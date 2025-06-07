
// Script to handle basic interactivity (optional future AI analysis)
console.log("DrSwat Engine Loaded. Ready for data analysis.");

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

<!DOCTYPE html>
<html dir="rtl" lang="ar">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>مهارات DrSwat</title>
    <style>
        body {
            font-family: 'Tajawal', sans-serif;
            background-color: #f5f5f5;
            margin: 0;
            padding: 20px;
        }
        
        .skills-container {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            justify-content: center;
        }
        
        .skill-card {
            background-color: white;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            padding: 20px;
            width: 300px;
            transition: transform 0.3s ease;
        }
        
        .skill-card:hover {
            transform: translateY(-5px);
        }
        
        .skill-emoji {
            font-size: 48px;
            margin-bottom: 10px;
        }
        
        .skill-title {
            font-size: 24px;
            margin: 10px 0;
            color: #333;
        }
        
        .skill-description {
            color: #666;
            margin-bottom: 15px;
        }
        
        .skill-progress {
            height: 10px;
            background-color: #eee;
            border-radius: 5px;
            margin-bottom: 10px;
        }
        
        .skill-progress-bar {
            height: 100%;
            background-color: #4CAF50;
            border-radius: 5px;
        }
        
        .skill-button {
            background-color: #4CAF50;
            color: white;
            border: none;
            padding: 10px 15px;
            border-radius: 5px;
            cursor: pointer;
            width: 100%;
            font-family: 'Tajawal', sans-serif;
        }
        
        .skill-button:hover {
            background-color: #45a049;
        }
        
        .skill-detail {
            margin-top: 30px;
            background-color: white;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            padding: 20px;
        }
        
        .component-section {
            margin-bottom: 20px;
            padding-bottom: 20px;
            border-bottom: 1px solid #eee;
        }
        
        .component-title {
            font-size: 20px;
            color: #333;
            margin-bottom: 10px;
        }
        
        .exercise-card {
            background-color: #f9f9f9;
            border-radius: 8px;
            padding: 15px;
            margin-bottom: 15px;
        }
        
        .exercise-title {
            font-size: 18px;
            margin-bottom: 10px;
        }
        
        .exercise-description {
            color: #666;
            margin-bottom: 10px;
        }
        
        .exercise-instructions {
            white-space: pre-line;
            color: #333;
        }
    </style>
</head>
<body>
    <h1>مهارات DrSwat للتعافي والنمو الشخصي</h1>
    
    <div class="skills-container" id="skillsContainer">
        <!-- سيتم إضافة بطاقات المهارات هنا بواسطة JavaScript -->
    </div>
    
    <div class="skill-detail" id="skillDetail" style="display: none;">
        <!-- سيتم عرض تفاصيل المهارة هنا بواسطة JavaScript -->
    </div>
    
    <script>
        // استرجاع المهارات من الخادم
        async function fetchSkills() {
            try {
                const response = await fetch('/api/skills');
                const skills = await response.json();
                displaySkills(skills);
            } catch (error) {
                console.error('Error fetching skills:', error);
            }
        }
        
        // عرض المهارات في الصفحة
        function displaySkills(skills) {
            const container = document.getElementById('skillsContainer');
            container.innerHTML = '';
            
            skills.forEach(skill => {
                const skillCard = document.createElement('div');
                skillCard.className = 'skill-card';
                
                // استرجاع تقدم المستخدم (يمكن تعديله حسب نظام تسجيل الدخول)
                const progress = getUserProgress(skill.id) || 0;
                
                skillCard.innerHTML = `
                    <div class="skill-emoji">${skill.emoji}</div>
                    <h2 class="skill-title">${skill.title}</h2>
                    <p class="skill-description">${skill.description}</p>
                    <div class="skill-progress">
                        <div class="skill-progress-bar" style="width: ${progress}%"></div>
                    </div>
                    <p>${progress}% مكتمل</p>
                    <button class="skill-button" onclick="loadSkillDetail(${skill.id})">عرض المهارة</button>
                `;
                
                container.appendChild(skillCard);
            });
        }
        
        // استرجاع تقدم المستخدم (مثال بسيط - يمكن تعديله)
        function getUserProgress(skillId) {
            // في التطبيق الحقيقي، يجب استرجاع هذه البيانات من الخادم
            const progressData = {
                1: 60, // الوعي الذاتي - 60%
                2: 45, // التنفس العلاجي - 45%
                3: 30, // التخطيط الذكي - 30%
                // ... باقي المهارات
            };
            
            return progressData[skillId] || 0;
        }
        
        // تحميل تفاصيل مهارة محددة
        async function loadSkillDetail(skillId) {
            try {
                const response = await fetch(`/api/skills/${skillId}`);
                const skillData = await response.json();
                displaySkillDetail(skillData);
            } catch (error) {
                console.error('Error loading skill detail:', error);
            }
        }
        
        // عرض تفاصيل المهارة
        function displaySkillDetail(skillData) {
            const detailContainer = document.getElementById('skillDetail');
            detailContainer.style.display = 'block';
            
            // التمرير إلى قسم التفاصيل
            detailContainer.scrollIntoView({ behavior: 'smooth' });
            
            let componentsHTML = '';
            if (skillData.components && skillData.components.length > 0) {
                skillData.components.forEach(component => {
                    componentsHTML += `
                        <div class="component-section">
                            <h3 class="component-title">${component.section_title}</h3>
                            <div>${component.content}</div>
                        </div>
                    `;
                });
            }
            
            let exercisesHTML = '';
            if (skillData.exercises && skillData.exercises.length > 0) {
                exercisesHTML = '<h2>التمارين العملية</h2>';
                skillData.exercises.forEach(exercise => {
                    exercisesHTML += `
                        <div class="exercise-card">
                            <h3 class="exercise-title">${exercise.title}</h3>
                            <p class="exercise-description">${exercise.description}</p>
                            <p>المدة: ${exercise.duration} | المستوى: ${getArabicDifficulty(exercise.difficulty_level)}</p>
                            <h4>خطوات التمرين:</h4>
                            <div class="exercise-instructions">${exercise.instructions}</div>
                            <h4>النتيجة المتوقعة:</h4>
                            <p>${exercise.expected_outcome}</p>
                        </div>
                    `;
                });
            }
            
            let resourcesHTML = '';
            if (skillData.resources && skillData.resources.length > 0) {
                resourcesHTML = '<h2>موارد إضافية</h2>';
                skillData.resources.forEach(resource => {
                    resourcesHTML += `
                        <div class="resource-item">
                            <h3>${resource.title}</h3>
                            <p>النوع: ${getArabicResourceType(resource.type)}</p>
                            ${resource.url ? `<p><a href="${resource.url}" target="_blank">فتح المورد</a></p>` : ''}
                            <p>${resource.description}</p>
                        </div>
                    `;
                });
            }
            
            detailContainer.innerHTML = `
                <h1>${skillData.emoji} ${skillData.title}</h1>
                <p>${skillData.description}</p>
                
                ${componentsHTML}
                
                ${exercisesHTML}
                
                ${resourcesHTML}
                
                <button class="skill-button" onclick="markProgress(${skillData.id})">تحديث التقدم</button>
            `;
        }
        
        // تحويل مستوى الصعوبة إلى العربية
        function getArabicDifficulty(level) {
            const levels = {
                'beginner': 'مبتدئ',
                'intermediate': 'متوسط',
                'advanced': 'متقدم'
            };
            return levels[level] || level;
        }
        
        // تحويل نوع المورد إلى العربية
        function getArabicResourceType(type) {
            const types = {
                'video': 'فيديو',
                'audio': 'صوت',
                'article': 'مقال',
                'infographic': 'رسم معلوماتي',
                'worksheet': 'ورقة عمل',
                'quiz': 'اختبار'
            };
            return types[type] || type;
        }
        
        // تحديث تقدم المستخدم (مثال بسيط)
        async function markProgress(skillId) {
            // في التطبيق الحقيقي، يجب إرسال البيانات إلى الخادم
            alert('تم تحديث التقدم بنجاح!');
            
            // إعادة تحميل المهارات لتحديث شريط التقدم
            fetchSkills();
        }
        
        // تحميل المهارات عند تحميل الصفحة
        window.onload = fetchSkills;
    </script>
</body>
</html>
