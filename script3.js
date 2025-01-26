document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.animated-text');
    let i = 0;
    const text = "Zoro's Projects Library";
    setInterval(() => {
        if (i < text.length) {
            header.textContent += text[i];
            i++;
        }
    }, 150);
});