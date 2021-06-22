function printText(text) {
    console.log(text);
}
printText("Hello!");
function getText(value, text) {
    return Number(text);
}
console.log(getText("333", 43));
function getError(err) {
    throw new Error(err);
}
var id = "dsaa-sdad-2342-asda";
console.log(id);
var man = {
    id: id,
    height: 180,
    weight: 80,
    name: "Josh",
    surname: "Vatson",
    gender: "neutral",
    setData: function (height, weight, name, surname) {
        this.height = height;
        this.weight = weight;
        this.name = name;
        this.surname = surname;
    },
    family: {
        son: {
            id: id,
            height: 180,
            weight: 80,
            name: "Josh",
            surname: "Vatson"
        }
    }
};
man.setData(160, 40, "Vasya", "Petrov");
console.log(man);
var boxStyle = {
    margin: '4px',
    padding: '5px',
    textDecoration: 'underline'
};
function getSelectors(property, value) {
    if (property && value) {
        boxStyle[property] = value;
        return boxStyle;
    }
    else if (property && !value) {
        return boxStyle[property];
    }
    else {
        return boxStyle;
    }
}
// console.log(getSelectors())
// console.log(getSelectors('color', 'blue'))
// console.log(getSelectors('color'))
var genArray = ["hello", "1"];
function arrReverse(array) {
    return array.reverse();
}
function arrJoin(array, modify) {
    return array.join(modify);
}
var car = {
    cost: 33,
    price: 44,
    weight: 1,
    height: 4
};
console.log(car);
