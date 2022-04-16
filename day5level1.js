let dizi=[]
let dizi1=[1,2,3,4,5,6]
console.log(dizi1.length)
console.log(dizi1[0],dizi1[2],dizi1[dizi1.length-1])
let mixedDataTypes=[1,2,3,["ali"],true,{name:"ali"}]
console.log(mixedDataTypes.length)

let  itCompanies=["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
console.log(itCompanies)
console.log(itCompanies.length)
console.log(itCompanies[0])
console.log(itCompanies[3])
console.log(itCompanies[itCompanies.length-1])
console.log(itCompanies[0].toUpperCase(),itCompanies[1].toUpperCase(),itCompanies[2].toUpperCase(),itCompanies[3].toUpperCase(),itCompanies[4].toUpperCase(),itCompanies[5].toUpperCase(),itCompanies[6].toUpperCase())
let last=itCompanies.pop()
console.log(last)
console.log(itCompanies.join(",")+(" And "+ last+" are big IT companies"))

let include=itCompanies.includes("Facebook")
if(include==true){
console.log(include) }
else{
    console.log("company is not found")
}

//console.log(itCompanies.sort())
//console.log(itCompanies.reverse())
//console.log(itCompanies.slice(0,3))
//console.log(itCompanies.slice(4,7))
//console.log(itCompanies.slice(2,5))
//console.log(itCompanies.shift())
//console.log(itCompanies.pop())
console.log(itCompanies.splice())
