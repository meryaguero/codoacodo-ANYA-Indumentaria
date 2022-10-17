const  listadoProd= document.querySelector(".prod");
const menuItems = document.querySelectorAll(".menuItem");


const productos = [
    {
      id: 1,
      titulo: "Minifalda Gabardina",
      precio: 1000,
      colores: [
        {
          codigo: "negra",
          img: "/imgs/Imagenes/Sección Mujer/Minifaldas/Minifalda gabardina.jpg",
        },
        {
          codigo: "blanca",
          img: "/imgs/Imagenes/Sección Mujer/Minifaldas/Minifalda gabardina.jpg",
        },
      ],
    },
    {
      id: 2,
      titulo: "Minifalda plisada",
      precio: 1000,
      colores: [
        {
          codigo: "negra",
          img: "/imgs/Imagenes/Sección Mujer/Minifaldas/Minifalda plisada Re-Nylon.jpg.jpg",
        },
        {
          codigo: "blanca",
          img: "/imgs/Imagenes/Sección Mujer/Minifaldas/Minifalda plisada Re-Nylon.jpg.jpg",
        },
      ],
    },
    {
      id: 3,
      titulo: "Minifalda Gabardina",
      precio: 1000,
      colores: [
        {
          codigo: "negra",
          img: "/imgs/Imagenes/Sección Mujer/Minifaldas/Minifalda gabardina.jpg",
        },
        {
          codigo: "blanca",
          img: "/imgs/Imagenes/Sección Mujer/Minifaldas/Minifalda gabardina.jpg",
        },
      ],
    },
    {
      id: 4,
      titulo: "Minifalda Gabardina",
      precio: 1000,
      colores: [
        {
          codigo: "negra",
          img: "/imgs/Imagenes/Sección Mujer/Minifaldas/Minifalda gabardina.jpg",
        },
        {
          codigo: "blanca",
          img: "/imgs/Imagenes/Sección Mujer/Minifaldas/Minifalda gabardina.jpg",
        },
      ],
    },
    {
      id: 5,
      titulo: "Minifalda Gabardina",
      precio: 1000,
      colores: [
        {
          codigo: "negra",
          img: "/imgs/Imagenes/Sección Mujer/Minifaldas/Minifalda gabardina.jpg",
        },
        {
          codigo: "blanca",
          img: "/imgs/Imagenes/Sección Mujer/Minifaldas/Minifalda gabardina.jpg",
        },
      ],
    },
    {
      id: 6,
      titulo: "Minifalda Gabardina",
      precio: 1000,
      colores: [
        {
          codigo: "negra",
          img: "/imgs/Imagenes/Sección Mujer/Minifaldas/Minifalda gabardina.jpg",
        },
        {
          codigo: "blanca",
          img: "/imgs/Imagenes/Sección Mujer/Minifaldas/Minifalda gabardina.jpg",
        },
      ],
    },
    {
      id: 7,
      titulo: "Minifalda Gabardina",
      precio: 1000,
      colores: [
        {
          codigo: "negra",
          img: "/imgs/Imagenes/Sección Mujer/Minifaldas/Minifalda gabardina.jpg",
        },
        {
          codigo: "blanca",
          img: "/imgs/Imagenes/Sección Mujer/Minifaldas/Minifalda gabardina.jpg",
        },
      ],
    },
    {
      id: 8,
      titulo: "Minifalda Gabardina",
      precio: 1000,
      colores: [
        {
          codigo: "negra",
          img: "/imgs/Imagenes/Sección Mujer/Minifaldas/Minifalda gabardina.jpg",
        },
        {
          codigo: "blanca",
          img: "/imgs/Imagenes/Sección Mujer/Minifaldas/Minifalda gabardina.jpg",
        },
      ],
    },
    {
      id: 9,
      titulo: "Minifalda Gabardina",
      precio: 1000,
      colores: [
        {
          codigo: "negra",
          img: "/imgs/Imagenes/Sección Mujer/Minifaldas/Minifalda gabardina.jpg",
        },
        {
          codigo: "blanca",
          img: "/imgs/Imagenes/Sección Mujer/Minifaldas/Minifalda gabardina.jpg",
        },
      ],
    },
    {
      id: 10,
      titulo: "Minifalda Gabardina",
      precio: 1000,
      colores: [
        {
          codigo: "negra",
          img: "/imgs/Imagenes/Sección Mujer/Minifaldas/Minifalda gabardina.jpg",
        },
        {
          codigo: "blanca",
          img: "/imgs/Imagenes/Sección Mujer/Minifaldas/Minifalda gabardina.jpg",
        },
      ],
    },

   
]

let productoElegido = productos[0];

const prodImgActual = document.querySelector(".prodImg");
const listaTituloActual = document.querySelector(".tituloProd");
const listaPrecioActual= document.querySelector(".listaPrecio");
const coloresProdActual = document.querySelectorAll(".color");
const talleProdActual = document.querySelectorAll(".talle");

coloresProdActual.forEach((color, index) => {
  color.addEventListener("click", () => {
    prodImgActual.src = prodElegido.colores[index].img;
  });
});

  talleProdActual.forEach((talle, index) => {
  talle.addEventListener("click", () => {
    talleProdActual.forEach((talle) => {
      talle.style.backgroundColor = "blanco";
      talle.style.color = "negro";
    });
    size.style.backgroundColor = "negro";
    size.style.color = "blanco";
  });
});

const botonCompra = document.querySelector(".botonCompra");
const pago = document.querySelector(".pago");
const salir = document.querySelector(".salir");

botonCompra.addEventListener("click", () => {
  pago.style.display = "flex";
});

salir.addEventListener("click", () => {
  pago.style.display = "none";
});
