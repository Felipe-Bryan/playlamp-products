import { productToList } from '../../../components/productToList';
import { ItemToOrderType } from '../../../types/ItemToOrderType';

export function placeProductsHome(products: ItemToOrderType[]): void {
  const categoriesArray = document.querySelectorAll('.category');

  products.forEach((product) => {
    for (let i = 0; i < categoriesArray.length; i++) {
      if (product.category === categoriesArray[i].id) {
        categoriesArray[i].innerHTML += productToList(product);
      }
    }
  });
}
