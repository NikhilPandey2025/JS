const user ={
    username : "nikhl",
    price:99,

    welcome:function () {
        console.log(`${this.user}`);  
    }

}
user.welcome()

function golo() {
    console.log(this);
    
}
golo()

// arrow

const coffee = ()=> {
    console.log(this);
    
}
coffee()

// example
/*const add=(num1 ,num2)=>{
    return num1+num2
}
console.log(add(3,4)) */

// implecit return - {} -braces use return writr other wise not use (react use alot) 

const add=(num1 ,num2)=> num1+num2

console.log(add(3,4))