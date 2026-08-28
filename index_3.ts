// ## A. Optional Properties (?)
// Kabhi-kabhi class mein kuch aisi properties
//  hoti hain jo hona zaroori nahi hoti. Unke naam ke aage ? lagaya jata hai


// class User{
//     constructor(public userName:string,
//     public userEmail:string,public userPhoneNumber :string ,
//     public userGender? : string){

//     }
// }

// const kamyaSharma = new User("kamyasharma23","kamyas4harma32@gmail.com","+91000000000"
// ,"F") // yha hamne gender dala h 

// console.log(kamyaSharma)  


// // User {
// //   userName: 'kamyasharma23',
// //   userEmail: 'kamyas4harma32@gmail.com',
// //   userPhoneNumber: '+91000000000',
// //   userGender: 'F'
// // }


// const  adityaSharma = new User("aditya","aditya@gmail.com", "+9100000000")

// console.log(adityaSharma) // yha hamne gender nhi dala or ts compilter  error bhi nhi de rah 


//  B. Parameter Properties (Short-cut)
// Normaly humein constructor mein variable declare karna padta hai aur phir this.x = x likhna padta hai. Parameter properties se hum ye kaam ek line mein kar sakte hain.
// Agar aap constructor ke parameter mein hi public, private, ya protected likh dein, to TypeScript automatically:
// 1. Property declare kar deta hai.
// 2. Use assign (this.x = x) bhi kar deta hai





// class User{
//     constructor(public userName:string,
//     public userEmail:string,public userPhoneNumber :string ,
//     public userGender? : string){
//     }
// }
//  yha hamene this.userName ka use nhi kiya h 



// #### C. Getters and Setters
// Ye methods hote hain jo properties ki tarah behave karte hain.
//   Getter (get): Jab aap kisi 
//   value ko read karte hain. Ye 
//   tab kaam aata hai jab aap value 
//   ko modify karke dikhana chahte
//    hain (e.g., Name ko Capitalize karke dikhana).

//   Setter (set): Jab aap value 
//   assign karte hain. Ye validation 
//   ke liye best hai (e.g., Age set karte 
//   waqt check karna ki age negative to
//    nahi hai)



class ToyFactory{
    constructor(public _toyCompany:string){}

    get toyCompany():string{
        return this._toyCompany;
    }

  set toyCompany(x:string){
         this._toyCompany =  x;
    }
    
}
    
const porsche = new ToyFactory("hotwheels");

console.log(porsche); //ToyFactory { _toyCompany: 'hotwheels' }

console.log(porsche.toyCompany) //hotwheels

porsche.toyCompany = "matchbox"

console.log(porsche.toyCompany) //matchbox chage hogyi value 


// ### D. Static Members
// static keyword ka matlab hai ki wo pro
// perty ya method Class ka hai, na ki Object ka.
//   Aapko object banane 
//   (new ClassName()) ki zaroorat nahi hoti.

//   *Example:* Math.PI ek static 
//   property hai. Aapko new Math()
//    nahi karna padta


class PhoneFactory{
    static phoneOperatingSys :string  = "android";
    static  readonly phoneMinimumPrice : number = 10000; 

}

console.log(PhoneFactory.phoneOperatingSys) //android

PhoneFactory.phoneOperatingSys = "ios";
console.log(PhoneFactory.phoneOperatingSys) //ios

// if i put readonly i cant change for eg

console.log(PhoneFactory.phoneMinimumPrice) //10000


// PhoneFactory.phoneMinimumPrice = 1200; //script.ts(119,14): error TS2540: Cannot assign to 'phoneMinimumPrice' because it is a read-only property.
// console.log(PhoneFactory.phoneMinimumPrice)


// #### E. Abstract Classes
// Abstract class ek "Blueprint" ya "Adha-adhura" design hota hai.
//   Aap abstract class ka object nahi bana sakte (new keyword use nahi kar sakte).

//   Iska maqsad sirf doosri classes ke liye base provide karna hota hai.

//   Isme Abstract Methods hote hain—ye wo methods hain jinme koi code nahi hota, bas ek signature hota hai. Child class ko ye method implement karna hi padta hai.

// 1. Define the abstract base class
abstract class Employee {
  // Regular properties and constructor are allowed
  constructor(public name: string, public id: number) {}

  // Regular method: Shared functionality inherited by all children
  logDetails(): void {
    console.log(`Employee: ${this.name} (ID: ${this.id})`);
  }

  // Abstract method: No body allowed here! Children MUST implement this.
  abstract calculatePay(): number;
}

// 2. Concrete child class extending the abstract class
class FullTimeEmployee extends Employee {
  constructor(name: string, id: number, private salary: number) {
    super(name, id); // Must call parent constructor
  }

  // Implementation of the required abstract method
  calculatePay(): number {
    return this.salary;
  }
}

// --- How to use it ---
// const emp = new Employee("Alex", 101); // ❌ Error: Cannot create an instance of an abstract class.

const alex = new FullTimeEmployee("Alex", 101, 5000);
alex.logDetails(); // Output: Employee: Alex (ID: 101)
console.log(alex.calculatePay()); // Output: 5000


// https://kuiams.github.io/coading-sheet/