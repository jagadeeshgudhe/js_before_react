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
<<<<<<< HEAD

// constructor(name){
//     this.brand = name;
// }
// }
// const mycar=new Car("Ford")



//ARROW Function- ALLOW TO WRITE Shorter function syntax
example:
hello=()=>{
    return "hello world";
}
=======
// constructor(name){
//     this.brand = name;
// }
// }
// const mycar=new Car("Ford")
// document.write(mycar.brand)


//METHODS
  
// class Car{
//     constructor(name){
//         this.brand=name;

//     }
//     present(){
//         return 'I have a '+this.brand;
//     }
// }
// const mycar=new Car("ford")
// mycar.present();

//call the method by referring to the object's method name followed by parentheses (parameters would go inside the parentheses).


//INHERITANCE
//in javascript To create a class inheritance, use the extends keyword.

// class car{
//     constructor(name){
//         this.brand = name;
//     }

// present(){
//     return 'I have a '+this.brand
    
//     }
// }

// class Model extends Car {
//     constructor(name,mod){
//         super(name);   //super keyword refers to parent class, By calling the super() method in the constructor method, we call the parent's constructor method and get access to the parent's properties and methods.
//         this.modal=mod;
//     }
//     show(){
//         return this.present()+', it is a'+this.modal
//     }
// }
// const mycar=new Model("ford", "mustang");
// mycar.show();


>>>>>>> cc837fd77eb67c528d7dedb188880fc5ed44ca66
