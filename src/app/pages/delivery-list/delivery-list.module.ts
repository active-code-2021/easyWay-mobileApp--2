import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeliveryListPageRoutingModule } from './delivery-list-routing.module';

import { DeliveryListPage } from './delivery-list.page';
import { OrderCardComponent } from 'src/app/components/order-card/order-card.component';
import { OrderInProcessComponent } from 'src/app/components/order-in-process/order-in-process.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeliveryListPageRoutingModule
  ],
  declarations: [DeliveryListPage, OrderCardComponent, OrderInProcessComponent]
})
export class DeliveryListPageModule { }
