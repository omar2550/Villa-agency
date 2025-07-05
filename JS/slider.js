const sliderContainer = document.querySelector('.slider-container'), 
    slide = document.querySelector('.slider-container .slide'),
    next = document.querySelector('.slider-container .next'),
    prev = document.querySelector('.slider-container .prev'),
    pagination = document.querySelectorAll('.slider-container .pagination .pagin'),
    style = document.createElement('style');
    document.head.appendChild(style);

let translate = 0;

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

pagination.forEach((p, index) => {
    p.addEventListener('click', () => {
        translate = index * 100; 
        style.sheet.insertRule(`
            .slider-container .slide {
                transform: translateX(-${translate}%);
            }
        `, style.sheet.cssRules.length);

        pagination.forEach(p => p.classList.remove('active'));
        p.classList.add('active');
    });
})

// Functions
function nextSlide() {
    translate += 100; 
    if (translate > 200) { 
        translate = 0;
    }
    style.sheet.insertRule(`
        .slider-container .slide {
            transform: translateX(-${translate}%);
        }
    `, style.sheet.cssRules.length);

    pagination.forEach(p => p.classList.remove('active'));
    pagination[translate / 100].classList.add('active');
}

function prevSlide() {
    translate -= 100; 
    if (translate < 0) { 
        translate = 200;
    }
    
    style.sheet.insertRule(`
        .slider-container .slide {
            transform: translateX(-${translate}%);
        }
    `, style.sheet.cssRules.length);

    pagination.forEach(p => p.classList.remove('active'));
    pagination[translate / 100].classList.add('active');
}