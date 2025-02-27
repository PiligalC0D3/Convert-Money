const convertButton = document.querySelector(".convert-button") 
const currencySelect = document.querySelector(".currency-select") 

function convertValues() {    
    const inputCurrencyValue = document.querySelector(".input-currency").value 
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") /* Valor em Real*/
    const currencyValueConverted = document.querySelector(".currency-value") /* Outras moedas */


    console.log(currencySelect.value) /* Mostra o valor da moeda selecionada */
    const dolarToday = 5.75
    const euroToday = 6.75

    const convertedValue = inputCurrencyValue / dolarToday 
    const convertedValueEuro = inputCurrencyValue / euroToday

    if(currencySelect.value === "USD") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'USD' }).format(convertedValue)
    } else if(currencySelect.value === "EUR") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'EUR' }).format(convertedValueEuro)
    } else {                

    currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(inputCurrencyValue) /* esse vai sair para o if e else */
    
    
    console.log(convertedValue) 
}

convertButton.addEventListener("click", convertValues)  /*Aqui é o ouvinte */