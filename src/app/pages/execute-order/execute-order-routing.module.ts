import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderInProcessComponent } from 'src/app/components/order-in-process/order-in-process.component';

import { ExecuteOrderPage } from './execute-order.page';

const routes: Routes = [
  {
    path: '',
    component: ExecuteOrderPage
  }

  // {
  //   path: '/order-in-process',
  //   component: OrderInProcessComponent
  // }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExecuteOrderPageRoutingModule { }
