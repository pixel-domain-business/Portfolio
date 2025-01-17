document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.animated-text');
    let i = 0;
    const text = "Zoro";
    setInterval(() => {
        if (i < text.length) {
            header.textContent += text[i];
            i++;
        }
    }, 150);
});