let html = '';

let c = 1;

while( c <= 10){
    html += "número: "+c+"<br>";
    c++;
}

document.getElementById("demo").innerHTML = html;