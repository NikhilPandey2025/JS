// for of

// ["","",""]
// [{},{}]

const arr =[1,2,3,4,5]
for (const value of arr) {
   // console.log(value);
    
}

const greeting ="hello ji namaskar"
for (const greet of greeting) {
    console.log(greet);
    
}

// Maps

const map = new Map()
map.set('IN' ,"India")
map.set('USA',"america")

console.log(map); 
   // map only use for unique value ;
// for (const key of map) {
//     console.log(key);
    
// } // in thta way they show  array format 



for (const [key,value] of map) {
    console.log(key,"=",value);
    
}   // if u write thet way they restructur array in key and vlaue pair 

// obeject in for of  not use it 

// object use for 

const myObj={
    js :'Javascript',
    cpp : 'C++',
    swift :"swift"
}
// FOR_IN = OBJEct ,Array

for (const key in myObj) {
   //console.log((`${key} shortcut is for ~{myObj[key]}`));
     
}
 program =["js","dg","grhgdfj","dfdg"]
 for (const key in program) {
   console.log(program[key]);
   
    
 }
