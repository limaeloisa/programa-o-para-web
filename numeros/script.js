let entrada = prompt("Digite um número para verificar múltiplos (1 a 50):");
let numeroEscolhido = parseInt(entrada);


const divResultado = document.getElementById("resultado");


if (!isNaN(numeroscolhido) && numeroEscolhido > 0) {
    
    let htmlContent = "";

    for (let i = 1; i <= 50; i++) {

        if (i % numeroEscolhido === 0) {
            htmlContent += `<span class="numero multiplo">MÚLTIPLO</span> `;
        } else {
            htmlContent += `<span class="numero">${i}</span> `;
        }
    }
    
    divResultado.innerHTML = htmlContent;
} else {
    divResultado.innerHTML = "Por favor insira um número válido.";
}