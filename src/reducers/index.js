import { combineReducers } from 'redux';
import app from './app';
import body from './body';
import dialog from './dialog';
import unit from './unit';
import matter from './matter';
import video from './video';

const appReducer = combineReducers({
	app,
    body,
    dialog,
    unit,
    matter,
    video
})

export default appReducer
