import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN_LOADING,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN_LOADING,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from "../actions/actions";

const products_reducer = (state, action) => {
  if (action.type === SIDEBAR_OPEN) {
    return { ...state, isSidebarOpen: true };
  }
  if (action.type === SIDEBAR_CLOSE) {
    return { ...state, isSidebarOpen: false };
  }

  if (action.type === GET_PRODUCTS_BEGIN_LOADING) {
    return { ...state, products_loading: true };
  }
  /*filtrando las ofertas relampago en el caso del entpoint me regrese todos los productos
  actualizando products array y featured products con su respectivo filtro */
  if (action.type === GET_PRODUCTS_SUCCESS) {
    const featured_products = action.payload.filter(
      (product) => product.featured === true
    );

    return {
      ...state,
      products_loading: false,
      products: action.payload,
      featured_products: featured_products,
    };
  }

  /*error si el get del producto falla*/

  if (action.type === GET_PRODUCTS_ERROR) {
    return { ...PopStateEvent, products_loading: false, products_error: true };
  }

  /*****************SINGLE PRODUCT**********************/
  // single_product_loading: false,
  // single_product_error: false,
  // single_product: {},

  if (action.type === GET_SINGLE_PRODUCT_BEGIN_LOADING) {
    return {
      ...state,
      single_product_loading: true,
      single_product_loading: true,
    };
  }
  /*set single product */
  if (action.type === GET_SINGLE_PRODUCT_SUCCESS) {
    return {
      ...state,
      single_product_loading: false,
      single_product: action.payload,
    };
  }
  /*set single product end */

  /*error single product*/

  if (action.type === GET_SINGLE_PRODUCT_ERROR) {
    return {
      ...state,
      single_product_loading: false,
      single_product_error: true,
    };
  }
  /*error single product end*/

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default products_reducer;