import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as gridActions from '../actions/grid_actions';
import Cell from './Cell';

class Admin extends Component{
        constructor(props){
            super(props);
            this.onFormSubmit=this.onFormSubmit.bind(this);
        
            
        }

    onFormSubmit(event){
        event.preventDefault();
        this.props.history.push('/');
    
    }

  
    render(){
        console.log(this.props.grid);
        return(
             <div className="grey-box admin">
                <form onSubmit={this.onFormSubmit}>
                    <div className="row"> 
                        <div className="col span-1-of-2">
                            <label htmlFor="column">Rows:</label>
                            <select value={this.props.grid.rows} onChange={event=>this.props.setRow(event.target.value)}
                                    name="row" id="row" defaultValue="5">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option >5</option>
                                </select>

                            <label htmlFor="column">Columns:</label>
                            <select value={this.props.grid.columns} onChange={event=>this.props.setCol(event.target.value)}
                            name="column" id="column" defaultValue="3">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </select>
                        </div>
                    </div>     
                    
                    <div className="row">
                        <Cell />
                    </div>
                   

                    

                    <input className="btn btn-full"type="submit"/>
                </form>
               
            </div>
        );
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators( gridActions,dispatch)
}

function mapStateToProps(state){
    return{
        grid:state.grid
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Admin);