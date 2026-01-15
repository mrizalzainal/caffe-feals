// toggle class active

const navbarNav = document.querySelector(".navbar-nav");

document.querySelector('#hamburger-menu').onclick = (e) => {
    navbarNav.classList.toggle('active');
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

document.addEventListener('click', function(e){
    if(!searchForm.contains(e.target) && !searchBtn.contains(e.target)) {
        searchForm.classList.remove('active');
    }
    
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
});