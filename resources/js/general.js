document.addEventListener('DOMContentLoaded', async function () {
    makeAnnoyingCapybaraClosable();
    makeStringsContrast();
});

async function makeAnnoyingCapybaraClosable() {
    const message = document.querySelector('.annoying-message');
    const button = document.querySelector('.annoying-message__cross');

    button.addEventListener('click', async function () {
        message.style.display = 'none';
        await sleep(120_000); // 2 минуты
        message.style.display = 'block';
    })
}

async function makeStringsContrast() {
    const strings = document.querySelectorAll('.contrast-letters');

    strings.forEach(stringElement => {
        const content = stringElement.textContent.trim();
        stringElement.textContent = '';

        let colorCounter = 0;
        for (let i = 0; i < content.length; i++) {
            const char = content.charAt(i);

            const span = document.createElement('span');
            span.textContent = char;
            span.style.color = (colorCounter % 2 == 0)
                ? 'var(--text-contrasting-color)'
                : 'var(--text-contrasting-light-color)';

            stringElement.appendChild(span);

            if (char != ' ') {
                colorCounter++;
            }
        }
    })
}

function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}