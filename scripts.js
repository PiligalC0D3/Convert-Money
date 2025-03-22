const convertButton = document.querySelector(".convert-button"); 
const currencySelect = document.querySelector(".currency-select");   

function convertValues() {
    const inputCurrencyValue = Number(document.querySelector(".input-currency").value); // Valor digitado pelo usuário
    if (isNaN(inputCurrencyValue) || inputCurrencyValue <= 0) { // Verifica se o valor digitado é um número válido
        alert("Por favor, insira um valor válido."); // Exibe um alerta caso o valor seja inválido
        return; // Impede a execução do restante da função se o valor for inválido
    }

    const currencyValueToConvert = document.querySelector(".currency-value-to-convert"); // Elemento que exibe o valor digitado
    const currencyValueConverted = document.querySelector(".currency-value"); // Elemento que exibe o valor convertido
 
    const dolarToday = 5.75;
    const euroToday = 6.75;

    currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', { // Formata o valor digitado para a moeda selecionada
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
    } else { // Caso a moeda selecionada não seja válida
        currencyValueConverted.innerHTML = "Selecione uma moeda válida";
    }

    console.log("Moeda selecionada:", currencySelect.value);
    console.log("Valor digitado:", inputCurrencyValue);
}

function changeCurrency() { // Função para alterar o nome da moeda na tela
    const currencyName = document.getElementById("currency-name"); // Elemento que exibe o nome da moeda
    const currencyImage = document.gerySelector("currency-img"); // Elemento que exibe a imagem da moeda

    if (currencySelect.value === "dolar") {
        currencyName.innerHTML = "Dólar americano";
        currencyImage.src = "./assets/eua.png";

    } else if (currencySelect.value === "euro") {
        currencyName.innerHTML = "Euro";
        currencyImage.src = "./assets/euro.png";

    } else if (currencySelect.value === "real") {
        currencyName.innerHTML = "Real Brasileiro";
        currencyImage.src = "./assets/real.png";
    }
}

currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);
