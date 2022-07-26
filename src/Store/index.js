import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

//reducers
import AutoresReducer from './reducers/autores.reducer'
import LibrosReducer from './reducers/libros.reducer'
import CarritoReducer from './reducers/carrito.reducer'
import OrdersReducer from './reducers/orders.reducer'
import AuthReducer from './reducers/auth.reducer'
import CategoriaReducer from './reducers/categoria.reducer'
import UsuariosReducer from './reducers/users.reducer'
import InfoEnvios from './reducers/info_envios.reducer'


const RootReducer = combineReducers({
    autores: AutoresReducer,
    libros: LibrosReducer,
    carrito: CarritoReducer,
    orders: OrdersReducer,
    auth: AuthReducer,
    categoria: CategoriaReducer,
    usuarios: UsuariosReducer,
    info_envios: InfoEnvios
})

export default createStore(RootReducer, applyMiddleware(thunk))