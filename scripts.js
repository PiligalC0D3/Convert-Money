const convertButton = document.querySelector(".convert-button"); 
const currencySelect = document.querySelector(".currency-select");   

function convertValues() {
    const inputCurrencyValue = Number(document.querySelector(".input-currency").value);

    if (isNaN(inputCurrencyValue) || inputCurrencyValue <= 0) {
        alert("Por favor, insira um valor válido.");
        return;
    }

    const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
    const currencyValueConverted = document.querySelector(".currency-value");


    const dolarToday = 5.75;
    const euroToday = 6.75;

    currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(inputCurrencyValue);

    if (currencySelect.value === "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(inputCurrencyValue / dolarToday);
        
    } else if (currencySelect.value === "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(inputCurrencyValue / euroToday);

    } else if (currencySelect.value === "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(inputCurrencyValue);

    } else {
        currencyValueConverted.innerHTML = "Selecione uma moeda válida";
    }

    console.log("Moeda selecionada:", currencySelect.value);
    console.log("Valor digitado:", inputCurrencyValue);
}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name");
    const currencyImage = document.querySelector(".currency-img");

    if (currencySelect.value === "dolar") {
        currencyName.innerHTML = "Dólar americano";
        currencyImage.src = "assets/eua.png";

    } else if (currencySelect.value === "euro") {
        currencyName.innerHTML = "Euro";
        currencyImage.src = "assets/euro.png";

    } else if (currencySelect.value === "real") {
        currencyName.innerHTML = "Real Brasileiro";
        currencyImage.src = "assets/brasil.png";
    }
}

// Permitir conversão ao pressionar Enter
document.querySelector(".input-currency").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        convertValues();
    }
});

// Impedir entrada de caracteres inválidos no campo de valor
document.querySelector(".input-currency").addEventListener("input", function(event) {
    this.value = this.value.replace(/[^0-9.,]/g, ""); // Permite apenas números, ponto e vírgula
});

currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);
