function calcularVitorias (vitorias, derrotas){
return vitorias - derrotas
}
let saldoVitorias = calcularVitorias(200, 148)
let nivel =""
if (saldoVitorias <= 10){
    nivel = "Ferro"
}
if (saldoVitorias >= 11){
    nivel = "Bronze"
}
if (saldoVitorias >= 21){
    nivel = "Prata"
}
if (saldoVitorias >= 51){
    nivel = "Ouro"
}
if (saldoVitorias >= 81){
    nivel = "Diamante"
}
if (saldoVitorias >= 91){
    nivel = "Lendário"
}
if (saldoVitorias >= 101){
    nivel = "Imortal"
}
console.log("O Herói tem saldo de " + saldoVitorias + " e está no nível " + nivel)