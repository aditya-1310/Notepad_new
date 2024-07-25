import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import TaskContext from "../Context/Taskcontext";
const Card = ()=>{
    const {addNewTask} = useContext(TaskContext);
    const [task,settask] = useState([{title:'', description:''}]);
     const navigate = useNavigate();

    let handelinputchange =(e)=>{
        settask({
            ...task,
            [e.target.name]: e.target.value,
           });
    };
    let handelsubmit=(e)=>{
        e.preventDefault();
        addNewTask(task);
        settask({});
        navigate("/Note"); 
    }

    return (
        <div className="card">
             <h3 className="ml-[900px] mt-[60px] ">Add new Task</h3>
             <form onSubmit={handelsubmit}>
             <div className="mt-10">
                <label className="ml-60 ">Title</label>
                <input type="text"  placeholder='Type your secret codename' 
          className='ml-[216px] p-2 mt-7 rounded-lg focus-visible:outline-none border 
           border-[#A8A8B3]   h-[50px] w-5/6 '
                name="title"
                spellCheck={false} 
                data-ms-editor={true}
                onChange={handelinputchange}
                value={task.title ||''}
               />
                        </div>
                <div className="mt-9">
                <label className="ml-60 ">Description</label>
                <textarea  placeholder='Type your secret codename' 
          className='ml-[216px] p-2 mt-7 h-20 rounded-lg focus-visible:outline-none border 
           border-[#A8A8B3]   h-[50px] w-5/6 '
             name="description"
                spellCheck={false} 
                data-ms-editor={true}
                onChange={handelinputchange ||''}
               
           />
           </div>
           <button className='ml-[216px] my-10 h-[50px] w-[330px] bg-[#30C58D] rounded-lg text-white font-semibold text-[20px] '>
                SUBMIT
            </button>
          
           </form>
        </div>
    )
}
export default Card;