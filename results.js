document.addEventListener('DOMContentLoaded', function() {
    const answersList = document.getElementById('answers-list');
    const backBtn = document.getElementById('back-btn');
    
    // Загружаем сохранённые ответы
    function loadAnswers() {
        // Сначала проверяем localStorage
        const answers = JSON.parse(localStorage.getItem('videoAnswers')) || [];
        
        if (answers.length === 0 || answers.every(a => a === null)) {
            answersList.innerHTML = '<p class="no-answers">У вас пока нет сохранённых ответов.</p>';
            return;
        }
        
        answersList.innerHTML = '';
        answers.forEach((answer, index) => {
            if (answer) {
                const answerItem = document.createElement('div');
                answerItem.className = 'answer-item';
                
                const date = new Date(answer.timestamp);
                const formattedDate = date.toLocaleString();
                
                answerItem.innerHTML = `
                    <div class="answer-header">
                        <span class="answer-question">Вопрос ${index + 1}: ${answer.question}</span>
                        <span class="answer-date">${formattedDate}</span>
                    </div>
                    <video class="answer-video" controls>
                        <source src="${answer.videoUrl}" type="video/webm">
                        Ваш браузер не поддерживает видео тег.
                    </video>
                    <div class="answer-actions">
                        <button class="download-btn" data-url="${answer.videoUrl}">Скачать</button>
                    </div>
                `;
                
                answersList.appendChild(answerItem);
            }
        });
        
        // Добавляем обработчики для кнопок скачивания
        document.querySelectorAll('.download-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const videoUrl = this.getAttribute('data-url');
                downloadVideo(videoUrl, `answer_${this.parentNode.parentNode.querySelector('.answer-question').textContent.substring(0, 20)}.webm`);
            });
        });
    }
    
    // Скачать видео
    function downloadVideo(url, filename) {
        const a = document.createElement('a');
        a.href = url;
        a.download = filename || 'video_answer.webm';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
    
    // Вернуться к опросу
    backBtn.addEventListener('click', function() {
        window.location.href = 'index.html';
    });
    
    loadAnswers();
});