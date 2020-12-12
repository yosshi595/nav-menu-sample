const navButton = document.getElementsByClassName('js-nav-button') [0]
const nav = document.getElementsByClassName('nav')[0]
console.log('test')
navButton.addEventListener('click', () => {
    nav.classList.toggle('active')
    if (nav.classList.contains('active')) {
        navButton.classList.add('active')
    } else {
        navButton.classList.remove('active')
    }
})
