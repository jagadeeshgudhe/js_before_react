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

----------------------------------------------------------------
// GLOBAL ScOPE: nothing but, a varialbe declared outside of the function.
//               all functions and scripts on a web page can access it.

// example:
// let carName = 'volvo';
// function myFunction(){

// }