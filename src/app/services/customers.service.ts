import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../classes/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private http: HttpClient) { }
  getCustomers(): Observable<Customer> {
    let currentCustomer = "612288e394dcef1846121050";
    // https://localhost:44339/Api/Order/GetOrderByDeliveryMan
    return this.http.get<Customer>(`https://localhost:44339/api/Customers/` + currentCustomer) as Observable<Customer>;
  }
}
