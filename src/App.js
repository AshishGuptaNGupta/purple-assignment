import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Admin from './components/Admin';
import GridLayout from './components/GridLayout';
import Pagination from './components/Pagination';
import Filters from './components/Filters';
import * as product_action from './actions/product_action';

class App extends Component{
   
    constructor(props){
        super(props);
        this.state={
            offset:0,
        };
        this.callbackFunction=this.callbackFunction.bind(this);
       
    }
   
    callbackFunction(offset){
        console.log(offset);
        this.setState({offset});
    }
    
    render(){
        
        return(
            <div>

                <Filters sortProducts={this.props.sortProducts} />
                <GridLayout gridSize={this.props.gridSize} products={this.props.products} offset={this.state.offset}/>
                <Pagination gridSize={this.props.gridSize} products={this.props.products} changePage={this.callbackFunction}/>
                
            </div>
        );
    }
        
    
}

function mapStateToProps(state){
    return{
        gridSize:state.grid,
        products:state.products
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(product_action,dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(App);