export class Contact {
    firstname = '';
    lastname = '';
    email = '';
    conected = false

    constructor(firstname, lastname, email, conected){
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.conected = conected;
    }
}