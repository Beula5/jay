const fs=require("fs");

console.log("1. Start ready Sync")
const data = fs.readFileSync("myfile.txt","utf8");
console.log("2. The data returned: ",data);
console.log("3. Done reading Sync")


/*console.log("1");
console.log("2");
console.log("3");*/
