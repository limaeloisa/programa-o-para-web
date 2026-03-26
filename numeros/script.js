let numero = Number(prompt("Digite um número para ver seus multiplos: "))

for (let i = 1; i <= 50; i++) {
    if (i % numero === 0) {
        document.writeln(i + " é múltiplo<br>")
    }else {
        document.writeln(i)
    }
}
   

