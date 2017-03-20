//Do not change any of the function names

function multiplyByTen(num) {
  var multipliedByTen = num * 10;
  return multipliedByTen;
  //return num after multiplying it by ten
  //code here
}

function subtractFive(num) {
  var substractedFive = num - 5;
  return substractedFive;
  //return num after subtracting five
  //code here
}

function areSameLength(str1, str2) {
  if (str1.length === str2.length) {
    return true;
  } else {
    return false;
  }
  //return true if the two strings have the same length
  //otherwise return false
  //code here
}

function areEqual(x, y) {
  if (x === y) {
    return true;
  } else {
    return false;
  }
  //return true if x and y are the same
  //otherwise return false
  //code here
}

function lessThanNinety(num) {
  if (num < 90) {
    return true;
  } else {
    return false;
  }
  //return true if num is less than ninety
  //otherwise return false
  //code here
}

function greaterThanFifty(num) {
  if (num > 50) {
    return true;
  } else {
    return false;
  }
  //return true if num is greater than fifty
  //otherwise return false
  //code here
}

function add(x, y) {
  var added = x + y;
  return added;
  //add x and y together and return the value
  //code here
}

function subtract(x, y) {
  var substracted = x - y;
  return substracted;
  //subtract y from x and return the value
  //code here
}

function divide(x, y) {
  var divided = x / y;
  return divided;
  //divide x by y and return the value
  //code here
}

function multiply(x, y) {
  var multiplied = x * y;
  return multiplied;
  //multiply x by y and return the value
  //code here
}

function getRemainder(x, y) {
  var gotRemainder = x % y;
  return gotRemainder;
  //return the remainder from dividing x by y
  //code here
}

function isEven(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
  //return true if num is even
  //otherwise return false
  //code here
}

function isOdd(num) {
  if (num % 2 === 1) {
    return true;
  } else {
    return false;
  }
  //return true if num is false
  //otherwise return false
  //code here
}

function square(num) {
  var squared = Math.pow(num, 2);
  return squared;
  //square num and return the new value
  //code here
}

function cube(num) {
  var cubed = Math.pow(num, 3);
  return cubed;
  //cube num and return the new value
  //code here
}

function raiseToPower(num, exponent) {
  var raisedToPower = Math.pow(num, exponent);
  return raisedToPower;
  //raise num to whatever power is passed in as exponent
  //code here
}

function roundNumber(num) {
  var roundedNumber = Math.round(num);
  return roundedNumber;
  //round num and return it
  //code here
}

function roundUp(num) {
  var roundedUp = Math.ceil(num);
  return roundedUp;
  //round num up and return it
  //code here
}

function addExclamationPoint(str) {
  var addedExclamationPoint = str + '!';
  return addedExclamationPoint;
  //add an exclamation point to the end of str and return the new string
  //'hello world' -> 'hello world!'
  //code here
}

function combineNames(firstName, lastName) {
  var combinedNames = firstName + ' ' + lastName;
  return combinedNames;
  //return firstName and lastName combined as one string and separated by a space.
  //'Lambda', 'School' -> 'Lambda School'
  //code here
}

function getGreeting(name) {
  var gotGreeting = 'Hello' + ' ' + name + '!';
  return gotGreeting;
  //Take the name string and concatenate other strings onto it so it takes the following form:
  //'Sam' -> 'Hello Sam!'
  //code here
}

//If you can't remember these area formulas then head over to Google or look at the test code.
 
function getRectangleArea(length, width) {
  var gotRectangleArea = length * width;
  return gotRectangleArea;
  //return the area of the rectangle by using length and width
  //code here
}

function getTriangleArea(base, height) {
  var gotTriangleArea = base * height / 2;
  return gotTriangleArea;
  //return the area of the triangle by using base and height
  //code here
}

function getCircleArea(radius) {
  var gotCircleArea = Math.PI * Math.pow(radius, 2);
  return Math.round(gotCircleArea);
  //return the rounded area of the circle given the radius
  //code here
}

function getRectangularPrismVolume(length, width, height) {
  var gotRectangularPrismVolume = length * width * height;
  return gotRectangularPrismVolume;
  //return the volume of the 3D rectangular prism given the length, width, and height
  //code here
}

//Do not modify code below this line.
////--------------------------------

module.exports = {
  multiplyByTen: multiplyByTen,
  subtractFive: subtractFive,
  areSameLength: areSameLength,
  areEqual: areEqual,
  lessThanNinety: lessThanNinety,
  greaterThanFifty: greaterThanFifty,
  add: add,
  subtract: subtract,
  divide: divide,
  multiply: multiply,
  getRemainder: getRemainder,
  isEven: isEven,
  isOdd: isOdd,
  square: square,
  cube: cube,
  raiseToPower: raiseToPower,
  roundNumber: roundNumber,
  roundUp: roundUp,
  addExclamationPoint: addExclamationPoint,
  combineNames: combineNames,
  getGreeting: getGreeting,
  getRectangleArea: getRectangleArea,
  getTriangleArea: getTriangleArea,
  getCircleArea: getCircleArea,
  getRectangularPrismVolume: getRectangularPrismVolume
};
