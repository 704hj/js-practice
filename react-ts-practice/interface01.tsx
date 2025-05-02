import React from "react";

const person = { name: 'Capt', age: 28 };

function logAge(obj: { age: number }) {
    console.log(obj.age); //28
}
logAge(person);//28

interface personAge{
    age : number;
}

function logAge1(obj: personAge){
    console.log(obj.age);
}
let person1 = { name: 'Capt', age: 28};
logAge1(person);