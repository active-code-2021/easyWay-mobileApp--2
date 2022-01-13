export class Customer {
    constructor(firstName: string, lastName: string, email: string, phone: string
        , address: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.address = address;
        this.email = email;
    }
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string
}
