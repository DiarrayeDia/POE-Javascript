class User {
    constructor(firstname, name, age) {
        this.firstname = firstname;
        this.name = name;
        this.age = age;
    }

    presentation() {
        return "Je m'appelle " + this.firstname + " " + this.name + " et j'ai " + this.age + " ans"
    }
}

module.exports = User;