let sponsorImg = document.getElementById('FunProLogo')
let cerrarPubli = document.getElementById('cerrarPubli')

function aparecePublicidad() {
  sponsorImg.style.display = 'block'
  cerrarPubli.style.display = 'block'
}

function fueraPublicidad() {
  sponsorImg.style.display = 'none'
  cerrarPubli.style.display = 'none'
}

setTimeout(aparecePublicidad, 4000);

cerrarPubli.addEventListener('click', fueraPublicidad);
