import { categoryItem } from '../../components/categoryList';
import { CategoryType } from '../../types/CategoryType';

export function placeCategoriesHome(categoriesArray: CategoryType[], local: any) {
  categoriesArray.forEach((category) => {
    local.innerHTML += categoryItem(category);
  });
}
