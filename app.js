const navSlide = () => {
    const navbtn = document.querySelector('.nav-btn');
    const navbar = document.querySelector('.links');
    const links = document.querySelectorAll('.links li');
    // Toggle Nav
    navbtn.addEventListener('click', () => {
        navbar.classList.toggle('nav-active');
        // Animate
    links.forEach((link, index) => {
        if(link.style.animation){
            link.style.animation = ''
        } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.5}s`;
    }
    });
    navbtn.classList.toggle('toggle');
});
}
navSlide();