//armazenar as respostas
var respostas = [];


// Solicitar as informações
respostas[0] = prompt("Qual é o seu nome?");
respostas[1] = prompt("Qual é a sua cor favorita?");
respostas[2] = prompt("Qual é o seu prato favorito?");
respostas[3] = prompt("Qual gênero musical você gosta de ouvir?");


// Exibir a mensagem personalizada
document.write("Olá " + respostas[0] + ", analisei suas preferências e estou vendo que sua cor preferida é " +
     respostas[1] + ", seu prato preferido é " + respostas[2] + " e que você gosta de ouvir " + respostas[3] +
      ", agora que já sei de tudo isso, vou selecionar as melhores notícias para você ler hoje!");