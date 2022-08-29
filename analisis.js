// HELPERS... UTILS
function esPar(numero){
    return (numero % 2 == 0);
}

function calcularMediaAritmetica(lista){

    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    
    const promedioLista = sumaLista / lista.length;
    
    return promedioLista;
}

//CALCULADORA DE MEDIANA
function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);

    if(esPar(lista.length)){
        const peronaMitad1 = lista[mitad - 1];
        const peronaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([peronaMitad1, peronaMitad2]);
        return mediana;

    }else{
        const peronaMitad = lista[mitad];
        return peronaMitad;
    } 
}

//MEDIANA GENERAL
const salariosCol = colombia.map(
    function(persona){
        return persona.salary;
    }
)

const salariosColSorted = salariosCol.sort(
    function(salaryA, salaryB){
        return salaryA - salaryB;
    }
);

const medianaColGeneral = medianaSalarios(salariosColSorted);

//MEDIANA DE TOP 10%
const spliceStart = (salariosColSorted.length * 90) / 100;
const spliceCount = salariosColSorted.length - spliceStart;
const salariosColTop10 = salariosColSorted.splice(
    spliceStart,
    spliceCount,
);

const medianaColTop10 = medianaSalarios(salariosColTop10);

console.log({
    medianaColGeneral,
    medianaColTop10,
});