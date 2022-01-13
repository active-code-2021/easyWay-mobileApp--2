import { Component, Input, OnInit } from '@angular/core';
import { Order } from 'src/app/classes/order';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-order-in-process',
  templateUrl: './order-in-process.component.html',
  styleUrls: ['./order-in-process.component.scss'],
})
export class OrderInProcessComponent implements OnInit {

  @Input() order: Order;
  orderService: OrdersService;

  constructor() { }

  ngOnInit() { }

}
