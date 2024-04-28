import { ItemToOrderType } from '../../types/ItemToOrderType';

export function sumTotalOrder(order: ItemToOrderType[]) {
  const totalSpot = document.getElementById('totalValue')!;
  let total = 0;

  order.forEach((item) => {
    if (item.qt > 0) {
      total += item.price * item.qt;
    }
  });

  totalSpot.innerHTML = `R$ ${total.toFixed(2) as string}`;
}
