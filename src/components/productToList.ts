import { ItemToOrderType } from '../types/ItemToOrderType';

export function productToList(product: ItemToOrderType) {
  return `<div class="container p-0">
    <div class="row m-0 p-1">
        <div class="col-8 p-0 d-flex align-items-center">${product.name}</div>
        <div class="col p-0 d-flex justify-content-end align-items-center">
            <button type="button" class="btn btn-danger removeBtn" id="remove-${product.id}">-</button>
            <div class="m-2 w-50 d-flex justify-content-center align-items-center" id="${product.id}-qt">${product.qt}</div>
            <button type="button" class="btn btn-success addBtn" id="add-${product.id}">+</button>
        </div>
    </div>
    <hr class="m-0" />
</div>`;
}
