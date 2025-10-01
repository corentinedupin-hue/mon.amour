let photos = ["photo1.jpg", "photo2.jpg", "photo3.jpg"];
let index = 0;

function changerPhoto() {
  index = (index + 1) % photos.length;
  document.getElementById("photo").src = photos[index];
}

function message() {
  let texte = document.getElementById("texte");
  texte.innerHTML = "Je t’aime plus que tout ❤️💫";
}

// Le bouton "Non" fuit la souris
function fuir(bouton) {
  let x = Math.floor(Math.random() * (window.innerWidth - 100));
  let y = Math.floor(Math.random() * (window.innerHeight - 50));
  bouton.style.position = "absolute";
  bouton.style.left = x + "px";
  bouton.style.top = y + "px";
}

// Quand on clique sur "Oui"
function accepter() {
  document.getElementById("overlay").style.display = "flex";
}
