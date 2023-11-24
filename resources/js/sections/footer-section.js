document.addEventListener('DOMContentLoaded', async function () {
    makePhoneNumberCopyable();
});

async function makePhoneNumberCopyable() {
    if (navigator.userAgentData.mobile) return;

    const contacts = document.querySelectorAll('.footer-section__contact-item');

    contacts.forEach(contact => {
        contact.addEventListener('click', async function () {
            navigator.clipboard.writeText(contact.textContent.trim());
        });
    });
}