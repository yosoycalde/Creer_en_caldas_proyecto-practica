// creamos una variable que mantine el dato que le damos en este cso (1)
let slideIndex = 1;
// llamamos a la funcion que muetra el slide inicial
showSlides(slideIndex);
// plusSliders nos ayuda a navegar por las diapositivas del carrucel
function plusSliders(n) {
    // y con la showSlides llamamos a la siguiente diapositiva
    showSlides(slideIndex += n);
}
// currentSlide(n) : nos sirve para mostrar una diapositiva especifica
function currentSlide(n) {
    // muestra la diapositiva 
    showSlides(slideIndex = n);
}

function showSlides(n) {
    // variables locales
    let i;
    // obtiene todos los elementos con clase "sliders" (las diapositivas)
    let slides = document.querySelectorAll(".sliders");
    // obtenemos todos los puntos de navegacion con la clse "carr"
    let dots = document.querySelectorAll(".carr");
    // manejo de ciclo del carrucel con contador 
    if (n > slides.length) slideIndex = 1; //si llega al final vueve al inicio
    if (n < 1) slideIndex = slides.length; //si vamos antes de el inicio nos lleva a el final
    // oculta todas las diapositivas
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    // remueve la clase "active" de todos los puntos
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    // Muestra la diapositiva actual 
    slides[slideIndex - 1].style.display = "block";
    // Marca el punto correspondiente como activo 
    dots[slideIndex - 1].className += " active";
}
