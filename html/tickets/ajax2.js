console.log('correcto');

document.querySelector('#boton').addEventListener('click', traerDatos());

function traerDatos(){

    console.log('Dentro de la funcion');

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'test.json', true);

    xhttp.send();

    xhttp.onreadystatechange = function(){

        if(this.readyState == 4 && this.status == 200){

            console.log(this.responseText);
        }
    }

}



