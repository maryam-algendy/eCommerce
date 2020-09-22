import {database} from "./Firebase/config";
import { FETCH_CAROUSEL,FETCH_FEATURES,FETCH_PRODUCTS,
  FETCH_CART_PRODUCTS,FETCH_CATEGORIES,FETCH_SHIPPING,
  FETCH_BLOG_ITEMS,FETCH_BLOG_FEATURES,FETCH_BLOG_ARCHIVE,
  FETCH_SELECTED_COLOR} from './types';

export function  fetchProducts () {
  return (dispatch) => {
    return database.ref('products').once('value').then(response => {
      let products = []
      response.forEach(item => {
        products.push(item.val())
      })
      dispatch({type: "FETCH_PRODUCTS", payload: products})
    })
  }
}
export function postCart (product,id) {
  database.ref('cart-products').child(id).set(product).catch((err) => console.log(err))
}

export function fetchCarousel() {
  return(dispatch)=>{
    return database.ref('carosel').once('value').then(response=>{
      let carousel=[]
      response.forEach(item=>{
        carousel.push(item.val())
      })
      dispatch({type:"FETCH_CAROUSEL", payload: carousel})
    })
  }
}


export function fetchCartProducts() {
  return(dispatch)=>{
    return database.ref('cart-products').once('value').then(response=>{
      let cartProducts=[]
      response.forEach(item=>{
        cartProducts.push(item.val())
      })
      dispatch({type:"FETCH_CART_PRODUCTS", payload: cartProducts})
    })
  }

}


export function fetchFeatures() {
  return(dispatch)=>{
    return database.ref('features').once('value').then(response=>{
      let features=[]
      response.forEach(item=>{
        features.push(item.val())
      })
      dispatch({type:"FETCH_FEATURES", payload: features})
    })
  }
}

export function fetchShipping() {
  return(dispatch)=>{
    return database.ref('shipping').once('value').then(response=>{
      let shipping=[]
      response.forEach(item=>{
        shipping.push(item.val())
      })
      dispatch({type:"FETCH_SHIPPING", payload: shipping})
    })
  }
}

export function fetchCategories() {
  return(dispatch)=>{
    return database.ref('categories').once('value').then(response=>{
      let categories=[]
      response.forEach(item=>{
        categories.push(item.val())
      })
      dispatch({type:"FETCH_CATEGORIES", payload: categories})
    })
  }

}

export function fetchBlogItems() {
  return(dispatch)=>{
    return database.ref('blog-items').once('value').then(response=>{
      let blogItems=[]
      response.forEach(item=>{
        blogItems.push(item.val())
      })
      dispatch({type:"FETCH_BLOG_ITEMS", payload: blogItems})
    })
  }
}

export function fetchBlogFeatures() {
  return(dispatch)=>{
    return database.ref('blog-features').once('value').then(response=>{
      let blogFeatures=[]
      response.forEach(item=>{
        blogFeatures.push(item.val())
      })
      dispatch({type:"FETCH_BLOG_FEATURES", payload: blogFeatures})
    })
  }
}

export function fetchBlogArchive() {
  return(dispatch)=>{
    return database.ref('blog-archive').once('value').then(response=>{
      let blogArchive=[]
      response.forEach(item=>{
        blogArchive.push(item.val())
      })
      dispatch({type:"FETCH_BLOG_ARCHIVE", payload: blogArchive})
    })
  }
}

export function fetchSelectedColor() {
  return(dispatch)=>{
    return database.ref('selectedColor').once('value').then(response=>{
      let selectedColor=[]
      response.forEach(item=>{
        selectedColor.push(item.val())
      })
      dispatch({type:"FETCH_SELECTED_COLOR", payload: selectedColor})
    })
  }
}

