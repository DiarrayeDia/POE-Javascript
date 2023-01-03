function main(age) {
    age_str = parseInt(age)
    if (age_str >= 18) {
        return "Majeur";
    } else {
        return "Mineur";
    }
}
module.exports = main;