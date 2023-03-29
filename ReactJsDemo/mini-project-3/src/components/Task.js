import React from 'react'

export default function Task({renderTask,stt, onEdit,onDelete}) {
  let elementLevel = "";
  if(renderTask.level === "Small"){
    elementLevel=(<span className="label label-default">Small</span>);
  }else if(renderTask.level==="Medium"){
    elementLevel=(<span className="label label-info">Medium</span>);
  }else{
    elementLevel=<span className="label label-danger">High</span>;
  }
  const handleEdit=(task)=>{
    onEdit(task)
  }
  const handleDelete=(task)=>{
    onDelete(task)
  }
  return (
    <>
         <tr>
            <td className="text-center">{stt}</td>
            <td>
              {renderTask.taskName}
            </td>
            <td className="text-center">
                {elementLevel}
            </td>
            <td>
              <button type="button" className="btn btn-warning"
                onClick={()=>handleEdit(renderTask)}>
                Edit
              </button>
              <button type="button" className="btn btn-danger"
                onClick={()=>handleDelete(renderTask)}
                >
                Delete
              </button>
            </td>
          </tr>
    </>
  )
}
