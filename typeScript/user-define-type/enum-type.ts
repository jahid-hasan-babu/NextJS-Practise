// enum --> store constants, duplicate value is not allowed here
//enum types: numeric , string, hetergenous

// numeric enum
enum RequestType {
  ReadData = 1,
  SaveData = 3,
  DeleteData,
}

// console.log(RequestType);
console.log(RequestType.SaveData);
console.log(RequestType["ReadData"]);

// string enum

enum RequestType2 {
  readData = "Read_Data",
  saveData = "Save_Data",
}

console.log(RequestType2.saveData);
console.log(RequestType2["saveData"]);
//hetergenous enum
enum RequestType3 {
  readData = "Read_Data",
  saveData = "Save_Data",
  id = 101,
}

console.log(RequestType3.id);
