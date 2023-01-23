//TASK-06


//Part 1 find the culprit

// Solution: Fix Html


// <!DOCTYPE html>
// <html>
// <body>
//  <script>
//  alert( "I’m JavaScript!");   //  single colon to double colon changed
//  </script>
//  Whats the error in this ?
// </body>
// </html>


//--------------------------------------------------------------------------------------------

//Find the culprit and invoke the alert

//fix.html

// <!DOCTYPE html>
// <html>
// <body>
//  <script src="script1.js"></script>
// </body>
// </html>


// alert("I’m invoked!");

//-------------------------------------------------------------------------------------------------

// Explain the below how it works

// explain.html

// <!DOCTYPE html>
// <html>
// <body>
//  <script src=”script.js”></script>
// </body>
// </html>


// alert("I'm JavaScript!");
// alert('Hello') //  same output without colon             
// alert(`Wor                              //
//  ld`)
//Template literals are literals delimited with backtick (`) characters, allowing for multi-line strings
// alert(3 +
// 1
// + 2); // this is multiple line code and its working yes diplays same as alert(3+1+2)


                              //----------------------------------------------------------------------------------------------------------------
//Fix the below to alert Guvi geek

// let admin=9, fname=10.5; 
// fname = "Guvi";
// lname = "geek"
// admin = fname+" "+lname;   // a space addded between fname and lname
// alert( admin ) // "Guvi geek"


//----------------------------------------------------------------------------------------------------------------------------------


// let fname=10.5; 
// fname = "Guvi";
// lname = "geek"
// let name = fname+lname;
// alert( `hello ${name}` );      // back tick 


//--------------------------------------------------------------


// Fix the below to alert sum of two numbers



// let a = Number(prompt("First number?"));  // changed to Number datatype
// let b = Number(prompt("Second number?")); // changed to Number datatype
// alert(a + b);


// //........................................................................................

// Explain Why the Code is blasted and how to diffuse it and get “Diffused”.



// var a = "2" > Number("12");   // either 2 or 12 to be chenged to datatype Number
// //Don't touch below this
// if (a) {
//   console.log("Code is Blasted")
// }
// else
// {
//   console.log("Diffused") 
// }

//When comparing a string with a number, JavaScript will convert the string to a number when doing the comparison
//When comparing two strings, "2" will be greater than "12", because (alphabetically) 1 is less than 2.


//.........................................................................................................

// How to get the success in console.


// let a = Number(prompt("Enter a number?"));
// //Don't modify any code below this
// if (a) {
//  console.log( 'OMG it works for any number inc 0' );
// }
// else
// {
//  console.log( "Success" );
// }

//...............................................................................................................

//How to get the correct score in console.


// let value = Number(prompt('How many runs you scored in this ball'));
// if (value === 4) {
//       console.log("You hit a Four");
// } else if (value === 6) {
//       console.log("You hit a Six");
// } else {
//       console.log("I couldn't figure out");
// }


//..........................................................................................................................

// Fix the code to welcome the Employee

// let login = 'Employee';
// let message = 
// (login == 'Employee') 
// ?"Greetings"
// :(login == 'Director') 
// ? 'Greetings' 
// :(login == '') 
// ? "No login" 
// :" ";
// console.log(message);

//...........................................................................................................................

// You cant change the value of the msg


// let message;
// if (2 || !null || !undefined )
// {
//   message = "welcome boss";
// }
// else
// {
//   message = "Go away";
// }
//   console.log(message);

 // undefined and null are treated as false values
 // let messsage should not be redeclared

 //...................................................................................................


//  Fix the code to welcome the boss


// let message;
// let lock = 0;                 // 0 ----> False


// //Dont change any code below this 
// if (null || lock || undefined )
// {
//   message = "Go away";
// }
// else
// {
//  message = "welcome";
// }
//   console.log(message);



//....................................................................................

// Fix the code to welcome the boss

// let message;
// let lock = 0;


// //Dont change any code below this
// if (lock && " " || undefined )
// {
//   message = "Go away";
// }
// else
// {
//  message = "welcome";
// }
// console.log(message);


//.......................................................................................................


// Change the code to print

// 3

// 2

// 1



//You can change only 2 characters


// let i = 3;
// while (i) {
//   console.log( i-- );            // pre decrement changed to post decrement
// }



//........................................................................................



// Change the code to print 1 to 10 in 4 lines



// let num = 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)

// while(num<=10)
// console.log(num++);



// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

// Change the code to print even numbers



// //You are allowed to modify only one character  // num+=1 changed to num+=2



// for (let num = 2; num <= 20; num += 2) {               
//   console.log(num)
// }






// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

// Change the code to print all the gifts



// let gifts = ["teddy bear", "drone", "doll"];
// for (let i = 0; i < 3; i++) {
//   console.log(`Wrapped ${gifts[i]} and added a bow!`);   // back tick
// }






// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

// Fix the code to disarm the bomb.


// let countdown = 100;
// while (countdown > 0) {
  
//   if(countdown == 0)
//   {

//    console.log("bomb triggered");
//   }
//   countdown--;  // bomb disarmed by moving countdown-- to bottom of loop;
// }






// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

// Whats the msg printed and why?

// var lemein = "0";
// var lemeout = 0;
// var msg = "";
// if (lemein) {
//  msg += "hi";
//  }
// if (lemeout) {
//  msg += 'Hello';
// }
// console.log(msg);


// output: hi

// if(string) is true therefore msg printed is hi

//'...........................................................................................................


// Whats the msg printed and why? Guess you answer before running it.

// var lemein = “0”;
// var lemeout = 0;
// var msg = “”;
// if (lemein) {
//  msg += “hi”;
//  }
// if (lemeout) {
//  msg += ‘Hello’;
// }
// console.log(msg);