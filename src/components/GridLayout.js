import React,{Component} from 'react';
import Cell from './Cell';

class GridLayout extends Component{
    constructor(props){
        super(props);
        this.drawCells=this.drawCells.bind(this);
        this.count=this.props.offset-1;
       
    }
    componentWillReceiveProps(newProps){
        this.count=newProps.offset-1;

        console.log(this.count);
    }
    render(){
        const n=this.props.gridSize.rows*this.props.gridSize.columns;
        let rowCount=this.props.gridSize.rows;
        let colCount=this.props.gridSize.columns;
        let remainder=0;
        
        if(this.props.products.length===0){
            return(<h1>Nothing to display</h1>);
        }
        else if((this.props.products.length+1)<n){
            rowCount=Math.floor(this.props.products.length/colCount);
            remainder=Math.ceil(((this.props.products.length/colCount)-rowCount)*colCount);

            if(remainder===0){
               return(this.drawCells(rowCount,colCount));
            }
            else{
                let arr=[{row:rowCount,col:colCount},{row:1,col:remainder}];

                return(
                arr.map((i)=>{
                    console.log(i);
                   return this.drawCells(i.row,i.col);
                })
                );
            }
        }
        else{
            return(
                this.drawCells(rowCount,colCount)
            );
        }
     
    }

    drawCells(row,column){
        
        return(
            <> 
            {[...Array(row)].map((e, i) =>
                
                <div key={i} className="row">
                    {[...Array(column)].map((e, i) =>
                    { 
                        this.count++;
                        if(this.count<this.props.products.length)
                       return( <div key={this.props.products[this.count].name} className={`col span-1-of-${this.props.gridSize.columns}`}>
                                <Cell item={this.props.products[this.count]}/>
                             </div>
                       );
                    }
                    )}
                </div>
                )}
            </>
        );
    }

}

export default GridLayout;