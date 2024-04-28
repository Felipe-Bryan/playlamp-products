import { categoriesDB } from '../../database/categories';
import { productsDB } from '../../database/products';
import { ItemToOrderType } from '../../types/ItemToOrderType';
import { getStorageData } from '../general/getStorageData';
import { startNewOrder } from '../page-functions/startNewOrder';
import { placeCategoriesHome } from '../page-functions/placeCategoriesHome';
import { placeProductsHome } from '../page-functions/placeProductsHome';
import { componentVisibility } from '../page-functions/componentVisibility';
import { addItem } from '../page-functions/addItem';
import { removeItem } from '../page-functions/removeItem';

export function startHome(): void {
  const home = document.getElementById('fullList')!;

  home.innerHTML = '';

  let newOrder: ItemToOrderType[] = getStorageData('order');
  if (newOrder.length === 0) {
    newOrder = startNewOrder(productsDB);
  }

  componentVisibility('fullList', 'show');
  componentVisibility('newOrder', 'show');
  componentVisibility('showOrder', 'show');
  componentVisibility('orderTable', 'hide');
  componentVisibility('home', 'hide');
  componentVisibility('saveOrder', 'hide');
  placeCategoriesHome(categoriesDB, home);
  placeProductsHome(newOrder);

  document.querySelectorAll('.addBtn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const itemId = btn.id.replace('add-', '');
      addItem(itemId);
    });
  });

  document.querySelectorAll('.removeBtn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const itemId = btn.id.replace('remove-', '');
      removeItem(itemId);
    });
  });
}
