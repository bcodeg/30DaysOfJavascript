let age=prompt("Enter your age");
if(age>=18){
    console.log("You are old enough to drive")
}
else if(age<18){
    console.log("You are left with "+(18-age)+" "+"years to drive")
}
else{
    console.log("hatalı cevap")
}
let myAge=22
let yourAge=prompt("Enter your age")
if(yourAge>myAge){
    console.log("You are "+(yourAge-myAge)+" years older than me")
}
else if(myAge>yourAge){
    console.log("You are "+(myAge-yourAge)+" years younger than me")
}
else if(myAge==yourAge){
    console.log("We are at the same age")
}
   else{
       console.log("hatalı cevap verdiniz.")
   } 

   let a=prompt("a sayısı:")
   let b=prompt("b sayısı:")
   if(a>b){
       console.log("a b'den büyüktür")
   }
   else if(b>a){
       console.log("b a'dan büyüktür")
   }
   else if(a==b,b==a){
       console.log("sayılar birbirine eşitir")
   }
else{
    console.log("hatalı cevaplar verdiniz.")
}
let a1=prompt("a sayısı:")
let b1=prompt("b sayısı:")
a>b ? console.log("a b'den büyüktür") :console.log("b a'dan büyüktür")

let number=prompt("Enter a number")
if(number%2==0){
    console.log(number+" çift sayıdır")
}
else if(number%2==1){
    console.log(number+" tek sayıdır")
}
else{
    console.log("hatalı cevap")
}