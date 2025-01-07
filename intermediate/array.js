  const myArr =[1,2,3,4,5]
    const myHeros =["saktiman","kxfhk"]

const myArr2= new Array(1,2,3,4)

  console.log(myArr[0]);

  // Methods 

// myArr.push(8)
// myArr.pop(4)
// myArr.unshift(9)
// myArr.shift()

console.log(myArr);

console.log(myArr.includes(9));
console.log(myArr.indexOf(9));

//join make array as a string 
const newArr =myArr.join()
console.log(newArr);

//slice ,splice

console.log("A",myArr);
console.log(myArr.slice(1,3));
console.log(myArr.splice(1,3));

// **************************************************************//

const hero =["thor","ironman","spiderman"]
const heros =["superman","flash","batman"]

hero .push(heros)
console.log(hero);
console.log(hero[3][1]);

hero.concat(heros)
console.log(hero);

// spread operator
const allhero=[...hero,...heros]
console.log(allhero);

// const anotherArr =[1,2,3,4,[5,6,7],8]


console.log(Array.isArray("Nikhil"))
console.log(Array.from("Pandey"));
