import React,{Component} from 'react';
import Pallete from './ElementSelection';
import ReactDom from 'react-dom';
import { connect } from 'react-redux';


class Cell extends Component{

    constructor(props){
        super(props);
        this.state={
            modal:'none',
            elements:[]
        }
        this.cellRef=React.createRef();
        this.closeModal=this.closeModal.bind(this);
        this.createMarkUp=this.createMarkUp.bind(this);
        this.createTemplateMarkUp=this.createTemplateMarkUp.bind(this);
    }


    closeModal(){
        this.setState({modal:'none'});
       
    }

    componentWillMount(){
        // if(this.props.item!==undefined)
        console.log(this.props);
        this.createMarkUp(this.props.structure);
    
    }

    componentWillReceiveProps(newProp){

        if(newProp.item===undefined)
        this.createTemplateMarkUp(newProp.structure);
        else
        this.createMarkUp(newProp.structure,newProp.item);
        
      
        
       
    
    }
    createTemplateMarkUp(newProp){
       
        var markup=<h1>fdf</h1>;
            
            var element= newProp[newProp.length-1];
          
            if(element.type==="img")
            markup=<img key={element.name} src="https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?v=1530129081" style={element.style}></img>;
            else if(element.type==="p")
            markup=<p key={element.name} style={element.style}>{element.name}</p>;

            var oldState=this.state.elements;
            oldState.push(markup);
            this.setState({elements:oldState});
        
    }

    createMarkUp(newProp,newItem){
        if(this.props.item===undefined)

        // change this to change basic template
        var item={
            name:"Name",
            description:'description',
            color:'black',
            brand:'Being human',
            price:300,
            picture:'https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2297835/2018/3/14/11521020286596-Roadster-Men-Tshirts-4241521020286395-1.jpg'
            }
        else if(newItem!==undefined)
        item=newItem;
        else
        item=this.props.item;

        var markup=<h1>fdf</h1>;
    
           
            newProp.map((element,i)=>{
            if(element.type==="img")
            markup=<img  src={item[element.name]} key={element.name} style={element.style}></img>;
            else if(element.type==="p")
            markup=<p key={element.name} style={element.style}>{item[element.name]}</p>;
            
            var oldState=this.state.elements;
            oldState.push(markup);
            this.setState({elements:oldState});
           
            });
           
    }
    render(){
        if(this.props.item===undefined){
           return(
            <div> 
                <div className="tooltip">    
                    <a className="btn btn-circle btn-full "onClick={()=>this.setState({modal:"block"})}>+</a>
                    <span className="tooltiptext">Add element to poster</span>
                </div>

              
                <Pallete closeModal={this.closeModal} modalVisibility={this.state.modal} 
                    elementSelectionCallback={this.elementSelectionCallback}/>


                <div className="cell"  ref={this.cellRef}>
                   
                    {this.state.elements}
                    {/* <img src="https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2297835/2018/3/14/11521020286596-Roadster-Men-Tshirts-4241521020286395-1.jpg"/>
                    
                    <div className="product-info" >
                            <h4 className="product-title ">Title</h4>
                            <p className="product-description">description</p>
                            <div dangerouslySetInnerHTML={this.createMarkUp()}></div>

                           
                    </div> */}
                </div>
            </div>
           );
        }
        return(
            <div className="cell">
                {/* <div className="product-options">dfd</div> */}
                {this.state.elements}
                {/* <img src="https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2297835/2018/3/14/11521020286596-Roadster-Men-Tshirts-4241521020286395-1.jpg"/>
                
                <div className="product-info">
                        <h4 className="product-title"> {this.props.item.name}</h4>
                        <p className="product-description">{this.props.item.description}</p>
                        
                </div>

                <div className="buttons-tray">
                    <a className="btn btn-full"> ddfd</a>
                    <a className="btn btn-full"> ddfd</a>
                    <a className="btn btn-full"> ddfd</a>
                    <a className="btn btn-full"> ddfd</a>
                </div> */}

            </div>


        );
    }
}

function mapStateToProps(state){
    return {
        structure:state.cellStructure
    }
}
export default connect(mapStateToProps,null)(Cell);