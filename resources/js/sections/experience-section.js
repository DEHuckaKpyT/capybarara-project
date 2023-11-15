document.addEventListener('DOMContentLoaded', async function () {
    await makeInteractiveExperienceGrid()
})

async function makeInteractiveExperienceGrid() {
    const style = document.createElement("style")
    document.head.appendChild(style)
    style.sheet.insertRule(`
    @media (max-width: 768px) { 
        .experience-section__content-grid { 
            grid-template-areas: "date-1" "description" "date-2" "date-3"; 
        } 
    }`)

    const grid = document.querySelector('.experience-section__content-grid')

    const date1 = grid.querySelector('.experience-section__content-grid--date-1')
    const description1 = grid.querySelector('.experience-section__grid-description--desc-1')
    const date2 = grid.querySelector('.experience-section__content-grid--date-2')
    const description2 = grid.querySelector('.experience-section__grid-description--desc-2')
    const date3 = grid.querySelector('.experience-section__content-grid--date-3')
    const description3 = grid.querySelector('.experience-section__grid-description--desc-3')


    date1.addEventListener('click', async function () {
        style.sheet.deleteRule(0)
        style.sheet.insertRule(`
        @media (max-width: 768px) { 
            .experience-section__content-grid { 
                grid-template-areas: "date-1" "description" "date-2" "date-3"; 
            } 

            .experience-section__content-grid--date-3 { 
                border-radius: 0 0 12px 12px; 
            } 
        }`)

        description1.style.display = 'flex'
        description2.style.display = 'none'
        description3.style.display = 'none'
    })
    date2.addEventListener('click', async function () {
        style.sheet.deleteRule(0)
        style.sheet.insertRule(`
        @media (max-width: 768px) { 
            .experience-section__content-grid { 
                grid-template-areas: "date-1" "date-2" "description" "date-3"; 
            } 

            .experience-section__content-grid--date-3 { 
                border-radius: 0 0 12px 12px; 
            } 
        }`)

        description1.style.display = 'none'
        description2.style.display = 'flex'
        description3.style.display = 'none'
    })
    date3.addEventListener('click', async function () {
        style.sheet.deleteRule(0)
        style.sheet.insertRule(`
        @media (max-width: 768px) { 
            .experience-section__content-grid { 
                grid-template-areas: "date-1" "date-2" "date-3" "description"; 
            } 
            
            .experience-section__content-grid--date-3 { 
                border-radius: 0; 
            } 
        }`)

        description1.style.display = 'none'
        description2.style.display = 'none'
        description3.style.display = 'flex'
    })
}