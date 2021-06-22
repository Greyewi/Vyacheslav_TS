// type Number
var intNum = 123123;
var floatNum = 0.3234;
var str = 'Hello! World!';
//console.log(intNum, floatNum, intNum + floatNum, intNum + str)
var isQuery = {};
var isData = false;
//console.log(Number(isQuery) + Number(isData))
// type array
var numberArray = [1, 2, 3, 4, 5, 6, 7, 8];
var matrixArray = [[1, 2, 3, 4, 5, 6, 7, 8], [1, 2, 3, 4, 5, 6, 7, 8]];
var numberGenericArray = [1, 2, 3, 4, 5, 6, 7, 8];
var tupleArray = ['', false, 0, { name: "Vasya", age: 22 }];
//console.log(numberArray, matrixArray, numberGenericArray, tupleArray)
// multi types
var mixVar = false;
//console.log(typeof mixVar)
var Keys;
(function (Keys) {
    Keys[Keys["q"] = 0] = "q";
    Keys[Keys["w"] = 1] = "w";
    Keys[Keys["e"] = 2] = "e";
    Keys[Keys["r"] = 3] = "r";
    Keys[Keys["t"] = 4] = "t";
    Keys[Keys["y"] = 5] = "y";
})(Keys || (Keys = {}));
var Actions;
(function (Actions) {
    Actions["RUN"] = "RUN!!!";
    Actions["HIDE"] = "HIDE!!!!";
    Actions["STAND"] = "STAND!!!";
    Actions["SIT"] = "SIT!!!";
})(Actions || (Actions = {}));
var State;
(function (State) {
    State[State["age"] = 33] = "age";
    State[State["count"] = 32] = "count";
    State[State["STAND"] = 33] = "STAND";
})(State || (State = {}));
console.log(typeof Keys, Keys[0], Keys.q, Actions, State[33]);
var isNoAbsent = undefined;
var isNoAbsentVar = false;
isNoAbsentVar = null;
console.log(isNoAbsent, typeof isNoAbsentVar);
var something;
something = 0;
console.log(isData + something);
