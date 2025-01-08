// const test_module=require("./module-test");
// test_module()

//Asynchronous writing a file
// const fs = require("fs");

// fs.readFile("./names.txt", "utf8", (err, result) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(result);

// });
// const changeData = "nabi wasim anise"
// const upperCase = changeData.toUpperCase()
// fs.writeFile("./input.txt",toupperCase,(err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }else{

//     console.log("file written");
//   }
// });

// os module
// const os = require('os');
// //Method that returns the current architecture of your CPU (x86, x64, arm64...etc)
// const architecture = os.arch();
// console.log(`this CPU architecture is :${architecture}`);
// //Method that returns the current user
// const user = os.userInfo();
// console.log(user);
//We can use an object to get all the informations about our operating system.
// const thisMachineOS = {
//   name: os.type(),
//   release: os.release(),
//   version: os.version(),
//   platform: os.platform(),
//   totalMemory: os.totalmem(),
//   freeMemory: os.freemem(),
// };

// console.log(thisMachineOS);
// const readNumber = (num1,num2,cb) =>{
//   console.log(num1+num2);
//   cb()
// }
 
// const cb = () =>{
//   console.log("is the result ");
// }
// readNumber(2,3,cb)
const express = require("express")
const app = express()
app.get("/",(req,res)=>{
    res.send("never gonna give you up ")

})
app.all("*",(req,res)=>{
    res.status(404).send("this is a 404 error")
})
app.listen(3005,()=>{
   console.log("server is listening en port 3005");
})
