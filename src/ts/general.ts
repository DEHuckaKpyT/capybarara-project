document.addEventListener('DOMContentLoaded', async function () {
    makeAnnoyingCapybaraClosable();
});

async function makeAnnoyingCapybaraClosable() {
    const message = document.querySelector('.annoying-message') as HTMLElement;
    const button = document.querySelector('.annoying-message__cross') as HTMLElement;

    button.addEventListener('click', async function () {
        message.style.display = 'none';
        await sleep(120_000); // 2 минуты
        message.style.display = 'block';
    })
}

function sleep(milliseconds: number) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}