
const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");
const wifibtn = document.getElementById("fi");
const ethbtn = document.getElementById("et");

const products = [
  {
    id: 1,
    AMD: 1,
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
    AMD: 2,
    title: "Asmodeus Intel",
    price: 600,
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
    AMD: 1,
    title: "Blazer",
    price: 1000,
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
    AMD: 2,
    title: "Crater",
    price: 1000,
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
    AMD: 2,
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
const currentProductAMD = document.querySelector(".productAMD");
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
    currentProductAMD.textContent = choosenProduct.AMD;
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
/*
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
*/
/* functions and stufff*/

var swatch = 0;
console.log("checkpoint 1")
wifibtn.addEventListener('click', (e) => {
  choosenProduct.price1 =choosenProduct.price+30
  currentProductPrice.textContent = "$"+choosenProduct.price1;
  console.log("checkpoint 1")

  if (currentProductPrice.textContent == ('$630')) {
    console.log("checkpoint 2")
    if (currentProductAMD.textContent == 1) {
      swatch = 1;
      console.log("checkpoint 2")

    }
  
    else if (currentProductAMD.textContent == 2) {
      swatch = 4;
    }
  }
});

ethbtn.addEventListener('click', (e) => {
  currentProductPrice.textContent = "$"+choosenProduct.price;
  if (currentProductPrice.textContent == ('$600')) {
    if (currentProductAMD.textContent == 1) {
      swatch = 2;
      currentProductPrice.textContent = "$"+choosenProduct.price;
    }
    else if (currentProductAMD.textContent == 2) {
      swatch = 3;
      currentProductPrice.textContent = "$"+choosenProduct.price;
  }

}
});

function stripeMAMD() {
  window.open('https://buy.stripe.com/test_bIYaHr2zfexE1dS3cg', "_blank")
}

function stripeBAMD() {
  window.open('https://buy.stripe.com/test_dR63eZfm12OW9Ko005', "_blank")
}

function stripeBAMDWIFI() {
  window.open('https://buy.stripe.com/test_8wM8zjfm10GO09O9AC', "_blank")
}

function stripeBINT() {
  window.open('https://buy.stripe.com/test_bIY16R6PvfBIcWA3cf', "_blank")
}

function stripeBINTWIFI() {
  window.open('https://buy.stripe.com/test_7sI5n78XD2OW5u84gm', "_blank")
}

productButton.addEventListener('click', () => {
  if (swatch == 1) {
    stripeBAMDWIFI();
  }
})

productButton.addEventListener('click', () => {
  if (swatch == 2) {
    stripeBAMD();
  }
})

productButton.addEventListener('click', () => {
  if (swatch == 0) {
    if (currentProductTitle.textContent == 'Asmodeus AMD') {
      stripeBAMD();
    }
    else if (currentProductTitle.textContent == 'Asmodeus Intel') {
      stripeBINT(); 
    }
  }
})

productButton.addEventListener('click', () => {
  if (swatch == 3) {
    stripeBINT()
  }
})

productButton.addEventListener('click', () => {
  if (swatch == 4) {
    stripeBINTWIFI()
  }
})

productButton.addEventListener('click', () => {
  if (swatch == 5) {
    stripeMAMD()
  }
})

