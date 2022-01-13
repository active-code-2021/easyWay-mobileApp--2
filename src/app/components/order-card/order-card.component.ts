import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.scss'],
})
export class OrderCardComponent implements OnInit {

  @Input() order;
  orderService: OrdersService;
  constructor(private router: Router) { }

  ngOnInit() { }
  displayCustomerDetails() {

    this.router.navigate(['execute-order'], { queryParams: { orderId: this.order.id } })

  }

}
