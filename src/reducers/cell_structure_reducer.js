import {ADD_ELEMENT,DELETE_ELEMENT,GET_ELEMENTS} from '../actions/cell_structure_action';

var structure=[
        {
            type:'img',
            name:'picture',
            style:{
                width:'200px',
                height:'265px',
                margin:'auto',
                display:'block'
            }
        },
        {
            type:'p',
            name:'name',
            style:{
                display: 'block',
                fontSize: '1em',
                marginTop: '0.5em',
                marginBottom: '0.5em',
                marginLeft: '0',
                marginRight: '0',
                fontWeight: 'bold',
            }
        },
        {
            type:'p',
            name:'description',
            style:{
                fontSize:'65%',
                color: 'rgba(0, 0, 0, 0.623)',
            }
        }
    ]


export default  function(state=structure,action){
    
    switch(action.type){
       case GET_ELEMENTS:
           return {}
        case ADD_ELEMENT:
           console.log([...state].concat(action.payload));
           return [...state].concat(action.payload);
         
    
        case DELETE_ELEMENT:
            return {rows:action.payload,columns:state.columns}

        default:
            return state;
    }
}