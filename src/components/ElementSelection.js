import React,{Component} from 'react';
import Collapse from 'rc-collapse';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as structureAction from '../actions/cell_structure_action';
var Panel= Collapse.Panel;
require('rc-collapse/assets/index.css');
class ElementSelection extends Component{
    constructor(props){
        super(props);

      
    this.addImage=this.addImage.bind(this);
    this.addText=this.addText.bind(this);
    this.addImageProperty=this.addText.bind(this);
    this.addTextProperty=this.addTextProperty.bind(this);
    this.image={};
    this.text={};
  
    }


    addImage(){
        let name=document.getElementById('imgName').value;
        this.image["width"]=document.getElementById('imgWidth').value+'px';
        this.image["height"]=document.getElementById('imgHeight').value+'px';

        // let style={
        //     width:document.getElementById('imgWidth').value+'px',
        //     height:document.getElementById('imgHeight').value+'px',
        // }
        this.props.closeModal();
        this.props.addElement('img',name,this.image);
        this.image={};
    }

    addText(){
        let name=document.getElementById('textName').value;
        this.text["fontSize"]=document.getElementById('textFont').value+'px';
        console.log(this.text);
        // let style={
        //     fontSize:document.getElementById('textFont').value+'px'
        // }
        this.props.closeModal();
        this.props.addElement('p',name,this.text);
        this.text={};
    }
    addTextProperty(){
      
        var property=document.getElementById("textProperty").value;
        var value=document.getElementById("textValue").value;
        this.text[property]=value;
        document.getElementById("textProperty").value='';
        document.getElementById("textValue").value='';
    }
    addImageProperty(){
        var property=document.getElementById("imageProperty").value;
        var value=document.getElementById("imageValue").value;
        this.image[property]=value;
        document.getElementById("imageProperty").value='';
        document.getElementById("imageValue").value='';
    }
    render(){

        return(
            <div className="pallete" >
                <div className="overlay"  style={{display:this.props.modalVisibility}}></div>   
                <div className="modal" style={{display:this.props.modalVisibility}}>
                <div className="row">
                <a className="btn close" onClick={()=>this.props.closeModal()}><i className="material-icons">close</i></a> 
                </div>
                <div className="row">
                   
                   <Collapse>
                   <Panel header='image'>
                       
                       <label className="ac-label" htmlFor="name">Name:</label>
                       <input className="ac-input" id="imgName" name="name" placeholder="field name"/> 
                       <label className="ac-label" htmlFor="width">width:</label>
                       <input className="ac-input"name="width" id="imgWidth" type="number" placeholder="width"/>                       
                       <label className="ac-label" htmlFor="height">height:</label>
                       <input className="ac-input"name="height" id="imgHeight"type="number" placeholder="height"/> 
                        <div className="row">
                            <hr/>
                            <div className="col span-1-0f-3">
                                <input className="ac-input--small " ref={this.textPropRef   } name="property" id="imageProperty" placeholder="css property"/> 
                            </div>
                            <div className="col span-1-0f-3">
                                <input className="ac-input--small "ref={this.textValueRef} name="value" id="imageValue" placeholder="value with unit"/> 
                            </div>
                            <div className="col span-1-0f-3">
                                <button type="button" className="addPropety" onClick={this.addImageProperty} >Add Property</button>
                            </div>
                            <hr/>
                        </div>

      
                       
                       <button type="button" className="block" onClick={this.addImage}>Add</button>
                       
                   </Panel>
                      
                   
                   <Panel header='text'>
                   <span className="ac-label">Name:</span>
                       <input className="ac-input"name="name" id="textName" placeholder="field name"/>
                       <span className="ac-label">Font:</span>
                       <input className="ac-input"name="font" id="textFont" type="number" placeholder="field name"/>                       
                       
                       <div className="row">
                           <hr/>
                            <div className="col span-1-0f-3">
                                <input className="ac-input--small " ref={this.imagePropRef} name="property" id="textProperty" placeholder="css property"/> 
                            </div>
                            <div className="col span-1-0f-3">
                                <input className="ac-input--small " ref={this.imageValueRef} name="value" id="textValue" placeholder="value with unit"/> 
                            </div>
                            <div className="col span-1-0f-3">
                                <button type="button" className="addPropety" onClick={this.addTextProperty} >Add Property</button>
                            </div>
                            <hr/>
                        </div>
                       
                       <button type="button"  onClick={this.addText}>Add</button>
                   </Panel>
                       
                   
                   </Collapse>
                </div>
                
                    
                </div>

            </div>
        );
     

        
    }
}


function mapDispatchToProps(dispatch){
    return bindActionCreators(structureAction,dispatch);
}
export default connect(null,mapDispatchToProps) (ElementSelection);