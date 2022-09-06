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

const medianaColTop10 = medianaSalarios(salariosColTop10);2

// console.log({
//     medianaColGeneral,
//     medianaColTop10,
// });

//HORAS EXTRAS DIURNAS
function horasExtrasDiurnas(salario, diurnas){
    diurnas = parseInt(diurnas);
    salario = parseInt(salario);
    const valorHora = salario / 205;
    const valorExtraD = 1.25 * valorHora;
    const horasExtraD = valorExtraD * diurnas;
    const salarioDiurnas = parseInt(salario + horasExtraD);

    console.log("Changos " + valorHora + " hola " + salarioDiurnas);
    return salarioDiurnas;
}

// HORAS EXTRAS NOCTURNAS
function horasExtrasNocturnas(salario, nocturnas){
    nocturnas = parseInt(nocturnas);
    salario = parseInt(salario);
    const valorHora = salario / 205;
    const valorExtraN = 1.75 * valorHora;
    const horasExtraN = valorExtraN * nocturnas;
    const salarioNocturnas = parseInt(salario + horasExtraN);

    // console.log("Changos " + valorHora + " hola " + valorExtraD);
    return salarioNocturnas;
}

//HTML & JS
function ButtonMedianaColGeneral(){

    console.log("Changos");

    const resultM= document.getElementById("ResultMediana");
    resultM.innerText = "El promedio salarial en Colombia es: $" + medianaColGeneral;
}

function ButtonTop10Col(){

    console.log("Re changos");

    const result10= document.getElementById("ResultTop10");
    result10.innerText = "El promedio salarial del 10% mas rico en Colombia es: $" + medianaColTop10;
}

//HORAS EXTRA DIURNAS
function ButtonExtrasDiurnas(){
    const inputQuincena = document.getElementById("InputQuincena");
    const quincena = inputQuincena.value;

    const inputExDiurnas = document.getElementById("InputExDiurnas");
    const diurnasValue = inputExDiurnas.value;

    console.log("salario " + quincena + " "  + diurnasValue);

    const valorConDiurnas = horasExtrasDiurnas(quincena, diurnasValue);

    const resulExDi= document.getElementById("ResultExDi");
    resulExDi.innerText = "El salario con las horas extra diurnas es: $" + valorConDiurnas;
}

//HORAS EXTRA NOCTURNAS
function ButtonExtrasMocturnas(){
    const inputQuincena = document.getElementById("InputQuincena");
    const quincena = inputQuincena.value;

    const inputExDiurnas = document.getElementById("InputExDiurnas");
    const diurnasValue = inputExDiurnas.value;

    const inputExNocturnas = document.getElementById("InputExNocturnas");
    const nocturnasValue = inputExNocturnas.value;

    console.log("salario " + quincena + " "  + diurnasValue);

    const valorConDiurnas = horasExtrasDiurnas(quincena, diurnasValue);
    const valorConNocturnas = horasExtrasNocturnas(quincena, nocturnasValue);
    const valorTotal = (valorConDiurnas + valorConNocturnas) - quincena;

    console.log("salario " + quincena + " "  + valorConNocturnas);

    const resultExNc= document.getElementById("ResultExNc");
    resultExNc.innerText = "El salario con las horas extra nocturnas es: $" + valorTotal;
}