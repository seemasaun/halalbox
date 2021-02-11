import * as types from '../constant/actionTypes';

export default function productReducer(
  state = {
    getProductListPending: false,
    getProductListSuccess: false,
    getProductListError: null,
    getProductListResponse: null,

    cartProducts: [],
    cartProductCount: 0,
  },
  action,
) {
  switch (action.type) {
    case types.PRODUCT_LIST_API_PENDING:
    case types.PRODUCT_LIST_API_SUCCESS:
    case types.PRODUCT_LIST_API_ERROR:
    case types.PRODUCT_LIST_API_RESET:
      return Object.assign({}, state, {
        getProductListPending: action.getProductListPending,
        getProductListSuccess: action.getProductListSuccess,
        getProductListError: action.getProductListError,
        getProductListResponse: action.getProductListResponse,
      });

    case types.ADD_PRODUCT_TO_CART:
    case types.REMOVE_PRODUCT_FROM_CART:
    case types.RESET_CART:
      return Object.assign({}, state, {
        cartProducts: action.cartProducts,
        cartProductCount: action.cartProductCount,
      });

    default:
      return state;
  }
}
