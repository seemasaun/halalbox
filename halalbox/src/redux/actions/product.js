import * as types from '../constant/actionTypes';
import * as productServices from '../../services/product';
import {getState} from '../../redux/store/configureStore';

//Get Product list
export function getProductList() {
  return (dispatch) => {
    dispatch({
      type: types.PRODUCT_LIST_API_PENDING,
      getProductListPending: true,
      getProductListSuccess: false,
      getProductListError: null,
      getProductListResponse: null,
    });

    productServices.requestProductList((response, error) => {
      if (error) {
        dispatch({
          type: types.PRODUCT_LIST_API_ERROR,
          getProductListPending: false,
          getProductListSuccess: false,
          getProductListError: error,
          getProductListResponse: null,
        });
      } else {
        dispatch({
          type: types.PRODUCT_LIST_API_SUCCESS,
          getProductListPending: false,
          getProductListSuccess: true,
          getProductListError: null,
          getProductListResponse: response,
        });
      }
      return;
    });
  };
}

//Reset Product list
export function resetProductList() {
  return (dispatch) => {
    dispatch({
      type: types.PRODUCT_LIST_API_RESET,
      getProductListPending: false,
      getProductListSuccess: false,
      getProductListError: null,
      getProductListResponse: null,
    });
  };
}

//Add product
export function addProductToCart(product) {
  let cartProduct = getState().productReducer.cartProducts;
  let cartProductCount = getState().productReducer.cartProductCount;

  if (product) {
    cartProduct.push(product);
    cartProductCount = cartProduct.length;
  }
  return (dispatch) => {
    dispatch({
      type: types.ADD_PRODUCT_TO_CART,
      cartProducts: cartProduct,
      cartProductCount: cartProductCount,
    });
  };
}

//Remove product
export function removeProductFromCart(product, index) {
  let cartProduct = getState().productReducer.cartProducts;
  let cartProductCount = getState().productReducer.cartProductCount;

  if (product) {
    cartProduct.splice(index, 1);
    cartProductCount = cartProduct.length;
  }
  return (dispatch) => {
    dispatch({
      type: types.REMOVE_PRODUCT_FROM_CART,
      cartProducts: cartProduct,
      cartProductCount: cartProductCount,
    });
  };
}

//Reset cart
export function resetCart() {
  return (dispatch) => {
    dispatch({
      type: types.RESET_CART,
      cartProducts: [],
      cartProductCount: 0,
    });
  };
}
