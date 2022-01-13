export class Customer {
    constructor(firstName: string, lastName: string, email: string, phone: string
        , password: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.password = password;
        this.email = email;
    }
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    password: string;
}
