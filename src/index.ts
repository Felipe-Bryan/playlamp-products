import { productsDB } from './database/products';
import { startNewOrder } from './functions/page-functions/startNewOrder';
import { startHome } from './functions/pages/startHome';
import { startMarked } from './functions/pages/startMarked';

startHome();

document.getElementById('newOrder')!.addEventListener('click', () => {
  startNewOrder(productsDB);
  location.reload();
});

document.getElementById('showOrder')!.addEventListener('click', () => {
  startMarked();
});

document.getElementById('home')!.addEventListener('click', () => {
  startHome();
});
