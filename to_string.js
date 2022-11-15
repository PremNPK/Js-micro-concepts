class Rectangle {
  constructor(width, heigth, unit) {
    this.width = width;
    this.heigth = heigth;
    this.unit = unit;
  }
  toString() {
    return `Rectangle(${this.width}x${this.heigth}${this.unit})`;
  }
}

class coloredRectangle extends Rectangle {
  constructor(width, heigth, unit, color) {
    super(width, heigth, unit);
    this.color = color;
  }
  toString() {
    return `${super.toString()}${this.color})`;
  }
}

const myRect = new Rectangle(2, 4, "cm");
console.log("Here is my rectangle:" + myRect);

const myRectColor = new coloredRectangle(1, 8, "vh", "blue");
console.log(myRectColor);

//*********************************

//console.log({}.toString()); //output: [object Object]

//console.log(Object.prototype.toString.call([])); //output: [object Array]

/*****************Here it automatically convert toString based on first parameter ********************/
//const myArray = [2, 4, 6, 8];
//console.log("Here is my array" + myArray);  //output:Here is my array2,4,6,8

// const searchParams = new URLSearchParams([
//   ["name", "prem"],
//   ["age", 25],
// ]);
// console.log("Here is my search params" + searchParams); //output:Here is my search paramsname=prem&age=25
