for(var orderBtns=document.querySelectorAll(".order-button"),overlay=document.querySelector(".modal-overlay"),sizeModal=document.querySelector(".size-modal"),sizeModalClose=document.querySelector(".size-modal__button-close"),hamburger=document.querySelector(".nav__hamburger"),mobileMenuItems=document.querySelectorAll(".mobile-menu"),i=0;i<orderBtns.length;i++)orderBtns[i].addEventListener("click",function(e){e.preventDefault(),overlay.classList.add("modal-overlay--show"),sizeModal.classList.add("size-modal--show")});sizeModalClose&&sizeModalClose.addEventListener("click",function(e){e.preventDefault(),sizeModal.classList.remove("size-modal--show"),overlay.classList.remove("modal-overlay--show")}),hamburger.addEventListener("click",function(e){e.preventDefault(),hamburger.classList.toggle("nav__hamburger--opened");for(var o=0;o<mobileMenuItems.length;o++)mobileMenuItems[o].classList.toggle("mobile-menu")});