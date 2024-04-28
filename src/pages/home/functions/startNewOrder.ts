import { saveToStorage } from '../../../functions/general/saveToStorage';
import { ItemToOrderType } from '../../../types/ItemToOrderType';
import { ProductType } from '../../../types/ProductType';

export function startNewOrder(productArray: ProductType[]): ItemToOrderType[] {
  let array: ItemToOrderType[] = [];

  let choice: boolean = confirm('O pedido atual será apagado, continuar?');

  if (choice) {
    productArray.forEach((product) => {
      const newItem = {
        ...product,
        qt: 0,
      };

      array.push(newItem);
    });

    saveToStorage('order', array);
  }

  return array;
}
