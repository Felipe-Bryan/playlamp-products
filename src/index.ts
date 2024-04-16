import { addItem } from './functions/pages/addItem';
import { removeItem } from './functions/pages/removeItem';
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
