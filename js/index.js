let currentIndex = 0;
const images = document.querySelectorAll('.carousel-images div');
const totalImages = images.length;

// 自动播放函数
function autoPlay() {
    setInterval(() => {
        nextSlide();
    }, 3000); // 每3秒切换一次
}

// 显示下一张
function nextSlide() {
    if (currentIndex === totalImages - 1) {
        currentIndex = 0;  // 到最后一张时，重新回到第一张
    } else {
        currentIndex++;
    }
    updateCarousel();
}

// 更新轮播图显示
function updateCarousel() {
    const offset = -currentIndex * 100; // 根据当前索引计算偏移量
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}

// 启动自动播放
autoPlay();
