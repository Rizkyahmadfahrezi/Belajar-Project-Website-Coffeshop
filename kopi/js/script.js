//toggle class active
const navbarNav = document.querySelector
('.navbar-nav');

//ketika hamburger menu di tekan
document.querySelector('#Hamburger-Menu').
onclick = () => {
    navbarNav.classList.toggle('active');
};

//klik di luar side bar untuk menghilangkan nav

const hamburger = document.querySelector('#Hamburger-Menu');

document.addEventListener('click',function(e){
    if (! hamburger .contains(e.target) && !navbarNav.contains(e.target)) 
        navbarNav.classList.remove('active');
})