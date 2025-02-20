const convertButton = document.querySelector(".convert-button") 

function convertValues() {    
    const inputCurrencyValue = document.querySelector(".input-valores").value

    console.log(inputCurrencyValue)
}

convertButton.addEventListener("click", convertValues) /*Aqui é o ouvinte */

