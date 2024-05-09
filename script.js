//ITEMS OBJECT

const items = [
  {
    id: 0,
    itemName: "Space Shoe",
    itemNumber: "item-1",
    type: "shoes",
    price: 1100,
    description:
      "Space Shoe in shiny black rubber is in several looks of the Balenciaga’s Summer 22, Red Carpet Collection. The Space Shoe is a highly innovative single mold alternative to the classic derby.",
    image: "space-shoe.jpg",
  },
  {
    id: 1,
    itemName: "10xl Sneaker",
    itemNumber: "item-2",
    type: "shoes",
    price: 1700,
    description:
      "10XL Sneaker in white, black and grey mesh, TPU and rubber is from several looks of Balenciaga Fall 24 Collection.",
    image: "10xl-sneaker.jpg",
  },
  {
    id: 2,
    itemName: "Runner Sneaker",
    itemNumber: "item-3",
    type: "shoes",
    price: 1150,
    description: "Runner Sneaker in dark grey and black mesh and nylon",
    image: "runner-sneaker.jpg",
  },
  {
    id: 3,
    itemName: "Skater Hoodie Oversized",
    itemNumber: "item-4",
    type: "hoodies",
    price: 1400,
    description: "Skater Hoodie Oversized in black curly fleece",
    image: "skater-hoodie-oversized.jpg",
  },
  {
    id: 4,
    itemName: "SNBN Hoodie",
    itemNumber: "item-5",
    type: "hoodies",
    price: 1490,
    description: "SNBN Hoodie Large Fit in black heavy fleece",
    image: "snbn-hoodie.jpg",
  },
  {
    id: 5,
    itemName: 'Political Campaign "Hoodie"',
    itemNumber: "item-6",
    type: "hoodies",
    price: 1150,
    description:
      "Political Campaign Hoodie Large Fit in black and white curly fleece",
    image: "political-campaign-hoodie.jpg",
  },
  {
    id: 6,
    itemName: "Baggy Sweatpants",
    itemNumber: "item-7",
    type: "pants",
    price: 1250,
    description: "Baggy Sweatpants in black archetype fleece",
    image: "baggy-sweatpants.jpg",
  },
  {
    id: 7,
    itemName: "Tat Baggy Sweatpants",
    itemNumber: "item-8",
    type: "pants",
    price: 1490,
    description:
      "Tat Baggy Sweatpants in light beige and black heavy fleece are from look 76 of Balenciaga Summer 24 Collection.",
    image: "tat-baggy-sweatpants.jpg",
  },
  {
    id: 8,
    itemName: "Double Knee Pants",
    itemNumber: "item-9",
    type: "pants",
    price: 2250,
    description:
      "Double Knee Pants in black cotton canvas are from look 55 of Balenciaga Summer 24 Collection.",
    image: "double-knee-pants.jpg",
  },
];

const itemsSet = [...new Set(items.map((item) => item))];

//Sections elements
const header = document.querySelector(".header");
const nav = document.querySelector(".container-nav");
const logo = document.querySelector(".logo");
const homeEl = document.querySelector("#home");
const aboutEl = document.querySelector("#about");
const shopEl = document.querySelector("#shop");
const slideshowEl = document.querySelector(".slideshow");
//Hero section
const welcomeText = document.querySelector(".welcome-text");
const shopNowBtn = document.querySelector(".shop-now-btn");
//Modal mechanics elements
const crtAccBtnEl = document.querySelector(".crt-acc-btn");
const formAccEl = document.querySelector(".crt-acc-form");
const overlayEl = document.querySelector(".overlay");
//Create form elements
const signinContainer = document.querySelector(".signin-container");
const loginContainer = document.querySelector(".login-container");
const containers = [signinContainer, loginContainer];
//SIGN IN
const emailInputEl = document.querySelector(".email-input");
const usernameInputEl = document.querySelector(".username");
const usernameLabel = document.querySelector(".username-label");
const passwordInputEl = document.querySelector(".password-input");
const rePasswordInputEl = document.querySelector(".re-password-input");
const allInputEl = formAccEl.querySelectorAll("input");
const crtBtnFormEl = document.querySelector(".crt-acc-btn-form");
const toLoginBtnEl = document.querySelector(".to-login-btn");
const crtAccSucessModal = document.querySelector(".crt-acc-success");
const successContinueBtn = document.querySelector(".success-continue");
//Eye Elements
const eyeBtnEl = document.querySelectorAll(".eye-btn");
const eyeIconEl = document.querySelectorAll(".fa-solid.fa-eye-slash");
const passwordEye = document.querySelector(".eye-pw");
const rePasswordEye = document.querySelector(".eye-rpw");
//LOGIN
const emailInputLogin = document.querySelector(".email-input-login");
const passwordInputLogin = document.querySelector(".password-input-login");
const loginBtn = document.querySelector(".login-btn");
const toSigninBtnEl = document.querySelector(".to-signin-btn");
const loginPasswordEye = document.querySelector(".eye-lpw");
const checkLogin = document.querySelector(".check-login");
const checkCreateAcc = document.querySelector(".check-crt-acc");
//LOGOUT
const logoutBtn = document.querySelector(".logout-btn");
const logoutVerification = document.querySelector(".logout-verification");
const logoutCancel = document.querySelector(".logout-cancel");
const logoutVerify = document.querySelector(".logout-verify");
//BUTTONS ARRAY
const toBtns = [toLoginBtnEl, toSigninBtnEl];
//SLIDER
const prevArrow = document.querySelector(".prev");
const nextArrow = document.querySelector(".next");
const slides = document.querySelectorAll(".slide");
const slidesArr = [...slides];
//BAR ELEMENTS
const navigation = document.querySelector(".navigation");
const menuBars = navigation.querySelector(".fa-bars");
const sidebarMenus = document.querySelector(".sidebar-menus");
//SEARCH ELEMENTS
const searchButton = document.querySelector(".search-btn");
const searchBar = document.querySelector(".search-bar");
const searchInput = document.querySelector(".search-input");
const clearSearch = document.querySelector(".clear-search");
const closeSearch = document.querySelector(".close-search");
//PRODUCTS ELEMENTS
const pageContent = document.querySelector(".page-content");
const productsContainer = document.querySelector(".products-container");
const productImages = document.querySelectorAll(".product-img");

