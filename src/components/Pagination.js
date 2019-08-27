import React,{Component} from 'react';
class Pagination extends Component{

    constructor(props){
        super(props);
        this.state={activePage:0};
       
    }
  
    render(){
        
            //  {[...Array(n)].map((e, i) => <span className="busterCards" key={i}>♦</span>)}
        const n=this.props.gridSize.rows*this.props.gridSize.columns;
        const pageCount=Math.ceil((this.props.products.length/n));
        
        return(

            <div className="pagination-box">
                <div className="page-buttons">
                {[...Array(pageCount)].map((e, i) => 
                    <a onClick={()=> {this.props.changePage(n*i); 
                        this[this.state.activePage].style.padding="5px 8px";
                               this.setState({activePage:i},()=>this[this.state.activePage].style.padding="8px 13px");

                        }}
                         key={i} ref={e=>this[i]=e}
                        className="page-button">{i+1}</a>
                    )}
                
                </div>
            </div>
            
        );
    }

}


export default Pagination;