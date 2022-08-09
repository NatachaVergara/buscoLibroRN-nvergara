import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

//reducers
import AutoresReducer from './reducers/autores.reducer'
import LibrosReducer from './reducers/libros.reducer'
import CarritoReducer from './reducers/carrito.reducer'
import OrdersReducer from './reducers/orders.reducer'
import AuthReducer from './reducers/auth.reducer'

const RootReducer = combineReducers({
    autores: AutoresReducer,
    libros: LibrosReducer,
    carrito: CarritoReducer,
    orders: OrdersReducer,
    auth: AuthReducer,

})

export default createStore(RootReducer, applyMiddleware(thunk))