const slideC = document.getElementById("slidecontainer");
const slide = document.getElementById("slide");
const img1 = document.getElementById("img1");
const nome1 = document.getElementById("nome1");
const desc1 = document.getElementById("desc1");
const text1 = document.getElementById("text1");

const img2 = document.getElementById("img2");
const nome2 = document.getElementById("nome2");
const desc2 = document.getElementById("desc2");
const text2 = document.getElementById("text2");
const nav = document.querySelector("nav");

const barraDestra = document.getElementById("barraDestra");
const barraDestra2 = document.getElementById("barraDestra2");

document.getElementById("listabarra").style.transform = "translateX(20rem)";

let volte = 0;

function sinistra() {
  if (volte > 0 && volte != 1) {
    volte = 0;
    destra();
  } else if (volte == 1) {
    volte = 2;
    destra();
  } else {
    volte = 1;
    destra();
  }
}

function destra() {
  if (volte == 0) {
    img1.src = "https://xsgames.co/randomusers/assets/avatars/male/46.jpg";

    nome1.textContent = "Richard Anderson";
    desc1.textContent = "SEVEN CONSULTING - CREATIVE DIRECTOR";
    text1.textContent =
      "Pellentesque at ornare ex, quis fringilla tortor condimentum velit tortor. Cras at ornare ex, quis fringilla tortor. Nunc fermentum quam et tortor euismod.";

    img2.src =
      "https://the7.io/elementor-creative-light/wp-content/uploads/sites/109/2023/01/tes010.jpg";

    nome2.textContent = "Stephan Lee";
    desc2.textContent = "SEVEN CONSULTING - CEO";
    text2.textContent =
      "Nunc consectetur feugiat rutrum. Sed rhoncus sapien sit amet elementum pellentesque. Pellentesque malesuada orci vel auctor malesuada. Aenean semper neque quis ut metus et nunc cursus aliquet.";

    volte += 1;
  } else if (volte == 1) {
    img1.src =
      "https://the7.io/elementor-creative-light/wp-content/uploads/sites/109/2023/01/tes004.jpg";

    nome1.textContent = "Diana Green";
    desc1.textContent = "SEVEN CONSULTING - MARKETING MANAGER";
    text1.textContent =
      "Cras at ornare fermentum quam et tortor euismod, vel maximus metus tristique at ornare ex, quis fringilla tortor. Aenean semper neque quis consectetur lobortis. Quisque nec convallis ex. Aenean ut metus et nunc cursus aliquet.";

    img2.src =
      "https://the7.io/elementor-creative-light/wp-content/uploads/sites/109/2023/01/tes009.jpg";

    nome2.textContent = "Alexander Black";
    desc2.textContent = "SEVEN CONSULTING - CEO";
    text2.textContent =
      "Nunc fermentum - tempus erat ligula, sit amet lacinia justo cursus ac. Suspendisse quis nulla tincidunt! Lorem ipsum dolor amet at ornare ex, quis fringilla tortor! Nunc consectetur feugiat rutrum. Sed rhoncus sapien!";
    volte += 1;
  } else {
    img1.src =
      "https://the7.io/elementor-creative-light/wp-content/uploads/sites/109/2023/01/tes009.jpg";

    nome1.textContent = "Alexander Black";
    desc1.textContent = "SEVEN CONSULTING - CEO";
    text1.textContent =
      "Nunc fermentum - tempus erat ligula, sit amet lacinia justo cursus ac. Suspendisse quis nulla tincidunt! Lorem ipsum dolor amet at ornare ex, quis fringilla tortor! Nunc consectetur feugiat rutrum. Sed rhoncus sapien!";

    img2.src =
      "https://the7.io/elementor-creative-light/wp-content/uploads/sites/109/2023/01/tes003.jpg";

    nome2.textContent = "Tiffany Whitewood";
    desc2.textContent = "SEVEN CONSULTING - CEO";
    text2.textContent =
      "Quisque eget odio felis. Suspendisse quis nulla tincidunt, cursus tellus condimentum, consequat sapien at ornare ex, quis fringilla tortor.";
    volte = 0;
  }
}
function scroll1() {
  if (window.scrollY > 40) {
    nav.classList.add("whitebg");
    nav.classList.remove("fadeout");
  } else {
    nav.classList.remove("whitebg");
    nav.classList.add("fadeout");
  }
}

window.addEventListener("scroll", scroll1);

function barraAnimazione() {
  document.getElementById("listabarra").style.transform = "translateX(0rem)";
  document.getElementById("listabarra").style.transition = " all 0.7s";
}

function barraAnimazione2() {
  document.getElementById("listabarra").style.transform = "translateX(20rem)";
  document.getElementById("listabarra").style.transition = " all 0.7s";
}

barraDestra.addEventListener("click", barraAnimazione);

barraDestra2.addEventListener("click", barraAnimazione2);
