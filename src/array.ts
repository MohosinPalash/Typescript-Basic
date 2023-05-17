//ARRAY

const names: string[] = ['Abul', 'Babul', 'Kabul'];
const rollNumbers: number[] = [23, 45, 12];

/*
1. If we explicitly declare array, the we can not push any type of data except the declared type of data. For example: we can not push 77 in names array and 'Palash' in rollNumbers Array
but if we declare array implicitly then we can push any type of data.
*/

const anyTypeArray = ['Palash', 180104113, true]
anyTypeArray.push('Algorithm Course')               //valid


//TUPLE

const user: [number, string] = [113, 'Palash']