import { ItemToOrderType } from '../../types/ItemToOrderType';
import { getStorageData } from '../general/getStorageData';
import { saveToStorage } from '../general/saveToStorage';

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

// function addItem(id: string) {
//     const input = document.getElementById(`${id}-qt`)

//     input?.innerHTML =

//     for (let i = 0; i < products.length; i++) {
//       if (products[i].id === id) {
//         products[i].qt++;
//         input.value = products[i].qt;
//         saveProducts();
//       }
//     }
//   }
