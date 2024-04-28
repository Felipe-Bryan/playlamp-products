import { productsDB } from './database/products';
import { startNewOrder } from './pages/home/functions/startNewOrder';
import { startHome } from './pages/home/startHome';
import { startMarked } from './pages/order/startMarked';

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
