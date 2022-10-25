/*menú*/
const abrir = document.querySelector(".ham");
const menu = document.querySelector(".menu");
abrir.addEventListener("click", () => {
  menu.style.visibility = "visible";
});

/*formulario de pago*/
const comprar = document.querySelector(".comprar");
const pago = document.querySelector(".pago");
const cerrar = document.querySelector(".cerrar");

comprar.addEventListener("click", () => {
  pago.style.display = "flex"; 
});

cerrar.addEventListener("click", () => {
  pago.style.display = "none";
});


/*log in: api font de google. Validación de log in */
function validar() {
  
  
  var username=document.forms["loginEmail"]["username"].value;
  var passowrd=document.forms["loginEmail"]["password"].value;
  
  
  if ((username == "LuisAguirre") && (password == "LuisAguirre10")) {
           window.location.href = 'inbox.html';
            return false;
        }
        else {
            alert ("Login unsuccessful.");
        }
  
}
