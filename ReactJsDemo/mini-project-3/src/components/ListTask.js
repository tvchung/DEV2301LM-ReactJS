import React from "react";
import Task from "./Task";

export default function ListTask({renderListTasks, onEdit,onDelete}) {
  const handleEdit = (task)=>{
    onEdit(task);
  }
  const handleDelete =(task)=>{
    onDelete(task);
  }
  let elementTask = renderListTasks.map((task,index)=>{
    return (
      <Task  key={index} stt={index+1} renderTask = {task}
            onEdit={handleEdit}
            onDelete={handleDelete}
            />
    )
  })
  return (
    <div className="panel panel-success">
      <div className="panel-heading">List Task</div>
      <table className="table table-hover ">
        <thead>
          <tr>
            <th style={{ width: "10%" }} className="text-center">
              #
            </th>
            <th>Task</th>
            <th style={{ width: "20%" }} className="text-center">
              Level
            </th>
            <th style={{ width: "20%" }}>Action</th>
          </tr>
        </thead>
        <tbody>
            {/* <Task />
            <Task />
            <Task />
            <Task /> */}
            {elementTask}
        </tbody>
      </table>
    </div>
  );
}
