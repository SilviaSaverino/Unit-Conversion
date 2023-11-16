const convertBtn = document.getElementById("convert-btn")
const mainBottom = document.getElementById("main-bottom")
const inputEl = document.getElementById("input-el")

const unitSection = [
    "Lenght (Meter/Feet)",
    "Volume (Liters/Gallons)",
    "Mass (Kilograms/Pounds)",
]

const meterFeets = 3.281 
const literGallons = 0.264 
const kilogramPounds = 2.204 

function renderUnitSections() {
    let unitDOM = ""
    
    for (let i = 0; i < unitSection.length; i++) {

        if (unitSection[i] === unitSection[0]) {
            unitDOM += `
        <div id="length" class="unit">
            <h2>${unitSection[i]}</h2>
            <p> ${inputEl.value} Meter = ${inputEl.value * meterFeets} Feet</p>
        </div>`
        } else if (unitSection[i] === unitSection[1]) {
            unitDOM += `
            <div id="length" class="unit">
                <h2>${unitSection[i]}</h2>
                <p> ${inputEl.value} Liters = ${inputEl.value * literGallons} Gallons</p>
            </div>`
        } else {
            unitDOM += `
            <div id="length" class="unit">
                <h2>${unitSection[i]}</h2>
                <p> ${inputEl.value} Kilograms = ${inputEl.value * kilogramPounds} Pounds</p>
            </div>`
        }
        
    }
    mainBottom.innerHTML = unitDOM

}

convertBtn.addEventListener("click", function () {
    renderUnitSections()
})