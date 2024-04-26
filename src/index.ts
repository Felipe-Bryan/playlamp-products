import { productsDB } from './database/products';
import { startNewOrder } from './functions/page-functions/startNewOrder';
import { addItem } from './functions/page-functions/addItem';
import { removeItem } from './functions/page-functions/removeItem';
import { startHome } from './functions/pages/startHome';

startHome();

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

document.getElementById('newOrder')!.addEventListener('click', () => {
  startNewOrder(productsDB);
  location.reload();
});
