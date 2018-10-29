import { Item, Items } from '../types'

const initialState = {
  list: [],
  detail: {}
}

const BASE_NAME = '@@item'
export const actionTypes = {
  SET_LIST: `${BASE_NAME}/SET_LIST`,
  SET_DETAIL: `${BASE_NAME}/SET_DETAIL`
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_LIST:
      return Object.assign({}, state, {
        list: action.payload.list
      })

    case actionTypes.SET_DETAIL:
      return Object.assign({}, state, {
        detail: action.payload.detail
      })

    default:
      return state
  }
}

export const actions = {
  setList: (dispatch, list: Items) => {
    return dispatch({ type: actionTypes.SET_LIST, payload: { list } })
  },
  setDetail: (dispatch, detail: Item) => {
    return dispatch({ type: actionTypes.SET_DETAIL, payload: { detail } })
  }
}
