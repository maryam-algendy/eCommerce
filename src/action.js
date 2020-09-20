import eCommerce from './api/eCommerce';

import { FETCH_CAROUSEL,FETCH_FEATURES,FETCH_PRODUCTS,
  FETCH_CART_PRODUCTS,FETCH_CATEGORIES,FETCH_SHIPPING,
  FETCH_BLOG_ITEMS,FETCH_BLOG_FEATURES,FETCH_BLOG_ARCHIVE,
  FETCH_SELECTED_COLOR} from './types';

export const fetchCarousel = () => async dispatch => {
  const response = await eCommerce.get('/carosel');
  dispatch({ type:FETCH_CAROUSEL, payload: response.data});
}; 
export const fetchProducts = () => async dispatch => {
  const response = await eCommerce.get('/products');
  dispatch({ type:FETCH_PRODUCTS, payload: response.data});
}; 
export const fetchCartProducts = () => async dispatch => {
  const response = await eCommerce.get('/cart-products');
  console.log(response.data)
  dispatch({ type:FETCH_CART_PRODUCTS, payload: response.data});
}; 
export const fetchFeatures = () => async dispatch => {
  const response = await eCommerce.get('/features');
  dispatch({ type:FETCH_FEATURES, payload: response.data});
}; 
export const fetchShipping = () => async dispatch => {
  const response = await eCommerce.get('/shipping');
  dispatch({ type:FETCH_SHIPPING, payload: response.data});
}; 
export const fetchCategories = () => async dispatch => {
  const response = await eCommerce.get('/categories');
  dispatch({ type:FETCH_CATEGORIES, payload: response.data});
}; 
export const fetchBlogItems = () => async dispatch => {
  const response = await eCommerce.get('/blog-items');
  dispatch({ type:FETCH_BLOG_ITEMS, payload: response.data});
}; 
export const fetchBlogFeatures = () => async dispatch => {
  const response = await eCommerce.get('/blog-features');
  dispatch({ type:FETCH_BLOG_FEATURES, payload: response.data});
}; 
export const fetchBlogArchive = () => async dispatch => {
  const response = await eCommerce.get('/blog-archive');
  dispatch({ type:FETCH_BLOG_ARCHIVE, payload: response.data});
}; 
export const fetchSelectedColor = () => async dispatch => {
  const response = await eCommerce.get('/selectedColor');
  dispatch({ type:FETCH_SELECTED_COLOR, payload: response.data});
}; 

