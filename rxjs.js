import { Observable } from "rxjs";
function asyncStream(Observer) {
  var tr = setInterval(() => {
    Observer.next(Math.random());
  }, 1000);
}
var observ = Observable.create(asyncStream);
var subcription = observ.subcribe((res) => Listener(res));
function Listener(res) {
  console.log(res);
  subcription.unsubcribe();
}
