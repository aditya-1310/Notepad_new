import penw from '../contants/penw.svg';
import home from '../contants/home.svg';
import plus from '../contants/plus.svg';
import exit from '../contants/exit.svg';
import moon from '../contants/moon.svg';
import sun from '../contants/sun.svg';
import axios from 'axios';
import Task from './Task';
import { useContext,useState } from "react";
import TaskContext from "../Context/Taskcontext";
import { useNavigate } from "react-router-dom";
import serach from "../contants/serach.svg"

const Note = () => {
    const { taskList, n } = useContext(TaskContext);
    const navigate = useNavigate();
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const handelogout =async()=>{
        try{
            await axios.post("/api/logout");
            navigate('/');
        }catch(e){
            console.error("logout failed", e);  
    }
}
    return (
        <div className={`flex h-screen w-screen overflow-hidden ${darkMode ? 'bg-[#343539] text-white' : 'bg-white text-black'}`}>
            <div className="side_nav fixed bg-[#3C3D43] h-full w-[100px] flex flex-col items-center py-8">
                <img src={penw} alt="pen" className='mt-4' />
                <button>
                    <img src={home} alt="home" onClick={() => navigate("/")} className='h-22 w-22 mt-60 mr-7' />
                </button>
                <div className="plus">
                    <button>
                        <img src={plus} onClick={() => { navigate('/addtask') }} alt="home" className='ml-1 mt-20' />
                    </button>
                </div>
                <button>
                    <img src={exit} alt="home" onClick={handelogout} className='ml-3 mt-44' />
                </button>
            </div>
            <div className={`ml-[100px] flex-1 flex flex-col overflow-hidden ${darkMode ? 'bg-[#343539] text-white' : 'bg-white text-black'}`}>
                <div className='search flex justify-center mt-4'>
                    <img src={serach} alt="search" className='mt-3 mr-2' />
                    <input type="text" placeholder='Search' className={`h-8 w-3/5 p-2 mt-3 focus-visible:outline-none border rounded-md ${darkMode ? 'bg-[#343539] text-white border-[#94949c]' : 'border-[#94949c]'}`} />
                    <img src={darkMode ? sun : moon} alt='toggle dark mode' className='mt-3 ml-2 cursor-pointer' onClick={toggleDarkMode} />
                </div>
                <div className='p-10'>
                    <h1 className='ml-10 mt-10'>Hello, {n}! 👋🏼</h1>
                    <h1 className='ml-10 mt-5'>All your notes are here, in one place!</h1>
                </div>
                <div className='main overflow-auto p-10 text-black'>
                    <div className='mm flex flex-wrap gap-4'>
                        {taskList.map((task) =>
                            <Task task={task} key={task.taskId} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Note;