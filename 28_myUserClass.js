class User {
    constructor(surname, name, age) {
        this.surname = surname;
        this.name = name;
        this.age = age;
    }

    presentation() {
        return "Je m'appelle " + this.surname + " " + this.name + " et j'ai " + this.age + " ans"
    }
}

module.exports = User;