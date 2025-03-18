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
    const currencyName = document.getElementById("currency-name");
    const currencyImg = document.querySelector("currency-img");

    currencyName.innerHTML = currencySelect.value === "dolar" ? "Dólar" : currencySelect.value === "euro" ? "Euro" : "Real";
    currencyImg.src = currencySelect.value === "dolar" ? "assets/dolar.png" : currencySelect.value === "euro" ? "assets/euro.png" : "assets/real.png";
    
}

currencySelect.addEventListener("change", changeCurrency );
convertButton.addEventListener("click", convertValues);
