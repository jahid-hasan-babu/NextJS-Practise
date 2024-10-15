// function  logAndReturn<Type>(value:Type):Type{
//     return value;
// }

function  logAndReturn<T>(value:T):T{
    return value;
}

const numberResult :number = logAndReturn<number>(20)
const stringResult :string = logAndReturn<string>("Jahid")

console.log(numberResult);
console.log(stringResult);

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add<T extends number | string>(a: T, b: T): T {
    return a + b;
}
