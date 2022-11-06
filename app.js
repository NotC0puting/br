const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");
const wifibtn = document.getElementById("fi");
const ethbtn = document.getElementById("et");

const products = [
  {
    id: 1,
    title: "Asmodeus AMD",
    price: 600,
    desc:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
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
    title: "Asmodeus Intel",
    price: 149,
    desc:  "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
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
    desc:  "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
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
    desc:  "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
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
    desc:  "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
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
const currentProductDesc = document.querySelector(".productDesc");
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
    currentProductDesc.textContent = choosenProduct.desc;
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

wifibtn.addEventListener('click', (e) => {
  choosenProduct.price1 =choosenProduct.price+30
  currentProductPrice.textContent = "$"+choosenProduct.price1;
});

ethbtn.addEventListener('click', (e) => {
currentProductPrice.textContent = "$"+choosenProduct.price;
});

function stripeBAMD() {
  winow.open('https://buy.stripe.com/test_cN24j30r74X42hWfYZ', "_blank")
}

function stripeBAMDWIFI() {
  window.open('https://buy.stripe.com/test_8wM8zjfm10GO09O9AC', "_blank")
}

productButton.addEventListener('click', () => {
  if (currentProductPrice.textContent = "$"+choosenProduct.price1) {
    stripeBAMDWIFI()
  }
  if (currentProductPrice.textContent = "$"+choosenProduct.price) {
    stripeBAMD()
  }
})

