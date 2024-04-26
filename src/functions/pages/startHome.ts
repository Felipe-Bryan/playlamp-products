import { categoriesDB } from '../../database/categories';
import { productsDB } from '../../database/products';
import { ItemToOrderType } from '../../types/ItemToOrderType';
import { getStorageData } from '../general/getStorageData';
import { startNewOrder } from '../page-functions/startNewOrder';
import { placeCategoriesHome } from '../page-functions/placeCategoriesHome';
import { placeProductsHome } from '../page-functions/placeProductsHome';
import { componentVisibility } from '../page-functions/componentVisibility';

export function startHome() {
  const home = document.getElementById('fullList')!;

  let newOrder: ItemToOrderType[] = getStorageData('order');
  if (newOrder.length === 0) {
    newOrder = startNewOrder(productsDB);
  }

  //   if (newOrder.length === 0) {
  //     newOrder = startNewOrder(productsDB);
  //   } else {
  //     let startNew = confirm('Existe um pedido não finalizado, iniciar novo pedido?');
  //     if (startNew) {
  //       newOrder = startNewOrder(productsDB);
  //     }
  //   }
  componentVisibility('newOrder', 'show');
  componentVisibility('showOrder', 'show');
  componentVisibility('orderTable', 'hide');
  placeCategoriesHome(categoriesDB, home);
  placeProductsHome(newOrder);
}
