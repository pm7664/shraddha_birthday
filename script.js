document.addEventListener("DOMContentLoaded", function () {

    // ================= SELECT ELEMENTS =================

    const btn = document.getElementById("surpriseBtn");
    const message = document.getElementById("finalMessage");
    const music = document.getElementById("bgMusic");
    const musicBtn = document.getElementById("musicBtn");
    const volumeSlider = document.getElementById("volumeSlider");

    const previewBox = document.getElementById("previewBox");
    const previewImg = document.getElementById("previewImg");
    const closePreview = document.getElementById("closePreview");

    const yearsSpan = document.getElementById("years");
    const secondsSpan = document.getElementById("seconds");
    const countdownSpan = document.getElementById("countdown");

    const images = document.querySelectorAll(".gallery img");

    // ================= FINAL SURPRISE BUTTON =================

    const finalText = "No matter how much life changes,\n" +
        "some bonds remain beautifully constant.\n" +
        "I’m truly grateful for you, Shraddha 🌿";

    btn.addEventListener("click", () => {

        music.play();

        btn.disabled = true;
        btn.innerText = "✨ Always Special ✨";

        let i = 0;
        function typeWriter() {
            if (i < finalText.length) {
                message.innerHTML += finalText.charAt(i) === "\n" ? "<br>" : finalText.charAt(i);
                i++;
                setTimeout(typeWriter, 40);
            }
        }

        typeWriter();
        createConfetti();
    });

    // ================= CONFETTI =================

    function createConfetti() {
        for (let i = 0; i < 150; i++) {
            const confetti = document.createElement("div");
            confetti.classList.add("confetti");
            document.body.appendChild(confetti);

            confetti.style.left = Math.random() * window.innerWidth + "px";
            confetti.style.animationDuration = (Math.random() * 3 + 2) + "s";

            setTimeout(() => {
                confetti.remove();
            }, 5000);
        }
    }

    // ================= CURSOR SPARKLE =================

    document.addEventListener("mousemove", function (e) {
        const sparkle = document.createElement("span");
        sparkle.classList.add("sparkle");
        sparkle.style.left = e.pageX + "px";
        sparkle.style.top = e.pageY + "px";
        document.body.appendChild(sparkle);

        setTimeout(() => {
            sparkle.remove();
        }, 600);
    });

    // ================= GALLERY FADE =================

    function showImages() {
        const triggerBottom = window.innerHeight * 0.9;

        images.forEach(img => {
            const imgTop = img.getBoundingClientRect().top;
            if (imgTop < triggerBottom) {
                img.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", showImages);
    showImages();

    // ================= IMAGE PREVIEW =================

    images.forEach(img => {
        img.addEventListener("click", () => {
            previewBox.style.display = "flex";
            previewImg.src = img.src;
        });
    });

    closePreview.addEventListener("click", () => {
        previewBox.style.display = "none";
    });

    // ================= AGE + COUNTDOWN =================

    const birthDate = new Date("May 1, 2006 00:00:00").getTime();

    function updateTime() {
        const now = new Date().getTime();
        const difference = now - birthDate;

        const years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365.25));
        yearsSpan.innerText = years;

        const seconds = Math.floor(difference / 1000);
        secondsSpan.innerText = seconds.toLocaleString();

        const currentYear = new Date().getFullYear();
        let nextBirthday = new Date(`May 1, ${currentYear} 00:00:00`).getTime();

        if (now > nextBirthday) {
            nextBirthday = new Date(`May 1, ${currentYear + 1} 00:00:00`).getTime();
        }

        const countdownDiff = nextBirthday - now;

        const days = Math.floor(countdownDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((countdownDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((countdownDiff % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((countdownDiff % (1000 * 60)) / 1000);

        countdownSpan.innerText =
            `${days} Days ${hours} Hours ${minutes} Minutes ${secs} Seconds`;
    }

    updateTime();
    setInterval(updateTime, 1000);

    // ================= ADVANCED MUSIC SYSTEM =================

    let isPlaying = false;
    music.volume = 0.5;

    document.body.addEventListener("click", function () {
        if (!isPlaying) {
            music.play();
            fadeInMusic();
            isPlaying = true;
        }
    }, { once: true });

    function fadeInMusic() {
        let volume = 0;
        music.volume = 0;

        const fade = setInterval(() => {
            if (volume < 0.5) {
                volume += 0.02;
                music.volume = volume;
            } else {
                clearInterval(fade);
            }
        }, 200);
    }

    musicBtn.addEventListener("click", function () {
        if (!isPlaying) {
            music.play();
            musicBtn.innerText = "⏸";
            isPlaying = true;
        } else {
            music.pause();
            musicBtn.innerText = "🎵";
            isPlaying = false;
        }
    });

    volumeSlider.addEventListener("input", function () {
        music.volume = this.value;
    });
   // ================= CARD EXPAND SYSTEM =================

const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("click", function () {

        // remove active from other cards
        cards.forEach(c => c.classList.remove("active"));

        // open clicked card
        this.classList.add("active");

    });
});
// ===== SIMPLE CARD SHOW TEXT =====

function showText(card) {

    // remove active from all cards
    document.querySelectorAll(".card").forEach(c => {
        c.classList.remove("active");
    });

    // add active to clicked card
    card.classList.add("active");
}

});
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("click", function () {

        cards.forEach(c => c.classList.remove("active"));
        this.classList.add("active");

    });
});