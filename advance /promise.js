// fetch('https:// www.google.com').then().catch().finally()

const promiseOne = new Promise(function (resolve , reject ) {
    // Do an asyn task 
    // DB calls, cryptography related
    setTimeout(function(){
        console.log('asyn task ');
        resolve() // whithout resolve not work .then function 
    },1000)
})
// .then directly conection for resolve

promiseOne.then(function(){
    // set time which work done they return result 
    console.log("promise resolve");
    
})


// antoher way people use alot
new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("asyn task 2");
        
    }, 1000);
    
}).then(function() {
    console.log("resolve 2 ");
    
})

// promise 3 
new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({username:"chai",email:"hdifgs@gmail.com"})
    }, 1000);
}).then(function(user) {
    console.log(user); // use for seolve data come 
    
})

// promise 4

new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({userNme:"fhdufvuchv",password:"5757"})
        }
        else{
            reject('Error :something wrong ')
        }
    }, 1000);
}).then((user)=>{
console.log(user);
return user.username

}).then((userNme)=>{
console.log(userNme);

}).catch(function(error) {
    console.log(error);
    
}).finally(()=>{
    console.log("promise resolved");
    
})

//promise 5 
new Promise((resolve, reject) => {
    
})