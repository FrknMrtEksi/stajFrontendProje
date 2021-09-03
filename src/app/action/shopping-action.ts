import {Action} from '@ngrx/store';
import {ShoppingItemModels} from '../models/shopping-item-models';

export enum ShoppingActionTypes{
  ADD_ITEM='[SHOPPING] add Item',

}
export class AddItemAction implements Action{
  readonly type=ShoppingActionTypes.ADD_ITEM;
  constructor(public payload:ShoppingItemModels) {
  }

}
export  type ShoppingAction = AddItemAction;
