import { productToTableMarked } from '../../components/productToTableMarked';
import { ItemToOrderType } from '../../types/ItemToOrderType';

export function placeMarkedProducts(products: ItemToOrderType[]): void {
  const markedTable = document.getElementById('listItems')!;

  products.forEach((product) => {
    if (product.qt > 0) {
      markedTable.innerHTML += productToTableMarked(product);
    }
  });
}
