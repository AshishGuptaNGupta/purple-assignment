import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as productAction from '../actions/product_action';

class AddProducts extends Component{
    constructor(props){
        super(props);
        
        this.state={
            filters:[],
            product:{

            },
        }
        this.elements=[];
        this.onSubmit=this.onSubmit.bind(this);
        this.addFilter=this.addFilter.bind(this);
        this.showFilter=this.showFilter.bind(this);
        this.filterRef=React.createRef();
        this.filterValueRef=React.createRef();
        this.photoUrl=[
            "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/7228316/2019/1/30/4d826b89-0119-4c89-8861-4a8cea8ed0691548844555754-DILLINGER-Men-Navy-Blue-Colourblocked-Round-Neck-T-shirt-161-1.jpg",
            "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/1997314/2017/9/1/11504257573154-Roadster-Men-Black-Solid-Round-Neck-T-shirt-331504257572944-1.jpg",
            "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/10236353/2019/7/19/2e20bbcb-1a26-447a-ba71-b278a313bf191563512584114-SKULT-by-Shahid-Kapoor-Men-Tshirts-8741563512582631-1.jpg",
            "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2420275/2018/1/22/11516616593839-Gespo-Long--Sleeves-Henely-T-shirt-8741516616593582-1.jpg",
            "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2275352/2018/2/24/11519444618271-Roadster-Men-Black-Solid-Round-Neck-T-shirt-1771519444618074-1.jpg",
            "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2221837/2017/11/30/11512022093288-HERENOW-Men-Burgundy-Solid-Mandarin-Collar-T-shirt-4541512022093205-1.jpg",
            "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/1824372/2019/5/20/ca4f7ae3-7f32-4fcf-988b-0cbcf4f647461558345138184-Roadster-Men-Navy-Striped-T-shirt-7021558345136541-1.jpg",
        ]
    }

    componentWillMount(){
        this.draw();
    }
    onSubmit(event){

        event.preventDefault();
        this.props.addProduct(this.state.product,()=>{this.setState({product:{}});this.props.history.push("/")});

    }
    addFilter(){
        var filter=this.filterRef.current.value;
        var value=this.filterValueRef.current.value;
        console.log(filter);
        var newProduct=this.state.product;
        newProduct[filter]=value;

        this.setState({product:newProduct,filters:[]});

    }

    showFilter(){
        var markup=
            <div className="row">
                <input ref={this.filterRef} placeholder="filter"/> 
                <input ref={this.filterValueRef} placeholder="value"/>
                <button type="button" className="btn btn-full--yellow"onClick={this.addFilter}> Add</button>
            </div>

        this.setState({filters:markup});
    }


    draw(){
        this.props.structure.map(element=>{
            if(element.type==="img"){
                var markup=
                <div className="row">
                        <div className="col span-1-of-3">
                            <label htmlFor={element.name}>{element.name}</label>
                        </div>
                    <div className="col span-2-of-3">
                        <input accept="image/png, image/jpeg" type="file" 
                        onChange={event=>
                            {
                                var oldState=this.state.product;
                                // oldState[element.name]=event.target.value;
                                oldState[element.name]=this.photoUrl[Math.floor(Math.random() * Math.floor(7))]
                                this.setState({product:oldState})
                            }} 
                        value={this.state.product[element.name]}
                        ></input>
                    </div>
                 </div>
            }
            else if(element.type==="p")
            {
                 markup=
                 <div className="row">
                     <div className="col span-1-of-3">
                         <label htmlFor={element.name}>{element.name}</label>
                     </div>
                    <div className="col span-2-of-3">
                    <input  name={element.name} onChange={event=>
                        {
                            var oldState=this.state.product;
                            oldState[element.name]=event.target.value;
                            this.setState({product:oldState})
                        }}
                    value={this.state.product[element.name]}/>
                    </div>
                 </div>
            }
            this.elements.push(markup);
           
        });

    }
    render(){
        console.log(this.state.product);
        console.log(this.props);
       
        
        return(
            <div className="newProduct-form">
                <form onSubmit={this.onSubmit}>
                    {this.elements}
                    <hr/>
                    <button  className="btn btn-full--yellow" type="button" onClick={this.showFilter}>Add filter</button>
                    {this.state.filters}

                    <hr/>
     
                    <input type="submit" className="btn btn-full" value="Add Product"/>
                </form >
            </div>
        );
    }

}

function mapStateToProps(state){
    return {
        structure:state.cellStructure
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(productAction,dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(AddProducts);