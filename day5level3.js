const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
console.log(ages.sort())
let minYas = ages.sort()[0]
let maxYas = ages.sort()[ages.length - 1]
console.log(minYas, maxYas)
let yasFarki= maxYas - minYas
console.log(yasFarki)

let elemanSayisi = ages.length
let ortalama =0
if(ages.length%2==0){
  let ortanca1=parseInt((elemanSayisi+1)/2)
  let ortanca2=parseInt((elemanSayisi+1)/2)+1
 ortalama=(ages[ortanca1-1]+ages[ortanca2-1])/2
}
else{
    let ortanca=parseInt((elemanSayisi+1)/2)

    ortalama=ages[ortanca-1]
}
let minYasOrtalamaFarki=Math.abs( minYas - ortalama)
let maxYasOrtalamaFarki= maxYas - ortalama

console.log(ortalama)


