function calcularModa(datos){
    console.log("chango", datos);

    const datosCount = {};

    datos.map(
        function(elemento){
            if (datosCount [elemento]){
                datosCount [elemento] += 1;
            }else{
                datosCount [elemento] =  1;
            }
        }
    );

    let moda;
    
    const datosArray = Object.entries(datosCount).sort(
        function(elementoA, elementoB){
            return elementoA[1] - elementoB[1];
        }
    );
    
    const datosmoda = datosArray[datosArray.length - 1];
    
    moda = datosmoda;

    return moda;

}

// const lista1 = [
//     1,
//     2,
//     3,
//     1,
//     2,
//     3,
//     4,
//     2,
//     2,
//     2,
//     1,
// ];

// const lista1Count = {};

// lista1.map(
//     function(elemento){
//         if (lista1Count [elemento]){
//             lista1Count [elemento] += 1;
//         }else{
//             lista1Count [elemento] =  1;
//         }
//     }
// );

// const lista1Array = Object.entries(lista1Count).sort(
//     function(elementoA, elementoB){
//         return elementoA[1] - elementoB[1];
//     }
// );

// const moda = lista1Array[lista1Array.length - 1];
