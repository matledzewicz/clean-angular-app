import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductListQueryModelComponent } from './components/product-list-query-model/product-list-query-model.component';
import { ProductListComponentModule } from './components/product-list/product-list.component-module';
import { ProductListQueryModelComponentModule } from './components/product-list-query-model/product-list-query-model.component-module';

const routes: Routes = [{ path: 'products', component: ProductListComponent }, { path: 'products-query', component: ProductListQueryModelComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes), ProductListComponentModule, ProductListQueryModelComponentModule],
  exports: [RouterModule],
})
export class AppRoutingModule { }
