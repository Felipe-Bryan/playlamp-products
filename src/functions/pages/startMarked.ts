import { getStorageData } from '../general/getStorageData';
import { componentVisibility } from '../page-functions/componentVisibility';
import { placeMarkedProducts } from '../page-functions/placeMarkedProducts';
import { sumTotalOrder } from '../page-functions/sumTotalOrder';

export function startMarked() {
  const order = getStorageData('order');
  componentVisibility('fullList', 'hide');
  componentVisibility('orderTable', 'show');
  componentVisibility('showOrder', 'hide');
  componentVisibility('newOrder', 'hide');
  componentVisibility('home', 'show');
  componentVisibility('saveOrder', 'show');

  placeMarkedProducts(order);
  sumTotalOrder(order);
}