searchInput.addEventListener("keyup", function () {
  const searchValue = this.value.toLowerCase();
  const filterData = items.filter((item) => {
    return (
      item.itemName.toLowerCase().includes(searchValue) ||
      item.type.toLowerCase().includes(searchValue)
    );
  });

  showItems(filterData);
});

const showItems = (items) => {
  productsContainer.innerHTML = items
    .map((item) => {
      const html = `<div class="${item.itemNumber} list-item">
  <img src="images/${item.image}" alt="${item.itemName}" class="product-img"/>
  <div class="product-info">
    <div class="product-name">${item.itemName}</div>
    <p class="price">$${item.price}</p>
  </div>
</div>`;

      return html;
    })
    .join("");
};

showItems(items);

// items.forEach((item) => {
//     const html = `<div class="${item.itemNumber} list-item">
//   <img src="images/${item.image}" alt="${item.itemName}" class="product-img"/>
//   <div class="product-info">
//     <div class="product-name">${item.itemName}</div>
//     <p class="price">$${item.price}</p>
//   </div>
// </div>`;

//     productsContainer.insertAdjacentHTML("beforeend", html);
//   });

logo.addEventListener("click", () => {
  homeEl.style.display = "flex";
  aboutEl.style.display = "flex";
  shopEl.style.display = "flex";
  slideshowEl.style.display = "block";
  pageContent.style.display = "none";
});

shopNowBtn.addEventListener("click", () => {
  showItems(items);
  homeEl.style.display = "none";
  aboutEl.style.display = "none";
  shopEl.style.display = "none";
  slideshowEl.style.display = "none";
  pageContent.style.display = "grid";
});

//Search Functionality
searchButton.addEventListener("click", function () {
  searchBar.style.top = "0";
  overlayEl.style.display = "block";
});

searchInput.addEventListener("input", function () {
  if (this.value != "") {
    clearSearch.style.display = "block";
  } else {
    clearSearch.style.display = "none";
  }
});

clearSearch.addEventListener("click", function () {
  searchInput.value = "";
  this.style.display = "none";
});

closeSearch.addEventListener("click", function () {
  searchBar.style.top = "-12vh";
  searchInput.value = "";
  clearSearch.style.display = "none";
  overlayEl.style.display = "none";
});

//MENU FUNCTIONALITY
if (menuBars) {
  menuBars.addEventListener("click", function () {
    this.classList.toggle("fa-xmark");
    this.classList.toggle("fa-bars");

    if (this.classList.contains("fa-xmark")) {
      sidebarMenus.style.display = "block";
      if (sidebarMenus.classList.contains("sidebar-hide")) {
        sidebarMenus.classList.remove("sidebar-hide");
      }
    } else {
      sidebarMenus.style.display = "none";
    }
  });
}

//Change to current account function
let currentAcc;

