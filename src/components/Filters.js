import React,{Component} from 'react';
import Modal from './Modal';
import {Link} from 'react-router-dom';
class Filters extends Component{
    constructor(props){
        super(props);
        this.state={
            modalVisibility:'none',
            brand:'',
            color:'',
            price: null
        };
        this.closeModal=this.closeModal.bind(this);
    }


    closeModal(){
        this.setState({modalVisibility:'none'});
    }
    render(){
        return(
            <div className="row ">
                <Modal closeModal={this.closeModal} modalVisibility={this.state.modalVisibility}/>
                <div className="filter-box">
                    <Link className="btn btn-full"to="/admin">Admin</Link>
                    <Link className="btn btn-full"to="/add">ADD Products</Link>
                    {/* <a className="btn btn-full" onClick={()=>this.setState({modalVisibility:'block'})}>Sort</a> */}
                    <div className="dropdown">
                        <button className="btn btn-full">Sort</button>
                        <div className="dropdown-content">
                            <a onClick={this.props.sortProducts}>Price</a>
                        
                        </div>
                    </div>
                    <a className="btn btn-full" onClick={()=>this.setState({modalVisibility:'block'})}> Filter</a>
                </div>
            </div>
        );
    }
}

export default Filters;
