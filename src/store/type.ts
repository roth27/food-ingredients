
export enum Type {
  SET_PRODUCTS = 'SET_PRODUCTS',
  ADD_TO_CART = "ADD_TO_CART",
  REMOVE_FROM_CART = "REMOVE_FROM_CART",
  TOGGLE_FAVORITE = 'TOGGLE_FAVORITE',
  REMOVE_FAVORITE = 'REMOVE_FAVORITE',
}

export type SuccessAction<T> = {
  type: string,
  payload: T
}

export type FailureAction<T> = {
  type: string
  [key: string]: T
}