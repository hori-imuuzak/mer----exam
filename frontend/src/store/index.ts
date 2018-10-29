import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { reducer as item } from '../modules/item'
import { reducer as master } from '../modules/master'

const middlewares = []
if (process.env.NODE_ENV !== 'production') {
  middlewares.push(logger)
}

const reducers = {
  item,
  master
}

export function initializeStore(initialState = {}) {
  return createStore(combineReducers(reducers), initialState, applyMiddleware(...middlewares))
}
