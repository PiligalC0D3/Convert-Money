const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");
const currencySelectDe = document.querySelector(".currency-select-de");
const inputCurrency = document.querySelector(".input-currency");
const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
const currencyValueConverted = document.querySelector(".currency-value");
const currencyName = document.getElementById("currency-name");
const currencyImage = document.querySelector(".currency-img");
const currencyName1 = document.getElementById("currency-name1");
const currencyImage1 = document.querySelector(".currency-img1");

// Taxas de câmbio simuladas (poderiam vir de uma API no futuro)
const exchangeRates = {
    dolar: { rate: 5.75, locale: "en-US", currency: "USD", name: "Dólar Americano", img: "assets/eua.png" },
    euro: { rate: 6.75, locale: "de-DE", currency: "EUR", name: "Euro", img: "assets/euro.png" },
    real: { rate: 1, locale: "pt-BR", currency: "BRL", name: "Real Brasileiro", img: "assets/brasil.png" },
    libra: { rate: 7.39, locale: "en-GB", currency: "GBP", name: "Libra Esterlina", img: "assets/libra.png" },
    bitcoin: { rate: 84988.9, locale: "en-US", currency: "BTC", name: "Bitcoin", img: "assets/bitcoin.png" }
};

function convertValues() {
    const inputCurrencyValue = parseFloat(inputCurrency.value.replace(",", "."));

    if (isNaN(inputCurrencyValue) || inputCurrencyValue <= 0) {
        currencyValueToConvert.innerHTML = "R$ 0,00";
        currencyValueConverted.innerHTML = "Selecione um valor válido";
        return;
    }

    const selectedCurrencyDe = currencySelectDe.value;
    const selectedCurrencyTo = currencySelect.value;
    const exchangeFrom = exchangeRates[selectedCurrencyDe];
    const exchangeTo = exchangeRates[selectedCurrencyTo];

    if (!exchangeFrom || !exchangeTo) {
        currencyValueConverted.innerHTML = "Selecione uma moeda válida";
        return;
    }

    // Exibe o valor original na moeda de origem
    currencyValueToConvert.innerHTML = new Intl.NumberFormat(exchangeFrom.locale, {
        style: "currency",
        currency: exchangeFrom.currency
    }).format(inputCurrencyValue);

    // Converter para BRL primeiro, depois para a moeda de destino
    const valueInBRL = inputCurrencyValue * exchangeFrom.rate;
    const convertedValue = valueInBRL / exchangeTo.rate;

    currencyValueConverted.innerHTML = new Intl.NumberFormat(exchangeTo.locale, {
        style: "currency",
        currency: exchangeTo.currency
    }).format(convertedValue);
}

function changeCurrency() {
    const selectedCurrency = currencySelect.value;
    const exchangeData = exchangeRates[selectedCurrency];

    if (exchangeData) {
        currencyName.innerHTML = exchangeData.name;
        currencyImage.src = exchangeData.img;
    }

    convertValues();
}

function changeCurrencyDe() {
    const selectedCurrency = currencySelectDe.value;
    const exchangeData = exchangeRates[selectedCurrency];

    if (exchangeData) {
        currencyName1.innerHTML = exchangeData.name;
        currencyImage1.src = exchangeData.img;
    }

    convertValues();
}

// Permitir conversão ao pressionar Enter
inputCurrency.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        convertValues();
    }
});

// Impedir entrada de caracteres inválidos no campo de valor
inputCurrency.addEventListener("input", function () {
    this.value = this.value.replace(/[^0-9.,]/g, "").replace(/[,\.](?=.*[,\.])/g, "");
});

// Atualiza a conversão automaticamente ao mudar as moedas
currencySelect.addEventListener("change", changeCurrency);
currencySelectDe.addEventListener("change", changeCurrencyDe);
convertButton.addEventListener("click", convertValues);
inputCurrency.addEventListener("input", convertValues);
