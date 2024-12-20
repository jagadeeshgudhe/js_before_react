// Functions - A section of reusable code , 
//             declare code once , use it whenever you want
//         calll the function to execute that code



// function happyBirthday(username,age){
//     console.log("happy birthafy to you");
//     console.log("happy birthafy to you");
//     console.log(`happy birthafy to you ${username}`);
//     console.log(`you are ${age}`);
    
// }
// happyBirthday("jagadeesh",25);
// happyBirthday("harish",22);



//            SCOPE

// SCOPE-3 Types, block, functional,global

// block-before es6, js have only global and function scope.
//       es6 intoduced 2 imp key words those are let and const
//       these two are povided that is block scope and

// ** variables declared only inside of '{}' block, if outside it cant be accessed. **
// example: {
//     let x=2;
// }
// //x cant be used here 

// Variables declared with the var keyword can NOT have block scope.
// Variables declared inside a { } block can be accessed from outside the block.
// Example
// {
//   var x = 2;
// }
// x CAN be used here
//------------------------------------------


// Local Scope-function scope, nothung but inside of the function
// Variables declared within a JavaScript function, are LOCAL to the function:
// Local variables have Function Scope:
// They can only be accessed from within the function.

// example:
// function myFunction(){
//     let carName='volvo';
// }

//----------------------------------------------------------------
// GLOBAL ScOPE: nothing but, a varialbe declared outside of the function.
//               all functions and scripts on a web page can access it.

// example:
// let carName = 'volvo';
// function myFunction(){

// }


// ----------------------------------------------------------------
// ----------------------------------------------------------------

// HOISTING: Defaut behaviour of javascript of moving declarations to the top level,
//           In js the a variable can be declared after it has been used, or a variable can be used before it has been declared

// example:
// x=5;
// elem=document.getElementById("demo");
// elem.innerHTML=x;
// var x;

//   or

// var x;
// x=5;
// elem.getElementById("demo");
// elem.innerHTML=x;

// for LET AND CONST keywords 
// for let if declare a variable it throws a refernce error and for const it throws a syntax error




// ES6 Features:
//classes, Arrow fnctions, Variables, array methods (map method), destructuring, modules, terenary operator, spread operator..

//CLASSES-Type of function, instaed of using function keword we uses class, and the properties assigned into the constructor method().

//example:

// class Car{

// constructor(name){
//     this.brand = name;
// }
// }
// const mycar=new Car("Ford")




//ARROW Function- ALLOW TO WRITE Shorter function syntax
//With a regular function, this represents the object that called the function
//With an arrow function, this represents the Header object no matter who called the function


// example:

// hello=()=>{
//     return "hello world";
// }

// if the function have only one statement and return the value, an remove the brajerts and return keyword arguments
// <p id="demo"></p>
// hello= () => "helloworld ";
// document.getElementById("demo").innerHTML()=hello();

//with parenthesis
// hello=(val)=>"hello" +val;
// document.getElementById("demo").innerHTML=hello("world")


//ARRAY METHODS
//IN react map(); is mainly used, y=the main usage of map () is run a function on each item in the array and result is return a new array, and also used for creating in list view

// example:
// import React from "react";

// function NameList() {
//   const names = ["Alice", "Bob", "Charlie", "David", "Eve"];

//   return (
//     <div>
//       <h2>Name List:</h2>
//       <ul>
//         {names.map((name, index) => (
//           <li key={index}>{name}</li> // Dynamically rendering list items
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default NameList;
