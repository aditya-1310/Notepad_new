import { createContext,useState } from "react";
import {v4 as randomUUID} from "uuid";
const TaskContext = createContext();
const notedit =["title","description",];

const TaskProvider=({children})=>{
    const [taskList,setTaskList]=useState([]);
    const [n,sn]=useState("");

    const addNewTask=(task)=>{
                setTaskList([...taskList,{...task,createdDate:new Date(),taskId:randomUUID()}]);
    }
    const deleteTask=(taskId)=>{
        setTaskList(taskList.filter(task=>task.taskId!==taskId));
    }
    const editTask =((task)=>{
        let tempTasklist = [...taskList];
        for(let t of tempTasklist){
            if(t.taskId === task.taskId){
                notedit.forEach((element) => (t[element] = task[element]));
            }
        }
        setTaskList(taskList);
        console.log("Updated Task List:", taskList);
    });
    

    return(
        <TaskContext.Provider value={{taskList,addNewTask,deleteTask,editTask,n,sn}}>
         {children}
        </TaskContext.Provider>
    )
}

export default TaskContext;
export {TaskProvider};