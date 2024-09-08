// enum --> store constants, duplicate value is not allowed here
//enum types: numeric , string, hetergenous
// numeric enum
var RequestType;
(function (RequestType) {
    RequestType[RequestType["ReadData"] = 1] = "ReadData";
    RequestType[RequestType["SaveData"] = 3] = "SaveData";
    RequestType[RequestType["DeleteData"] = 4] = "DeleteData";
})(RequestType || (RequestType = {}));
// console.log(RequestType);
console.log(RequestType.SaveData);
console.log(RequestType["ReadData"]);
// string enum
var RequestType2;
(function (RequestType2) {
    RequestType2["readData"] = "Read_Data";
    RequestType2["saveData"] = "Save_Data";
})(RequestType2 || (RequestType2 = {}));
console.log(RequestType2.saveData);
console.log(RequestType2["saveData"]);
//hetergenous enum
var RequestType3;
(function (RequestType3) {
    RequestType3["readData"] = "Read_Data";
    RequestType3["saveData"] = "Save_Data";
    RequestType3[RequestType3["id"] = 101] = "id";
})(RequestType3 || (RequestType3 = {}));
console.log(RequestType3.id);
