const convertBtn = document.getElementById("convert-btn")
const mainBottom = document.getElementById("main-bottom")
const inputEl = document.getElementById("input-el")

const meterFeets = 3.281
const literGallons = 0.264
const kilogramPounds = 2.204

const unitSection = [
    "Lenght (Meter to Feet)",
    "Volume (Liters to Gallons)",
    "Mass (Kilograms to Pounds)",
]

function renderUnitSections() {
    let unitDOM = ""

    for (let i = 0; i < unitSection.length; i++) {

        if (unitSection[i] === unitSection[0]) {
            unitDOM += `
        <div id="length" class="unit">
            <h2>${unitSection[i]}</h2>
            <p> ${inputEl.value} Meter = ${inputEl.value * meterFeets.toFixed(2)} Feet</p>
            <p> ${inputEl.value} Feet = ${inputEl.value / Math.round(meterFeets.toFixed(2))} Meter</p>
        </div>`
        } else if (unitSection[i] === unitSection[1]) {
            unitDOM += `
            <div id="length" class="unit">
                <h2>${unitSection[i]}</h2>
                <p> ${inputEl.value} Liters = ${inputEl.value * literGallons.toFixed(2)} Gallons</p>
            </div>`
        } else {
            unitDOM += `
            <div id="length" class="unit">
                <h2>${unitSection[i]}</h2>
                <p> ${inputEl.value} Kilograms = ${inputEl.value * Math.round(kilogramPounds.toFixed(2))} Pounds</p>
            </div>`
        }

    }
    mainBottom.innerHTML = unitDOM
}

convertBtn.addEventListener("click", function () {
    renderUnitSections()
    inputEl.value = ""
})