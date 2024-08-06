function blinkText() {
    const text = document.querySelector('.blink');
    text.style.transition = 'opacity 1.2s ease-in-out';
    let visible = true;
    setInterval(() => {
        text.style.opacity = visible ? 0 : 1;
        visible = !visible;
    }, 900); // 1.67초 간격으로 깜박임 (5초에 3번)
}


        function redirectToWebsite() {
            setTimeout(() => {
                window.location.href = 'CHOICE/index.html'; // 원하는 웹사이트 URL로 변경하세요
            }, 5500);
        }

        blinkText();
        redirectToWebsite();