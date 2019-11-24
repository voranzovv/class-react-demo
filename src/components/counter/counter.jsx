import React, { Component } from 'react';
class Counter extends Component {
    state = { 
        count:this.props.value,
     }

     handleIncrease =() =>{
         this.setState({ count:this.state.count+1  });
     }

     handleDecrease =() =>{
        this.setState({ count:this.state.count-1  });
    }
    render() { 
        return ( 
            <div>
                <p className="badge badge-warning m-2">{this.state.count}</p>
                <button className="btn btn-primary m-2" onClick={this.handleIncrease}>Increase</button>
                <button className="btn btn-danger" onClick={this.handleDecrease}>Decrease</button>
                <button className="btn btn-secondary m-2" onClick={this.handleDelete}>Delete</button>
            </div>
         );
    }
}
 
export default Counter;