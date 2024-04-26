import { ItemToOrderType } from '../../types/ItemToOrderType';
import { getStorageData } from '../general/getStorageData';
import { saveToStorage } from '../general/saveToStorage';

export function removeItem(id: string) {
  let order: ItemToOrderType[] = getStorageData('order');

  for (let i = 0; i < order.length; i++) {
    if (order[i].id === id) {
      if (order[i].qt > 0) {
        order[i].qt--;
      } else {
        order[i].qt = 0;
      }

      const input = document.getElementById(`${id}-qt`)!;

      saveToStorage('order', order);
      input.innerHTML = String(order[i].qt);
    }
  }
}
