function main( num, pow) {
    if (pow === 0) {
        return 1;
    } 
    return num * main(num, pow-1)
}

module.exports = main;