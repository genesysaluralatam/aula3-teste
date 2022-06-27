//objetos
// let myObj = {};

// myObj.a = 3;
// myObj.b = 4;

// console.table(myObj);

let myObject = {
    a: 5,
    b: 6
}

console.table(myObject);

let myNewObject = { 
    hello: 'world',
    bye: 'bye'
}

myObj.c = myNewObject;

console.log(myObj.c.bye);

myNewObject = 'Hello World';

console.log(myObj.c.bye);
console.log(myNewObject);

//Funções

// function sumar(a,b){
//     var resultado = a + b; //trocar para var e ver as diferenças
//     return resultado // variavél de escopo local
// }

// function nomeCompleto(nome,sobrenome){
//     let nomeCompleto = `${nome} ${sobrenome}`;
//     return nomeCompleto;
// }
// console.log(sumar(4,6))
// console.log(nomeCompleto("Genesys","Rondon"))
// console.log(resultado);

//escopo de variáveis
// var resultado = "esta é uma variavél de escopo global"
// console.log(resultado);


//Arrays

// let listaCompras = [
//     'batata',
//     'arroz',
//     'carne',
//     'banana'
// ];

// for (let i = 0; i < listaCompras.length; i++){
//     console.log(listaCompras[i]);
// }

// for (let item of listaCompras){
//     console.log(item);
// }

// listaCompras.push("ovos");
// listaCompras.pop();
// listaCompras.includes('banana');

// function mostrarItem(item){
// console.log(`O item é: ${item}`);
// }

// listaCompras.forEach(mostrarItem);
