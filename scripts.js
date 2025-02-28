const convertButton = document.querySelector(".convert-button") 
const currencySelect = document.querySelector(".currency-select") 

function convertValues() {    
    const inputCurrencyValue = document.querySelector(".input-currency").value 
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") /* Valor em Real*/
    const currencyValueConverted = document.querySelector(".currency-value") /* Outras moedas */


   
    /* Mostra o valor da moeda selecionada */

    const dolarToday = 5.75
    const euroToday = 6.75


    if(currencySelect.value === "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', { 
            style: 'currency', 
            currency: 'USD' 
        }).format(inputCurrencyValue / dolarToday)
    } 
    
    if(currencySelect.value === "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', { 
            style: 'currency', 
            currency: 'EUR' 
        }).format(inputCurrencyValue / euroToday)
    } 
                   
    currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', { 
        style: 'currency', 
        currency: 'BRL' 
    }).format(inputCurrencyValue) /* esse vai sair para o if e else <-----------*/
    
    
    console.log(inputCurrencyValue) 
}

convertButton.addEventListener("click", convertValues)  /*Aqui é o ouvinte */