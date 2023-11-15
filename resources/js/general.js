document.addEventListener('DOMContentLoaded', async function () {
    await makeAnnoyingCapybaraClosable()
    await makeStringsContrast()
})

async function makeAnnoyingCapybaraClosable() {
    const message = document.querySelector('.annoying-message')
    const button = document.querySelector('.annoying-message__cross')

    button.addEventListener('click', async function () {
        message.style.display = 'none'
        await sleep(120_000) // 2 минуты
        message.style.display = 'block'
    })
}

async function makeStringsContrast() {
    const strings = document.querySelectorAll('.contrast-letters')

    strings.forEach(stringElement => {
        const content = stringElement.textContent.trim()
        stringElement.textContent = ''

        for (let i = 0; i < content.length; i++) {
            const char = content.charAt(i);

            const span = document.createElement('span')
            span.textContent = char
            if (i % 2 == 0) {
                span.style.color = 'var(--text-contrasting-color)'
            } else {
                span.style.color = 'var(--text-contrasting-light-color)'
            }

            stringElement.appendChild(span)
        }
    })
}

function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}