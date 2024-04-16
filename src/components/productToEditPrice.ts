import { ProductType } from '../types/ProductType';

export function productToEditPrice(product: ProductType) {
  return `<div class="container p-0">
 <div class="row m-0 p-1">
     <div class="col-8 p-0 d-flex align-items-center">${product.name}</div>
     <div class="col-4 p-0">
     <input
         id="price-${product.id}"
         type="number"
         step=0.01
         value=${product.price.toFixed(2)}
         class="form-control text-end"
         placeholder="R$ 0,00"
         aria-label="R$ 0,00"
         aria-describedby="basic-addon1" />
     </div>
 </div>
 <hr class="m-0" />
</div>`;
}
