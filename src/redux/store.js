import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'; // Изменено: импорт именованный
import reducer from './reducer';

const store = createStore(reducer, applyMiddleware(thunk));

export default store;