import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { Observable, map } from 'rxjs';
import { ProductModel } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { ProductQueryModel } from './product.query-model';

@Component({
  selector: 'app-product-list-query-model',
  styleUrls: ['./product-list-query-model.component.scss'],
  templateUrl: './product-list-query-model.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListQueryModelComponent {
  readonly products$: Observable<ProductQueryModel[]> = this._productService
    .getAll()
    .pipe(
      map((products) => {
        return products.map(
          (product) => new ProductQueryModel(product.title, product.price)
        );
      })
    );

  constructor(private _productService: ProductService) {}
}
