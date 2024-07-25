import pen from '../contants/pen.svg';
import tick from '../contants/tick.svg';
import del from '../contants/del.svg';
import { useContext, useState } from 'react';
import { formateDate } from "../contants/Dateutil";
import TaskContext from '../Context/Taskcontext';

const Task = ({ task: lili }) => {
    const { title, description, createdDate, taskId } = lili;
    const { deleteTask, editTask } = useContext(TaskContext);
    const [task, settask] = useState({ title, description, taskId });
    const [editing, setediting] = useState(false);

    const handelinputchange = (e) => {
        settask({
            ...task,
            [e.target.name]: e.target.value,
        });
    };

    if (editing) {
        return (
            <div className="note_box h-70 w-70 p-4 rounded-lg bg-[#FBEB95] flex flex-col justify-between">
                <div>
                    <label className="block mb-2">Title</label>
                    <input
                        type="text"
                        placeholder="TITLE"
                        className="block w-full p-2 rounded-lg border border-[#A8A8B3] focus-visible:outline-none"
                        name="title"
                        spellCheck={false}
                        data-ms-editor={true}
                        onChange={handelinputchange}
                        value={task.title}
                    />
                </div>
                <div className="meta text-gray-600 my-4">
                    {formateDate(createdDate)}
                </div>
                <div>
                    <label className="block mb-2">Description</label>
                    <textarea
                        placeholder="Description"
                        className="block w-full p-2 rounded-lg border border-[#A8A8B3] focus-visible:outline-none"
                        name="description"
                        spellCheck={false}
                        data-ms-editor={true}
                        onChange={handelinputchange}
                        value={task.description}
                    />
                </div>
                <div className="foot flex items-center justify-evenly mt-4">
                    <button onClick={() => { editTask(task); setediting(false); }}><img src={tick} alt="tick" className='h-8 w-8' /></button>
                    <button onClick={() => setediting(false)}><img src={del} alt="del" className='h-5 w-5' /></button>
                </div>
            </div>
        );
    } else {
        return (
            <div className="note_box h-60 w-60 p-4 rounded-lg bg-[#FBEB95] flex flex-col justify-between">
                <div className="header text-xl font-bold mb-2">
                    {title}
                </div>
                <div className="meta text-gray-600 mb-4">
                    {formateDate(createdDate)}
                </div>
                <div className="description flex-grow">
                    {description}
                </div>
                <div className="foot flex items-center justify-evenly mt-4">
                    <button onClick={() => setediting(true)}><img src={pen} alt="pen" className='h-5 w-5' /></button>
                    <button onClick={() => deleteTask(taskId)}><img src={del} alt="del" className='h-5 w-5' /></button>
                </div>
            </div>
        );
    }
};

export default Task;
