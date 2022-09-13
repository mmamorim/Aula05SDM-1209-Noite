
console.log("nível médio")

let soma3numeros = function (numero1, numero2, numero3) {
    return numero1 + numero2 + numero3
}

let subtrai3numeros = (numero1, numero2, numero3) => {
    return numero1 - numero2 - numero3
}

function imprimeNumero() {
    console.log("passei aqui depois de 3 segs");
}

let resultado = soma3numeros(3, 40, 50)
let resultado2 = subtrai3numeros(2, 3, 3)

console.log(resultado)
console.log(resultado2)
console.log(soma3numeros)
console.log(subtrai3numeros)

setTimeout(imprimeNumero, 3000)

setTimeout(() => {
    
    console.log("demorei 1 seg");
    setTimeout(() => {
        console.log("demorei 10 seg");

    }, 10000)
}, 1000)

setTimeout(() => {
    console.log("demorei 2 seg");
}, 2000)

console.log("continuei...");
console.log("continuei...");
console.log("continuei...");
