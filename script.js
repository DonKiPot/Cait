document.addEventListener('DOMContentLoaded', function() {
    const catalogButton = document.getElementById('catalog-button');
    const catalogDropdown = document.getElementById('catalog-dropdown');
    const dropdownLinks = catalogDropdown.querySelectorAll('a');

    catalogButton.addEventListener('click', function() {
        if (catalogDropdown.style.display === 'block') {
            catalogDropdown.style.display = 'none';
            catalogDropdown.style.opacity = '0';
            catalogDropdown.style.maxHeight = '0';
        } else {
            catalogDropdown.style.display = 'block';
            setTimeout(() => {
                catalogDropdown.style.opacity = '1';
                catalogDropdown.style.maxHeight = `${dropdownLinks.length * 40}px`; // 40px is the height of each link
            }, 10);
        }
    });

    // Close the dropdown if the user clicks outside of it
    window.addEventListener('click', function(event) {
        if (!event.target.matches('#catalog-button') && !catalogDropdown.contains(event.target)) {
            catalogDropdown.style.display = 'none';
            catalogDropdown.style.opacity = '0';
            catalogDropdown.style.maxHeight = '0';
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const authButton = document.getElementById('auth-button');
    const authForm = document.getElementById('auth-form');
    const loginButton = document.getElementById('login-button');

    authButton.addEventListener('click', function() {
        authForm.classList.toggle('show');
    });

    loginButton.addEventListener('click', function() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === 'admin' && password === 'zxcpon') {
            alert('Успешная авторизация!');
            authForm.classList.remove('show');
        } else {
            alert('Неверный логин или пароль');
        }
    });
});




document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.categories .container a');
    links.forEach(link => {
        link.addEventListener('mouseover', function() {
            this.querySelector('p').style.backgroundColor = '#1C1C1C';
            this.querySelector('p').style.transform = 'scale(1.05)';
        });
        link.addEventListener('mouseout', function() {
            this.querySelector('p').style.backgroundColor = '#f0f0f0';
            this.querySelector('p').style.transform = 'scale(1)';
        });
    });
});





document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    let isDown = false;
    let startX;
    let scrollLeft;
    let currentIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const slideInterval = 3000; // Интервал в миллисекундах

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    function startAutoSlide() {
        setInterval(nextSlide, slideInterval);
    }

    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        slider.classList.add('active');
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.classList.remove('active');
    });

    slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.classList.remove('active');
    });

    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2; //scroll-fast
        slider.scrollLeft = scrollLeft - walk;
    });


});