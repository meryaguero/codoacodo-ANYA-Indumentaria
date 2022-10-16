const  listadoProd= document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");


const products = [
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

   
]

let productoElegido = productos[0];

const prodImgActual = document.querySelector(".prodImg");
const listaTituloActual = document.querySelector(".productTitle");
const listaPrecioActual= document.querySelector(".productPrice");
const coloresProdActual = document.querySelectorAll(".color");
const talleProdActual = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
