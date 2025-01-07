function name() {
    console.log("nikh");
    
}
//name()

// function add(a,b) {
//     console.log(a+b);
    
// }

// ****************************************************** parameter different way *************

/*
function add(a,b) {
    // let result =a+b
    // return result    
    return a+b 
}
const result = add(3,4)
console.log(result);
*/

function loginUser(username) {
    return `${username}just logging `
}

console.log(loginUser("pandey"));

// function with rest operator  -- (...num1) - rest operator 
/*
function calculatePrice(...num1) {
    return num1
}
console.log(calculatePrice(2,200,300));
*/

// ******************************************* object *********
const  user={
    user:"nihil",
    age:75,

}
function handObject(any) {
    console.log(`username ${any.age}`);
    
}
handObject(user)


// array function

const array =[200,3,555,6696]

function retuenarray(arrayname) {
    return arrayname[0]
}
console.log(retuenarray(array));
