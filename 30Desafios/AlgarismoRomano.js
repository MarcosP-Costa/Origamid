function traduzirAlgarismos(algarismosParam) {
    let erro1 = "\n Insira um algarismo válido! \n os algarismos validos são -> \n I = 1 \n V = 5 \n X = 10 \n L = 50 \n C = 100 \n D = 500 \n M = 1000 \n"
    if (algarismosParam == "" || typeof algarismosParam == "number" || typeof algarismosParam == "object") { //aqui eu checo o valor que esta sendo passado como parametro
        return erro1
    }
    let arrayAlgarismos = algarismosParam.split('')//Transformo a string recebida como parametro em um array
    let algarismoTraduzido = 0

    for (let i = 0; i < arrayAlgarismos.length; i++) {//aqui eu substituo cada letra do array criado pelo seu valor em númeral
        switch (algarismosParam[i].toUpperCase()) {
            case "I":
                arrayAlgarismos[i] = 1
                break;
            case "V":
                arrayAlgarismos[i] = 5
                break;
            case "X":
                arrayAlgarismos[i] = 10
                break;
            case "L":
                arrayAlgarismos[i] = 50
                break;
            case "C":
                arrayAlgarismos[i] = 100
                break;
            case "D":
                arrayAlgarismos[i] = 500
                break;
            case "M":
                arrayAlgarismos[i] = 1000
                break;
            default:
                return erro1
        }
    }
    algarismoTraduzido = arrayAlgarismos[0]
    for (let i = 0; i < arrayAlgarismos.length-1; i++) {//aqui eu faço a soma dos valores do array
        if (arrayAlgarismos[i] < arrayAlgarismos[i + 1]) {
            arrayAlgarismos[i + 1] *= -1

            algarismoTraduzido -= arrayAlgarismos[i + 1]
        } else if (arrayAlgarismos[i] >= arrayAlgarismos[i + 1]) {
            algarismoTraduzido += arrayAlgarismos[i + 1]
        }
    }
    return algarismoTraduzido
}





