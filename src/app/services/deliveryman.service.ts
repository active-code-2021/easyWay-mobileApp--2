import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../classes/order';
@Injectable({
    providedIn: 'root'
})
export class DeliveryManService {

    constructor(private http: HttpClient) { }
    isActive(email: string): Observable<string> {


        return this.http.get<string>(`https://localhost:44339/api/DeliveryMan/` + email) as Observable<string>;
    }

}
