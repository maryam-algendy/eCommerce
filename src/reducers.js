import { 
    FETCH_CAROUSEL,
    FETCH_FEATURES,
    FETCH_PRODUCTS,
    FETCH_CART_PRODUCTS,
    FETCH_CATEGORIES,
    FETCH_SHIPPING,
    FETCH_BLOG_ITEMS,
    FETCH_BLOG_FEATURES,
    FETCH_BLOG_ARCHIVE
} from './types';


const initialState={
    carousel:[],
    features:[],
    products:[],
    cartProducts:[],
    categories:[],
    shipping:[],
    blogItems:[],
    blogFeatures:[],
    blogArchive:[]
}

export default function reducer (state = initialState, action) {
    switch(action.type){
        case FETCH_CAROUSEL:
            return {...state, carousel: action.payload};
        case FETCH_FEATURES:
            return {...state, features: action.payload};
        case FETCH_PRODUCTS:
            return {...state, products: action.payload};
        case FETCH_CART_PRODUCTS:
            return {...state, cartProducts: action.payload};
        case FETCH_CATEGORIES:
                return {...state, categories: action.payload};
        case FETCH_SHIPPING:
            return {...state, shipping: action.payload};
        case FETCH_BLOG_ITEMS:
            return {...state, blogItems: action.payload};
        case FETCH_BLOG_FEATURES:
            return {...state, blogFeatures: action.payload};
        case FETCH_BLOG_ARCHIVE:
            return {...state , blogArchive: action.payload};
        default:
        return state;
    }
}