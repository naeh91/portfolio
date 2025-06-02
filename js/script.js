let menuVisible = false;

// Función que oculta o muestra el menú
function mostrarOcultarMenu() {
  if (menuVisible) {
    document.getElementById("nav").classList = "";
    menuVisible = false;
  } else {
    document.getElementById("nav").classList = "responsive";
    menuVisible = true;
  }
}

// Función para ocultar el menú al seleccionar una opción
function seleccionar() {
  document.getElementById("nav").classList = "";
  menuVisible = false;
}

// Función que aplica las animaciones de las habilidades
function efectoHabilidades() {
  var skills = document.getElementById("skills");
  var distancia_skills =
    window.innerHeight - skills.getBoundingClientRect().top;
  if (distancia_skills >= 300) {
    let habilidades = document.getElementsByClassName("progreso");
    habilidades[0].classList.add("javascript");
    habilidades[1].classList.add("html");
    habilidades[2].classList.add("css");
    habilidades[3].classList.add("wordpress");
    habilidades[4].classList.add("comunicacion");
    habilidades[5].classList.add("trabajo");
    habilidades[6].classList.add("creatividad");
    habilidades[7].classList.add("dedicacion");
  }
}

// Función para abrir el modal y cargar la imagen
// Función para abrir el modal y cargar la imagen
function openModal(imageSrc) {
  var modal = document.getElementById("modal");
  var modalImg = document.getElementById("modal-img");

  modal.style.display = "block";
  modalImg.src = imageSrc; // Actualiza la fuente de la imagen
}

// Función para cerrar el modal
function cerrarModal() {
  var modal = document.getElementById("modal");
  modal.style.display = "none";
}

// Cuando el usuario hace clic fuera del modal, se cierra
window.onclick = function (event) {
  var modal = document.getElementById("modal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Detecto el scrolling para aplicar la animación de la barra de habilidades
window.onscroll = function () {
  efectoHabilidades();
};
