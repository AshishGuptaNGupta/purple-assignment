import {combineReducers} from 'redux';
import gridReducer from './grid_reducer';
import productsReducer from './products_reducer';
import structureReducer from './cell_structure_reducer';
const reducers=combineReducers({
    grid:gridReducer,
    products:productsReducer,
    cellStructure:structureReducer
});


export default reducers;