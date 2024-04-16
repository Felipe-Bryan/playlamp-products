import { addItem } from './functions/pages/addItem';
import { startHome } from './functions/pages/startHome';

startHome();

document.querySelectorAll('.addBtn').forEach((btn) => {
  btn.addEventListener('click', () => {
    const itemId = btn.id.replace('add-', '');
    addItem(itemId);
  });
});
