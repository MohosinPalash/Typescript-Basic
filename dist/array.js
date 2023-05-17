"use strict";
//ARRAY
const names = ['Abul', 'Babul', 'Kabul'];
const rollNumbers = [23, 45, 12];
/*
1. If we explicitly declare array, the we can not push any type of data except the declared type of data. For example: we can not push 77 in names array and 'Palash' in rollNumbers Array
but if we declare array implicitly then we can push any type of data.
*/
const anyTypeArray = ['Palash', 180104113, true];
anyTypeArray.push('Algorithm Course'); //valid
//TUPLE
const user = [113, 'Palash'];
