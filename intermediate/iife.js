// immediately invoked function expression(iife)

 (function coffee() {
    console.log(`DB connect`);
    
 })();
 // global scope ke pollution se pollution hota hai tho global scope ke pollution ko hatane ke liye iife use karte hai
 // use semicoloan (); because code not run 


((name)=>{
    console.log(`DB two ${name}`);
    
})('hitesh')
// 







