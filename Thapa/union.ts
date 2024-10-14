const inputValue: (value: string | number | boolean) => void = (value: string | number | boolean): void =>{

}

//union
const userInput = (value: string | number): string | number => {
    if (typeof value === "number") {
        return value * 2;
    } else if (typeof value === "string") {
        return value.toUpperCase();
    }
    throw new Error('Invalid input data');
}


console.log(userInput(10));
console.log(userInput("subscribe"));

//intersection

type Person = {
    name: string;
    age: number
}

type Employee = {
    emp_id: number;
    department: string
}

type EmployeeDetails = Person & Employee;
const employee:EmployeeDetails = {
    name: "Jahid",
    age: 20,
    emp_id: 1545,
    department: "Frontend Developer"
}



