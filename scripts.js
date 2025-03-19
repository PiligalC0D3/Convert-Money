const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");

function convertValues() {
    const inputCurrencyValue = Number(document.querySelector(".input-currency").value);
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
    }
    else if (currencySelect.value === "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(inputCurrencyValue / euroToday);
    }
    else if (currencySelect.value === "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(inputCurrencyValue);
    }
    else {
        currencyValueConverted.innerHTML = "Selecione uma moeda válida";
    }

    console.log("Moeda selecionada:", currencySelect.value);
    console.log("Valor digitado:", inputCurrencyValue);
}

function changeCurrency() {
    // Obtém os elementos do HTML
const currencySelect = document.getElementById("currency-select");

function changeCurrency() {
    const currencyName = document.getElementById("currency-name");
    const currencyImg = document.getElementById("currency-img"); // Corrigido

    // Atualiza o nome da moeda
    if (currencySelect.value === "dolar") {
        currencyName.innerHTML = "Dólar";
        currencyImg.src = "assets/eua.png";
    } else if (currencySelect.value === "euro") {
        currencyName.innerHTML = "Euro";
        currencyImg.src = "assets/euro.png";
    } else {
        currencyName.innerHTML = "Real";
        currencyImg.src = "assets/real.png";
    }
}

// Adiciona os eventos
currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);
