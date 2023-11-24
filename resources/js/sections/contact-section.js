document.addEventListener('DOMContentLoaded', async function () {
    makeContactButtonActive();
});

async function makeContactButtonActive() {
    const contactForm = document.forms.contact;
    const requiredFields = [contactForm.subject, contactForm.name, contactForm.phone];

    const checkerAll = async function checkRequiredInputs() {
        for (let i = 0; i < requiredFields.length; i++) {
            if (isBlank(requiredFields[i].value)) {
                contactForm.submitButton.disabled = true;
                return;
            }
        }
        contactForm.submitButton.disabled = false;
    };
    const checkerCurrent = async function checkRequiredInputs(event) {
        const field = event.target;

        if (isBlank(field.value)) {
            field.classList.add('contact-section__form-error-input');
            field.parentNode.classList.add('contact-section__form-error-label'); // здесь это всегда label
        } else {
            field.classList.remove('contact-section__form-error-input');
            field.parentNode.classList.remove('contact-section__form-error-label'); // здесь это всегда label
        }
    }

    for (let i = 0; i < requiredFields.length; i++) {
        requiredFields[i].addEventListener('input', checkerAll);
        requiredFields[i].addEventListener('blur', checkerCurrent);
    }
}

function isBlank(str) {
    return (!str || /^\s*$/.test(str));
}