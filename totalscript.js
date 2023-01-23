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



//..................................


// GUVI: Zen Class — Part 2 : Find the culprits and nail them — debugging javascript loops



//........................................................................................................


// Write a code to print the numbers in the array

// Output: 1234567891011



// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var new_string = "";
 
// for (var i = 0; i < 11; i++) {
//  new_string += numsArr[i] 
// }
// console.log(new_string);






//................................................................................................................


// Write a code to print the numbers in the array

// Output: 1,2,3,4,5,6,7,8,9,10,11

// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var new_string = "";
 
// for (var i = 0; i < 10; i++) {
//  new_string += numsArr[i] + ","; 
// }new_string += numsArr[10];
// console.log(new_string);





//..............................................................................................................................


// Write a code to print from last to first with spaces (Make sure there is no space after the last element 1)


// Output: 11 10 9 8 7 6 5 4 3 2 1

// var new_string = "";
// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// for (var i = 10; i >= 0; i-- ) {
//  new_string += numsArr[i] + " ";
// }
// console.log(new_string.trim());



//..............................................................................................................................


// Write a code to replace the array value — If the number is even, replace it with ‘even’.

// Output:[ 1, “even”, 3, “even”, 5, “even”, 7, “even”, 9, “even”, … ]

// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];


// for (var i = 0; i <=10; i++) {
//  if(numsArr[i] %2 == 0 )
//  {
//  numsArr[i] = "even";
//  }
// }
// console.log(numsArr);

//..............................................................................................................................

// Write a code to replace the array value — If the index is even, replace it with ‘even’.


// Output: [ “even”, 2, “even”, 4, “even”, 6, “even”, 8, “even”, 10, … ]

// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// for (var i = 0; i <=10; i++) {
//  if(i%2 == 0 )
//  {
//  numsArr[i] = "even";
//  }
// }
// console.log(numsArr);


//..............................................................................................................................


// Write a code to add all the numbers in the array

// Output: 66

// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var sum=0;
// for (var i = 0; i <=10; i++) {
//  sum += numsArr[i];
// }
// console.log(sum);




//..............................................................................................................................


// Write a code to add the even numbers only
// Output: 30

// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var sum=0;
// for (var i = 0; i <=10; i++) {
//  if(numsArr[i]%2==0)
//     sum += numsArr[i]; 
// }
// console.log(sum);






//..............................................................................................................................

// Write a code to add the even numbers and subract the odd numbers
// Output: 94

// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

// var sum=100;

// for (var i = 0; i <=10; i++) {
//  if(numsArr[i]%2==0)
//  {
//  sum += numsArr[i]
//  } 
//  else
//  {
//  sum -= numsArr[i]
//  }
// }
// console.log(sum);



//..............................................................................................................................


// Write a code to print inner arrays
// Output:

// Array(5) [ 1, 2, 3, 4, 5 ]
// Array(6) [ 6, 7, 8, 9, 10, 11 ]

// var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
// for (var i = 0; i < numsArr.length; i++) {
//  console.log( numsArr[i])
// }



//..............................................................................................................................


// Write a code to print elements in the inner arrays
// Output: 1234567891011

// var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
// var str_all="";
// for (var i = 0; i < numsArr.length; i++) {
//  var inner_array = numsArr[i];
//  for(var j = 0 ; j < inner_array.length;j++ )     // i changed to ----> j
//      str_all +=inner_array[j]
// }
// console.log(str_all);



//..............................................................................................................................


// Write a code to replace the array value — If the index is even, replace it with ‘even’.

// Output: [ [“even”, 2, “even”, 4, “even”], [6, “even”, 8, “even”, 10, …] ]

// var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
// var str_all=0;
// for (var i = 0; i < numsArr.length; i++) {
//  var inner_array = numsArr[i];
//  for(var j = 0 ; j < inner_array.length;j++ )
//       if(j %2 == 0 )
//       {
//          numsArr[i][j] = "even";
//        }
// }
// console.log(numsArr);


//..............................................................................................................................



// Write a code to print elements in the inner arrays in reverse
// Output: 11 10 9 8 7 6 5 4 3 2 1

// var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
// var str_all= "";
// for (var i = numsArr.length-1; i>=0; i--) {
//  var inner_array = numsArr[i];
//  for(var j = inner_array.length-1; j >=0 ;j-- )
//      str_all +=inner_array[j]
// }
// console.log(str_all);





//..............................................................................................................................


// Write a code to add elements in the inner arrays based on odd or even values
// Output:
// 36
// 30

// var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
// var sum_odd=0;
// var sum_even=0;
// for (var i = 0; i < numsArr.length; i++) {
//  var inner_array = numsArr[i];
//  for(var j = 0 ; j < inner_array.length;j++ ){
//  if(inner_array[j]%2!=0)
//  {
//  sum_odd += inner_array[j];
//  }
//  else
//  {
//  sum_even += inner_array[j];
//  }
 
// }
// }
// console.log(sum_odd);
// console.log(sum_even);


//..............................................................

// GUVI: Zen Class — Part 3: Find the culprits and nail them — debugging javascript




//------------------------------------------------------------------------------------------------
// Fix the code to get the largest of three.

// Code:



// aa = (f,s,t) => {                // f,s,t declared

//  if(f>s &&f>t){
//  console.log(f)}
//  else if(s>f && s>t){
//  console.log(s)}
//  else{
//  console.log(t)}
// }
// aa(1,2,3);


// — — — — — — — — — — — — — — — — — — — — — — — — —


// Fix the code to Sum of the digits present in the number

// Code:

// let n = 123;
// console.log(add(n));
// function add(n)
// {
// let sum = 0;
// n = String(n);                               // Number to String to use length property
// for(var i=0;i<n.length;i++){
//  sum+=Number(n[i]);                          // String to Number to Count sum
//  }
//  return sum;
// }
 


