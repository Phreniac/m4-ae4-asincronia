//callback

//ejemplo simple de saludar con funcion callback 
function saludar(nombre, callback) {
    const mensaje = `¡Hola, ${nombre}!`;
    // Invocamos al callback después de 2 segundos
    setTimeout(function() {
        callback(mensaje);
    }, 5000);
}

function mostrarSaludo(saludo) {
    console.log(saludo);
}

function bienvenida(nombre){
    console.log(`Bienvenido! ${nombre}`);
}
function obtenerNombre(nombre, callback){
    setTimeout(function() {
        callback(nombre);
    }, 2000);
}

//let nombre = obtenerNombre();
// bienvenida(nombre);

bienvenida('Juan', obtenerNombre);
// saludar('Juan', mostrarSaludo);
// saludo2();

    
//promesas

// const promesa = new Promise((resolve, reject) => {
//     // Simulación de operación asincrónica
//     setTimeout(() => {
//       const exito = false; // Cambiar a false para simular un error
//       if (exito) {
//         resolve('Operación completada exitosamente');
//       } else {
//         reject('Ocurrió un error en la operación');
//       }
//     }, 2000);
// });
  
// promesa.then((resultado) => {
//     console.log(resultado);
// }).catch((error) => {
//     console.error(error);
// });

const obtenerValor1 = () =>{
    let valor_total = 20;
    return new Promise((resolve, reject)=>{
        setTimeout(function(){
           resolve(valor_total)
        }, 3000);
    });
};

const obtenerValor2 = () =>{
    let valor_total = 30;
    return new Promise((resolve, reject)=>{
        setTimeout(function(){
           resolve(valor_total)
        }, 4000);
    });
};

const obtenerValor3 = () =>{
    let valor_total = 100;
    return new Promise((resolve, reject)=>{
        setTimeout(function(){
           resolve(valor_total)
        }, 1000);
    });
};

const valoresTotales = (valor1, valor2, valor3) =>{
    let valor_total = valor1 + valor2;
    //promesa que retorna la suma de valores
    return new Promise((resolve, reject)=>{
        setTimeout(function(){
            if(valor_total < 0){
                reject('Los valores son erroneos.');
            }else{
                valor_total = valor_total + valor3;
                resolve(valor_total);
            }
        }, 3000);
    });
};

// let valor1 = 0;
// let valor2 = 0;
// let valor3 = 0;

// obtenerValor2().then(result => {
//     valor2 = result;
//     obtenerValor1().then(val1 => {
//         valor1 = val1;
//         promesa2(valor1,valor2).then(result =>{
//             console.log('resultado: ', result);
//         }).catch(error => {
//             console.error(error);
//         });
//     }).catch(error=>{
//         console.error(error);
//     });
// }).catch(error=>{
//     console.error(error);
// });

//async await
async function resolucionDeValores(){
    let valor1 = 0;
    let valor2 = 0;
    let valor3 = 0;

    await obtenerValor3().then(result =>{
        console.log('valor3:', result);
        valor3 = result;
    }).catch(error =>{
        console.error(error);
    });

    await obtenerValor1().then(result =>{
        valor1 = result;
        console.log('valor1:', result);
    }).catch(error =>{
        console.error(error);
    });

    await obtenerValor2().then(result =>{
        valor2 = result;
        console.log('valor2:', result);
    }).catch(error =>{
        console.error(error);
    });

    valoresTotales(valor1,valor2, valor3).then(result =>{
        console.log('resultado', result);
    }).catch(error =>{

    });
}
//funcion final para ver todos los valores
//resolucionDeValores();

function obtenerPokemonConId(id_pokemon){
    const url_pokeapi = `https://pokeapi.co/api/v2/pokemon/${id_pokemon}`;
    fetch(url_pokeapi)
    .then(result =>{
        return result.json();
    }).then(data =>{
        console.log('data', data);
    }).catch(error=>{
        console.error(error);
    });
}
obtenerPokemonConId(2);
//forma asincrona de una funcion flecha
// const resolucionDeValores = async ()=>{
// };



