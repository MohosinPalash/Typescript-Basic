"use strict";
//Usual Function
function add(num1, num2) {
    return num1 + num2;
}
add(2, 5);
//Arrow Function
const addArrow = (num1, num2) => num1 + num2;
//Call-back Function
const arr = [1, 2, 3];
const newArray = arr.map((element) => element * element);
const person = {
    name: 'Palash',
    balance: 5,
    addBalance(money) {
        return `My new balance is = ${this.balance + money}`;
    }
};
