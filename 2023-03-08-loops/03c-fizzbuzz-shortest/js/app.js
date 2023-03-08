
console.log([...Array(100)].map((_,i)=>(++i%3?"":"Fizz")+(i%5?"":"Buzz")||i));