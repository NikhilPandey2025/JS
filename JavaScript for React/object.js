const person ={
    firtName:"Nikhil",
    lastName:"PAndey ",
    age: 18,
    occupation:"engine"
}


// console.log(person);

// console.log(person.occupation,person.age, );
  
const{firtName,age,occupation}= person  // desconstring 

console.log(age);

// spread operator 

const person2 ={
    name: 'pandey',
    ages: 56,
  
}
const person3 ={...person2,name:'huhf'}