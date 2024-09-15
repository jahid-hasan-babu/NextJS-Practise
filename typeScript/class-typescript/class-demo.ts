class User {
  //
  userName: string;
  age: number;
  constructor(userName: string, age: number) {
    this.userName = userName;
    this.age = age;
  }

  display(): void {
    console.log(`username : ${this.userName}, age: ${this.age}`);
  }
}

//class object

let user1 = new User("Jahid hasan", 20);
user1.display();

let user2 = new User(" hasan", 21);
user2.display();
