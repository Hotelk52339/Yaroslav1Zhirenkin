// Массив вопросов по спецификации
const questions = [
    {
        qlabel: "Quel système est libre et open source ?",
        qid: 1,
        reponses: [
            { rlabel: "Windows", rid: 1 },
            { rlabel: "MacOS", rid: 2 },
            { rlabel: "Linux", rid: 3 },
            { rlabel: "iOS", rid: 4 }
        ],
        bonne: 3
    },
    {
        qlabel: "Quel outil pour automatiser une maison intelligente ?",
        qid: 2,
        reponses: [
            { rlabel: "Google Home", rid: 1 },
            { rlabel: "Amazon Alexa", rid: 2 },
            { rlabel: "Apple HomeKit", rid: 3 },
            { rlabel: "Home Assistant", rid: 4 }
        ],
        bonne: 4
    },
    {
        qlabel: "Quel langage sert à créer des pages web ?",
        qid: 3,
        reponses: [
            { rlabel: "Java", rid: 1 },
            { rlabel: "Python", rid: 2 },
            { rlabel: "C++", rid: 3 },
            { rlabel: "HTML", rid: 4 }
        ],
        bonne: 4
    }
];

// Глобальные переменные
let currentQuestion = 0;
let userAnswers = {};

// Функция инициализации
function initQuiz() {
    // Отображаем первый вопрос
    showQuestion(currentQuestion);
    
    // Привязываем обработчик к кнопке терминала
    document.getElementById('terminal-btn').addEventListener('click', startHackProcess);
}

// Показать вопрос
function showQuestion(index) {
    const q = questions[index];
    const container = document.getElementById('question-container');
    
    // Создаем HTML
    let html = `
        <h2 class="text-xl font-semibold mb-4">Question ${index + 1}: ${q.qlabel}</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4" id="answers-grid">`;
    
    // Добавляем варианты ответов
    q.reponses.forEach(response => {
        html += `
            <button class="brutal-btn answer-btn" 
                data-qid="${q.qid}" 
                data-rid="${response.rid}">
                ${response.rlabel}
            </button>`;
    });
    
    // Закрываем div
    html += '</div>';
    
    // Вставляем в DOM
    container.innerHTML = html;
    
    // Теперь добавляем обработчики событий к кнопкам
    document.querySelectorAll('.answer-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const qid = parseInt(this.getAttribute('data-qid'));
            const rid = parseInt(this.getAttribute('data-rid'));
            selectAnswer(qid, rid);
        });
    });
}

// Выбор ответа
function selectAnswer(qid, rid) {
    // Сохраняем ответ
    userAnswers[qid] = rid;
    
    // Подсвечиваем выбранную кнопку
    document.querySelectorAll('.answer-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    
    // Добавляем небольшую задержку перед переходом
    setTimeout(() => {
        // Переходим к следующему вопросу
        currentQuestion++;
        
        if (currentQuestion < questions.length) {
            showQuestion(currentQuestion);
        } else {
            // Проверяем ответы и перенаправляем
            checkAnswers();
        }
    }, 300);
}

// Проверка ответов и перенаправление
function checkAnswers() {
    // Проверяем все ответы
    const allCorrect = questions.every(q => 
        userAnswers[q.qid] === q.bonne
    );
    
    // Генерируем имя страницы
    const pageName = generatePageName();
    
    console.log("Quiz completed");
    console.log("Answers:", userAnswers);
    console.log("Page name:", pageName);
    
    // Перенаправляем
    if (allCorrect) {
        window.location.href = 'A1_3_A2_4_A3_4.html';
    } else {
        window.location.href = 'erreur.html';
    }
}

// Генерация имени страницы
function generatePageName() {
    return Object.entries(userAnswers)
        .sort((a, b) => a[0] - b[0]) // Сортируем по qid
        .map(([qid, rid]) => `A${qid}_${rid}`)
        .join('');
}

// Логика терминала
function startHackProcess() {
    // Показываем терминал
    const terminal = document.getElementById('terminal');
    terminal.style.display = 'block';
    
    // Добавляем анимацию "хакинга"
    const terminalContent = terminal.querySelector('.terminal-content');
    
    terminalContent.innerHTML += '\n> Accessing system...';
    
    setTimeout(() => {
        terminalContent.innerHTML += '\n> Bypassing security protocols...';
    }, 800);
    
    setTimeout(() => {
        terminalContent.innerHTML += '\n> Access granted!';
    }, 1600);
    
    setTimeout(() => {
        terminalContent.innerHTML += '\n> Redirecting...';
        
        // Перенаправляем через 3 секунды
        setTimeout(() => {
            window.location.href = 'A1_3_A2_4_A3_4.html';
        }, 1000);
    }, 2500);
}

// Запускаем инициализацию при загрузке страницы
document.addEventListener('DOMContentLoaded', initQuiz);
