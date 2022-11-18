
const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
const lengthOutput = document.getElementById("length-output")
const volumeOutput = document.getElementById("volume-output")
const massOutput = document.getElementById("mass-output")



function convert() {
    const inputValue = inputEl.value
    const metre = inputValue   
    const feet = metre * 3.281
    lengthOutput.textContent = `${Number(metre).toFixed(2)}
                                metres = ${feet.toFixed(2)}
                                feet / ${feet.toFixed(2) }
                                feet = ${Number(metre).toFixed(2)} metres`
    const litre = inputValue   
    const gallon = litre * 0.264
    volumeOutput.textContent = `${Number(litre).toFixed(2)}
                                litres = ${gallon.toFixed(2)}
                                gallons / ${gallon.toFixed(2) }
                                gallons = ${Number(litre).toFixed(2)} litres`
    const kilogram = inputValue   
    const pound = kilogram * 2.204
    massOutput.textContent =    `${Number(kilogram).toFixed(2)}
                                kilograms = ${pound.toFixed(2)}
                                pounds / ${pound.toFixed(2) }
                                pounds = ${Number(kilogram).toFixed(2)} kilograms`   
}

convertBtn.addEventListener("click", function() {
    convert()
})


inputEl.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("convert-btn").click();
    }
  })