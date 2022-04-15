let month=prompt("Hangi aydasınız?").toLowerCase()
switch(month){
    case "ocak":
    case "mart":
    case "mayıs":
    case "temmuz":
    case "ağustos":
    case "ekim":
    case "aralık":
    console.log(month+" ayı 31 gündür")
    break
    case "nisan":
    case "haziran":
    case "eylül":
    case "kasım":
    console.log(month+" ayı 30 gündür")
    break
    case "şubat":
        console.log(month+" ayı 28 gündür")
break
}
