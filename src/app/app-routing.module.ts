import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductListComponentModule } from './components/product-list/product-list.component-module';

const routes: Routes = [{ path: 'products', component: ProductListComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes), ProductListComponentModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
