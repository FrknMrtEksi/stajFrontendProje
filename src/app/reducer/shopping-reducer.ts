import {ShoppingItemModels} from "../models/shopping-item-models";
import {ShoppingAction, ShoppingActionTypes} from "../action/shopping-action";

const initialState: Array<ShoppingItemModels>=[
  {
    shopId:1,
    shopName:"Bardak",
    shopUnitPrice:15,
    shopImgId:1,
  },
  {
    shopId:1,
    shopName:"Bardak",
    shopUnitPrice:15,
    shopImgId:1,
  },
];
export function ShoppingReducer(state:Array<ShoppingItemModels>=initialState,action:ShoppingAction){
  switch (action.type){
    case ShoppingActionTypes.ADD_ITEM:
       return [...state,action.payload];
    default:
      return state;
  }
}
