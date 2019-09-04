import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './shared/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
     path: 'login',
    loadChildren: './authentication/login/login.module#LoginPageModule'
  },
  {
    path: 'register/:otp',
    loadChildren: './authentication/register/register.module#RegisterPageModule'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule',canActivate: [AuthGuardService] 
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule',canActivate: [AuthGuardService]
  },
  { path: 'delete', loadChildren: './activity/delete/delete.module#DeletePageModule',canActivate: [AuthGuardService] },
  { path: 'add', loadChildren: './activity/add/add.module#AddPageModule',canActivate: [AuthGuardService] },
  { path: 'update/:id', loadChildren: './activity/update/update.module#UpdatePageModule',canActivate: [AuthGuardService] },
  { path: 'product/:item', loadChildren: './activity/product/product.module#ProductPageModule',canActivate: [AuthGuardService] },
  { path: 'generate', loadChildren: './activity/generate/generate-bill.module#GenerateBillPageModule',canActivate: [AuthGuardService]},
  { path: 'invoices', loadChildren: './activity/invoices/invoices.module#InvoicesPageModule',canActivate: [AuthGuardService] },

 
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
