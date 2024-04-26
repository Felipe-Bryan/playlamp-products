import { ItemToOrderType } from '../../types/ItemToOrderType';
import { ProductType } from '../../types/ProductType';
import { saveToStorage } from '../general/saveToStorage';

export function startNewOrder(productArray: ProductType[]): ItemToOrderType[] {
  let array: ItemToOrderType[] = [];

  productArray.forEach((product) => {
    const newItem = {
      ...product,
      qt: 0,
    };

    array.push(newItem);
  });

  saveToStorage('order', array);

  return array;
}
