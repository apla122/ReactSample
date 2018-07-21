import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import counter from './counter'
// import country from './country'
import todos from './todos'
import posts from './postReducer'
import visibilityFilter from './visibilityFilter'

const rootReducer = combineReducers({
    counter,
    // country,
    todos,
    posts,
    visibilityFilter,
    routing: routerReducer
})

export default rootReducer