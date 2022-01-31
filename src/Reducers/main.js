import {counter} from './counter';
import {toggle} from './toggle';
import { combineReducers} from 'redux';

export let rootReducer = combineReducers({
    counter,
    toggle
})