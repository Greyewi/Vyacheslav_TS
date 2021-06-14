// type Number
let intNum: number = 123123
const floatNum: number = 0.3234

let str: string = 'Hello! World!'

//console.log(intNum, floatNum, intNum + floatNum, intNum + str)

const isQuery: boolean = true
const isData: boolean = false

//console.log(Number(isQuery) + Number(isData))

// type array
const numberArray: number[] = [1,2,3,4,5,6,7,8]
const matrixArray: number[][] = [[1,2,3,4,5,6,7,8], [1,2,3,4,5,6,7,8]]

const numberGenericArray: Array<number> = [1,2,3,4,5,6,7,8]

const tupleArray: [string, boolean, number, object] = ['', false, 0, {name: "Vasya", age: 22}]

//console.log(numberArray, matrixArray, numberGenericArray, tupleArray)

// multi types
const mixVar: (boolean | number | string) = false

//console.log(typeof mixVar)

enum Keys {
    q,
    w,
    e,
    r,
    t,
    y
}

enum Actions {
    RUN = "RUN!!!",
    HIDE = "HIDE!!!!",
    STAND = "STAND!!!",
    SIT = "SIT!!!"
}

enum State {
    age = 33,
    count = 32,
    STAND,
}


console.log(typeof Keys, Keys[0], Keys.q, Actions, State[33])