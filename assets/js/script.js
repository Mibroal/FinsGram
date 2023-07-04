let menuBtn = document.querySelector('.header__burger');
        let menu = document.querySelector('.menu');
        menuBtn.addEventListener('click', function () {
            menu.classList.toggle('active');
        })