const changeToCurrentAcc = (currAcc) => {
  checkLogin.classList.add("hidden");
  emailInputLogin.value = "";
  passwordInputLogin.value = "";
  formAccEl.style.display = "none";
  // overlayEl.style.display = "none";
  console.log("Login Successful!");
  crtAccBtnEl.classList.add("hidden");
  logoutBtn.classList.remove("hidden");
  usernameLabel.classList.remove("hidden");
  usernameLabel.textContent = currentAcc.username;
  welcomeText.textContent = `Hi, ${currAcc.username}! Welcome to Elavare,`;
  console.log(currentAcc);
};

//Scroll to view functions
const scrollToHome = () => {
  homeEl.scrollIntoView({ behavior: "smooth" });
};
const scrollToCollection = () => {
  shopEl.scrollIntoView({ behavior: "smooth" });
};
const scrollToAbout = () => {
  aboutEl.scrollIntoView({ behavior: "smooth" });
};
const scrollToSlideshow = () => {
  slideshowEl.scrollIntoView({ behavior: "smooth" });
};

//Create Account Modal

crtAccBtnEl.addEventListener("click", function () {
  formAccEl.style.display = "flex";
  overlayEl.style.display = "block";
  emailInputEl.focus();
});

overlayEl.addEventListener("click", function () {
  crtAccSucessModal.classList.add("hidden");
  checkLogin.classList.add("hidden");
  checkCreateAcc.classList.add("hidden");
  logoutVerification.classList.add("hidden");
  formAccEl.style.display = "none";
  overlayEl.style.display = "none";
  searchBar.style.top = "-12vh";

  allInputEl.forEach((input) => {
    input.value = "";
  });
});

//Local storage

const accounts = JSON.parse(localStorage.getItem("accounts")) || [];

const saveAccountsToLocalStorage = () => {
  localStorage.setItem("accounts", JSON.stringify(accounts));
};

// accounts.splice(6, 1);
// saveAccountsToLocalStorage();
// console.log(accounts);

//Add account function
const addAccount = (email, password, username) => {
  const acc = { email: email, password: password, username: username };
  accounts.push(acc);
  saveAccountsToLocalStorage();
  console.log(accounts);
};

//Create Account button fnctions
const creatingAccountChange = () => {
  const email = emailInputEl.value.trim();
  const username = usernameInputEl.value.trim();
  const password = passwordInputEl.value.trim();
  const rePassword = rePasswordInputEl.value.trim();
  //elements@elements.elements
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (
    !emailRegex.test(email) ||
    password.length < 5 ||
    password !== rePassword ||
    email === "" ||
    password === ""
  ) {
    checkCreateAcc.classList.remove("hidden");
    return;
  }

  checkCreateAcc.classList.add("hidden");
  formAccEl.style.display = "none";
  crtAccSucessModal.classList.remove("hidden");
  overlayEl.style.display = "block";
  addAccount(email, password, username);

  currentAcc = accounts[accounts.length - 1];

  changeToCurrentAcc(currentAcc);

  allInputEl.forEach((input) => {
    input.value = "";
    console.log(email, password, username);
  });
};

crtBtnFormEl.addEventListener("click", function (e) {
  e.preventDefault();

  creatingAccountChange();
});

window.addEventListener("keydown", function (e) {
  if (e.key == "Escape") {
    formAccEl.style.display = "none";
    overlayEl.style.display = "none";
    allInputEl.forEach((input) => {
      input.value = "";
    });
  }

  //Create Account button shortcut enter key
  if (e.key == "Enter" && crtBtnFormEl) {
    creatingAccountChange();
  }

  if (e.key == "Enter" && loginBtn) {
    loggingAccountChange();
  }
});

successContinueBtn.addEventListener("click", () => {
  crtAccSucessModal.classList.add("hidden");
  overlayEl.style.display = "none";
});

//Eye functions
eyeBtnEl.forEach((eye) => {
  eye.addEventListener("click", function (e) {
    e.preventDefault();
  });
});

passwordEye.addEventListener("click", function (e) {
  const eyeIcon = e.target.classList.value.split(" ").includes("fa-solid");

  if (eyeIcon) {
    if (passwordInputEl.getAttribute("type") === "password")
      passwordInputEl.type = "text";
    else passwordInputEl.type = "password";
  }
});

rePasswordEye.addEventListener("click", function (e) {
  const eyeIcon = e.target.classList.value.split(" ").includes("fa-solid");

  if (eyeIcon) {
    if (rePasswordInputEl.getAttribute("type") === "password")
      rePasswordInputEl.type = "text";
    else rePasswordInputEl.type = "password";
  }
});

eyeIconEl.forEach((eye) => {
  eye.addEventListener("click", function (e) {
    this.classList.toggle("fa-eye");
    this.classList.toggle("fa-eye-slash");
  });
});

