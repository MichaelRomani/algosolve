import { createStore, combineReducers, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import user from './user'
import algorithmInput from './algorithm-input'
import questions from './questions'
import categories from './categories'


const reducer = combineReducers({ user, algorithmInput, questions, categories })
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
)
const store = createStore(reducer, middleware)

export default store
export * from './user'
export * from './algorithm-input'
export * from './questions'
export * from './categories'
