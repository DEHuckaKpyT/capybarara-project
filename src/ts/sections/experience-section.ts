document.addEventListener('DOMContentLoaded', async function () {
    makeInteractiveExperienceGrid();
});

async function makeInteractiveExperienceGrid() {
    const grid = document.querySelector('.experience-section__content-grid') as HTMLElement;

    const date1 = grid.querySelector('.experience-section__content-grid--date-1') as HTMLElement;
    const description1 = grid.querySelector('.experience-section__grid-description--desc-1') as HTMLElement;
    const date2 = grid.querySelector('.experience-section__content-grid--date-2') as HTMLElement;
    const description2 = grid.querySelector('.experience-section__grid-description--desc-2') as HTMLElement;
    const date3 = grid.querySelector('.experience-section__content-grid--date-3') as HTMLElement;
    const description3 = grid.querySelector('.experience-section__grid-description--desc-3') as HTMLElement;

    const style = document.createElement("style");
    document.head.appendChild(style);
    const styleSheet = style.sheet!
    styleSheet.insertRule(`
    @media (max-width: 768px) { 
        .experience-section__content-grid { 
            grid-template-areas: "date-1" "description" "date-2" "date-3"; 
        } 
    }`);

    date1.addEventListener('click', async function () {
        changeSelectedPeriod(styleSheet,
            '"date-1" "description" "date-2" "date-3"',
            '0 0 12px 12px',
            date1,
            [date2, date3],
            description1,
            [description2, description3]);
    });
    date2.addEventListener('click', async function () {
        changeSelectedPeriod(styleSheet,
            '"date-1" "date-2" "description" "date-3"',
            '0 0 12px 12px',
            date2,
            [date1, date3],
            description2,
            [description1, description3]);
    });
    date3.addEventListener('click', async function () {
        changeSelectedPeriod(styleSheet,
            '"date-1" "date-2" "date-3" "description"',
            '0',
            date3,
            [date1, date2],
            description3,
            [description1, description2]);
    });
}

async function changeSelectedPeriod(styleSheet: CSSStyleSheet,
    templateAreas: string,
    borderRadius: string,
    selectedDate: HTMLElement,
    otherDates: HTMLElement[],
    selectedDescription: HTMLElement,
    otherDescriptions: HTMLElement[]) {

    styleSheet.deleteRule(0);
    styleSheet.insertRule(`
    @media (max-width: 768px) { 
        .experience-section__content-grid { 
            grid-template-areas: ${templateAreas}; 
        } 

        .experience-section__content-grid--date-3 { 
            border-radius: ${borderRadius}; 
        } 
    }`);

    selectedDate.classList.remove('font-body-2--dark', 'font-body-2--light');
    selectedDate.classList.add('font-body-2--dark');
    otherDates.forEach(date => {
        date.classList.remove('font-body-2--dark', 'font-body-2--light');
        date.classList.add('font-body-2--light');
    });

    selectedDescription.style.display = 'flex';
    otherDescriptions.forEach(description => {
        description.style.display = 'none';
    });
}