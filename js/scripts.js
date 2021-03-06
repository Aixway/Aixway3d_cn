/*!
* Start Bootstrap - Agency v7.0.7 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
var contactTextSize = contactNow.clientWidth * 0.3;
contactText.style.fontSize = contactTextSize + "px"

function moveLeft() {
    floatContacts = document.getElementById("floatContacts")
    floatContacts.style.width = '235px'
    contactDisplay = document.getElementById('contactDisplay')
    contactDisplay.style.zIndex = '10'
    contactDisplay.children[0].style.opacity = '1'
    contactDisplay.children[2].style.opacity = '1'
}
function moveNormal() {
    floatContacts = document.getElementById("floatContacts")
    floatContacts.style.width = '75px';
    contactDisplay = document.getElementById('contactDisplay')
    contactDisplay.style.zIndex = '-10';
    contactDisplay.children[0].style.opacity = '0'
    contactDisplay.children[2].style.opacity = '0'
}