import React from 'react';
const Btn = ({onIncrement, onDelete}) => {
    return ( 
        <div>
            <button onClick={onIncrement} className='btn btn-primary m-2'>Increment</button>
            <button className='btn btn-secondary m-2'>Decrement</button>
            <button className='btn btn-danger m-2' onClick={onDelete}>X</button>

        </div>
     );
}
 
export default Btn;