let searchBtn = document.querySelector('.search-button');
let closeBtn = document.querySelector('.close-button');
let searchBox = document.querySelector('.search-box');
let nav__links = document.querySelector('.nav__links');
let menuToggle = document.querySelector('.menu-toggle');
let header = document.querySelector('header');
            

searchBtn.onclick = function() {
    searchBox.classList.add('active');
    closeBtn.classList.add('active');
    searchBtn.classList.add('active');
    menuToggle.classList.add('hide');
    header.classList.remove('open');

    let stepContainer = document.querySelector('.step');

    if (header.classList.contains('open')) {
        stepContainer.style.marginTop = '150px'; 
    } else {
        stepContainer.style.marginTop = '0';
    }
};
            closeBtn.onclick = function() {
                searchBox.classList.remove('active');
                closeBtn.classList.remove('active');
                searchBtn.classList.remove('active');
                menuToggle.classList.remove('hide');
            };
            
            menuToggle.onclick = function(){
                header.classList.toggle('open');
                searchBox.classList.remove('active');
                closeBtn.classList.remove('active');
                searchBtn.classList.remove('active');

                let stepContainer = document.querySelector('.step');
                
                if (header.classList.contains('open')) {
                    if (window.matchMedia("(max-width: 1040px)").matches){
                        stepContainer.style.marginTop = '370px'; 
                    }
                    else {
                        stepContainer.style.marginTop = '250px';
                    }
                    
                } else {
                    stepContainer.style.marginTop = '0';
                }

            };