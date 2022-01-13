import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth/auth-guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'loader',
    loadChildren: () => import('./pages/loader/loader.module').then(m => m.LoaderPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'delivery-list',
    loadChildren: () => import('./pages/delivery-list/delivery-list.module').then(m => m.DeliveryListPageModule)
  },
  {
    path: 'execute-order',
    loadChildren: () => import('./pages/execute-order/execute-order.module').then(m => m.ExecuteOrderPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
