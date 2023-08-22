const convertButton = document.querySelector(".convert-button")
const selectMonedaAConvertirAbajo = document.querySelector(".select-moneda-abajo")



function convertValues() {

    const valueInput = document.querySelector(".input-values").value // valor que digita la persona en el input
    const moneyConvertir = document.querySelector(".moneda-a-convertir") // Valor de la moneda convertida abajo
    const moneyConvertida = document.querySelector(".moneda-convertida ") // otras monedas
    

    console.log(selectMonedaAConvertirAbajo.value)




    const dollarValueToday = 4.97 // precio del dolar del dia
    const euroValueToday = 5.41 // precio del dolar del dia
    const pesoValueToday = 145 // precio del peso del dia
    const libraValueToday = 6.33  // precio de la libra del dia
    const usdtValueToday = 5.25 // precio del usdt del dia
    const btcValueToday = 0.0000077// precio del btc del dia







    //aca formateamos los valores de las monedas

    if (selectMonedaAConvertirAbajo.value == "dolar") {
        moneyConvertida.innerHTML = new Intl.NumberFormat("en-US", { // cuando este seleccionado el valor del dolar entra aqui
            style: "currency",
            currency: "USD"
        }).format(valueInput / dollarValueToday)

    }


    if (selectMonedaAConvertirAbajo.value == "euro") {
        moneyConvertida.innerHTML = new Intl.NumberFormat("de-DE", { // cuando este seleccionado el valor del euro entra aqui
            style: "currency",
            currency: "EUR"
        }).format(valueInput / euroValueToday)
    }


    if (selectMonedaAConvertirAbajo.value == "peso") {
        moneyConvertida.innerHTML = new Intl.NumberFormat("es-AR", { // cuando este seleccionado el valor del peso entra aqui 
            style: "currency",
            currency: "ARS"
        }).format(valueInput * pesoValueToday)
    }


    if (selectMonedaAConvertirAbajo.value == "libra") {
        moneyConvertida.innerHTML = new Intl.NumberFormat("en-UK", { // cuando este seleccionado el valor de la libra entra aqui 
            style: "currency",
            currency: "GBP"
        }).format(valueInput / libraValueToday)
    }



    if (selectMonedaAConvertirAbajo.value == "usdt") {
        moneyConvertida.innerHTML = new Intl.NumberFormat("en-US", { // cuando este seleccionado el valor del usdt entra aqui 
            style: "currency",
            currency: "USD"
        }).format(valueInput / usdtValueToday)
    }

    if (selectMonedaAConvertirAbajo.value == "btc") {
        moneyConvertida.innerHTML = (valueInput * btcValueToday).toFixed(8) + "BTC";
    }



    // Este seria el real fijo del primer select        
    moneyConvertir.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(valueInput)
}






function changeMoneda() {
    const monedaNombre = document.getElementById("moneda-name")
    const monedaImage = document.querySelector(".moneda-img")


    if (selectMonedaAConvertirAbajo.value == "dolar") {
        monedaNombre.innerHTML = "Dolar"           //Cuando este seleccionado dolar se pone el nombre y su logo
        monedaImage.src = "./Assets/dolar.png"
    }



    if (selectMonedaAConvertirAbajo.value == "euro") {
        monedaNombre.innerHTML = "Euro"            //Cuando este seleccionado euro se pone el nombre y su logo
        monedaImage.src = "./Assets/euro.png"
    }


    if (selectMonedaAConvertirAbajo.value == "peso") {
        monedaNombre.innerHTML = "Peso"             //Cuando este seleccionado peso se pone el nombre y su logo
        monedaImage.src = "./Assets/pesos.png"
    }


    if (selectMonedaAConvertirAbajo.value == "libra") {
        monedaNombre.innerHTML = "Libra"            //Cuando este seleccionado libra se pone el nombre y su logo
        monedaImage.src = "./Assets/libra.png"
    }


    if (selectMonedaAConvertirAbajo.value == "usdt") {
        monedaNombre.innerHTML = "Tether Usdt"      //Cuando este seleccionado usdt se pone el nombre y su logo
        monedaImage.src = "./Assets/usdt.png"
    }


    if (selectMonedaAConvertirAbajo.value == "btc") {
        monedaNombre.innerHTML = "Bitcoin"          //Cuando este seleccionado bitcoin se pone el nombre y su logo
        monedaImage.src = "./Assets/bitcoin.png"
    }



    convertValues()


}


selectMonedaAConvertirAbajo.addEventListener("change", changeMoneda)
convertButton.addEventListener("click", convertValues)









