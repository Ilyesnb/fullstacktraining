// const EventEmitter = require("events");
// const http = require("http");
// const PORT = 5001;

// const  thisEmitter =  new  EventEmitter();
// //define a custom event We listen to
// thisEmitter.on("order pizza", (size,topping)  => {
//     console.log(`order recived! baking ${size} pizza with ${topping}`);
//   });
// // consume a custom event that is listened to
// thisEmitter.emit("order pizza","large","chiken");
// //Event emitter API
// const server = http.createServer();
// //Define the event we listen to
// server.on("request", (req, res) => {
//   res.end("Welcome to the back end ");
// });
// //Listen to the event
// server.listen(PORT, () => {
//   console.log(`Listening on port ${PORT}`);
// });
// const eventEmitter = require("events")

// const thisEmitter = new eventEmitter()

// thisEmitter.on("require" ,()=>{
//    console.log("require");
// })
// thisEmitter.emit("require");

