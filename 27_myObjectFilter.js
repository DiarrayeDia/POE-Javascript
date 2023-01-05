function main(array)  {
    let majeur = array.filter(obj => obj.age >= 18);
    return majeur.map(obj => obj.surname + " "  + obj.name);
}
module.exports = main;