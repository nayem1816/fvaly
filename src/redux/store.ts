import { createStore, combineReducers } from 'redux';
import cartReducer from './reducers/cartReduces';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
    cart: cartReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export type AppState = ReturnType<typeof rootReducer>;

export default store;
