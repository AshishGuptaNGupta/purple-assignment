import {SET_COL_SIZE,SET_ROW_SIZE} from '../actions/grid_actions';

export default  function(state={rows:1,columns:2},action){
    
    switch(action.type){
       
        case SET_COL_SIZE:
            return {rows:state.rows,columns:action.payload}
        
        case SET_ROW_SIZE:
            return {rows:action.payload,columns:state.columns}

        default:
            return state;
    }
}