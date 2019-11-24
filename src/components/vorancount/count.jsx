import React, { Component } from 'react';
import Result from './result';
import Btn from './btn';
class Count extends Component {
    state = {
        count:0
      }

      handleIncrement =()=>{
          this.setState({ count:this.state.count+1  });
      }

      handleDelete =()=>{
          this.setState({ count:0  });
      }

    render() { 
        return ( 
            <div>
                <Result value={this.state.count}/>
                <Btn onIncrement={this.handleIncrement} onDelete={this.handleDelete}/>
            </div>
         );
    }
}
 
export default Count;