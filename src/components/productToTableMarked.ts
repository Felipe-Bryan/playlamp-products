import { ItemToOrderType } from '../types/ItemToOrderType';

export function productToTableMarked(product: ItemToOrderType): string | undefined {
  if (product.qt > 0) {
    return `<tr>
        <td>${product.name}</td>
        <td class="text-center">${product.qt}</td>
        <td class="d-flex justify-content-end align-items-center">R$ ${(product.price * product.qt).toFixed(2)}</td>
    </tr>`;
  }
}
