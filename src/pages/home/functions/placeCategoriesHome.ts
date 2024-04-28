import { categoryItem } from '../../../components/categoryList';
import { CategoryType } from '../../../types/CategoryType';

export function placeCategoriesHome(categoriesArray: CategoryType[], local: HTMLElement): void {
  categoriesArray.forEach((category) => {
    local.innerHTML += categoryItem(category);
  });
}
