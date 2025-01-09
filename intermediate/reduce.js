const myNumbr =[1,2,3,4,5,6,7,8,9,10]

// myNumbr.map((num)=>num+10)
// console.log(myNumbr);


/* chaniining */
/*
const newNums = myNumbr
                   .map((item)=> item*10) // return 
                   .map((item)=>item+1)
                   .filter((item)=>item>=40) // true and false 
console.log(newNums);
*/

//REDUCE
const nummmm =[1,2,3,4]
const myTotal = nummmm.reduce(function(accumulator,currentvalue){
    return accumulator + currentvalue
},0)
console.log(myTotal);
