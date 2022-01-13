import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExecuteOrderPageRoutingModule } from './execute-order-routing.module';

import { ExecuteOrderPage } from './execute-order.page';
import { OrderCardComponent } from 'src/app/components/order-card/order-card.component';
import { OrderInProcessComponent } from 'src/app/components/order-in-process/order-in-process.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExecuteOrderPageRoutingModule
  ],
  declarations: [ExecuteOrderPage, OrderCardComponent, OrderInProcessComponent]
})
export class ExecuteOrderPageModule { }
