//with Redux Toolkit
import { configureStore, getDefaultMiddleware, combineReducers } from "@reduxjs/toolkit";
import logger from 'redux-logger';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactsReducer from './contacts/contacts-reducer';

//for watching prevState, action, nextState in console
const middleware = [...getDefaultMiddleware({
    serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
}),
    logger]

//localStorage
const persistConfig = {
    key: 'contacts',
    storage
}

const rootReducer = combineReducers({
    contacts: contactsReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer, 
    middleware,
    devTools: process.env.NODE_ENV === 'development',
})
//обертка над store, которая реализует обновление LocalStorage
const persistor = persistStore(store);

export default { store, persistor };

//without Redux Toolkit
//import { combineReducers } from "redux";
//import { composeWithDevTools } from 'redux-devtools-extension';

// const rootReducer = combineReducers({
//     contacts: contactsReducer
// })

//const store = createStore(rootReducer, composeWithDevTools());