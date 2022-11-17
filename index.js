/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/


const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
const lengthOutput = document.getElementById("length-output")
const volumeOutput = document.getElementById("volume-output")
const massOutput = document.getElementById("mass-output")

convertBtn.addEventListener("click", function() {
    const inputValue = inputEl.value
    const metre = inputValue   
    const feet = metre * 3.281
    lengthOutput.textContent = `${metre.toFixed(3)} metres = ${feet.toFixed(3)} feet / ${feet.toFixed(3) } feet = ${metre.toFixed(3)} metres`   
})

//convertBtn.addEventListener("click", function() {
    //const inputValue = inputEl.value
    //const litre = inputValue   
    //const gallon = litre * 0.264
    //volumeOutput.textContent = `${litre.toFixed(3)} litres = ${gallon.toFixed(3)} gallons / ${gallon.toFixed(3) } gallons = ${litre.toFixed(3)} litres`   
//})

//convertBtn.addEventListener("click", function() {
    //const inputValue = inputEl.value
    //const kilogram = inputValue   
    //const pound = kilogram * 2.204
    //massOutput.textContent = `${kilogram.toFixed(3)} kilograms = ${pound.toFixed(3)} pounds / ${pound.toFixed(3) } pounds = ${kilogram.toFixed(3)} kilograms`   
//})