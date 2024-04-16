import { ItemToOrderType } from './ItemToOrderType';

export interface OrderType {
  id: string;
  products: ItemToOrderType[];
}
