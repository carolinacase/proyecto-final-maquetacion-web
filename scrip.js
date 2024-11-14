const menu = document.querySelector('#menu-icon')
const navlist = document.querySelector('.navbar')

menu.onclick = () => {
    menu.classList.toggle('bx-x')
    navlist.classList.toggle('open')
}

const sr = ScrollReveal ({
    distance: '65px',
    duration: 2000,
    delay: 450,
    reset: true
})

sr.revel('.hero-text',{delay: 200, origin:'top'})
sr.revel('.hero-img',{delay: 450, origin:'top'})
sr.revel('.icons',{delay: 500, origin:'left'})
sr.revel('.scroll-down',{delay: 450, origin:'right'})

