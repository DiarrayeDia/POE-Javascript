function main(person) {
    let data = Object.entries(person);
    let result = data
        .filter((d) => typeof d[1] !== "function")
        .map((d) => d.join(": "))
        .join(", ");
    return result;

}

module.exports = main;