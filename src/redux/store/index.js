import { applyMiddleware, combineReducers, createStore } from 'redux'
import gol from '../reducers'
import thunk from 'redux-thunk'

const middlewares = [thunk]

export default () => {
  return createStore(
    combineReducers({
      gol: gol
    }),
    applyMiddleware.apply(null, middlewares)
  )
}