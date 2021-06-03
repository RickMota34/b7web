let nome = "ricardo santos da mota";

let resultado = nome.slice( -10);//tanto faz começar de frente pra traz quanto de traz pra frente.

let resultado2 = nome.substring( 5);//só funciona de frente pra traz "não tem como usar resultado negativo"

let resultado3 = nome.substr(8, 3)//o primeiro pega a posição inicial e o segundo quantas silabas

console.log(resultado);

console.log(resultado2);

console.log(resultado3);