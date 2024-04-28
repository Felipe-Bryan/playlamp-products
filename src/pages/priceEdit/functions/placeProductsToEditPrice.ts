import { productToEditPrice } from '../../../components/productToEditPrice';
import { ProductType } from '../../../types/ProductType';

export function placeProductsToEditPrice(products: ProductType[]): void {
  const categoriesArray = document.querySelectorAll('.category');

  console.log(categoriesArray);

  products.forEach((product) => {
    for (let i = 0; i < categoriesArray.length; i++) {
      if (product.category === categoriesArray[i].id) {
        categoriesArray[i].innerHTML += productToEditPrice(product);
      }
    }
  });
}
