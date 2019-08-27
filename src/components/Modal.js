import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import * as productAction from '../actions/product_action';
import {connect} from 'react-redux';
import _ from 'lodash';
import Filters from './Filters';
class Modal extends Component{
    constructor(props){
        super(props);
        this.state={
            brand:'Being human',
            color:'',
            price: '100000',
        };
        this.onFormSubmit=this.onFormSubmit.bind(this);
        this.setFilter=this.setFilter.bind(this);
    }

    onFormSubmit(event){
        event.preventDefault();
       this.props.getFilteredProduct(this.state);
       this.props.closeModal();
    }

    setFilter(event){
        
        var name=event.target.name;
       
        this.setState({[name]:event.target.value});
    }


    render(){
        return(
            <div>
                <div className="overlay"  style={{display:this.props.modalVisibility}}></div>   
                <div className="modal" style={{display:this.props.modalVisibility}}>
                <div className="row">
                <a className="btn close" onClick={()=>this.props.closeModal()}><i className="material-icons">close</i></a>
                </div>
                <form onSubmit={this.onFormSubmit}>
                    <div className="row">
                        <div className="col span-1-of-3 labels" >
                            <label htmlFor="brands">Brands</label>
                        </div>
                        <div className="col span-2-of-3 inputs" >
                        <select name="brand" onChange={this.setFilter} value={this.state.brand}>
                            <option>Being Human</option>
                            <option>Celio</option>
                        </select>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col span-1-of-3 labels" >
                            <label htmlFor="price">Price</label>
                        </div>
                        <div className="col span-2-of-3 inputs" >
                        <div className="slidecontainer">
                        <p  id="minimum">0</p>
                        <input style={{display:"inline"}}type="range" id="start" name="price" min="0" max="100000" className="slider"
                        onChange={this.setFilter} value={this.state.price} />
                        <p id="maximum">{this.state.price}</p>
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col span-1-of-3 labels" >
                            <label htmlFor="color">Color</label>
                        </div>
                        <div className="col span-2-of-3 inputs" >
                        <div className="colorContainer">
                        <button type="button"  name="color" value="red" onClick={this.setFilter} className="color red "></button>
                        <button type="button"  name="color" value="yellow" onClick={this.setFilter} className="color yellow "></button>
                        <button  type="button" name="color" value="green" onClick={this.setFilter} className="color green "></button>
                      
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        <input className="btn btn-full" type="submit" value="filter"/>
                    </div>
                </form>

                </div>
            </div>
        );
    }
}


function mapDispatchToProps(dispatch){
    return bindActionCreators(productAction,dispatch);
}
export default connect(null,mapDispatchToProps)(Modal);
