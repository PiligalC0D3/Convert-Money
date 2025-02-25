const convertButton = document.querySelector(".convert-button") 

function convertValues() {    
    const inputCurrencyValue = document.querySelector(".input-currency").value 
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert").value /* Valor em Real*/
    const currencyValueConverted = document.querySelector(".currency-value") /* Outras moedas */

    const dolarToday = 5.72

    const convertedValue = inputCurrencyValue / dolarToday 

    currencyValueToConvert.innerHTML = inputCurrencyValue 
    
    console.log(convertedValue) 
}

convertButton.addEventListener("click", convertValues)  /*Aqui é o ouvinte */

