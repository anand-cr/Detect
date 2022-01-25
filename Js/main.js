// console.log('hello bestie')
//  var -> globally scoped ,so not recommened
//  let -> reassign value (eg score)
//  const -> cant be directly reassigned 

//------ Data types-----

// String Numbers Boolean null undefined
// test type console.log(typeof x )
// null returntype is undefined

const name='Anand,c r';
//concat
console.log('My name is '+ name)
// Template string (better way)
console.log(`my name is ${name}`)
console.log(name.split(','));

//arrays
//****javascript is not statically typed , typescript is ***/
//pop unshift isArray indexOf 
const numbers = new Array(1,2,3,4,5)
const fruits =['apples',1,true,'oranges']
console.log(fruits[0])
fruits.push('strawberry')
console.log(fruits)

//Object literal -> key value pairs

const person={
    fn: 'Anand',
    ln: 'C R',
    hobbies: ['music','movies'],
    address: {
        street:'50 maion',
        city:'Kollam'
    }
}


console.log(person.fn,person.hobbies[1])

//Destructuring
//assign them into variable by pulling it out of person
const {firstName,lastName,address: {city} } = person
console.log(city)


//Arrays of objects
const todos =[
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Boss ',
        isCompleted: false
    },
    {
        id: 1,
        text: 'Take ',
        isCompleted: true
    }
]

console.log(todos[1].text)


//----JSON----

const todoJSON =JSON.stringify(todos)
console.log(todoJSON)

//FOR loop

for (let i =0;i<todos.length;i++){
    console.log(todos[i].text)
}

for (let todo of todos){
    console.log(todo.text)
}

todos.forEach(function(todo){
    console.log(todo.text + 'new text')
})

const todo_uc =todos.map(function(todo) {
    return todo.text.toUpperCase()
});

console.log(todo_uc);


//using map and filter together
const todo_filter = todos.filter(function(todo){
    return todo.isCompleted === true
}).map(function(todo){
    return todo.text
})

console.log(todo_filter);


//******CONDITIONALS
// == matches the value '10 == 10
// === matches also the datatype '10'===! 10
// || &&
x=5
const color = x>10 ? 'cond1' : 'if false'


//***** FUNCTIONS */

//OOP

function Person(firstName, lastName,dob){ 
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    this.getBirthYear = function(){
        return this.dob.getFullYear();
    }
    this.getName= function(){
        return this.dob.getFullYear();
    }
}

const p1 = new Person('john','d','4-1-1999');

console.log(p1.dob.getFullYear());
console.log(p1.dob);


//PROTOTYPE

function Person_pro(firstName, lastName,dob){ 
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    
}

Person_pro.prototype.getBirthYear = function(){
    return this.dob.getFullYear();
}
Person_pro.getName= function(){
    return this.dob.getFullYear();
}

const person1 = new Person_pro('john','d','1-2-1998')
console.log(person1);

//classes using ES6 -> does the same thing as above but syntact sugar

class Person_class{
    constructor(firstName, lastName,dob){ 
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

   getBirthYear(){
        return this.dob.getFullYear();
    }
    
    getName(){
        return this.dob.getFullYear();
    }
}

const person2= new Person_class('john','d','1-2-1998')
console.log(person2);



//*******DOM******/
//Single element selectors
console.log(document.getElementById('my-form'))
console.log(document.querySelector('h1')) 

//Multiple element selector
console.log(document.querySelectorAll('h1')) 

const items = document.querySelectorAll('.items');
 
items.forEach((item) => console.log(item));


const ul = document.querySelector('.items');
// // ul.remove();
// ul.firstElementChild.remove()
ul.firstElementChild.textContent ='hello'
ul.children[1].innerText ='Brad'
ul.lastElementChild.innerHTML = '<h1>HELLO</h1>'


