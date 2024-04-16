import { categoriesDB } from '../../database/categories';
import { productsDB } from '../../database/products';
import { getStorageData } from '../general/getStorageData';
import { startNewOrder } from '../general/startNewOrder';
import { placeCategoriesHome } from './placeCategoriesHome';
import { placeProductsHome } from './placeProductsHome';

export function startHome() {
  const home = document.getElementById('fullList')!;

  let newOrder = getStorageData('order');

  if (newOrder.length === 0) {
    newOrder = startNewOrder(productsDB);
  } else {
    let startNew = confirm('Existe um pedido não finalizado, iniciar novo pedido?');
    if (startNew) {
      newOrder = startNewOrder(productsDB);
    }
  }

  placeCategoriesHome(categoriesDB, home);
  placeProductsHome(newOrder);
}
