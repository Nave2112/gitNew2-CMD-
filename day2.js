
//for normally we write as 
const namess = str =>str.split('').reverse().join()
console.log(namess('gobuddy'))


let jo = 'grandma'
for(let i =jo.length-1; i>=0; i--){
    console.log(jo[i])
}


//reverse string using function  == do this one in interview
function reverseName(name){
    let reversed = ""
    for(let i=name.length-1; i>=0; i--){
        reversed += name[i]    
    }
   return reversed
   
} 
console.log(reverseName('naveen'))



let names = ['vijay','ajith','surya','vikram']
names.forEach((user)=>{
    console.log(reverseName(user))
})

//Basic function
function addition (a,b){
    return a+b
}
console.log(addition(6,7))

//check Prime Number
function isPrime(n){
  if(n<=1) return false   // 1 is composite number
  for (i=2; i<n; i++){
    if(n%2===0){
        return false
    }  
  } 
  return true
}

for (let i=1; i<=100; i++){
    if(isPrime(i)){
        console.log(i)
    }
}

//var isprime = function(n){           ====or
var isprime =n =>{
    if(n<2) return false
    for(let i= 2; i<n; i++){
        if(n%i===0){
            return false
        }
    }
    return true
}
console.log(isprime(27))
if(isprime(23)){
    console.log('yes it is prime')
}else{
    console.log('not prime')
}

let inputs = [13,15,17,27,31,37,47,50]
inputs.forEach((i)=>{
    if(isprime(i)){
        console.log(`${i} is a prime number`,i)
    }
})

//Array
var Fruit = ['apple','grape','mango']
//array modification
Fruit[2] = 'guava'
console.log(Fruit)

//Element include to the end of array
Fruit.push('Mango','kiwi')
console.log(Fruit)
//to remove last element
Fruit.pop()
console.log(Fruit)
//To add element to array in front orfirst index
Fruit.unshift('Fig')
console.log(Fruit)

//To remove element to array in front orfirst index
Fruit.shift('Fig')
console.log(Fruit)

//To verify it includes
console.log(Fruit.includes('Fig'))
//slice == take a piece from an array
var sliced = Fruit.slice(1,3)   // take first index (1) then 3 is consider that <3 so took 2nd index
console.log(sliced)

//splice  --- [start number, deletenumber, add number]
//[ 'apple', 'grape', 'guava', 'Mango' ]
Fruit.splice(1,2,"pineapple")  // 1 indicates that pineappl will plced 1st index and then 
// it shown as [ 'apple', "pineapple", 'grape', 'guava', 'Mango' ] so 2 is delete the index 1, index2 after pine apple, 
//grape, guava deleted  
//Fruit.splice(2,0)
console.log(Fruit)

//sort 
Fruit.sort()
console.log(Fruit)
//reverse in order
var fruit  = [ 'apple', 'grape', 'guava', 'mango' ,'fig']
fruit.sort().reverse()
console.log(fruit)


var fruit  = [ 'apple', 'grape', 'guava', 'Mango' ,'fig']
fruit.sort()
console.log(fruit)  //[ 'Mango', 'apple', 'fig', 'grape', 'guava' ]
//avoid that case sensitivity use a custom comparison function 
// with .localeCompare(): Lexicographical ascii Order:
fruit.sort((a,b)=>a.localeCompare(b,undefined,{sensitivity:'base'}))
console.log(fruit)


var marks = [50,47,67,88,95,70]
let even = []
for(let i =0 ;i<marks.length; i++){
    if(marks[i]%2==0){
        even.push(marks[i])
    }
}
console.log(even)

//to be simple use hof in filter
let evenn = marks.filter((mark)=> mark%2==0)
console.log(evenn)
let eee = marks.map((num)=> num+1)
console.log(eee)

marks.forEach((m)=>{
    console.log(m)
})


let expectt = []
marks.forEach((mm)=>{
    
    expectt.push(mm)
})
console.log(expectt)