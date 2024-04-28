import { startNewOrder } from './functions/startNewOrder';
import { placeCategoriesHome } from './functions/placeCategoriesHome';
import { placeProductsHome } from './functions/placeProductsHome';
import { addItem } from './functions/addItem';
import { removeItem } from './functions/removeItem';
import { categoriesDB } from '../../database/categories';
import { productsDB } from '../../database/products';
import { getStorageData } from '../../functions/general/getStorageData';
import { componentVisibility } from '../../functions/page-functions/componentVisibility';
import { ItemToOrderType } from '../../types/ItemToOrderType';

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
