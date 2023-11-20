const valuesBySelectedDate = new Map([
    ['date-1', {

    }],
    ['date-2', {

    }],
    ['date-3', {

    }]
]);

document.addEventListener('DOMContentLoaded', async function () {
    await makeInteractiveExperienceGrid()
})

async function makeInteractiveExperienceGrid() {
    const grid = document.querySelector('.experience-section__content-grid')

    const date1 = grid.querySelector('.experience-section__content-grid--date-1')
    const description1 = grid.querySelector('.experience-section__grid-description--desc-1')
    const date2 = grid.querySelector('.experience-section__content-grid--date-2')
    const description2 = grid.querySelector('.experience-section__grid-description--desc-2')
    const date3 = grid.querySelector('.experience-section__content-grid--date-3')
    const description3 = grid.querySelector('.experience-section__grid-description--desc-3')

    const style = document.createElement("style")
    document.head.appendChild(style)
    style.sheet.insertRule(`
    @media (max-width: 768px) { 
        .experience-section__content-grid { 
            grid-template-areas: "date-1" "description" "date-2" "date-3"; 
        } 
    }`)

    date1.addEventListener('click', async function () {
        changeSelectedPeriod(styleSheet = style.sheet,
            templateAreas = '"date-1" "description" "date-2" "date-3"',
            borderRadius = '0 0 12px 12px',
            selectedDate = date1,
            otherDates = [date2, date3],
            selectedDescription = description1,
            otherDescriptions = [description2, description3])
    })
    date2.addEventListener('click', async function () {
        changeSelectedPeriod(styleSheet = style.sheet,
            templateAreas = '"date-1" "date-2" "description" "date-3"',
            borderRadius = '0 0 12px 12px',
            selectedDate = date2,
            otherDates = [date1, date3],
            selectedDescription = description2,
            otherDescriptions = [description1, description3])
    })
    date3.addEventListener('click', async function () {
        changeSelectedPeriod(styleSheet = style.sheet,
            templateAreas = '"date-1" "date-2" "date-3" "description"',
            borderRadius = '0',
            selectedDate = date3,
            otherDates = [date1, date2],
            selectedDescription = description3,
            otherDescriptions = [description1, description2])
    })
}

async function changeSelectedPeriod(styleSheet, templateAreas, borderRadius, selectedDate, otherDates, selectedDescription, otherDescriptions) {
    styleSheet.deleteRule(0)
    styleSheet.insertRule(`
    @media (max-width: 768px) { 
        .experience-section__content-grid { 
            grid-template-areas: ${templateAreas}; 
        } 

        .experience-section__content-grid--date-3 { 
            border-radius: ${borderRadius}; 
        } 
    }`)

    selectedDate.classList.remove('font-body-2--dark', 'font-body-2--light')
    selectedDate.classList.add('font-body-2--dark')
    otherDates.forEach(date => {
        date.classList.remove('font-body-2--dark', 'font-body-2--light')
        date.classList.add('font-body-2--light')
    });

    selectedDescription.style.display = 'flex'
    otherDescriptions.forEach(description => {
        description.style.display = 'none'
    });
}