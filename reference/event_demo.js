const EventEmitter = require("events");

// create Emitter
class MyEmitter extends EventEmitter {}

// init Object
const myEmitter = new MyEmitter();

// event listener
myEmitter.on("event", () => console.log("Event fired"));

// init event
myEmitter.emit("event");
