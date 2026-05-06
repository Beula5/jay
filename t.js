/*console.log("1");
setTimeout(()=>{
console.log("2");
},2000)
console.log("3");*/
// const fs=require("fs");

// console.log("1. Start ready ASync")
//  fs.readFile("myfile.txt","utf8",(error,data)=>{
//   if(error){
//    throw error;
//   }
//   console.log("2. The data returned: ",data);
// });
// console.log("3. Done reading ASync")

const fs = require("fs");

console.log("1. Start ready Async")

fs.readFile("name.txt","utf8",(error,data)=>{
  if(error){
    throw error
  }else{
  	console.log("2. The data returned: ",data);
  }
});

console.log("3. Done reading Async")