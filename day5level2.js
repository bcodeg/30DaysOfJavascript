let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
console.log(text.split(" "))
console.log(text.length)

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
   
if(shoppingCart[0]!="Meat"){
   shoppingCart.unshift("Meat")
  console.log(shoppingCart)
}


if(shoppingCart[shoppingCart.length-1]!="Sugar"){
(shoppingCart.push("Sugar"))
console.log(shoppingCart)
}

let alerji=true
if(alerji){
console.log(shoppingCart)
shoppingCart.slice(3,5)
console.log(shoppingCart)
}

shoppingCart.splice(3,1,"Green Tea")
console.log(shoppingCart)

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
 // let etiyopyaVarMi=countries.includes("Ethiopia")
 //if(etiyopyaVarMi){
console.log(countries[countries.indexOf("Ethiopia")].toUpperCase())

 //}

 const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  let varmi=(webTechs.includes("SASS"))
  if(varmi){
      console.log('Sass is a CSS preprocess.')
  }
  else{
      (webTechs.push("SASS"))
      console.log(webTechs)
  }

  const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack=frontEnd.concat(backEnd)
console.log(fullStack)

