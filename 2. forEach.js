// RECORRER ARREGLO CON FUNCION forEach

// FUNCION ANONIMA

languajes.forEach(function(valor, indice, lenguajes){
    console.log(languajes);
})



languajes.forEach(function(valor, indice, lenguajes){
    console.log(`${valor} se encuentra en el indice ${indice}`);
})

// DECLARANDO UNA FUNCION

function recorrer(valor, indice, lenguajes){
    console.log(`${valor} se encuentra en el indice ${indice}`);
}

languajes.forEach(recorrer)

// FUNCION LAMBDA

languajes.forEach((valor, indice, lenguajes) => {
    console.log(`${valor} se encuentra en el indice ${indice}`);
})


// FUNCION LAMBDA EN VARIABLE

let recorrerLam = (valor, indice, languajes) => {
    console.log(`${valor} se encuentra en el indice ${indice}`)
}

lenguajes.forEach(recorrerLam)
