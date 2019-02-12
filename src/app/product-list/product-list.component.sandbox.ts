import { sandboxOf } from 'angular-playground';
import { ProductListComponent } from './product-list.component';

export default sandboxOf(ProductListComponent)
  .add('default', {
    template: `<app-product-list></app-product-list>`
  });
