// const precioOriginal = 100;
// const descuento = 15;

function calcularPrecioDescuento(precio, descuento){
    const porcentajePrecioDescuento = 100 - descuento;
    const precioConDescuenton = (precio * porcentajePrecioDescuento)/100;

    return precioConDescuenton;
}

function calcularPrecioCupon(precio, descuento, cupon){
    const porcentajePrecioDescuento = 100 - descuento;
    const precioConDescuenton = (precio * porcentajePrecioDescuento)/100;
    const porcentajePrecioCupon = 100 - cupon;
    const precioConCupon = (precioConDescuenton * porcentajePrecioCupon)/100;

    return precioConCupon;
}

function ButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const InputDiscount = document.getElementById("InputDiscount");
    const dicountValue = InputDiscount.value;

    console.log("hola");

    const precioConDescuenton = calcularPrecioDescuento(priceValue, dicountValue);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento es: $" + precioConDescuenton;
}

function ButtonPriceCupon(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const InputDiscount = document.getElementById("InputDiscount");
    const dicountValue = InputDiscount.value;

    const InputCupon = document.getElementById("InputCupon");
    const cuponValue = InputCupon.value;

    console.log("hola");

    const precioConCupon = calcularPrecioCupon(priceValue, dicountValue, cuponValue);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento mas el cupon es: $" + precioConCupon;
}

// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioDescuento,
//     precioConDescuenton
// });
