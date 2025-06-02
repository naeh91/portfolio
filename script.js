let menuVisible = false;

// Función que oculta o muestra el menú
function mostrarOcultarMenu() {
  const nav = document.getElementById("nav");
  if (menuVisible) {
    nav.classList.remove("responsive");
    menuVisible = false;
  } else {
    nav.classList.add("responsive");
    menuVisible = true;
  }
}

// Función para ocultar el menú al seleccionar una opción
function seleccionar() {
  const nav = document.getElementById("nav");
  nav.classList.remove("responsive");
  menuVisible = false;
}

// Función que aplica las animaciones de las habilidades
function efectoHabilidades() {
  const skills = document.getElementById("skills");
  const distancia_skills =
    window.innerHeight - skills.getBoundingClientRect().top;
  if (distancia_skills >= 300) {
    const habilidades = document.getElementsByClassName("progreso");
    if (habilidades.length >= 8) {
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
}

// Función para abrir el modal y cargar la imagen
function openModal(imageSrc) {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");

  modal.style.display = "block";
  modalImg.src = imageSrc;
}

// Función para cerrar el modal
function cerrarModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}

// Cierra el modal si se hace clic fuera de la imagen
window.onclick = function (event) {
  const modal = document.getElementById("modal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

// Aplica animaciones al hacer scroll
window.onscroll = function () {
  efectoHabilidades();
};

// Llama a la función para mostrar el menú
mostrarOcultarMenu();
