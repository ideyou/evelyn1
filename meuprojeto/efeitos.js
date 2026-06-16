particlesJS("particles-js", {
    particles: {
        number: {
            value: 60
        },

        color: {
            value: "#ffffff"
        },

        shape: {
            type: "circle"
        },

        opacity: {
            value: 0.3
        },

        size: {
            value: 2
        },

        move: {
            enable: true,
            speed: 1
        },

        line_linked: {
            enable: false
        }
    }
});

const music = new Audio("assets/musica.mp3");
music.volume = 0.05; // começa baixinho

function fadeInAudio() {
    music.play();

    let volume = 0.05;

    const fade = setInterval(() => {
        if (volume < 0.4) {   // volume final (ajuste aqui)
            volume += 0.005;     // velocidade do aumento
            music.volume = volume;
        } else {
            clearInterval(fade);
        }
    }, 200);
}

["click", "keydown", "touchstart", "scroll"].forEach(evt =>
    document.addEventListener(evt, function startOnce() {
        fadeInAudio();

        // remove depois de tocar 1 vez
        ["click", "keydown", "touchstart", "scroll"].forEach(e =>
            document.removeEventListener(e, startOnce)
        );
    })
);