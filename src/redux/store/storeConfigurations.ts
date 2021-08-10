import {createStore, combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
// import AsyncStorage from '@react-native-community/async-storage';
import authentificationReducer from './reducers/authentification';
import storeReducer from './reducers/store';

// const persistConfig = {
//   key: 'root',
//   // storage: AsyncStorage,
// };

const rootReducer = combineReducers({authentificationReducer, storeReducer});

// persistReducer(persistConfig, authentificationReducer),
export default createStore(
  authentificationReducer
);
