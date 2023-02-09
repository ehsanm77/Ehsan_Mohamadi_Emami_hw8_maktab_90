const counterMaker = () => {
    let count = 0;
    return increment => {
        count += typeof increment === "number" ? increment : 0;
        return count;
    };
};
const counter = counterMaker();
console.log(counter()); // 0
console.log(counter()); // 0
console.log(counter(1)); // 1
console.log(counter()); // 1
console.log(counter(3)); // 4
console.log(counter(7)); // 11
console.log(counter(-5)); // 6

