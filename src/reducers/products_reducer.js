import {GET_FILTERED_PRODUCTS,ADD_PRODUCT,SORT_PRODUCTS} from '../actions/product_action';
import _ from 'lodash';

const product=[
    {
    name:"1",
    description:'sddfdfdfdf',
    color:'black',
    brand:'Being human',
    price:300,
    picture:'https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2297835/2018/3/14/11521020286596-Roadster-Men-Tshirts-4241521020286395-1.jpg'
    },
    {
    name:"2",
    description:'sddfdfdfdf',
    color:'black',
    brand:'Being human',
    price:300,
    picture:'https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2297835/2018/3/14/11521020286596-Roadster-Men-Tshirts-4241521020286395-1.jpg'
    },
    {
    name:"3",
    description:'sddfdfdfdf',
    color:'black',
    brand:'Being human',
    price:300,
    picture:'https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2297835/2018/3/14/11521020286596-Roadster-Men-Tshirts-4241521020286395-1.jpg'
    },
    {
    name:"4",
    description:'sddfdfdfdf',
    color:'black',
    brand:'Being human',
    price:100,
    picture:'https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2297835/2018/3/14/11521020286596-Roadster-Men-Tshirts-4241521020286395-1.jpg'
    },
    {
    name:"5",
    description:'sddfdfdfdf',
    color:'black',
    brand:'Being human',
    price:200,
    picture:'https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2297835/2018/3/14/11521020286596-Roadster-Men-Tshirts-4241521020286395-1.jpg'
    },
    {
    name:"6",
    description:'sddfdfdfdf',
    color:'yellow',
    brand:'Celio',
    price:300,
    picture:'https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2297835/2018/3/14/11521020286596-Roadster-Men-Tshirts-4241521020286395-1.jpg'
    },
   ];

export default  function(state=product,action){

    switch(action.type){
        case GET_FILTERED_PRODUCTS:
        
            var filteredProducts=[];
            for(let i=0;i<state.length;i++){
                if(state[i].price<action.payload.price)
                    filteredProducts.push(state[i])
            }
            delete action.payload.price;
           
           return _.filter(filteredProducts,action.payload)

       
        case SORT_PRODUCTS:
            console.log(_.sortBy(state,["price"]));
           return _.sortBy(state,["price"]);
        case ADD_PRODUCT:
            console.log([...state].concat(action.payload));
            return [...state].concat(action.payload);
        default:
            return state;
    }
}

