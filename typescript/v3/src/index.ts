// TypeScript code
/*
  tsc : Type-Scipt-Compiler
*/

// basic types
export default {}; // to slove name already declare

const name: string = "name";
const age: number = 19;

// function return type
function addTwoNumber(number1: number, number2: number): number {
  return number1 + number2;
}

const res: number = addTwoNumber(addTwoNumber(2, 2), 2);
console.log("Sum of number  : " + res);

// optional properties | optional argument
function printCar(
  carName: string,
  carNumber: number,
  isElectricCar?: boolean | null | undefined // multiple types
): string {
  return `
     carName : ${carName}
     carNumber : ${carNumber}
     IsElectricCar : ${isElectricCar ? "True" : "False"}
    `;
}

console.log(printCar("Audi", 8888));

// dictionary type | index signature