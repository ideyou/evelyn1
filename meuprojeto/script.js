function toggleTheme() {
  document.body.classList.toggle("dark-mode");
}

const frases = [
  "Toda biblioteca guarda fantasmas.",
  "Algumas histórias sangram.",
  "O silêncio também escreve.",
  "Livros também amaldiçoam.",
  "Entre sombras e constelações."
];

const fraseElemento = document.getElementById("frase-magica");

let index = 0;

function trocarFrase() {

  fraseElemento.style.opacity = 0;

  setTimeout(() => {

    fraseElemento.textContent = frases[index];

    fraseElemento.style.opacity = 1;

    index++;

    if (index >= frases.length) {
      index = 0;
    }

  }, 1000);
}

trocarFrase();

setInterval(trocarFrase, 5000);
