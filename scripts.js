const convertButton = document.querySelector(".convert-button") 

function convertValues() {    
    const inputValue = document.querySelector(".input-value").value 
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert").value /* Valor em Real*/
    const currencyValueConverted = document.querySelector(".currency-value") ;/* Outras moedas */

    const dolarToday = 5.72

    const convertedValue = inputValue / dolarToday 

    currencyValueToConvert.innerHTML = inputValue 
    
    console.log(convertedValue) 
}

convertButton.addEventListener("click", convertValues)  /*Aqui é o ouvinte */

