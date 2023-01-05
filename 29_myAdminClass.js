const User = require("./28_myUserClass");

class Admin extends User {
    constructor(user, role) {
        super(user.surname, user.name, user.age);
        this.role = role;
    }   
    presentation() {
        return "Je m'appelle " + this.surname + " " + this.name + ", j'ai " + this.age + " ans. Et je suis " + this.role
    }
}
module.exports = Admin;