import { getStorageData } from '../../../functions/general/getStorageData';
import { saveToStorage } from '../../../functions/general/saveToStorage';
import { ItemToOrderType } from '../../../types/ItemToOrderType';

export function addItem(id: string) {
  let order: ItemToOrderType[] = getStorageData('order');

  for (let i = 0; i < order.length; i++) {
    if (order[i].id === id) {
      order[i].qt++;

      const input = document.getElementById(`${id}-qt`)!;

      saveToStorage('order', order);
      input.innerHTML = String(order[i].qt);
    }
  }
}
