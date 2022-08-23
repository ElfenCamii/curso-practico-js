//Metodo con constantes

//Codigo del cuadrado 

// console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: "+ ladoCuadrado + "cm");

// const perimetroCuadrado = ladoCuadrado * 2;
// console.log("El perimetro del cuadrado es: "+ perimetroCuadrado + "cm");

// const areaCuadrado = ladoCuadrado * ladoCuadrado;
// console.log("El area del cuadrado es: "+ areaCuadrado + "cm2");

// console.groupEnd("Cuadrados")

// //Codigo del triangulo

// console.group("Triangulos");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;

// console.log(
//     "los lados del triangulo miden: "
//     + ladoTriangulo1
//     + "cm, "
//     + ladoTriangulo2
//     + "cm y "
//     + baseTriangulo
//     + "cm"
// );

// const alturaTriangulo = 5.5;
// console.log("La altura del triangulo es: "+ alturaTriangulo + "cm");

// const perimetroTiangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
// console.log("El perimetro del triangulo es: "+ perimetroTiangulo + "cm");

// const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
// console.log("El area del triangulo es: "+ areaTriangulo + "cm2");

// console.groupEnd("Triangulos");

// //Codigo del Circulo

// console.group("Circulo");

// const radioCirculo = 4;
// const diametroCirculo = radioCirculo * 2;
// const PI = Math.PI;
// const perimetroCirculo = diametroCirculo * PI;
// const areaCirculo = (radioCirculo * radioCirculo) * PI;

// console.log("El radio del circulo es: " + radioCirculo + "cm");
// console.log("El diametro del circulo es: " + diametroCirculo + "cm");
// console.log("Pi es: " + PI );
// console.log("El perimetro del circulo es: " + perimetroCirculo + "cm");
// console.log("El area del circulo es: " + areaCirculo + "cm2");

// console.groupEnd("Circulo");



//Metodo con funciones

// 
function perimetroCuadrado(lado){
    return lado * 4;
}

function areaCuadrado(lado){
    return lado * lado;
}


//Codigo del triangulo

function perimetroTiangulo(lT1, lT2, bT){
    return (lT1 + lT2 + bT);
}

function areaTriangulo(bT, aT){
    return (bT * aT) / 2;
}

//Codigo altura triangulo isoceles

function calcularAltura(lado1, lado2, base){

    const altura = Math.sqrt((lado1*lado2) - (base**2)/ 4)

}


//Codigo del Circulo

const PI = Math.PI;

function diametroCirculo(radio){
    return radio *2;
}

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
function areaCirculo(radio){
    return (radio * radio) * PI;
}


//Aqui interactuamos con html
//Calculadora cuadrado

function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert("El perimetro del cuadrado es: " + perimetro + " cm");
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert("El area del cuadrado es: " + area + " cm2");

}

function calcularAltura(lado1, lado2, base){
    
    const altura = Math.sqrt(lado1**2 - base**2/ 4) 
}


//Calculadora triangulo

function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("inputLadoA");
    const value1 = input1.value;
    const input2 = document.getElementById("inputLadoB");
    const value2 = input2.value;
    const input3 = document.getElementById("inputBase");
    const value3 = input3.value;

    const perimetroTr = perimetroTiangulo(value1, value2, value3);
        alert("El perimetro del triangulo es: " + perimetroTr + " cm");
}
function calcularAreaTriangulo(){
    const input1 = document.getElementById("inputBase");
    const value1 = input1.value;
    const input2 = document.getElementById("inputAltura");
    const value2 = input2.value;

    const areaTr = areaTriangulo(value1, value2);
    alert("El area del triangulo es: " + areaTr + " cm2");
}


//Calculadora triangulo isoceles

function calcularAlturaTriangulo(){
    const input1 = document.getElementById("inputLado1");
    const value1 = input1.value;
    const input2 = document.getElementById("inputLado2");
    const value2 = input2.value;
    const input3 = document.getElementById("inputbase");
    const value3 = input3.value;

    const altura = calcularAltura(value1, value2, value3);
    if(value1 === value2 && value1 != value3){
        alert("El triangulo es isoceles y su altura es: " + altura + " cm");
    }
    else{
        alert("El triangulo no es isoceles")
    }
}

//Calculadora circulo

function calcularPerimetroCirculo(){
    const input = document.getElementById("inputRadio");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
        alert("El perimetro del circulo es: " + perimetro + " cm");
}
function calcularAreaCirculo(){
    const input = document.getElementById("inputRadio");
    const value = input.value;

    const area = areaCirculo(value);
    alert("El area del circulo es: " + area + " cm2");
}
