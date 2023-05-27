//llamado a una api con fetch
function nuevoEvento(){
    const ver_evoluciones = document.getElementById('ver_evoluciones');
    ver_evoluciones.addEventListener('click', function(){
        //obtenerEspecie(nuevo_pokemon.getId());
        //obtenerEspecie2(nuevo_pokemon.getId());
        obtenerEspecie3(nuevo_pokemon.getId());
    });
}
const obtenerEspecie = (id_pokemon)=>{
    const pokeapi_url = `${pokeapi}pokemon-species/${id_pokemon}`;
    fetch(pokeapi_url).then(response =>{
        if (!response.ok) {
            throw Error('Error al obenter la información');
        }
        return response.json();
    }).then(data =>{
        console.log('data species', data);

    }).catch(error=>{
        console.log('error: ',error);
    }); 
}
//llamado a una api con xmlhttprequest
const obtenerEspecie2 = (id_pokemon)=>{
    const pokeapi_url = `${pokeapi}pokemon-species/${id_pokemon}`;
    let xhr = new XMLHttpRequest();
    xhr.open('GET', pokeapi_url, true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            const responseData = JSON.parse(xhr.responseText);
            console.log('respuesta xmlhttprequest: ',responseData);
            // Manipula y muestra los datos en la aplicación
        } else {
            console.log('Error:', xhr.status);
        }
    };
    xhr.onerror = function() {
        console.log('Error de red');
    };
    xhr.send();
}

//llamado a una api con axios
const obtenerEspecie3 = (id_pokemon)=>{
    const pokeapi_url = `${pokeapi}pokemon-species/${id_pokemon}`;
    // Make a request for a user with a given ID
    axios.get(pokeapi_url)
    .then(response =>{
        console.log('respuesta poke api: ', response.data);
    })
    .catch(function (error) {
    // handle error
    console.log(error);
    })
    .finally(function () {
    // always executed
    });
}