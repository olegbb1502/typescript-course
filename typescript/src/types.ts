// Number
const numberVar:number = 1
console.log(numberVar);

// String
const strVar:string = `This is my string with usage Int: ${numberVar}`
console.log(strVar);

// Bool
const boolVar:boolean = true
console.log(boolVar);

// Null
const nullVar:null = null
console.log(nullVar);

// undefined
const undVar:undefined = undefined
console.log(undVar);

// Array of numbers
const arrNumVar:Array<number> = [1,2,3,4,5]
console.log(arrNumVar);

// Array from 1 number
const arrNumVar2:[number] = [1]
console.log(arrNumVar2);


// Array of numbers
const arrNumVar3:number[] = [1,2,3,4]
console.log(arrNumVar3);


// Array from specific types [number, string, boolean, number]
const arrNumVar4:[number, string, boolean, number] = [1, 'string', true, 2]
console.log(arrNumVar4);


// Functions
const func = (par1: string = 'aaa'):string => {
    return 'My param is: '+par1
}
console.log(func);

// Interface
interface PersonInterface {
    name: string;
    age: number;
    email?: string; // Опційне поле
}

let personFromInterface: PersonInterface = {
    name: 'John Doe',
    age: 25,
    email: 'john@example.com'
};
console.log(personFromInterface);

// Type
type PersonType = {
    name: string;
    age: number;
    email?: string; // Опційне поле
};

let personFromType: PersonType = {
    name: 'John Doe',
    age: 25,
    email: 'john@example.com'
};
console.log(personFromType);
