//OBJECT: Declaration in cumbersome process

const user2: {
    readonly name: string;
    age: number;
    isMarried: boolean;
    wifeName?: String;
} = {
    name: "Palash",
    age: 24,
    isMarried: false,
};

//Literal type: readonly type (That can not be modified.)
/*
const user3: {
    company: "Enosis Solutions";
    name: string;
    age: number;
    isMarried: boolean;
    wifeName?:String;
} = {
    company: "Enosis",              //Invalid: We have to write exact string as we initialized while defining data type.
    name: "Palash",
    age: 24,
    isMarried: false,
};
*/