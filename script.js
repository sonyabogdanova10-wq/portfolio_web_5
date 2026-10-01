// === ЭФФЕКТ ПЕЧАТНОЙ МАШИНКИ ===
window.addEventListener("load", () => {
    const el = document.getElementById('typewriter');
    const line1 = "Привет,";
    const line2 = "это мой сайт :]";
    let charIndex = 0;

    function typeLine1() {
        if (charIndex < line1.length) {
            el.innerHTML = line1.substring(0, charIndex + 1) + '<br><span class="typing-cursor">_</span>';
            charIndex++;
            setTimeout(typeLine1, 100);
        } else {
            charIndex = 0;
            setTimeout(() => {
                el.innerHTML = line1 + '<br>&nbsp;&nbsp;<span class="typing-cursor">_</span>';
                typeLine2();
            }, 300);
        }
    }

    function typeLine2() {
        if (charIndex < line2.length) {
            el.innerHTML = line1 + '<br>&nbsp;&nbsp;' + line2.substring(0, charIndex + 1) + '<span class="typing-cursor">_</span>';
            charIndex++;
            setTimeout(typeLine2, 100);
        } else {
            el.innerHTML = line1 + '<br>&nbsp;&nbsp;' + line2 + '<span class="typing-cursor">_</span>';
        }
    }

    typeLine1();
});

// === АНИМИРОВАННЫЙ ГРАДИЕНТ ДЛЯ СЕКЦИИ НАВЫКОВ fail :{ ===
window.addEventListener("load", () => {
    if (typeof Granim !== 'undefined') {
        new Granim({
            element: '#skills-gradient',
            direction: 'diagonal',
            isPausedWhenNotInView: true,
            states: {
                "default-state": {
                    gradients: [
                        ['#001a00', '#003300'],
                        ['#002200', '#00ff41'],
                        ['#000d00', '#008f11']
                    ],
                    transitionSpeed: 5000
                }
            }
        });
    }
});

// === КУРСОР-ghost ===
window.addEventListener("load", () => {
    if (typeof cursoreffects !== 'undefined') {
        new cursoreffects.ghostCursor();
    }
});

// === Мобильное меню ===
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});