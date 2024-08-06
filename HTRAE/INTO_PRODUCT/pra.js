// script.js

document.addEventListener("DOMContentLoaded", function() {
    const img = document.getElementById("product-img");
    const result = document.getElementById("zoom-result");
    const zoomFactor = 2; // 이미지 확대 배율

    img.addEventListener("mousemove", zoom);
    img.addEventListener("mouseleave", function() {
        result.style.display = "none";
    });

    function zoom(event) {
        result.style.display = "block";
        const imgRect = img.getBoundingClientRect();
        const x = event.clientX - imgRect.left;
        const y = event.clientY - imgRect.top;

        const fx = (x / imgRect.width) * 100;
        const fy = (y / imgRect.height) * 100;

        result.style.backgroundImage = `url(${img.src})`;
        result.style.backgroundSize = `${imgRect.width * zoomFactor}px ${imgRect.height * zoomFactor}px`; // Adjust zoom level
        result.style.backgroundPosition = `${fx}% ${fy}%`;

        // 결과 창 위치 설정
        result.style.left = `${imgRect.right + 10}px`; // 원본 이미지 오른쪽에 위치
        result.style.top = `${event.clientY - result.clientHeight / 2}px`; // 마우스 위치에 따라 수직 정렬
    }
});
