
import _ from 'lodash';
export const GET_FILTERED_PRODUCTS="GET_FILTERED_PRODUCTS";
export const ADD_PRODUCT="ADD_PRODUCT";
export const SORT_PRODUCTS="SORT_PRODUCTS"
export function getFilteredProduct(filters){

    for (var propName in filters) { 
        if (filters[propName] === null || filters[propName] === undefined || filters[propName]==="") {
          delete filters[propName];
        }
      }
    return {
        type: GET_FILTERED_PRODUCTS,
        payload: filters
    }
}

export function sortProducts(criteria){
    return{
        type: SORT_PRODUCTS,
        payload: criteria
    }
}

export function addProduct(product,callback){
    callback();
    return {
        type: ADD_PRODUCT,
        payload:product
    }
}


