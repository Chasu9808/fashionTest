document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ JavaScript 실행됨!");

    const swiperWrapper = document.querySelector(".swiper-wrapper");
    const slides = document.querySelectorAll(".swiper-slide");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");

    if (!swiperWrapper || slides.length === 0) {
        console.error("❌ Swiper 요소를 찾을 수 없음!");
        return;
    }

    let currentIndex = 0;
    const slideWidth = slides[0].offsetWidth + 10; // ✅ 슬라이드 너비 + 간격
    const totalSlides = slides.length;
    const maxIndex = totalSlides - 3; // ✅ 3개씩 보이도록 설정

    function moveToSlide(index) {
        if (index < 0) {
            currentIndex = maxIndex;
        } else if (index > maxIndex) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }
        swiperWrapper.scrollTo({
            left: currentIndex * slideWidth,
            behavior: "smooth"
        });
    }

    function autoSlide() {
        moveToSlide(currentIndex + 1);
    }

    let slideInterval = setInterval(autoSlide, 3000);

    prevBtn.addEventListener("click", function () {
        moveToSlide(currentIndex - 1);
        resetAutoSlide();
    });

    nextBtn.addEventListener("click", function () {
        moveToSlide(currentIndex + 1);
        resetAutoSlide();
    });

    function resetAutoSlide() {
        clearInterval(slideInterval);
        slideInterval = setInterval(autoSlide, 3000);
    }
});
