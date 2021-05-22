let html = '';

let c = 0;
while(c < 10){ //while
    html +="Numero: "+c+"<br>";
    c++;
}
for(c = 0; c < 10; c++){ //for
    html += "numero: "+c+ "<br>";
}
document.getElementById("demo").innerHTML = html;