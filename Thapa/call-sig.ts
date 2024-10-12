type Student = {
    name: string;
    age: number;
    gender?: string;
    greet: (country: string) => string;
};

const student1: Student = {
    name: "Jahid",
    age: 29,
    greet: function (country): string {
        return `My name is ${this.name} and age is ${this.age}. I'm from ${country}`;
    }
};

const introduction = (student: Student): string => {
    const { name, age } = student;
    return `My name is ${name} and age is ${age}`;
};

console.log(introduction(student1));  // Logging the introduction
console.log(student1.greet("Bangladesh"));  // Logging the greeting with country
