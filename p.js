const datosCards = [
  {
    imagen: "./src/images/image 2 (1).png",
    titulo: "Card 1",
    descripcion: "Descripción de la Card 1",
  },
  {
    imagen: "./src/images/image 22 4.png",
    titulo: "Card 2",
    descripcion: "Descripción de la Card 2",
  },
  {
    imagen: "./src/images/image 22 5.png",
    titulo: "Card 3",
    descripcion: "Descripción de la Card 3",
  },
  {
    imagen: "./src/images/image 223.png",
    titulo: "Card 4",
    descripcion: "Descripción de la Card 4",
  },
  // ... más datos de cards ...
];

// Resto del código...
let card1 = ` <div id="card1" class="card active">
<h3>Mas de 100 misiones para que juegues sin parar!</h3>
<p>
  Tus padres, contentos. Explora el emocionante mundo de Spider-Man
  con más de 100 misiones que te mantendrán en constante acción y
  adrenalina. Enfréntate a desafíos únicos, desentraña misterios, y
  ayuda a Spider-Man a mantener la paz en la ciudad mientras te
  sumerges en la piel del héroe arácnido. ¿Tienes lo que se necesita
  para superar todas las misiones y convertirte en el auténtico
  Spider-Man?
</p>
</div>`;

let card2 = `<div class="card active">
<h3>Cada misión te dará puntos que no sirven para nada!</h3>
<p>
  Cada misión es una oportunidad para vivir la emocionante vida del
  Hombre Araña, y aunque los puntos que ganarás no tengan un propósito
  específico, la verdadera recompensa está en la diversión y la
  inmersión que experimentarás en cada desafío. No necesitas acumular
  puntos para sentirte como un auténtico superhéroe, ya que la
  adrenalina de salvar la ciudad y la emoción de las acrobacias en el
  aire son más que suficientes. ¡Así que prepárate para sumergirte en
  la acción y la aventura, sin preocuparte por los puntos, y vive la
  experiencia definitiva de Spider-Man!
</p>
</div>`;

let card3 = `
<div class="card active">
<h3>Derrota a los villanos y diviértete</h3>
<p>
  la diversión está asegurada mientras te enfrentas a los infames
  villanos de la ciudad de Nueva York. Enfréntate a desafíos épicos,
  combate a tus enemigos más temibles y disfruta de una experiencia
  llena de acción y emoción. Cada encuentro con los villanos te
  sumergirá en una batalla trepidante y te llevará más cerca de
  convertirte en el auténtico Hombre Araña. Así que, ¿estás listo para
  derrotar a los villanos y sumergirte en la aventura definitiva de
  Spider-Man?"
</p>
</div>
`;
// Cambiar la imagen de la columna de imagen al hacer scroll
const imagenSticky = document.getElementById("imagenSticky");

imagenSticky.src = "./src/images/image 1 (2).png";

let cardContainer = document.getElementById("cardsContainer");

window.addEventListener("scroll", () => {
  let scrollPos = window.scrollY;
  if (scrollPos < 400) {
    imagenSticky.src = "./src/images/image 1 (2).png";
    cardContainer.innerHTML = card1;
  }
  if (scrollPos > 400 && scrollPos < 800) {
    // Cambiar la imagen al hacer scroll
    imagenSticky.src = datosCards[0].imagen;
    cardContainer.innerHTML = card2;
  }
  if (scrollPos > 1200 && scrollPos < 1600) {
    // Restaurar la imagen original
    imagenSticky.src = datosCards[1].imagen;
    cardContainer.innerHTML = card3;
  }
  if (scrollPos > 600 && scrollPos < 800) {
    // Restaurar la imagen original
    imagenSticky.src = datosCards[2].imagen;
  }
  if (scrollPos > 800 && scrollPos < 1000) {
    // Restaurar la imagen original
    imagenSticky.src = datosCards[3].imagen;
  }
});

const textDivs = document.querySelectorAll(".card");

function checkScroll() {
  textDivs.forEach((div, index) => {
    const rect = div.getBoundingClientRect();
    const isInView = rect.top >= 0 && rect.bottom <= window.innerHeight;

    if (isInView) {
      div.classList.add("active");
    } else {
      div.classList.remove("active");
    }
  });
}

// Para verificar si los elementos ya están en pantalla al cargar la página

// Carga inicial de cards