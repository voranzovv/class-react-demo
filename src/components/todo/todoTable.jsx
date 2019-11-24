import React from 'react';
const TodoTable = ({tasks, onDelete}) => {
    if(tasks.length === 0){
        return(
            <p className="badge badge-warning m-2">No tasks available</p>
        )
    }
    return ( 
        <div>
        <table className="table table-dark">
            <thead>
            <tr>
                <th>No</th>
                <th>Task</th>
                <th>Description</th>
                <th>Delete</th>
            </tr>
            </thead>
            <tbody>
            {tasks.map((task, index)=>{
                return(
                    <tr key={task.id}>
                        <td><p className="badge badge-success">{index+1}</p></td>
                        <td>{task.name}</td>
                        <td>{task.desc}</td>
                        <td><button onClick={()=>onDelete(task)} className='btn btn-danger'>Delete</button></td>
                    </tr>
                )
            })}

            </tbody>
        </table>

        </div>
     );
}
 
export default TodoTable;