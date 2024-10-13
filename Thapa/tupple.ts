type personInfo =readonly [string, number, boolean];


const person1: personInfo = ["Jahid", 29, true]
const person2: personInfo = ["Hasan", 29, false]
// person1.push(145) you can not push if use readonly

// const person1: personInfo = [25, 29, true] --> did not except

const displayPersonInfo: (person:any) => void  = (person: personInfo): void => {
  const [name, age, hasDriverLicense] = person;
    console.log(`Name ${name} Age: ${age} Driver license: ${hasDriverLicense}`)
}

displayPersonInfo( person1)
displayPersonInfo( person2)
