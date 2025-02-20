const convertButton = document.querySelector(".convert-button") 

function convertValues() {    
    const inputCurrencyValue = document.querySelector(".input-valores").value

    const dolarToday = 5.72

    const convertedValue = inputCurrencyValue / dolarToday

    console.log(convertedValue)
}

convertButton.addEventListener("click", convertValues) /*Aqui é o ouvinte */

