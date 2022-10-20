/*menú*/
const cerrar = document.querySelector(".cerrar");
const abrir = document.querySelector(".ham");
const menu = document.querySelector(".menu");

cerrar.addEventListener("click", () => {
  menu.style.visibility = "esconder";
});
abrir.addEventListener("click", () => {
  menu.style.visibility = "ver";
});


/*formulario de pago*/
const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});


