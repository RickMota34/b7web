let nome = "Ricardo Santos da Mota";

let resultado = nome.length; //serve para saber quantls caracteres tem na frase.

let resultado2 = nome.indexOf( "Santos"); //serve para saber a posicão que esta uma palavra especifica.

let resultado3 = '';

if(nome.indexOf( "Mota") > -1){
    resultado3 = 'uhuuuu achei!!!';
}
else{
    resultado3 = 'putz não achei';
}

console.log( resultado);

console.log( resultado2);

console.log( resultado3)