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
    showSlides(slideIndex = n);
}
function showSlides(n) {
    let i;
    let slides = document.querySelectorAll(".sliders");
    let dots = document.querySelectorAll(".carr");
    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
