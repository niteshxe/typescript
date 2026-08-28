// union 

let userId: string | number;
userId = "abc123";  // valid
userId = 98765;     // valid
// userId = true;   // error: boolean not allowed

console.log(userId);

// function example 


function printId(id: string | number): void {
    console.log(id)
}
printId("SDIFPNSD");
printId(234);



// Type Narrowing: Agar aapko union type
//  par specific operation karna hai, 
//  toh pehle type check karna zaroori hai.


function typeNarrowing(ids: string | number): void {
    if (typeof (ids) === "string") {
        console.log(ids.toUpperCase())
    }
    if (typeof (ids) === "number") {
        console.log(ids.toFixed(5))
    }
}
typeNarrowing("dslksdsfkjndsk");
typeNarrowing(234);


// Intersection Types (&)

// Intersection type do ya zyada types ko
//  combine karta hai, yani ek naya type jisme 
//  sabhi types ki properties hon. Syntax: type1
//   & type2

interface Person {
    personName: string;
    personAge: number;
    personDob: string;
}

interface Employee {
    employeeId: string;
    employeeDesignation: string;
}

const companyData: Person & Employee = {
    personName: "nitesh",
    personAge: 21,
    personDob: "22-06-2004",
    employeeId: "20934",
    employeeDesignation: "engineer",
}

console.log(companyData);

// Numeric Enum (default)


enum Directions {
    up, //0
    left,//1
    right,//2
    down//3
}

let moveCharacter: Directions = Directions.up // 0
console.log(moveCharacter)
moveCharacter = Directions.left//1

console.log(moveCharacter)

moveCharacter = Directions.right// 2

console.log(moveCharacter)
moveCharacter = Directions.down// 3

console.log(moveCharacter)


enum Color {
    Red = "RED",
    Green = "GREEN",
    Blue = "BLUE"
}

let favorite: Color = Color.Blue;
console.log(favorite); // "BLUE"


//  Generics

// Generics aapko type-safe reusable 
// components banane dete hain jo different types
//  ke saath kaam kar sake. 
// Isse aap same logic ko multiple types ke 
// liye use kar sakte ho bina any ka sahara liye.


function identity<T>(value: T): T {
    return value;
}
let num = identity<number>(10);   // T = number
let str = identity<string>("Hi"); // T = string



//objects 

// ### Part 1: Fundamental Concepts

// #### 1. Classes & Objects (The Blueprint)
// Sochiye ki ek Class ek blueprint (naksha) hai, aur Object us blueprint se bani hui ek real building hai.
// - Class: Define karti hai ki ek object ke paas kya data (properties) hoga aur wo kya kaam (methods) karega.
// - Object: Class ka ek instance hota hai.

// #### 2. The Constructor
// Constructor ek special method hota hai jo tab call hota hai jab aap new keyword ka use karke object banate hain. Iska main kaam object ko initialize karna hota hai (yani shuruati values dena).

// #### 3. The this Keyword
// this keyword ka matlab hai "ye wala object". Jab aap class ke andar this.name likhte hain, toh aap TypeScript ko bata rahe hain ki "is specific object ki name property ko use karo," na ki kisi global variable ko





class Perso {
    
    constructor(public userName: string,public  userAge: number) {
        this.userName = userName;
        this.userAge = userAge;
    }
    greet(): string {
        return `welcome ${this.userName}`
    }
}

const nitesh = new Perso("nitesh",21);
console.log(nitesh)

console.log(nitesh.greet())



// ### 4. Access Modifiers (Security Guards)
// Ye decide karte hain ki class ki properties ko bahar se access kiya ja sakta hai ya nahi:
// - public (Default): Kahin se bhi access ho sakta hai (Class ke andar aur bahar dono jagah).
// - private: Sirf usi class ke andar access ho sakta hai. Bahar se access karne par error aayega.
// - protected: Sirf usi class aur uski child classes (inheritance) mein access ho sakta hai.


class BottelMaker {
    public name ;
    constructor(name:string){
        this.name = name;
    }
    changing (){
        this.name = "changing"
    }
}

const b1 = new BottelMaker("milton");
//  b1.name = "chilton" // chaange ho gya
//  b1.changing() // chaging method se bhi jo gya
// console.log(b1)



// private


class BottelMaker2 {
    private name ;
    constructor(name:string){
        this.name = name;
    }
    changing (){
        this.name = "changing"
    }
}

class Pri extends BottelMaker2{
    constructor(name:string ){
        super(name)
    }
    // chanage(){
    //     this.name = "oradfjnbsdf" // this.name laal ho gya bc
    // }
} 
const b21 = new BottelMaker2("milton");
//  b21.name = "chilton" // chaange nhi ho raha laal show kr raha h ts compilter
 b21.changing() // chaging method se  jo gya
// console.log(b21)





// protected ( class or subclass )

class BottelMaker3 {
    protected name ;
    constructor(name:string){
        this.name = name;
    }
    changing (){
        this.name = "changing"
    }
}

class F extends BottelMaker3{
   constructor(name:string){
    super(name );
   }
   chagename(){
    this.name = "subclass"
   }
}

// const b31 = new BottelMaker3("milton");
//  b31.name = "chilton" // chaange nhi ho raha laal show kr raha h ts compilter
//  b31.changing() // chaging method se  jo gya
// const sub = new F("mitlon")
// sub.chagename() // subclass ne bhi bdl diya

// console.log(sub)