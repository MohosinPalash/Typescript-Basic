//Usual Function

function add(num1: number, num2: number): number {
    return num1 + num2;
}

add(2, 5)

//Arrow Function

const addArrow = (num1: number, num2: number): number => num1 + num2;

//Call-back Function
const arr = [1, 2, 3]
const newArray = arr.map((element: number) => element * element);

const person: {
    name: string;
    balance: number;
    addBalance(money: number): string;
} = {
    name: 'Palash',
    balance: 5,
    addBalance(money: number) {
        return `My new balance is = ${this.balance + money}`
    }
}