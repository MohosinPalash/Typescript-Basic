const course: String = 'Welcome to the world of Typescript Palash!'
console.log(course)



/*
Typescript:
1. Datatype is strictly maintained. For example: number type value can not be initialized in string or any other type.
2. Built-in methods are strictly suggested in run-time. For example: .charAt() method only be suggested in string type variable, so this method won't be shown for any other data type.
3. Define the data type implicitly. For example: If a declare a variable like let num = 123, typescript will automatically define it as a number datatype. 
    Another approach let num: number = 123
4. WARNING: we will always declare variable by mentioning data type.
*/

//Point-1:
let num: number = 123
num = 12345         //Valid
//num = 'Hello'     //Invalid

//Point-2:
let str = 'Welcome to Typescript course'
str.charAt(3)       //valid
//str.toPrecision   //Invalid

//Point-3:
let newNum = 123                //Implicit Declaration
let anotherNum: number = 234    //Explicit Declaration
//newNum = 'Hello'   //valid

//Point-4: SO don't declare any-type data [WARNING]
let subject;
subject = 'Algorithm'
subject = true
subject = 123

//Primitive Types: String, number, boolean, null, undefined