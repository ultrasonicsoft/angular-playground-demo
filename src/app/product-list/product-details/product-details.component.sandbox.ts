import { sandboxOf } from 'angular-playground';
import { ProductDetailsComponent } from './product-details.component';

export default sandboxOf(ProductDetailsComponent)
  .add('default', {
    template: `<app-product-details></app-product-details>`
  });
