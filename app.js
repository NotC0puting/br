const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");
var wifiPrice = document.querySelector("#sliderItem :nth-child(1) .sliderPrice");
const wifibtn = document.getElementById("fi");

function wifi() {
   wifiPrice == "$630";
}

wifibtn.addEventListener('click', (e) => {
  wifi()
  wifiPrice == "$630";
});

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 600,
    colors: [
      {
        code: "black",
        img: "./img/pc-black.png",
      },
      {
        code: "darkblue",
        img: "./img/pc.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "./img/pc-black.png",
        Text: "rgb"
      },
      {
        code: "green",
        img: "./img/pc.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "./img/pc-pink.png",
      },
      {
        code: "green",
        img: "pc-black.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "./img/pc-white.png",
      },
      {
        code: "lightgray",
        img: "./img/pc.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "./img/hippie.png",
      },
      {
        code: "black",
        img: "./img/hippie2.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

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

const toggleButton = document.getElementsByClassName('dropdown-button')[0]
const navbarLinks = document.getElementsByClassName('navBottom')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

currentProductPrice.forEach((size, index) => {
  wifibtn.addEventListener("click", () => {
    currentProductPrice.textContent = "$" + choosenProduct.price+30
  })

});



