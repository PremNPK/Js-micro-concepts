import { Observable } from "rxjs";
function asyncStream(Observer) {
  var tr = setInterval(() => {
    Observer.next(Math.random()*10);
  }, 1000);
}
var mainStreamObservable = Observable.create(asyncStream);
var step1Stream=mainStreamObservable.pipe(map(x=>math.round()));
var step2Stream=step1Stream.pipe(filter(x=>(x>4));
                                 
var subcription = step2Stream.subcribe((res) => Listener(res));

function Listener(res) {
  console.log(res);
  subcription.unsubcribe();
}
