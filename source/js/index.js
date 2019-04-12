var orderBtns = document.querySelectorAll(".order-button");
var overlay = document.querySelector(".modal-overlay");
var sizeModal = document.querySelector(".size-modal");
var sizeModalClose = document.querySelector(".size-modal__button-close");
var hamburger = document.querySelector(".nav__hamburger");
var mobileMenuItems = document.querySelectorAll(".mobile-menu");

hamburger.classList.remove("nav__hamburger--opened");
for (var i = 0; i < mobileMenuItems.length; i++) {
  mobileMenuItems[i].classList.remove("mobile-menu--opened");
}

for (var i = 0; i < orderBtns.length; i++) {
  orderBtns[i].addEventListener("click", function (event) {
    event.preventDefault();
    overlay.classList.add("modal-overlay--show");
    sizeModal.classList.add("size-modal--show");
  });
}


if (sizeModalClose) {
  sizeModalClose.addEventListener("click", function (event) {
    event.preventDefault();
    sizeModal.classList.remove("size-modal--show");
    overlay.classList.remove("modal-overlay--show");
  });
}


hamburger.addEventListener("click", function (event) {
  event.preventDefault();
  hamburger.classList.toggle("nav__hamburger--opened");
  for (var i = 0; i < mobileMenuItems.length; i++) {
    mobileMenuItems[i].classList.toggle("mobile-menu--opened");
  }
})
