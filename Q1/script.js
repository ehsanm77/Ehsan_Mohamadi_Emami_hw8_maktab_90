// With bind ==>

let obj = {};
function setterGenerator(key) {
    return function (value) {
        this[key] = value;
        return console.log(obj);
    }.bind(obj)
}
const nameSetter = setterGenerator("name")
nameSetter("EHSAN");


// With call ==>

// const user = {};
// function setterGenerator(key) {
//     return function (value) {
//         this[key] = value;
//         return this;
//     };
// }
// const nameSetter = setterGenerator("name");
// const result = nameSetter.call(user, "EHSAN");
// console.log(result);


// With apply ==>

// const user = {};
// function setterGenerator(key) {
//     return function (value) {
//         this[key] = value;
//         return this;
//     };
// }
// const nameSetter = setterGenerator("name");
// const result = nameSetter.apply(user, ["EHSAN"]);
// console.log(result);






















