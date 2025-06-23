document.addEventListener('DOMContentLoaded', function() {
    const questionText = document.getElementById('question-text');
    const liveVideo = document.getElementById('live-video');
    const playbackVideo = document.getElementById('playback-video');
    const videoPlaceholder = document.getElementById('video-placeholder');
    const startBtn = document.getElementById('start-btn');
    const nextBtn = document.getElementById('next-btn');
    const finishBtn = document.getElementById('finish-btn');
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    
    const quizData = [
        "Расскажите о своём профессиональном опыте",
        "Почему вы хотите работать в нашей компании?",
        "Какие ваши сильные стороны?",
        "Приведите пример сложной ситуации и как вы с ней справились"
    ];
    
    let currentQuestionIndex = 0;
    let mediaRecorder;
    let recordedChunks = [];
    let stream;
    let quizStarted = false;

    // Инициализация опроса (теперь сразу начинает запись)
    async function initQuiz() {
        try {
            // Запрашиваем доступ к камере
            stream = await navigator.mediaDevices.getUserMedia({ 
                video: true, 
                audio: true
            });
            
            // Настраиваем видео элементы
            liveVideo.srcObject = stream;
            liveVideo.style.display = 'block';
            playbackVideo.style.display = 'none';
            videoPlaceholder.style.display = 'none';
            
            // Начинаем запись сразу
            startRecording();
            
            // Настраиваем UI
            currentQuestionIndex = 0;
            quizStarted = true;
            startBtn.disabled = true;
            nextBtn.disabled = true;
            finishBtn.disabled = true;
            loadQuestion(currentQuestionIndex);
            
        } catch (err) {
            console.error("Ошибка доступа к камере:", err);
            alert("Не удалось получить доступ к камере. Пожалуйста, разрешите доступ к камере и микрофону.");
        }
    }

    // Начать запись
    function startRecording() {
        recordedChunks = [];
        mediaRecorder = new MediaRecorder(stream, {
            mimeType: 'video/webm;codecs=vp9'
        });

        mediaRecorder.ondataavailable = function(e) {
            if (e.data.size > 0) {
                recordedChunks.push(e.data);
            }
        };

        mediaRecorder.onstop = function() {
            const blob = new Blob(recordedChunks, { type: 'video/webm' });
            const videoUrl = URL.createObjectURL(blob);
            playbackVideo.src = videoUrl;
            
            // Переключаем на воспроизведение
            liveVideo.style.display = 'none';
            playbackVideo.style.display = 'block';
            
            // Сохраняем ответ
            saveAnswer(currentQuestionIndex, videoUrl);
            
            // Активируем кнопки
            nextBtn.disabled = false;
            if (currentQuestionIndex === quizData.length - 1) {
                finishBtn.disabled = false;
            }
        };

        // Начинаем запись с интервалом 1 секунда
        mediaRecorder.start(1000);
    }

    // Загрузка вопроса
    function loadQuestion(index) {
        if (index >= quizData.length) {
            finishQuiz();
            return;
        }
        
        questionText.textContent = quizData[index];
        
        // Сбрасываем видео элементы
        playbackVideo.style.display = 'none';
        liveVideo.style.display = 'block';
        videoPlaceholder.style.display = 'none';
        nextBtn.disabled = true;
        
        // Если не первый вопрос, начинаем новую запись
        if (index > 0) {
            startRecording();
        }
        
        updateProgress(index + 1, quizData.length);
    }

    // Сохранить ответ
    function saveAnswer(index, videoUrl) {
        let answers = JSON.parse(localStorage.getItem('videoAnswers')) || [];
        answers[index] = { 
            question: quizData[index],
            videoUrl: videoUrl,
            timestamp: new Date().toISOString()
        };
        localStorage.setItem('videoAnswers', JSON.stringify(answers));
    }

    // Обновить прогресс
    function updateProgress(current, total) {
        const percentage = (current / total) * 100;
        progressBar.style.width = `${percentage}%`;
        progressText.textContent = `Вопрос ${current} из ${total}`;
    }

    // Завершить опрос
    function finishQuiz() {
        questionText.textContent = "Опрос завершён!";
        liveVideo.style.display = 'none';
        playbackVideo.style.display = 'none';
        videoPlaceholder.style.display = 'block';
        videoPlaceholder.textContent = "Все ответы записаны";
        nextBtn.disabled = true;
        finishBtn.disabled = false;
        
        // Останавливаем камеру
        if (stream) {
            stream.getTracks().forEach(track => track.stop());
        }
    }

    // Обработчики событий
    startBtn.addEventListener('click', initQuiz);
    
    nextBtn.addEventListener('click', function() {
        // Останавливаем текущую запись
        if (mediaRecorder && mediaRecorder.state !== 'inactive') {
            mediaRecorder.stop();
        }
        
        // Переходим к следующему вопросу
        currentQuestionIndex++;
        loadQuestion(currentQuestionIndex);
    });
    
    finishBtn.addEventListener('click', function() {
        // Останавливаем запись если активна
        if (mediaRecorder && mediaRecorder.state !== 'inactive') {
            mediaRecorder.stop();
        }
        
        // Переходим на страницу результатов
        window.location.href = 'results.html';
    });

    // Делаем кнопки всегда доступными при клике
    document.querySelectorAll('.btn').forEach(btn => {
        btn.style.pointerEvents = 'auto';
    });
});