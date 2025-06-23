document.addEventListener('DOMContentLoaded', function() {
    // Данные кандидатов
    const candidates = {
        1: {
            fullName: "Иванов Иван Петрович",
            shortName: "Иванов И.П.",
            position: "Frontend-разработчик",
            status: "Новый кандидат",
            statusType: "new",
            phone: "+375 (29) 123-45-67",
            email: "ivanov@example.by",
            city: "Минск",
            salary: "4 500 BYN",
            experience: "5 лет",
            skills: "JavaScript, React, TypeScript",
            education: "БГУ, ФПМИ, Прикладная информатика, 2018",
            english: "B2 (Средне-продвинутый)",
            history: [
                { date: "25.06.2023", event: "Добавлен в систему", active: true },
                { date: "26.06.2023", event: "Просмотр резюме", active: false },
                { date: "27.06.2023", event: "Тех. собеседование", active: false },
                { date: "28.06.2023", event: "Решение", active: false }
            ],
            photo: "https://randomuser.me/api/portraits/men/32.jpg",
            messages: [
                {
                    text: "Здравствуйте, меня заинтересовала вакансия. Отправил резюме.",
                    incoming: true,
                    time: "10:30"
                },
                {
                    text: "Спасибо за отклик! Мы рассмотрим ваше резюме и свяжемся с вами.",
                    incoming: false,
                    time: "11:45"
                },
                {
                    text: "Хотел бы уточнить сроки рассмотрения моего резюме.",
                    incoming: true,
                    time: "12:20"
                }
            ]
        },
        2: {
            fullName: "Петрова Анна Константиновна",
            shortName: "Петрова А.К.",
            position: "HR-менеджер",
            status: "У клиента",
            statusType: "client",
            phone: "+375 (29) 234-56-78",
            email: "petrova@example.by",
            city: "Гродно",
            salary: "3 200 BYN",
            experience: "3 года",
            skills: "Подбор персонала, HR-аналитика",
            education: "ГрГУ, Психология, 2019",
            english: "B1 (Средний)",
            history: [
                { date: "24.06.2023", event: "Добавлена в систему", active: true },
                { date: "25.06.2023", event: "Направлена клиенту", active: true },
                { date: "26.06.2023", event: "Рассмотрение", active: false }
            ],
            photo: "https://randomuser.me/api/portraits/women/44.jpg",
            messages: [
                {
                    text: "Добрый день, отправила вам свое резюме.",
                    incoming: true,
                    time: "09:15"
                },
                {
                    text: "Спасибо, мы передали ваше резюме клиенту.",
                    incoming: false,
                    time: "10:30"
                }
            ]
        },
        3: {
            fullName: "Сидорович Михаил Владимирович",
            shortName: "Сидорович М.В.",
            position: "Backend-разработчик",
            status: "Собеседование",
            statusType: "interview",
            phone: "+375 (29) 345-67-89",
            email: "sidorovich@example.by",
            city: "Брест",
            salary: "5 000 BYN",
            experience: "7 лет",
            skills: "Python, Django, PostgreSQL",
            education: "БрГТУ, Информационные системы, 2016",
            english: "B2 (Средне-продвинутый)",
            history: [
                { date: "23.06.2023", event: "Добавлен в систему", active: true },
                { date: "24.06.2023", event: "Тех. оценка", active: true },
                { date: "25.06.2023", event: "Назначено собеседование", active: false }
            ],
            photo: "https://randomuser.me/api/portraits/men/67.jpg",
            messages: [
                {
                    text: "Здравствуйте, я прошел техническое тестирование. Какие дальнейшие шаги?",
                    incoming: true,
                    time: "14:00"
                },
                {
                    text: "Мы назначили вам собеседование на завтра в 15:00.",
                    incoming: false,
                    time: "14:30"
                }
            ]
        },
        4: {
            fullName: "Кузнецова Елена Петровна",
            shortName: "Кузнецова Е.П.",
            position: "Дизайнер UX/UI",
            status: "Оффер",
            statusType: "offer",
            phone: "+375 (29) 456-78-90",
            email: "kuznetsova@example.by",
            city: "Витебск",
            salary: "4 000 BYN",
            experience: "4 года",
            skills: "Figma, Adobe XD, User Research",
            education: "ВГТУ, Графический дизайн, 2018",
            english: "B2 (Средне-продвинутый)",
            history: [
                { date: "22.06.2023", event: "Добавлена в систему", active: true },
                { date: "23.06.2023", event: "Портфолио оценено", active: true },
                { date: "24.06.2023", event: "Собеседование", active: true },
                { date: "25.06.2023", event: "Выставлен оффер", active: false }
            ],
            photo: "https://randomuser.me/api/portraits/women/28.jpg",
            messages: [
                {
                    text: "Приветствую! Отправила портфолио по вашей просьбе.",
                    incoming: true,
                    time: "11:20"
                },
                {
                    text: "Ваше портфолио впечатлило команду! Хотим предложить вам оффер.",
                    incoming: false,
                    time: "16:45"
                }
            ]
        },
        5: {
            fullName: "Новик Дмитрий Александрович",
            shortName: "Новик Д.А.",
            position: "Java-разработчик",
            status: "Принят",
            statusType: "work",
            phone: "+375 (29) 567-89-01",
            email: "novik@example.by",
            city: "Гомель",
            salary: "5 500 BYN",
            experience: "6 лет",
            skills: "Java, Spring, Hibernate",
            education: "ГГУ им. Скорины, Программное обеспечение, 2017",
            english: "B2 (Средне-продвинутый)",
            history: [
                { date: "21.06.2023", event: "Добавлен в систему", active: true },
                { date: "22.06.2023", event: "Тех. собеседование", active: true },
                { date: "23.06.2023", event: "Оффер принят", active: true },
                { date: "24.06.2023", event: "Подписан договор", active: true }
            ],
            photo: "https://randomuser.me/api/portraits/men/75.jpg",
            messages: [
                {
                    text: "Добрый день, подписал договор. Когда можно приступать?",
                    incoming: true,
                    time: "10:00"
                },
                {
                    text: "Добро пожаловать в команду! Ваш первый рабочий день - понедельник.",
                    incoming: false,
                    time: "10:15"
                }
            ]
        },
        6: {
            fullName: "Семёнова Ольга Игоревна",
            shortName: "Семёнова О.И.",
            position: "Маркетолог",
            status: "Отказ",
            statusType: "reject",
            phone: "+375 (29) 678-90-12",
            email: "semenova@example.by",
            city: "Могилёв",
            salary: "3 500 BYN",
            experience: "5 лет",
            skills: "SMM, контекстная реклама",
            education: "БГЭУ, Маркетинг, 2018",
            english: "B1 (Средний)",
            history: [
                { date: "20.06.2023", event: "Добавлена в систему", active: true },
                { date: "21.06.2023", event: "Собеседование", active: true },
                { date: "22.06.2023", event: "Отказ кандидата", active: true }
            ],
            photo: "https://randomuser.me/api/portraits/women/63.jpg",
            messages: [
                {
                    text: "Здравствуйте, я передумала рассматривать ваше предложение.",
                    incoming: true,
                    time: "13:10"
                },
                {
                    text: "Жаль, что вы отказались. Будем рады сотрудничеству в будущем.",
                    incoming: false,
                    time: "13:30"
                }
            ]
        },
        7: {
            fullName: "Корович Александр Михайлович",
            shortName: "Корович А.М.",
            position: "Проджект-менеджер",
            status: "Новый кандидат",
            statusType: "new",
            phone: "+375 (29) 789-01-23",
            email: "korovich@example.by",
            city: "Минск",
            salary: "5 200 BYN",
            experience: "8 лет",
            skills: "Agile, Scrum, Jira",
            education: "БГУИР, Управление проектами, 2015",
            english: "C1 (Продвинутый)",
            history: [
                { date: "19.06.2023", event: "Добавлен в систему", active: true }
            ],
            photo: "https://randomuser.me/api/portraits/men/81.jpg",
            messages: [
                {
                    text: "Добрый день! Отправил резюме на вакансию проджект-менеджера.",
                    incoming: true,
                    time: "15:45"
                }
            ]
        },
        8: {
            fullName: "Лукьяненко Екатерина Дмитриевна",
            shortName: "Лукьяненко Е.Д.",
            position: "Аналитик данных",
            status: "У клиента",
            statusType: "client",
            phone: "+375 (29) 890-12-34",
            email: "lukyanenko@example.by",
            city: "Минск",
            salary: "4 800 BYN",
            experience: "4 года",
            skills: "SQL, Python, Power BI",
            education: "БГУ, Прикладная математика, 2019",
            english: "B2 (Средне-продвинутый)",
            history: [
                { date: "18.06.2023", event: "Добавлена в систему", active: true },
                { date: "19.06.2023", event: "Направлена клиенту", active: false }
            ],
            photo: "https://randomuser.me/api/portraits/women/85.jpg",
            messages: [
                {
                    text: "Здравствуйте, отправила вам свое резюме и тестовое задание.",
                    incoming: true,
                    time: "12:00"
                },
                {
                    text: "Спасибо, мы передали ваши материалы клиенту на рассмотрение.",
                    incoming: false,
                    time: "12:30"
                }
            ]
        },
        9: {
            fullName: "Лебедев Артём Сергеевич",
            shortName: "Лебедев А.С.",
            position: "DevOps инженер",
            status: "Собеседование",
            statusType: "interview",
            phone: "+375 (29) 901-23-45",
            email: "lebedev@example.by",
            city: "Минск",
            salary: "6 000 BYN",
            experience: "5 лет",
            skills: "Docker, Kubernetes, AWS",
            education: "БГУИР, Информационные системы, 2018",
            english: "B2 (Средне-продвинутый)",
            history: [
                { date: "17.06.2023", event: "Добавлен в систему", active: true },
                { date: "18.06.2023", event: "Тех. оценка", active: true },
                { date: "19.06.2023", event: "Назначено собеседование", active: false }
            ],
            photo: "https://randomuser.me/api/portraits/men/90.jpg",
            messages: [
                {
                    text: "Добрый день, прошел техническое интервью. Какие следующие шаги?",
                    incoming: true,
                    time: "16:20"
                },
                {
                    text: "Мы назначили вам финальное собеседование с CTO на завтра в 11:00.",
                    incoming: false,
                    time: "16:45"
                }
            ]
        }
    };

    // Данные вакансий
    const vacancies = {
        1: {
            id: 1,
            title: "Frontend-разработчик (React)",
            department: "Отдел разработки",
            location: "Минск, ул. Ленина 10",
            salary: "от 4 500 BYN",
            category: "IT",
            status: "active",
            candidatesCount: 12,
            date: "15.06.2023",
            description: "Ищем опытного Frontend-разработчика с глубокими знаниями React и TypeScript.",
            requirements: "Опыт работы от 3 лет, знание современных фронтенд технологий."
        },
        2: {
            id: 2,
            title: "Маркетолог (Digital)",
            department: "Маркетинговый отдел",
            location: "Минск, ул. Кульман 1",
            salary: "от 3 200 BYN",
            category: "Маркетинг",
            status: "active",
            candidatesCount: 8,
            date: "10.06.2023",
            description: "Требуется маркетолог с опытом работы в digital-маркетинге.",
            requirements: "Опыт работы от 2 лет, знание SMM и контекстной рекламы."
        },
        3: {
            id: 3,
            title: "Backend-разработчик (Python)",
            department: "Отдел разработки",
            location: "Минск, ул. Толбухина 5",
            salary: "от 5 000 BYN",
            category: "IT",
            status: "active",
            candidatesCount: 7,
            date: "12.06.2023",
            description: "Ищем опытного Python-разработчика для работы с высоконагруженными системами.",
            requirements: "Опыт работы от 4 лет, знание Django, Flask, PostgreSQL."
        },
        4: {
            id: 4,
            title: "HR-менеджер",
            department: "HR-отдел",
            location: "Минск, пр. Независимости 45",
            salary: "от 3 000 BYN",
            category: "HR",
            status: "draft",
            candidatesCount: 0,
            date: "18.06.2023",
            description: "Требуется HR-менеджер для подбора IT-специалистов.",
            requirements: "Опыт работы в IT-рекрутинге от 2 лет."
        },
        5: {
            id: 5,
            title: "UX/UI дизайнер",
            department: "Дизайн-отдел",
            location: "Минск, ул. Сурганова 15",
            salary: "от 4 000 BYN",
            category: "Дизайн",
            status: "archived",
            candidatesCount: 5,
            date: "05.06.2023",
            description: "Ищем дизайнера с опытом создания интерфейсов для веб и мобильных приложений.",
            requirements: "Опыт работы от 3 лет, знание Figma, Adobe XD."
        }
    };

    // Текущее состояние приложения
    const state = {
        currentSection: 'candidates', // 'candidates', 'vacancies' или 'tests'
        currentCandidateId: 1,
        currentVacancyId: 1,
        currentCandidateFilter: 'all',
        currentVacancyFilter: 'all',
        currentVacancyCategory: 'all',
        currentSort: 'date-desc'
    };

    // Инициализация приложения
    function init() {
        setupEventListeners();
        renderCandidatesSection();
        renderVacanciesSection();
        activateDefaultSection();
    }

    // Настройка обработчиков событий
    function setupEventListeners() {
        // Переключение между разделами в боковом меню
        document.querySelectorAll('.menu-item').forEach(item => {
            item.addEventListener('click', function() {
                const section = this.getAttribute('data-section');
                if (section) {
                    state.currentSection = section;
                    activateSection(section);
                    
                    // Обновляем активную вкладку в верхнем меню
                    updateSectionTabs(section);
                }
            });
        });

        // Переключение между вкладками разделов (Вакансии/Кандидаты/Тесты)
        document.querySelectorAll('.section-tab').forEach(tab => {
            tab.addEventListener('click', function() {
                const section = this.getAttribute('data-section');
                state.currentSection = section;
                activateSection(section);
                
                // Обновляем активный пункт бокового меню
                updateSidebarMenu(section);
                
                // Обновляем активную вкладку
                document.querySelectorAll('.section-tab').forEach(t => {
                    t.classList.remove('active');
                });
                this.classList.add('active');
            });
        });

        // Фильтрация кандидатов по статусу
        document.querySelectorAll('.status-tab').forEach(tab => {
            tab.addEventListener('click', function() {
                const status = this.getAttribute('data-status');
                state.currentCandidateFilter = status;
                filterCandidates(status);
                
                // Обновляем активную вкладку статуса
                document.querySelectorAll('.status-tab').forEach(t => {
                    t.classList.remove('active');
                });
                this.classList.add('active');
            });
        });

        // Выбор кандидата
        document.querySelectorAll('.candidate-card').forEach(card => {
            card.addEventListener('click', function() {
                const candidateId = parseInt(this.getAttribute('data-candidate'));
                state.currentCandidateId = candidateId;
                updateCandidateDetails(candidateId);
                
                // Обновляем активную карточку кандидата
                document.querySelectorAll('.candidate-card').forEach(c => {
                    c.classList.remove('active');
                });
                this.classList.add('active');
            });
        });

        // Отправка сообщения
        document.querySelector('.send-btn')?.addEventListener('click', sendMessage);
        document.querySelector('.message-input input')?.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') sendMessage();
        });
    }

    // Обновление активных вкладок в верхнем меню
    function updateSectionTabs(section) {
        document.querySelectorAll('.section-tab').forEach(tab => {
            tab.classList.remove('active');
            if (tab.getAttribute('data-section') === section) {
                tab.classList.add('active');
            }
        });
    }

    // Обновление активного пункта бокового меню
    function updateSidebarMenu(section) {
        document.querySelectorAll('.menu-item').forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('data-section') === section) {
                item.classList.add('active');
            }
        });
    }

    // Активация раздела по умолчанию
    function activateDefaultSection() {
        activateSection(state.currentSection);
    }

    // Активация выбранного раздела
    function activateSection(section) {
        // Скрыть все разделы
        document.querySelectorAll('.section-content').forEach(sec => {
            sec.style.display = 'none';
        });

        // Показать выбранный раздел
        document.getElementById(`${section}-section`).style.display = 'block';

        // Обновить активный пункт меню
        updateSidebarMenu(section);
        updateSectionTabs(section);

        // Обновить заголовок
        document.title = getSectionTitle(section);
    }

    // Получение заголовка для раздела
    function getSectionTitle(section) {
        const titles = {
            'candidates': "Кандидаты | БелКадры",
            'vacancies': "Вакансии | БелКадры",
            'tests': "Тесты | БелКадры"
        };
        return titles[section] || "БелКадры";
    }

    // =============================================
    // ФУНКЦИИ ДЛЯ РАБОТЫ С КАНДИДАТАМИ
    // =============================================

    function renderCandidatesSection() {
        renderCandidatesList();
        updateCandidateDetails(state.currentCandidateId);
        filterCandidates(state.currentCandidateFilter);
    }

    function renderCandidatesList() {
        const container = document.querySelector('.candidates-column');
        if (!container) return;
        
        container.innerHTML = '';
        
        Object.entries(candidates).forEach(([id, candidate]) => {
            const card = document.createElement('div');
            card.className = 'candidate-card';
            card.setAttribute('data-candidate', id);
            card.setAttribute('data-status', candidate.statusType);
            
            if (parseInt(id) === state.currentCandidateId) {
                card.classList.add('active');
            }
            
            card.innerHTML = `
                <img src="${candidate.photo}" class="candidate-photo" alt="${candidate.shortName}">
                <div class="candidate-info">
                    <h3>${candidate.shortName}</h3>
                    <p>${candidate.position}</p>
                    <span class="candidate-status status-${candidate.statusType}">${getCandidateStatusText(candidate.statusType)}</span>
                </div>
            `;
            
            card.addEventListener('click', function() {
                state.currentCandidateId = parseInt(id);
                updateCandidateDetails(state.currentCandidateId);
                
                document.querySelectorAll('.candidate-card').forEach(c => {
                    c.classList.remove('active');
                });
                this.classList.add('active');
            });
            
            container.appendChild(card);
        });
    }

    function updateCandidateDetails(id) {
        const candidate = candidates[id];
        if (!candidate) return;
        
        // Обновляем основную информацию
        const bigPhoto = document.querySelector('.candidate-big-photo');
        const mainInfo = document.querySelector('.candidate-main-info');
        
        if (bigPhoto) bigPhoto.src = candidate.photo;
        if (mainInfo) {
            mainInfo.querySelector('h2').textContent = candidate.fullName;
            mainInfo.querySelector('.position').textContent = candidate.position;
            mainInfo.querySelector('.status').textContent = candidate.status;
        }
        
        // Обновляем контактную информацию
        const contactInfo = document.querySelector('.contact-info');
        if (contactInfo) {
            contactInfo.querySelector('.phone').textContent = candidate.phone;
            contactInfo.querySelector('.email').textContent = candidate.email;
            contactInfo.querySelector('.city').textContent = candidate.city;
        }
        
        // Обновляем профессиональную информацию
        const profInfo = document.querySelector('.professional-info');
        if (profInfo) {
            profInfo.querySelector('.salary').textContent = candidate.salary;
            profInfo.querySelector('.experience').textContent = candidate.experience;
            profInfo.querySelector('.skills').textContent = candidate.skills;
            profInfo.querySelector('.english').textContent = candidate.english;
        }
        
        // Обновляем образование
        const educationInfo = document.querySelector('.education-info');
        if (educationInfo) {
            const educationParts = candidate.education.split(', ');
            educationInfo.querySelector('.university').textContent = educationParts[0];
            educationInfo.querySelector('.graduation-year').textContent = educationParts[educationParts.length - 1];
            educationInfo.querySelector('.specialty').textContent = educationParts.slice(1, -1).join(', ');
        }
        
        // Обновляем историю
        renderCandidateHistory(candidate.history);
        
        // Обновляем переписку
        renderMessages(candidate.messages);
    }

    function renderCandidateHistory(history) {
        const historySteps = document.querySelector('.history-steps');
        if (!historySteps) return;
        
        historySteps.innerHTML = '';
        
        history.forEach((item, index) => {
            historySteps.innerHTML += `
                <div class="history-step">
                    <div class="step-circle ${item.active ? 'step-active' : ''}">${index + 1}</div>
                    <div class="step-date">${item.date}</div>
                    <div class="step-event">${item.event}</div>
                </div>
            `;
        });
    }

    function renderMessages(messages) {
        const messagesList = document.querySelector('.messages-list');
        if (!messagesList) return;
        
        messagesList.innerHTML = '';
        
        messages.forEach(msg => {
            const messageClass = msg.incoming ? 'message-incoming' : 'message-outgoing';
            messagesList.innerHTML += `
                <div class="message ${messageClass}">
                    <div class="message-text">${msg.text}</div>
                    <div class="message-meta">${msg.time}</div>
                </div>
            `;
        });
        
        messagesList.scrollTop = messagesList.scrollHeight;
    }

    function filterCandidates(status) {
        document.querySelectorAll('.candidate-card').forEach(card => {
            if (status === 'all' || card.getAttribute('data-status') === status) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    }

    function sendMessage() {
        const input = document.querySelector('.message-input input');
        if (!input) return;
        
        const text = input.value.trim();
        
        if (text && candidates[state.currentCandidateId]) {
            const now = new Date();
            const timeString = now.getHours() + ':' + (now.getMinutes() < 10 ? '0' : '') + now.getMinutes();
            
            candidates[state.currentCandidateId].messages.push({
                text: text,
                incoming: false,
                time: timeString
            });
            
            renderMessages(candidates[state.currentCandidateId].messages);
            input.value = '';
        }
    }

    // Получение текста статуса кандидата
    function getCandidateStatusText(status) {
        const statusTexts = {
            'new': 'Новый',
            'client': 'У клиента',
            'interview': 'Собеседование',
            'offer': 'Оффер',
            'work': 'Принят',
            'reject': 'Отказ'
        };
        return statusTexts[status] || status;
    }

    // =============================================
    // ФУНКЦИИ ДЛЯ РАБОТЫ С ВАКАНСИЯМИ
    // =============================================

    function renderVacanciesSection() {
        renderVacanciesList();
        filterVacancies();
    }

    function renderVacanciesList() {
        const container = document.querySelector('.vacancies-container');
        if (!container) return;
        
        container.innerHTML = '';
        
        Object.entries(vacancies).forEach(([id, vacancy]) => {
            const vacancyCard = document.createElement('div');
            vacancyCard.className = 'vacancy-card';
            vacancyCard.setAttribute('data-vacancy-id', id);
            vacancyCard.setAttribute('data-status', vacancy.status);
            vacancyCard.setAttribute('data-category', vacancy.category.toLowerCase());
            
            vacancyCard.innerHTML = `
                <div class="vacancy-header">
                    <h3>${vacancy.title}</h3>
                    <span class="vacancy-status ${vacancy.status}">${getVacancyStatusText(vacancy.status)}</span>
                </div>
                <div class="vacancy-details">
                    <div class="detail-row">
                        <i class="material-icons">business</i>
                        <span>${vacancy.department}</span>
                    </div>
                    <div class="detail-row">
                        <i class="material-icons">location_on</i>
                        <span>${vacancy.location}</span>
                    </div>
                    <div class="detail-row">
                        <i class="material-icons">attach_money</i>
                        <span>${vacancy.salary}</span>
                    </div>
                    <div class="detail-row">
                        <i class="material-icons">category</i>
                        <span>${vacancy.category}</span>
                    </div>
                </div>
                <div class="vacancy-footer">
                    <div class="candidates-count">
                        <i class="material-icons">people</i>
                        <span>${vacancy.candidatesCount} кандидатов</span>
                    </div>
                    <div class="vacancy-date">
                        ${getVacancyDateText(vacancy.status)}: ${vacancy.date}
                    </div>
                </div>
            `;
            
            container.appendChild(vacancyCard);
        });
    }

    function filterVacancies() {
        document.querySelectorAll('.vacancy-card').forEach(card => {
            const statusMatch = state.currentVacancyFilter === 'all' || 
                              card.getAttribute('data-status') === state.currentVacancyFilter;
            const categoryMatch = state.currentVacancyCategory === 'all' || 
                               card.getAttribute('data-category') === state.currentVacancyCategory;
            
            if (statusMatch && categoryMatch) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
        
        sortVacancies();
    }

    function sortVacancies() {
        const container = document.querySelector('.vacancies-container');
        if (!container) return;
        
        const vacancyCards = Array.from(document.querySelectorAll('.vacancy-card'));
        
        vacancyCards.sort((a, b) => {
            const dateA = a.querySelector('.vacancy-date').textContent.split(': ')[1];
            const dateB = b.querySelector('.vacancy-date').textContent.split(': ')[1];
            const salaryA = parseSalary(a.querySelector('.detail-row:nth-child(3) span').textContent);
            const salaryB = parseSalary(b.querySelector('.detail-row:nth-child(3) span').textContent);
            const titleA = a.querySelector('h3').textContent;
            const titleB = b.querySelector('h3').textContent;
            
            switch(state.currentSort) {
                case 'date-desc': return new Date(dateB.split('.').reverse().join('-')) - new Date(dateA.split('.').reverse().join('-'));
                case 'date-asc': return new Date(dateA.split('.').reverse().join('-')) - new Date(dateB.split('.').reverse().join('-'));
                case 'salary-desc': return salaryB - salaryA;
                case 'salary-asc': return salaryA - salaryB;
                case 'name-asc': return titleA.localeCompare(titleB);
                case 'name-desc': return titleB.localeCompare(titleA);
                default: return 0;
            }
        });
        
        vacancyCards.forEach(card => container.appendChild(card));
    }

    // Получение текста статуса вакансии
    function getVacancyStatusText(status) {
        const statusTexts = {
            'active': 'Активна',
            'archived': 'Архив',
            'draft': 'Черновик'
        };
        return statusTexts[status] || status;
    }

    // Получение текста даты для вакансии
    function getVacancyDateText(status) {
        const dateTexts = {
            'active': 'Опубликована',
            'archived': 'Закрыта',
            'draft': 'Создана'
        };
        return dateTexts[status] || 'Дата';
    }

    // Парсинг зарплаты из строки
    function parseSalary(salaryText) {
        const num = salaryText.replace(/[^\d]/g, '');
        return parseInt(num) || 0;
    }
document.addEventListener('DOMContentLoaded', function() {
    // Переключение между разделами (Вакансии, Кандидаты, Тесты)
    const sectionTabs = document.querySelectorAll('.section-tab');
    const sectionContents = document.querySelectorAll('.section-content');
    
    sectionTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Удаляем активный класс у всех вкладок и контента
            sectionTabs.forEach(t => t.classList.remove('active'));
            sectionContents.forEach(c => c.classList.remove('active'));
            
            // Добавляем активный класс текущей вкладке
            this.classList.add('active');
            
            // Показываем соответствующий контент
            const sectionId = this.getAttribute('data-section');
            const contentToShow = document.getElementById(`${sectionId}-content`);
            if (contentToShow) {
                contentToShow.classList.add('active');
            }
        });
    });
    
    // Фильтрация кандидатов по статусу
    const statusTabs = document.querySelectorAll('.status-tab');
    const candidateCards = document.querySelectorAll('.candidate-card');
    
    statusTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Удаляем активный класс у всех вкладок статусов
            statusTabs.forEach(t => t.classList.remove('active'));
            
            // Добавляем активный класс текущей вкладке
            this.classList.add('active');
            
            // Фильтруем кандидатов
            const status = this.getAttribute('data-status');
            candidateCards.forEach(card => {
                if (status === 'all' || card.getAttribute('data-status') === status) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
    
    // Выбор кандидата в списке
    candidateCards.forEach(card => {
        card.addEventListener('click', function() {
            // Удаляем активный класс у всех карточек
            candidateCards.forEach(c => c.classList.remove('active'));
            
            // Добавляем активный класс текущей карточке
            this.classList.add('active');
            
            // Здесь можно добавить логику загрузки данных выбранного кандидата
            // в правую колонку с деталями
        });
    });
    
    // Фильтрация вакансий
    const statusFilter = document.getElementById('status-filter');
    const departmentFilter = document.getElementById('department-filter');
    const vacancyCards = document.querySelectorAll('.vacancy-card');
    
    function filterVacancies() {
        const statusValue = statusFilter.value;
        const departmentValue = departmentFilter.value;
        
        vacancyCards.forEach(card => {
            const cardStatus = card.querySelector('.vacancy-status').classList.contains(`status-${statusValue}`);
            const cardDepartment = card.querySelector('.info-row span').textContent.toLowerCase();
            
            const statusMatch = statusValue === 'all' || cardStatus;
            const departmentMatch = departmentValue === 'all' || 
                                 cardDepartment.includes(departmentValue);
            
            if (statusMatch && departmentMatch) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }
    
    statusFilter.addEventListener('change', filterVacancies);
    departmentFilter.addEventListener('change', filterVacancies);
    
    // Фильтрация тестов
    const testTypeFilter = document.getElementById('test-type-filter');
    const testCards = document.querySelectorAll('.test-card');
    
    testTypeFilter.addEventListener('change', function() {
        const typeValue = this.value;
        
        testCards.forEach(card => {
            if (typeValue === 'all' || 
                card.querySelector('.test-type').classList.contains(`type-${typeValue}`)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});
    // Запуск приложения
    init();
});
