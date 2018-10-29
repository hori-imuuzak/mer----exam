import { Categories } from '../types'

const initialState = {
  categories: []
}

const BASE_NAME = '@@master'
export const actionTypes = {
  SET_CATEGORIES: `${BASE_NAME}/SET_CATEGORIES`
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CATEGORIES:
      return Object.assign({}, state, {
        categories: action.payload.categories
      })

    default:
      return state
  }
}

export const actions = {
  setCategories: (dispatch, categories: Categories) => {
    return dispatch({ type: actionTypes.SET_CATEGORIES, payload: { categories } })
  }
}
