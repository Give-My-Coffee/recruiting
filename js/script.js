document.addEventListener('DOMContentLoaded', function() {
    // Подсветка активного пункта меню
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const menuItems = document.querySelectorAll('.menu-item');
    
    menuItems.forEach(item => {
        const itemHref = item.getAttribute('href');
        if (itemHref === currentPage) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
    
    // Инициализация всех страниц
    initPage();
});

function initPage() {
    const page = document.body;
    
    // Инициализация страницы вакансий
    if (page.classList.contains('vacancies-page')) {
        initVacanciesPage();
    }
    
    // Инициализация страницы сотрудников
    if (page.classList.contains('employees-page')) {
        initEmployeesPage();
    }
    
    // Можно добавить инициализацию других страниц
}

function initVacanciesPage() {
    // Логика для страницы вакансий
    console.log('Инициализация страницы вакансий');
}

function initEmployeesPage() {
    // Логика для страницы сотрудников
    console.log('Инициализация страницы сотрудников');
}