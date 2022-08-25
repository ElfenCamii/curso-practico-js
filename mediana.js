function calcularMediaAritmetica(lista){

    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    
    const promedioLista = sumaLista / lista.length;
    
    return promedioLista;
}


function calcularMediana(datos){
    console.log("chango", datos);
    var listaOrdenada = datos;
    listaOrdenada.sort(function(a, b) {
  return a - b;
});
console.log(listaOrdenada);

const mitadDatos = parseInt(datos.length/2);

function esPar(numerito){
    if(numerito % 2 === 0){
        return true;
    }else{
        return false;
    }
}

let mediana;

if (esPar(datos.length)){
    const elemento1 = datos[mitadDatos - 1];
    const elemento2 = datos[mitadDatos];

    const promedioElemento1y2 = calcularMediaAritmetica([
        elemento1,
        elemento2,
    ]);
    
    mediana = promedioElemento1y2;

}else{
    mediana = datos[mitadDatos]
}

return "la mediana es: " + mediana;
}





