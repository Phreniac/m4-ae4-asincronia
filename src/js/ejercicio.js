class Pokemon {
    //constructor
    constructor(id, nombre, tipo, locacion, img){
        this.id = id
        this.nombre = nombre;
        this.tipo = tipo;
        this.locacion = locacion;
        this.img = img;
    }
    //getters y setters
    setId(id){
        this.id = id;
    }
    getId(){
        return this.id;
    }
    setNombre(nombre){
        this.nombre = nombre;
    }
    getNombre(){
        return this.nombre;
    }
    setTipo(tipo){
        this.tipo = tipo;
    }
    getTipo(){
        return this.tipo;
    }
    setLocacion(locacion){
        this.locacion = locacion;
    }
    getLocacion(){
        return this.locacion;
    }
    setImg(img){
        this.img = img;
    }
    getImg(){
        return this.img
    }
}
const nuevo_pokemon = new Pokemon();
const pokeapi = 'https://pokeapi.co/api/v2/';
//el valor de entrada "nombre" y boton para buscar 
const nombre_pokemon = document.getElementById('nombre_pokemon');
const buscar_pokemon = document.getElementById('buscar_pokemon');
//elemento para la vista de la informacion de un pokemon
const vista_pokemon = document.getElementById('vista_pokemon');

// console.log('buscar: ', buscar_pokemon);
buscar_pokemon.addEventListener('click', async function(){
    console.log('nombre pokemon: ', nombre_pokemon.value);
    await obtenerPokemonConNombre(nombre_pokemon.value);
});

//llamado a la pokeapi con el nombre del input
const obtenerPokemonConNombre = (nombre_pokemon) =>{
    let result = {};
    let pokeapi_url = `${pokeapi}pokemon/${nombre_pokemon}`;
    console.log('url: ', pokeapi_url);
    //obtencion de data que trae la pokeapi
    fetch(pokeapi_url).then(response =>{
        if (!response.ok) {
            throw Error('error');
        }
        console.log(response);
        return response.json();
    }).then(data=>{
        console.log(data);
        nuevo_pokemon.setId(data.id);
        nuevo_pokemon.setNombre(data.name);
        nuevo_pokemon.setLocacion(data.location_area_encounters);
        nuevo_pokemon.setTipo(data.types[0].type.name);
        nuevo_pokemon.setImg(data.sprites.front_default);
        console.log('nuevo pokemon', nuevo_pokemon);
        mostrarPokemon(nuevo_pokemon);
    }).catch(error=>{
        console.log('error: ',error);
    }); 
    //la data se retorna como promesa
    return new Promise((resolve, reject)=>{
        resolve(result);
    });
};

//crea un elemento html "div", se genera una variable con el contenido y el contenido se agrega al padre
const mostrarPokemon = (pokemon)=>{
    const contenido_pokemon = document.createElement('div');
    let contenido_innerhtml = 
        `<h1>${pokemon.nombre}</h1>
        <div>${pokemon.tipo}</div>
        <div>${pokemon.locacion}</div>
        <div><img src="${pokemon.img}" alt=""></div>
        <div><button id="ver_evoluciones">Ver Evoluciones</button></div>`
    ;
    contenido_pokemon.innerHTML = contenido_innerhtml;
    vista_pokemon.appendChild(contenido_pokemon);
    nuevoEvento();
}