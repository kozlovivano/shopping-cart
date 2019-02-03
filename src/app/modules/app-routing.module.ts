import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../components/home/home.component';
import { AllProductsComponent } from '../components/products/all-products/all-products.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'all-products', component: AllProductsComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
