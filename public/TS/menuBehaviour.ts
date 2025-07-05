//Comportamiento del menu en vista mobile y desktop -----------------------------------------------
const navBtn = document.getElementById("burgerBtn"); //Boton que muestra u oculta en menu en vista mobile
const mobileMenu = document.getElementById("mobileNavbar"); // Menu de opciones de la vista moble
const navbar = document.getElementById("navbar"); // Contenedor que se oculta al bajar la pagina y se muestra al hacer mouseover

//Funcion de mostrar u ocualtar el menu eln vista mobile --------------------------
navBtn?.addEventListener("click", () => {
  if (mobileMenu?.classList.contains("initialHidden")) {
    mobileMenu?.classList.remove("initialHidden");
  }
  mobileMenu?.classList.toggle("hidden");
  mobileMenu?.classList.toggle("visible");
  if (navBtn.classList.contains("open")) {
    navBtn.classList.remove("open");
    navBtn.classList.add("close");
  } else {
    navBtn.classList.add("open");
    navBtn.classList.remove("close");
  }
});

//Funcion que oculta el menu al hacer scroll down en la vista desktop
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    navbar?.classList.remove("topPageBehavior");
    navbar?.classList.add("slideUpMenu");
  } else {
    navbar?.classList.add("topPageBehavior");
    navbar?.classList.remove("slideUpMenu");
  }
});

//Funcionalidad de mostrar el menu al pasar el mouse por la parte superior de la pantalla
document.addEventListener("mouseover", (e) => {
  if (e.y < 100 && window.scrollY > 200) {
    navbar?.classList.remove("slideUpMenu");
  } else if (e.y > 100 && window.scrollY > 200) {
    navbar?.classList.add("slideUpMenu");
  }
});
