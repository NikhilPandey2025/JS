// const keyValue={
//     name:"hitesh",
//      "fullname":"nikhil pandey ",
//     age :24,
//     location:"varanasi",
//     lastLogin :["monday","tuesday"]
// }

// console.log(keyValue.age);
// console.log(keyValue);

// //freeze 
// keyValue.greeting = function(){
//     console.log("hello my js ");
//     console.log(`hello is js ,${this.name}`);
    
    
// }
// console.log(keyValue.greeting());

// // object singleton 

// // const tinderUser= new Object()
// const tinderUser={}
// tinderUser.id="123456"
// tinderUser.name ="kant"
// tinderUser.isLooging = false
// // console.log(tinderUser);

// const regularuser ={
//     email:"some@gmail.com",
//     fullname:{
//         userfull:{
//             first :"nikhil",
//             last :"pandey"
//         }
//     }
// }

// console.log(regularuser.fullname.firstconst);
// const object1={ 1:"a",2:"b"}
// const object2={3:"a",4:"b"}

// // const assign =Object.assign({},object1,object2)
// // console.log(assign);
//  const obj3 ={...object1,...object2}
//  console.log(obj3);
 

//  console.log(Object.keys(tinderUser));
//  console.log(Object.values(tinderUser));
 
//  console.log(tinderUser.hasOwnProperty('isLoggedin'));
 



 const course ={
    name :"js complete",
    price:"999",
    Instructor:"nikhil"
 }
 // {instructor} -  its destructing 
 const {Instructor}= course
 console.log(Instructor);
 
// Api
/* {
     JSON    - key and value both string 
    
      
       " name":"nikhil",
        "coursename":"js complete",
        "price":"free"
    }
        [

         {},
         {},
         {}

        ]
     */
