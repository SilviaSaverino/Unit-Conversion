/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.getElementById("convert-btn")
const mainBottom = document.getElementById("main-bottom")


const unitSection = [
    "Lenght (Meter/Feet)",
    "Volume (Liters/Gallons)",
    "Mass (Kilograms/Pounds)",
]



function renderUnitSections() {
    let unitDOM = ""
    for (let i = 0; i < unitSection.length; i++) {
        unitDOM += `
        <div id="length" class="unit">
            <h2>${unitSection[i]}</h2>
            <p>unit will display here</p>
        </div>`
    }
    mainBottom.innerHTML = unitDOM
}

renderUnitSections()

convertBtn.addEventListener("click", function(){
    console.log('ciao')
})