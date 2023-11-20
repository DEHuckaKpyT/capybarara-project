document.addEventListener('DOMContentLoaded', async function () {
    await makeBurgerMenuOpenable()
})

async function makeBurgerMenuOpenable() {
    const openButton = document.querySelector('.header__burger-menu-button')
    const menu = document.querySelector('.burger-menu')
    const blur = document.querySelector('.burger-menu-blur')
    const closeButton = document.querySelector('.burger-menu__close-button')
    const links = document.querySelectorAll('.burger-menu__navigation a')

    openButton.addEventListener('click', async function () {
        blur.style.display = 'block'
        menu.style.transform = 'translateX(0)'
    })
    closeButton.addEventListener('click', async function () {
        blur.style.display = 'none'
        menu.style.transform = 'translateX(100%)'
    })

    links.forEach(link => {
        link.addEventListener('click', async function () {
            blur.style.display = 'none'
            menu.style.transform = 'translateX(100%)'
        })
    });
}