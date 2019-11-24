import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = { 
      count:0,
      values:[
        {id:1, value:5},
        {id:2, value:3},
        {id:3, value:7},
        {id:4, value:0},
      ]
     }
     handleIncrease =()=>{
       this.setState({ count:this.state.count+1  });
     }
    render() { 
        return ( 
            <div>
                {this.state.values.map((value,index) => <Counter key={index} value={value.value} onIncrease={this.handleIncrease} onDelete={this.handleDelete}/>)}
                
            </div>
         );
    }
}
 
export default Counters;