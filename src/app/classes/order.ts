
export class Order {
    constructor(firstName: string, lastName: string, mail: string, phone: string
        , orderId: number, addressLat: number, addressLon: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.orderId = orderId;
        this.mail = mail;
        this.addressLat = addressLat;
        this.addressLon = addressLon;

    }
    firstName: string;
    lastName: string;
    mail: string;
    phone: string;
    orderId: number;
    addressLat: number;
    addressLon: number;
}
