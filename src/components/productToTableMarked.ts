import { ItemToOrderType } from '../types/ItemToOrderType';

export function productToTableMarked(product: ItemToOrderType) {
  if (product.qt > 0) {
    `<tr>
        <td>${product.name}</td>
        <td class="text-center">${product.qt}</td>
        <td class="d-flex justify-content-end align-items-center">R$ ${product.price}</td>
    </tr>`;
  }
  return;
}
