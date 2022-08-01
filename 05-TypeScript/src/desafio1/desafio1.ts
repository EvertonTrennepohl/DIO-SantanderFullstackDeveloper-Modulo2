// Resposta 1
interface IEmployee {
    code: number,
    name: string
};

let employeeObj: IEmployee = {
    code: 20,
    name: "Carlos"
};

let employeeObj2 = {} as IEmployee;
employeeObj2.code = 21;
employeeObj2.name = "Ana";

// Resposta 2
let employee1 = {
    code: 22,
    name: 'Rafael'
};

// Resposta 3
let employee2: {code: number, name: string} = {
    code: 23,
    name: 'Rodrigo'
};