const arr = [1, 2, 3, 4, 5, 6]

function double(x) {
    return x*2
}
const triple = (x) => {
    return x*3
}
const binary = (x) => {
    return x.toString(2)
}
const output = arr.map(double)
////console.log(output)
const output1 = arr.map(binary)
//console.log(output1)

const outputx = arr.map((x)=> x.toString(2))
//console.log(outputx)

// filter odd values
const noutput = arr.filter((x)=> {
    return x%2 === 1
})
//console.log(noutput)

// reduce

// sum or max number

function findSum(arr) {
    let sum = 0
    for (let i = 0; i<arr.length; i++) {
        sum += arr[i]
    }
    return sum
}

//console.log(findSum(arr))

const ita = arr.reduce((acc, cur)=> {
    if(acc < cur) {
        acc = cur
    } 
    return acc
}, 0)
//console.log(ita)

const users = [
    {firstName: "saksham", lastName: "negi", age:21},
    {firstName: "gargi", lastName: "sharma", age:21},
]

const uler = users.reduce((acc, cur)=> {
    if(acc[cur.age]) {
        acc[cur.age] += 1
    } else acc[cur.age] =1
    return acc
}, {})

////console.log(uler)

const name = "Alice"
const age = 12
const job = "Manager"

const greeting = `Hello, ${name}! you are ${age} years old`
console.log(greeting)

function tagFunction(strings, ...values) {
    console.log(strings); // Array of string parts
    console.log(values); // Array of interpolated values
    return 'Customized output';
  }
  
  const a = 5;
  const b = 3;
  const result = tagFunction`The sum of ${a} and ${b} is ${a + b}.`;
  console.log(result); // Output: Customized output
  

let u = {
    firstName: "Saksham",
    lastName: "Negi",
    age: 21,
    fullName: function() {
        return this.firstName + 
         " " + this.lastName
    }

}

console.log(u.fullName())

function partyMenu(...dishes) {
    console.log(dishes);
  }
  
  partyMenu('pizza', 'sushi', 'cake');
  // Output: ['pizza', 'sushi', 'cake']  