toBtns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    containers.forEach((container) => {
      container.classList.toggle("hidden");
    });
  });
});

loginPasswordEye.addEventListener("click", function () {
  if (passwordInputLogin.getAttribute("type") === "password")
    passwordInputLogin.type = "text";
  else passwordInputLogin.type = "password";
});

//LOG IN
const loggingAccountChange = () => {
  const email = emailInputLogin.value.trim();
  const password = passwordInputLogin.value.trim();

  currentAcc = accounts.find((acc) => acc.email == email);
  if (currentAcc && currentAcc.password == password) {
    overlayEl.style.display = "none";
    changeToCurrentAcc(currentAcc);
  } else {
    checkLogin.classList.remove("hidden");
  }
};

loginBtn.addEventListener("click", function (e) {
  e.preventDefault();

  loggingAccountChange();
});

logoutBtn.addEventListener("click", function () {
  logoutVerification.classList.remove("hidden");
  overlayEl.style.display = "block";
});

logoutVerify.addEventListener("click", () => {
  logoutVerification.classList.add("hidden");
  overlayEl.style.display = "none";
  crtAccBtnEl.classList.remove("hidden");
  logoutBtn.classList.add("hidden");
  usernameLabel.classList.add("hidden");
  usernameLabel.textContent = "";
  welcomeText.textContent = `Welcome to Elavare,`;
});

logoutCancel.addEventListener("click", () => {
  logoutVerification.classList.add("hidden");
  overlayEl.style.display = "none";
});

//Scroll nav pop-up
// const navHeight = nav.getBoundingClientRect().height;

// const stickyNav = (entries) => {
//   const [entry] = entries;
//   // console.log(entry);
//   if (!entry.isIntersecting) {
//     nav.classList.add("sticky");
//     nav.style.height = "8vh";
//     sidebarMenus.style.marginTop = "8vh";
//     sidebarMenus.style.height = "92vh";
//   }
//   // else {
//   //   nav.classList.add("sticky");
//   //   nav.style.height = "10vh";
//   //   sidebarMenus.style.marginTop = "10vh";
//   //   sidebarMenus.style.height = "90vh";
//   // }
// };

// const navObserver = new IntersectionObserver(stickyNav, {
//   root: null,
//   rootMargin: `-${navHeight}px`,
//   threshold: 0,
// });
// navObserver.observe(header);

// console.log(window.innerHeight);

//SCROLL DOWN HIDE NAV

let lastScrollY = window.scrollY;

window.addEventListener("scroll", function () {
  if (lastScrollY < window.scrollY) {
    nav.classList.add("hide");
    sidebarMenus.classList.add("sidebar-hide");
  } else {
    nav.classList.remove("hide");

    if (menuBars.classList.contains("fa-xmark")) {
      sidebarMenus.classList.remove("sidebar-hide");
    }
  }

  lastScrollY = window.scrollY;
});

let lastWindowWidth = window.innerWidth;

window.addEventListener("resize", () => {
  if (window.innerWidth >= 940) {
    sidebarMenus.style.display = "none";
    menuBars.classList.add("fa-bars");
    menuBars.classList.remove("fa-xmark");
  }
});
//SLIDE FUNCTIONALITY

prevArrow.addEventListener("click", (e) => {
  e.preventDefault();
  const currSlideIndex = slidesArr.findIndex(
    (slide) => !slide.classList.contains("hidden")
  );
  const prevSlideIndex =
    (currSlideIndex - 1 + slidesArr.length) % slidesArr.length;

  slidesArr[currSlideIndex].classList.add("hidden");
  slidesArr[prevSlideIndex].classList.remove("hidden");
});

nextArrow.addEventListener("click", (e) => {
  e.preventDefault();
  const currSlideIndex = slidesArr.findIndex(
    (slide) => !slide.classList.contains("hidden")
  );
  const nextSlideIndex = (currSlideIndex + 1) % slidesArr.length;

  slidesArr[currSlideIndex].classList.add("hidden");
  slidesArr[nextSlideIndex].classList.remove("hidden");
});

const autoSlideshow = () => {
  setInterval(() => {
    const currSlideIndex = slidesArr.findIndex(
      (slide) => !slide.classList.contains("hidden")
    );
    const nextSlideIndex = (currSlideIndex + 1) % slidesArr.length;

    slidesArr[currSlideIndex].classList.add("hidden");
    slidesArr[nextSlideIndex].classList.remove("hidden");
  }, 5000);
};

autoSlideshow();

overlayEl.style.height = `${document.body.offsetHeight}px`;

//BAR MENU
