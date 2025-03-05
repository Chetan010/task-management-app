import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import taskReducer from '../reducers/taskReducer';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  tasks: persistReducer(persistConfig, taskReducer),
});

export const store = createStore(rootReducer);
export const persistor = persistStore(store);