import {createStore, combineReducers} from 'redux';
import ChapterReducer from './reducers/chapterReducer';

const rootReducer = combineReducers({
    chapter: ChapterReducer
})

const store = createStore(rootReducer);
export default store;