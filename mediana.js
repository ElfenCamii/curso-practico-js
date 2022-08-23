function calcularMediaAritmetica(lista){

    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    
    const promedioLista = sumaLista / lista.length;
    
    return promedioLista;
}

function calcularMediana(lista1){
    
}
const lista1 = [
    100,
    450,
    200,
    900,
    500,
    800,
];

var lista1Ordenada = lista1;
lista1Ordenada.sort(function(a, b) {
  return a - b;
});
console.log(lista1Ordenada);

const mitadLista1 = parseInt(lista1.length/2);

function esPar(numerito){
    if(numerito % 2 === 0){
        return true;
    }else{
        return false;
    }
}

let mediana;

if (esPar(lista1.length)){
    const elemento1 = lista1[mitadLista1 - 1];
    const elemento2 = lista1[mitadLista1];

    const promedioElemento1y2 = calcularMediaAritmetica([
        elemento1,
        elemento2,
    ]);
    
    mediana = promedioElemento1y2;

}else{
    mediana = lista1[mitadLista1]
}