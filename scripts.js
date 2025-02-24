const convertButton = document.querySelector(".convert-button") 

function convertValues() {    
    const inputValores = document.querySelector(".input-valores").value 
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert").value /* Valor em Real*/
    const currencyValueConverted = document.querySelector(".currency-value") ;/* Outras moedas */

    const dolarToday = 5.72

    const convertedValue = inputValores / dolarToday 

    currencyValueToConvert.innerHTML = inputValores 
    
    console.log(convertedValue) 
}

convertButton.addEventListener("click", convertValues)  /*Aqui é o ouvinte */

