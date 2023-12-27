let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.toggle('active');
    cartItem.classList.toggle('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navabar.classList.remo('active');
    cartItem.classList.toggle('active');
}

let cartItem = document.querySelector('.cart-item-container');

document.querySelector('#cart-item').onclick = () =>{
    cartItem.classList.toggle('active');
    avabar.classList.remo('active');
    searchForm.classList.toggle('active');
}

window.onscroll() ;{
    navbar.classList.remo('active');
    searchForm.classList.toggle('active');
    cartItem.classList.toggle('active');
}  