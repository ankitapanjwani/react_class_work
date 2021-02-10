import {combineReducers} from 'redux';
import images from './image-reducer';

const allReducer = combineReducers({
    allimages: images
});

export default allReducer;