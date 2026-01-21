// toggle class active

const navbarNav = document.querySelector(".navbar-nav");
const shoopingCart = document.querySelector(".shopping-cart");

document.querySelector('#hamburger-menu').onclick = (e) => {
    navbarNav.classList.toggle('active');
    e.preventDefault();
}

// toggle class shopping cart

document.querySelector("#shopping-cart-btn").onclick = (e) => {
    shoopingCart.classList.toggle("active");
    e.preventDefault();
}

// toggle class search form

const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = (e) => {
    searchForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();
}


// toggle di luar 

const searchBtn = document.querySelector('#search-button');
const hamburger = document.querySelector('#hamburger-menu');
const shoppingCartBtn = document.querySelector("#shopping-cart-btn");

document.addEventListener('click', function(e){
    if(!searchForm.contains(e.target) && !searchBtn.contains(e.target)) {
        searchForm.classList.remove('active');
    }
    
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }

    if(!shoppingCartBtn.contains(e.target) && !shoopingCart.contains(e.target)){
        shoopingCart.classList.remove("active");

    }
});

// Ketika icons detail diklik

const itemDetailModal = document.querySelector("#item-detail-modal");

const itemDetailBtn = document.querySelector(".item-detail-btn");
const closeBtn = document.querySelector(".close-icon");
console.log(closeBtn);

itemDetailBtn.addEventListener("click", function(e){
    e.preventDefault();
    itemDetailModal.style.display = 'flex';
});
closeBtn.addEventListener("click", function(e){
    e.preventDefault();
    itemDetailModal.style.display = "none";
});

// klik di luar modal

window.onclick = (e) => {
    if(e.target === itemDetailModal) {
        itemDetailModal.style.display = "none";
    }
}