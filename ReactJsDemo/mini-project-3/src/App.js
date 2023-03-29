import React, { useEffect, useState } from "react";
import Control from "./components/Control";
import Form from "./components/Form";
import ListTask from "./components/ListTask";
import Title from "./components/Title";
function App() {

  // Tạo mock data
  const listTasks = [
    {taskId:1, taskName:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis ea c", level:"Small"},
    {taskId:2, taskName:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis ea c", level:"Medium"},
    {taskId:3, taskName:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis ea c", level:"High"},
  ];

  const [tasks,setTasks]= useState(()=>{
    const lists = JSON.parse(localStorage.getItem('tasks'));
    if(lists===null){
      return listTasks;
    }else{
      return lists;
    }
  });
  const [isToggle,setIsToggle]= useState(false);
  const handleToggle = (toggle)=>{
    setIsToggle(toggle);
  }
  // 4.4
  const [task, setTask] = useState({});
  const handleAddTask = (task)=>{
    setTasks(prev=>{
      // tạo id task tự tăng
      let taskIdAdd = prev.length <=0?1:prev[prev.length-1].taskId +1;
      const newTask ={
        taskId:taskIdAdd,
        taskName:task.taskName,
        level:task.level
      }
      return [...prev,newTask]
    })
  }
  // 4.5: Chức năng Edit Task 
  const handleEdit = (task)=>{
    setTask(task);
    setIsToggle(true)
  }
  // Cập nhât tasks
  const handleUpdate = (task)=>{
    setTasks(prev =>{
      for (let index = 0; index < prev.length; index++) {
        if(prev[index].taskId === task.taskId){
          prev[index]=task;
        }
      }
      return [...prev];
    })
  }
  //4.6: Chức năng Delete Task 
  const handleDelete=(task)=>{
    setTasks(prev=>{
      let newTasks = prev.filter(x=>x.taskId !== task.taskId);
      return newTasks;
    })
  }
  // khi task thay đổi, cập nhật và lưu lại trong localStorage
  useEffect(()=>{
    // khi tasks thay đổi, cập nhật localStorage
    if(tasks.length===0) return;
    localStorage.setItem('tasks',JSON.stringify(tasks));
  },[tasks])
  return (
    <div className="container">
      {/* TITLE : START */}
      <Title />
      {/* TITLE : END */}
      {/* CONTROL (SEARCH + SORT + ADD) : START */}
      <Control onToggle={handleToggle} />
      {/* CONTROL (SEARCH + SORT + ADD) : END */}
      {/* FORM : START */}
      { isToggle? <Form 
                      onToggle={handleToggle} 
                      renderTask={task} 
                      onAdd = {handleAddTask}
                      onEdit = {handleUpdate}
                      />
                    :""}
      
      {/* FORM : END */}
      {/* LIST : START */}
      <ListTask renderListTasks = {tasks}   
            onEdit = {handleEdit}
            onDelete = {handleDelete} />
    </div>
  );
}

export default App;
