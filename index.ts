
// basic types


// Numbers

let userAge: number = 21;
console.log(userAge);

// string 

let userName: string = "nitesh";
console.log(userName);


// BOOLEAN 

let isAdult: boolean = true;
let isAlcoholic: boolean = false;
console.log(isAdult, isAlcoholic);


// any ( boolean , number , string );

let many: any = "nitesh ";
console.log(many);
many = 21;
console.log(many);
many = true;
console.log(many);



// functions 


// regular fn 

function double(numb: number): number {
    return numb * 2;
}
console.log(double(5)); // 10

// fat arro fn 

const multiplay = (numb1: number, numb2: number): number => numb1 * numb2;

console.log(multiplay(5, 3))  // 15


// default parameter

function returnGreeting(user: string = "user"): string {
    return `good morning ${user}`
}

console.log(returnGreeting("nitesh")); // good morning nitesh


//void 

function printGreeting(user: string = "user"): void {
    console.log(`good morning ${user}`);
}

printGreeting(userName)

// void means a function completes but returns no useful value, 
// while never means a function can never successfully finish executing



// function neverexp():never{
//     while(true){}
// }

// neverexp()


// array 


const numArr: number[] = [1, 2, 3, 5, 6];

console.log(numArr)

const arrList: string[] = [];

arrList.push("eggs");
arrList.push("banana");

console.log(arrList);

const numList: number[] = [];

for (let i: number = 1; i < 5; i++) {
    numList.push(i);
}
console.log(numList)

// alternate syntax

const nameArr: Array<string> = [];
const numberArr: Array<number> = [];

for (let i: number = 1; i <= 5; i++) {
    numberArr.push(50 + i);
}
console.log(numberArr);

nameArr.push("anish");
nameArr.push("nitesh");
nameArr.push("danish");
console.log(nameArr);


// multidimension arrays
const singleDi: number[] = [1, 2, 3, 4, 5];
const multiDi: number[][] = [[1, 2, 3, 4, 5]];
const triple: number[][][] = [[[1, 2, 3, 4, 5]]];

console.log(singleDi);
console.log(multiDi);
console.log(triple);



// objects 
// type variableName (annotations/types) = {property:value}

// -------------------------
// Define a person object

const person: { userName: string; userAge: number } = {
    userName,
    userAge,
}
console.log(person.userAge, person.userName)


// -------------------------
// Using objects as function return value

function candyFactory(): { candyName: string; candyFlavor: string; dateOfProduction: string; } {
    return {
        candyName: "kacha aam",
        candyFlavor: "like kacha aam",
        dateOfProduction: "26-Aug-2026",
    }
}


// printing object

printCandy(candyFactory());
function printCandy(candy: { candyName: string; candyFlavor: string; dateOfProduction: string; }) {

    console.log(candy.candyName);
    console.log(candy.candyFlavor);
    console.log(candy.dateOfProduction);
}


// type alias (type) (interface specially for objects)

interface Candy  {
    candyName: string;
    candyFlavor: string;
    dateOfProduction: string;
    dateOfExpire: string;
    factoryLocation: string;
    readyToEat: boolean
}


const kachaaAmm: Candy = {
    candyName: "kacha amm",
    candyFlavor: "like kachaa aam",
    dateOfProduction: "23/11/2020",
    dateOfExpire: "23/12/2025",
    factoryLocation: "mohali sec 23",
    readyToEat: true
}

console.log(kachaaAmm);
printKachaAmm(kachaaAmm);
function printKachaAmm({ candyName,
    candyFlavor,
    dateOfProduction,
    dateOfExpire,
    factoryLocation,
    readyToEat }:Candy): void {
    console.log(
        candyName,
        candyFlavor,
        dateOfProduction,
        dateOfExpire,
        factoryLocation,
        readyToEat,
    )
}




//  TUPLE = FIXED NUMBER OF VALUES (you can not push /splice)

let tuple  : readonly  [string,number,boolean] = ["nitesh",21,true]

console.log(tuple);



