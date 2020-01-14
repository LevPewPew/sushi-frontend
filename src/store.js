import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'; 
import sectionReducer from './reducers/sectionReducer';

const rootReducer = combineReducers(
  {
    form: formReducer,
    sectionReducer
  }
);

const store = createStore(rootReducer);

export default store;
