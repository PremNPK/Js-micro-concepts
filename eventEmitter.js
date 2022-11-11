var event = require("events");
var eventEmitter = new event.EventEmitter();

let customer = function () {
  console.log("Ring Ring Ring");
};

eventEmitter.on("doorstep", customer);
eventEmitter.on("belring", function (arg) {
  console.log(arg);
});

eventEmitter.emit("doorstep");
eventEmitter.emit("belring", "Welcome");
