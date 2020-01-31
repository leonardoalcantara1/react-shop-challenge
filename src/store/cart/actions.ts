import * as types from './actionTypes';

const cookieName = 'avmob_cart';

interface Product {
  id: number,
  quantity: number
}

const storeProducts = (products:Product[]) => ({
  type: types.STORE_PRODUCTS,
  products,
});

export const storeCurrentCart = () => (dispatch: any) => {
  const cookie = window.localStorage.getItem(cookieName) || '';
  try {
    dispatch(
      storeProducts(
        JSON.parse(cookie)
      )
    )
  } catch(e) {
    dispatch(storeProducts([]));
  }
}

export const addToCart = ({ id, quantity }:Product) => (dispatch:any) => {
  const cookie = window.localStorage.getItem(cookieName) || '';
  let currentCart = (() => {
    try {
      return JSON.parse(cookie);
    } catch(e) {
      return [];
    }
  })();

  let actualProduct = currentCart.find((a:any) => a.id === id);
  if (!actualProduct) {
    actualProduct = {
      id,
      quantity: 0
    };
    currentCart.push(actualProduct);
  }

  actualProduct.quantity++;

  if (actualProduct.quantity <= quantity) {
    dispatch(storeProducts(currentCart));
    window.localStorage.setItem(cookieName, JSON.stringify(currentCart));
  }
}

export const removeToCart = ({ id }: Product) => (dispatch:any) => {
  const cookie = window.localStorage.getItem(cookieName) || '';
  let currentCart = (() => {
    try {
      return JSON.parse(cookie);
    } catch(e) {
      return [];
    }
  })();
  currentCart = currentCart.filter((a: Product) => a.id !== id);
  dispatch(storeProducts(currentCart));
  window.localStorage.setItem(cookieName, JSON.stringify(currentCart));
}

export const changeQuantity = (id: number, quantity: number, stock: number) => (dispatch:any) => {
  const cookie = window.localStorage.getItem(cookieName) || '';
  let currentCart = (() => {
    try {
      return JSON.parse(cookie);
    } catch(e) {
      return [];
    }
  })();

  currentCart = currentCart.map((a: Product) => {
    if (a.id === id) {
      return {
        ...a,
        quantity: quantity > 0
          ? (
            stock < quantity
              ? stock
              : quantity
          ) : 1
      }
    }
    return a;
  });

  dispatch(storeProducts(currentCart));
  window.localStorage.setItem(cookieName, JSON.stringify(currentCart));
}