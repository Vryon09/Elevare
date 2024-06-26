"use strict";
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
    count: 0,
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
    count: 0,
  },
  {
    id: 2,
    itemName: "Runner Sneaker",
    itemNumber: "item-3",
    type: "shoes",
    price: 1150,
    description: "Runner Sneaker in dark grey and black mesh and nylon",
    image: "runner-sneaker.jpg",
    count: 0,
  },
  {
    id: 3,
    itemName: "Skater Hoodie Oversized",
    itemNumber: "item-4",
    type: "hoodies",
    price: 1400,
    description: "Skater Hoodie Oversized in black curly fleece",
    image: "skater-hoodie-oversized.jpg",
    count: 0,
  },
  {
    id: 4,
    itemName: "SNBN Hoodie",
    itemNumber: "item-5",
    type: "hoodies",
    price: 1490,
    description: "SNBN Hoodie Large Fit in black heavy fleece",
    image: "snbn-hoodie.jpg",
    count: 0,
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
    count: 0,
  },
  {
    id: 6,
    itemName: "Baggy Sweatpants",
    itemNumber: "item-7",
    type: "pants",
    price: 1250,
    description: "Baggy Sweatpants in black archetype fleece",
    image: "baggy-sweatpants.jpg",
    count: 0,
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
    count: 0,
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
    count: 0,
  },
  {
    id: 9,
    itemName: "Burning Unity T-shirt Oversized",
    itemNumber: "item-10",
    type: "t-shirts",
    price: 850,
    description: "Burning Unity T-Shirt Oversized in black vintage jersey",
    image: "burning-unity-t-shirt-oversized.jpg",
    count: 0,
  },
  {
    id: 10,
    itemName: "Paris Moon T-shirt Oversized",
    itemNumber: "item-11",
    type: "t-shirts",
    price: 990,
    description: "Paris Moon T-Shirt Oversized in black vintage jersey",
    image: "paris-moon-t-shirt-oversized.jpg",
    count: 0,
  },
  {
    id: 11,
    itemName: "Political Stencil T-shirt",
    itemNumber: "item-12",
    type: "t-shirts",
    price: 750,
    description:
      "Political Stencil T-Shirt Medium Fit in black and white vintage jersey",
    image: "political-stencil-t-shirt.jpg",
    count: 0,
  },
];

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
const logoutBtn = document.querySelector(".logout-btn");
const logoutVerification = document.querySelector(".logout-verification");
const logoutCancel = document.querySelector(".logout-cancel");
const logoutVerify = document.querySelector(".logout-verify");
const toBtns = [toLoginBtnEl, toSigninBtnEl];

//SLIDER
const prevArrow = document.querySelector(".prev");
const nextArrow = document.querySelector(".next");
const slides = document.querySelectorAll(".slide");
const slidesArr = [...slides];

//BAR ELEMENTS
const navigation = document.querySelector(".navigation");
const navigationUl = navigation.querySelector("ul");
const menuBars = navigation.querySelector(".fa-bars");
const sidebarMenus = document.querySelector(".sidebar-menus");

//SEARCH ELEMENTS
const searchResult = document.querySelector(".search-result");
let searchResults;
const noResult = document.querySelector(".no-result");
const searchButton = document.querySelector(".search-btn");
const searchBar = document.querySelector(".search-bar");
const searchInput = document.querySelector(".search-input");
const clearSearch = document.querySelector(".clear-search");
const closeSearch = document.querySelector(".close-search");
const filtersBar = document.querySelector(".filters-bar");
const rightFilters = document.querySelector(".right-filters");
const typeDropdown = document.querySelector(".type-dropdown");
const priceDropdown = document.querySelector(".price-dropdown");

//PRODUCTS ELEMENTS
const pageLabelContainer = document.querySelector(".page-label-container");
const navLabel = document.querySelector(".nav-label");
const pageContent = document.querySelector(".page-content");
const productsContainer = document.querySelector(".products-container");
const productImages = document.querySelectorAll(".product-img");
const productShow = document.querySelector(".product-show");

