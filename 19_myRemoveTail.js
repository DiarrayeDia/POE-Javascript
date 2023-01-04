function main(array) {
    if (array.length === 0) return [];
    else return array.slice(0, -1);
}
module.exports = main;