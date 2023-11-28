document.addEventListener('DOMContentLoaded', async function () {
    makePhoneNumberCopyable();
    makeStringsContrast();
});

async function makePhoneNumberCopyable() {
    const contacts = document.querySelectorAll('.footer-section__contact-item');

    contacts.forEach(contact => {
        contact.addEventListener('click', async function () {
            navigator.clipboard.writeText(contact.textContent!.trim());
        });
    });
}

async function makeStringsContrast() {
    const strings = document.querySelectorAll('.contrast-letters');

    strings.forEach(stringElement => {
        const content = stringElement.textContent!.trim();
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