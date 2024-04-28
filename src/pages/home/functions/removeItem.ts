import { getStorageData } from '../../../functions/general/getStorageData';
import { saveToStorage } from '../../../functions/general/saveToStorage';
import { ItemToOrderType } from '../../../types/ItemToOrderType';

export function removeItem(id: string): void {
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
