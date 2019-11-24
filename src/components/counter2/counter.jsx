import React from 'react';
const Counter = () => {
    return ( 
        <div>
                <p className="badge badge-warning m-2">{0}</p>
                <button className="btn btn-primary m-2">Increase</button>
                <button className="btn btn-danger">Decrease</button>
            </div>
     );
}
 
export default Counter;