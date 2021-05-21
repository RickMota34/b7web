let carros = ['chevrolet', 'fiat', 'wolksvagen', 'honda'];

let html = '<ul>';

    for(let i in carros){
        html += '<li>'+ carros[i] +'</li>';
    }

html += '</ul>';

document.getElementById("demo").innerHTML = html;