// — — — — — — — — — — — — — — — — — — — — — — — — —

// Fix the code to Sum of all numbers using IIFE function

// Code:

// const arr = [9,8,5,6,4,3,2,1];
// (function() {
//  let sum = 0;
//  for (var i = 0; i < arr.length; i++){    // debug: i<arr.length
//      sum += arr[i];
//  }
//   console.log(sum);
//  return sum;
// })();




// — — — — — — — — — — — — — — — — — — — — — — — — —

// Fix the code to gen Title caps.

// Code:

// var arr = ["guvi", "geek", "zen", "fullstack"];
// var ano = function(arro) {
//  for (var i = 0; i <= arro.length; i++) {
//  console.log(arro[i][0].toUpperCase() + arro[i].substr(1));
//  }
// }
// ano(arr);                        // Array passed as argument





// — — — — — — — — — — — — — — — — — — — — — — — — —







// Fix the code to return the Prime numbers

// Code:

// const newArray=[1,3,2,5,10];
// const myPrime=newArray.filter(num=>{
//     for(let i=2;i<num;i++){
//     if(num%i===0)
//     {
//     return false;                    // true changed to false
//     }
//     return true;
//     }
//     return num===2;
   
//    });
//    console.log(myPrime);




// — — — — — — — — — — — — — — — — — — — — — — — — —

// Fix the code to sum the number in that array

// Code:

// const num = [10, 20, 30, 40,50,60,70,80,90,100]   // const cannot be redeclared/reassign
// let sum = (a, b) =>                               // let can be reassigned
//  a + b
//  sum = num.reduce(sum);
// console.log(sum);




// — — — — — — — — — — — — — — — — — — — — — — — — —






// Fix the code to rotate an array by k times and return rotated array using IIFE function

// Code:

// var arr = [1, 2, 3, 6, 8, 6, 1, 9, 10, 12, 13];
// var k = 3;
// k = arr.length % k;

// (function() {
                                                         // arr is defined
//  let out = arr.slice(k + 1, arr.length);
//  var count = out.length;
//  for (var i = 0; i < k + 1; i++) {
//  out[count] = arr[i];
//  count += 1;
//  }
//  console.log(out);})();


// — — — — — — — — — — — — — — — — — — — — — — — — —

// Fix the code to gen Title caps.

// Code:


// var arr = ["guvi", "geek", "zen", "fullstack"];
// (function() {
//  for (var i = 0; i <arr.length; i++) {                      
//  console.log(arr[i][0].toUpperCase() + arr[i].substr(1));    // arr[i][0]
//  }
// })();








// — — — — — — — — — — — — — — — — — — — — — — — — —

// print all odd numbers in an array using IIFE function

// Code:

// var arr = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];
// (function() {
//  for (var i = 0; i < arr.length; i++) {
//  if (arr[i] % 2 !== 0) {                        // for odd number !===
//  console.log(arr[i]);
//  }}
// })();




// — — — — — — — — — — — — — — — — — — — — — — — — —

// Fix the code to reverse.

// Code:

// (function(str){
//      str1 = str.split("").reverse().join("");   
//     console.log(str1); 
//    })("abcd")
   



// — — — — — — — — — — — — — — — — — — — — — — — — —



// Fix the code to remove duplicates.

// Code:

// var res = function(arr){
//     newArr = [];
//  for(var i=0; i < arr.length; i++){
 
//  if(newArr.indexOf(arr[i]) == -1) {
//  newArr.push(arr[i]);
//  } }
//  console.log(newArr)
// }


// res(["guvi","geek","guvi","duplicate","geeK"])








// — — — — — — — — — — — — — — — — — — — — — — — — —

// Fix the code to give the below output:

// Expected Output:

// [
// {firstName: “Vasanth”, lastName: “Raja”, age: 24, role: “JSWizard”},
// {firstName: “Sri”, lastName: “Devi”, age: 28, role: “Coder”}
// ]

// Code:


// Fix the code to give the below output:

// Expected Output:

// [
// {firstName: “Vasanth”, lastName: “Raja”, age: 24, role: “JSWizard”},
// {firstName: “Sri”, lastName: “Devi”, age: 28, role: “Coder”}
// ]

// Code:

// var array =[[["firstname","vasanth"],["lastname","Raje"],["age",24],["role","JSWizard"]],[["firstname","Sri"],["lastname","Devi"],["age",28],["role", "Coder"]]];
// var final=[]
// while(array.length!=0)
// {
//  var outer_remove = array.shift();
//  let new_object = {};                                 // FIXED
//  while(outer_remove.length!=0)
//  {
//  var inner_remove = outer_remove.shift()  
//  var key = inner_remove[0]
//  var value =inner_remove[1]
//  new_object[key]=value
//  }
//  final.push(new_object)

// }
//  console.log(final);


// — — — — — — — — — — — — — — — — — — — — — — — — —

// Fix the code to give the below output:

// Sum of odd numbers in an array

// Code:






// var as=[12,34,5,6,2,56,6,2,1];
// var s=as.reduce(function(a,c){
//  if(c%2!=0)
//  {
//   return a+c;
//  }
//  return a;},0);   // initialishing a=0;
// console.log(s);






// — — — — — — — — — — — — — — — — — — — — — — — — —

// Fix the code to give the below output:

// Swap the odd and even digits

// Code:

// aa = data=>{
//     var a = data;
//      var l="";
//    for(i=0;i<a.length-1;i++){
//     var s=a[i+1]
//     var b=a[i]
//     l+=s
//     l+=b
//     i=i+1
//    }
//    if((a.length%2)!=0){
//     l+=a[a.length-1]
//    }
//    console.log(l);
//    }
//    aa("1234");