//ADD TO CART ELEMENTS
const addToCartBtn = document.querySelector(".add-to-cart-btn");
const navCart = document.querySelector(".nav-cart");
const cart = document.querySelector(".cart");
const cartItemContainer = document.querySelector(".cart-item-container");
const cartUl = cartItemContainer.querySelector("ul");

//CHECKOUT ELEMENTS
const checkOutPage = document.querySelector(".check-out-page");
const orderItems = document.querySelector(".order-items");
const orderUl = orderItems.querySelector("ul");
const orderSummary = document.querySelector(".order-summary");
const coHeaderTotal = document.querySelector(".co-header-total");
const coTotalText = document.querySelector(".co-total-text");
const coCount = document.querySelector(".co-count");

//HOME BUTTONS
logo.addEventListener("click", () => {
  displayHome();
  pageLabelContainer.style.display = "none";
  navigationUl.style.display = "flex";
  productShow.innerHTML = "";
  checkOutPage.style.display = "none";
});

navLabel.addEventListener("click", () => {
  if (navLabel.textContent === "Shop") {
    filtersBar.style.display = "flex";
    productsContainer.style.display = "grid";
    productShow.style.display = "none";
  }
});

shopNowBtn.addEventListener("click", () => {
  displayShopLabel();

  searchResults = items;
  showItems(searchResults);
  displayShop();

  productsContainer.addEventListener("click", function (e) {
    showItemDetails(e);
  });
});

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
console.log(accounts);
//Create Account button fnctions
const creatingAccountChange = () => {
  const email = emailInputEl.value.trim();
  const username = usernameInputEl.value.trim();
  const password = passwordInputEl.value.trim();
  const rePassword = rePasswordInputEl.value.trim();
  //elements@elements.elements
  const emailRegex =
    /^[^\s@]+@[^\s@]+\.[^\                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    s@]+$/;

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

formAccEl.addEventListener("keypress", function (e) {
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

const changePasswordFormat = (inputName) => {
  if (inputName.getAttribute("type") === "password") inputName.type = "text";
  else inputName.type = "password";
};

passwordEye.addEventListener("click", function (e) {
  const eyeIcon = e.target.classList.value.split(" ").includes("fa-solid");

  if (eyeIcon) {
    changePasswordFormat(passwordInputEl);
  }
});

rePasswordEye.addEventListener("click", function (e) {
  const eyeIcon = e.target.classList.value.split(" ").includes("fa-solid");

  if (eyeIcon) {
    changePasswordFormat(rePasswordInputEl);
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
  changePasswordFormat(passwordInputLogin);
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

////////Search Functionality
searchButton.addEventListener("click", function () {
  searchBar.style.top = "0";
  overlayEl.style.display = "block";
  searchInput.focus();
});

searchInput.addEventListener("input", function () {
  if (this.value != "") {
    clearSearch.style.display = "block";
  } else {
    clearSearch.style.display = "none";
  }
});

const closeSearchBar = () => {
  searchBar.style.top = "-12vh";
  searchInput.value = "";
  clearSearch.style.display = "none";
  overlayEl.style.display = "none";
};

clearSearch.addEventListener("click", function () {
  searchInput.value = "";
  this.style.display = "none";
});

closeSearch.addEventListener("click", function () {
  closeSearchBar();
});

//DROPDOWNS

typeDropdown.addEventListener("click", (e) => {
  if (e.target.tagName === "UL") return;
  const targetType = e.target.textContent.toLowerCase();
  const filterType = items.filter((item) => {
    return targetType === item.type;
  });

  showItems(filterType);
  searchResults = filterType;
  if (targetType === "all") {
    searchResults = items;
    searchResult.style.display = "none";
    showItems(searchResults);
  }
});

priceDropdown.addEventListener("click", (e) => {
  if (e.target.tagName === "UL") return;

  if (e.target.classList[0] === "low-to-high") {
    searchResults.sort((a, b) => a.price - b.price);
    showItems(searchResults);
  }
  if (e.target.classList[0] === "high-to-low") {
    searchResults.sort((a, b) => b.price - a.price);
    showItems(searchResults);
  }
});

//////////// SHOP
const showProductDetails = (item) => {
  productShow.innerHTML = `
        <div class="product-images">
            <img
              src="images/${item.image}"
              alt="${item.itemName}"
              class="product-img-shown"
            />
          </div>
          <div class="product-details">
            <div class="product-details-wrapper">
              <h1 class="product-name-shown">${item.itemName}</h1>
              <p class="product-price-show">$${item.price.toLocaleString()}</p>
              <p class="product-description">
                ${item.description}
              </p>
              <p class="product-id">id:${item.id}</p>
            </div>
            <div class="product-btns-shown">
              <button class="add-to-cart-btn">Add to cart</button>
              <button class="buy-now-btn">Buy now</button>
            </div>
        </div> 
    `;
  productShow.style.display = "flex";
};

const showResultHeader = (items) => {
  searchResult.innerHTML = `
        <div class="result-header">
            <span>Search <strong>"${searchInput.value}"</strong></span>
            <div class="result-count">${items.length} ${
    items.length > 1 ? "results" : "result"
  }</div>
        </div>
  `;

  searchResult.style.display = "flex";
};

const showNoResult = () => {
  searchResult.innerHTML = `
  <div class="no-result">
            <p>
              Sorry, no results for "${searchInput.value}", please search a different item.
            </p>
          </div>
  `;
  searchResult.style.display = "flex";
};

const showItems = (items) => {
  productsContainer.innerHTML = items
    .map((item) => {
      const html = `<div class="${item.itemNumber} list-item">
  <img src="images/${item.image}" alt="${item.itemName}" class="product-img"/>
  <div class="product-info">
    <div class="product-name">${item.itemName}</div>
    <p class="price">$${item.price.toLocaleString()}</p>
  </div>
</div>`;

      return html;
    })
    .join("");
};

const showItemDetails = (e) => {
  if (e.target.parentElement.classList.contains("list-item")) {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
    const clickedItemNum = e.target.parentElement.classList[0];
    const clickedItem = searchResults.find(
      (item) => clickedItemNum === item.itemNumber
    );
    productsContainer.style.display = "none";
    filtersBar.style.display = "none";
    searchResult.style.display = "none";
    showProductDetails(clickedItem);
  }
};

const showCartItems = (items) => {
  cartUl.innerHTML = items
    .map((item) => {
      const priceUn = item.price * item.count;

      const html = `
          <li class="cart-item">
            <div class="cart-item-wrapper">
              <div class="cart-item-images">
                <img src="images/${item.image}" alt="${item.itemName}" />
              </div>
                <div class="cart-item-details">
                  <h3 class="cart-item-name">${item.itemName}</h3>
                  <p class="cart-item-price">$${priceUn.toLocaleString()}</p>
                  <div class="cart-item-quantity">
                    <p>Quantity:</p>
                    <button class="decrease-quantity">-</button>
                    <p class="count">${item.count}</p>
                    <button class="increase-quantity">+</button>
                  </div>
                </div>
              </div>
              <div class="cart-action">
                <p class="edit-action">Edit</p>
                <p class="delete-action">Delete</p>
              </div>
          </li>
  `;

      return html;
    })
    .join("");
};

const showCheckoutItems = () => {
  orderUl.innerHTML = cartUniqueItems
    .map((item) => {
      const html = `
      <li class="order-item">
              <div class="order-image">
                <img src="images/${item.image}" alt="${item.itemName}" />
              </div>
              <div class="order-details">
                <h3>${item.itemName}</h3>
                <p>$${item.price * item.count}</p>
                <p>Quantity: ${item.count}</p>
              </div>
            </li>
    `;
      return html;
    })
    .join("");
};

window.addEventListener("click", function (e) {
  if (e.target.classList[0] == "check-out-btn") {
    if (!cartUniqueItems || cartUniqueItems.length <= 0) return;

    const totalPrice = cartUniqueItems.reduce(
      (total, item) => total + item.price * item.count,
      0
    );

    const totalCount = cartUniqueItems.reduce(
      (count, item) => count + item.count,
      0
    );

    coCount.textContent = `${
      totalCount <= 1 ? `${totalCount} item` : `${totalCount} items`
    }`;
    coHeaderTotal.textContent = `$${totalPrice.toLocaleString()}`;
    coTotalText.textContent = `$${totalPrice.toLocaleString()}`;
    showCheckoutItems();

    navLabel.textContent = "Checkout";
    cart.style.display = "none";
    checkOutPage.style.display = "flex";
  }

  if (e.target.classList[0] == "view-summary") {
    orderSummary.scrollIntoView({ behavior: "smooth" });
  }
});

const displayShop = () => {
  homeEl.style.display = "none";
  aboutEl.style.display = "none";
  shopEl.style.display = "none";
  slideshowEl.style.display = "none";
  pageContent.style.display = "grid";
  cart.style.display = "none";
};

const displayShopLabel = () => {
  navLabel.textContent = "Shop";
  pageLabelContainer.style.display = "flex";
  filtersBar.style.display = "flex";
  productsContainer.style.display = "grid";
  navigationUl.style.display = "none";
};

const displayHome = () => {
  cart.style.display = "none";
  homeEl.style.display = "flex";
  aboutEl.style.display = "flex";
  shopEl.style.display = "flex";
  slideshowEl.style.display = "block";
  pageContent.style.display = "none";
  searchResult.style.display = "none";
};

const hideHome = () => {
  homeEl.style.display = "none";
  aboutEl.style.display = "none";
  shopEl.style.display = "none";
  slideshowEl.style.display = "none";
};

const hideShop = () => {
  pageContent.style.display = "none";
  searchResult.style.display = "none";
};

let estimatedPrice;
const displayEstimatedPrice = () => {
  const estimatedTotalPrice = document.querySelector(".estimated-total-price");
  estimatedPrice = 0;

  if (cartUniqueItems.length <= 0) {
    estimatedPrice = 0;
    estimatedTotalPrice.textContent = `$${estimatedPrice.toLocaleString()}`;
  }

  cartUniqueItems.forEach((item) => {
    estimatedPrice += item.price * item.count;
    estimatedTotalPrice.textContent = `$${estimatedPrice.toLocaleString()}`;
  });
};

const displayNumCartItems = () => {
  const cartItemCount = document.querySelector(".cart-item-count");
  let itemQuantity = 0;
  for (let c of cartUniqueItems) {
    itemQuantity += c.count;
  }
  navCart.textContent = itemQuantity;
  cartItemCount.textContent = `Cart (${itemQuantity})`;
};

const displayQuantityChange = (e, sign) => {
  const itemTarget = e.target.closest(".cart-item");
  const targetName = itemTarget.querySelector(".cart-item-name").textContent;
  const findTargetItem = searchResults.find(
    (item) => targetName === item.itemName
  );
  const count = itemTarget.querySelector(".count");
  if (sign === "-") {
    if (+count.textContent <= 1) return;
    findTargetItem.count -= 1;
  } else if (sign === "+") {
    findTargetItem.count += 1;
  }
  count.textContent = findTargetItem.count;
  console.log(findTargetItem.count);

  displayNumCartItems();
  displayEstimatedPrice();
  showCartItems(cartUniqueItems);
};

//SHOP LISTENERS

searchInput.addEventListener("keyup", function (e) {
  const searchValue = this.value.toLowerCase();
  const filterData = items.filter((item) => {
    return (
      item.itemName.toLowerCase().includes(searchValue) ||
      item.type.toLowerCase().includes(searchValue)
    );
  });
  if (e.key === "Enter") {
    displayShopLabel();

    searchResults = items;
    displayShop();

    showItems(filterData);

    searchResults = filterData;
    showResultHeader(searchResults);
    if (searchResults.length <= 0 || searchInput.value === "") {
      showNoResult();
      showItems(items);
      searchResults = items;
      if (
        searchValue == "eyey" ||
        searchValue == "mahal" ||
        searchValue == "abo" ||
        searchValue == "ash" ||
        searchValue == "alyssa" ||
        searchValue == "ashley" ||
        searchValue == "alyssa ashley" ||
        searchValue == "alyssa ashley rotairo inarda" ||
        searchValue == "alyssa ashley r. inarda" ||
        searchValue == "alyssa ashley r inarda" ||
        searchValue == "alyssa ashley inarda" ||
        searchValue == "eyey inarda"
      ) {
        searchResult.innerHTML = `
          <div class="no-result">
            <p>
              I love you ${searchValue}!❤️
            </p>
          </div>
        `;
        searchResult.style.display = "flex";
      }
    }

    displayShop();
    closeSearchBar();

    productsContainer.addEventListener("click", function (e) {
      showItemDetails(e);
    });
  }
});

//1. Add to cart button clicked, item push to an array
//2. Add 1 to the count of the item whenever added to cart
//3.push the items array to a set
//4.item set push to an non-constant variable array
//5.Show items when navigation cart clicked
//6. Show count of items in the cart in the inner html of nav cart

const cartItems = [];
let cartSet;
let cartUniqueItems;

productShow.addEventListener("click", function (e) {
  const itemName = document.querySelector(".product-name-shown");
  const item = searchResults.find(
    (item) => item.itemName === itemName.textContent
  );
  if (e.target.classList[0] === "add-to-cart-btn") {
    cartItems.push(item);
    item.count += 1;
    // console.log(cartItems);

    cartSet = new Set([...cartItems]);

    cartUniqueItems = [...cartSet];

    console.log(cartUniqueItems);

    displayNumCartItems();

    displayEstimatedPrice();
  }
});

navCart.addEventListener("click", function () {
  navLabel.textContent = "Cart";
  pageLabelContainer.style.display = "flex";
  navigationUl.style.display = "none";
  hideHome();
  hideShop();
  cart.style.display = "flex";

  if (cartUniqueItems) {
    showCartItems(cartUniqueItems);
  } else {
    console.log("no item");
  }
});

cartItemContainer.addEventListener("click", function (e) {
  if (e.target.classList[0] === "increase-quantity") {
    displayQuantityChange(e, "+");
  }
  if (e.target.classList[0] === "decrease-quantity") {
    displayQuantityChange(e, "-");
  }
  if (e.target.classList[0] === "delete-action") {
    //1. delete the item in the item cart
    //2. decrease the total of items
    //3. less the price of the deleted item to the total price
    const itemTarget = e.target.closest(".cart-item");
    const targetName = itemTarget.querySelector(".cart-item-name").textContent;
    const findTargetItem = searchResults.find(
      (item) => targetName === item.itemName
    );

    const itemIndices = cartItems.reduce((indices, item, index) => {
      if (item == findTargetItem) {
        indices.push(index);
      }
      return indices;
    }, []);
    itemIndices.reverse();
    itemIndices.forEach((idx) => {
      cartItems.splice(idx, 1);
    });
    findTargetItem.count = 0;

    cartSet = new Set([...cartItems]);

    cartUniqueItems = [...cartSet];

    showCartItems(cartUniqueItems);

    displayNumCartItems();
    displayEstimatedPrice();
  }
});

//1. Create a function that will display the added items
