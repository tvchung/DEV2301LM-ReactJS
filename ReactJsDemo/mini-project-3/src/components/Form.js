import React, { useEffect, useState } from "react";

export default function Form({onToggle,renderTask, onAdd, onEdit}) {
  let initTask = {
    taskId:0,
    taskName:'',
    level:1
  }
  console.log("renderTask:",renderTask);
  const [task, setTask] = useState(initTask)

  useEffect(()=>{
    if(renderTask.taskId === undefined){

    }else{
      setTask(renderTask);
    }
  },[renderTask])
  const handleChange = (ev)=>{
    let name=ev.target.name;
    let value=ev.target.value;
    setTask(task =>{
      return{
        ...task,
        [name]:value,
      }
    })
  }
  const handleToggle=()=>{
    onToggle(false)
  }
  const handleSubmit = (event)=>{
    event.preventDefault();
    if(renderTask.taskId === undefined){
      onAdd(task);
    }else{
      onEdit(task)
    }
  }
  return (
    <div className="row">
      <div className="col-md-offset-7 col-md-5">
        <form action="" method="POST" className="form-inline" 
          onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="sr-only" htmlFor="">
              label
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Task Name"
              name="taskName"
              value={task.taskName || ''}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label className="sr-only" htmlFor="">
              label
            </label>
            <select
              name="level"
              value={task.level || "Small"}
              onChange={handleChange}
              id="inputDs"
              className="form-control"
              required="required"
            >
              <option value={"Small"}>Small</option>
              <option value={"Medium"}>Medium</option>
              <option value={"High"}>High</option>
            </select>
          </div>
          <button type="button" className="btn btn-primary"
            onClick={handleSubmit}>
            Submit
          </button>
          <button type="button" className="btn btn-default" 
            onClick={handleToggle}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}
