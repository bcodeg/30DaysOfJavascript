let score=prompt("sınav notunuz:")
if(score>=80 && score<=100){
    console.log("Harf notunuz: A")
}
else if(score>=70 && score<=89){
    console.log("Harf notunuz: B")
}
else if(score>=60 && score<=69){
    console.log("Harf notunuz: C")
}
else if(score>=50 && score<=59){
    console.log("Harf notunuz: D")
}
else if(score>=0 && score<=49){
    console.log("Harf notunuz: F")
}
else{
    console.log("hatalı giriş")
}

let mevsim=prompt("Hangi aydasınız?").toLowerCase()
switch(mevsim){
    case "aralık":
    case "ocak":
    case "şubat":
        console.log("Kış mevsimi.")
        break;
    case "mart":
    case "nisan":
    case "mayıs":
console.log("İlkbahar mevsimi.")
break;
    case "haziran":
    case "temmuz":
    case "ağustos":
console.log("Yaz mevsimi.")
break;
    case "eylül":
    case "ekim":
    case "kasım":
   console.log("Sonbahar mevsimi.")
break;
    default:
        console.log("hatalı giriş")
}

let gun=prompt("hangi gündesiniz?").toLowerCase()
switch(gun){
    case "pazartesi":
        case "salı":
            case "çarşamba":
                case "perşembe":
                case "cuma":
                    console.log(gun+" haftaiçi")
                    break
                    case "cumartesi":
                        case "pazar":
                            console.log(gun+" haftasonu")
                            break
                            default: console.log("hatalı giriş")

}