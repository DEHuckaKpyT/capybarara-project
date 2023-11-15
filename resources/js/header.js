document.addEventListener('DOMContentLoaded', async function () {
    await makeBurgerMenuOpenable()
})

async function makeBurgerMenuOpenable() {
    const openButton = document.querySelector('.header__burger-menu-button')
    const menu = document.querySelector('.burger-menu')
    const closeButton = document.querySelector('.burger-menu__close-button')
    const links = document.querySelectorAll('.burger-menu__navigation a')

    openButton.addEventListener('click', async function () {
        menu.style.display = 'block'
    })
    closeButton.addEventListener('click', async function () {
        menu.style.display = 'none'
    })

    links.forEach(link => {
        link.addEventListener('click', async function () {
            menu.style.display = 'none'
        })
    });
}