// import man from '../man.png'
import logo from '../contants/logo.svg'
import note from '../contants/note.svg'
import icon from '../contants/icon.svg'
import li from   '../contants/li.svg'
import join from '../contants/join.svg'
import { useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react'
import TaskContext from '../Context/Taskcontext'
import Loginrr from './Loginrr'


const Login = () => {
  const{n,sn}=useContext(TaskContext);
  const navigate = useNavigate();

  const input=(e)=>{
    sn(e.target.value)
  };
  return (
    <div className="lmain flex h-screen w-screen bg-white">

      <div className=" left h-full w-6/12 " >

        <img src={logo} alt="man" className="man-logo ml-[155px] mt-[83px] mb-6" />
        <h1 className=" font-bold text-[40px] ml-[137px]  ">Keep life simple</h1>
        <p className="text-[28px] ml-[137px] text-[#808080] font-[400]  ">Store all your notes in a simple and <br />intuitive app that helps you enjoy what is<br /> most important in life.</p>
      </div>
      <div className="right h-full w-6/12 bg-[#fffdfa] ">

      
        <div>
          <img src={note} alt="pen" className='ml-[200px] mt-40'/>
        </div>
        <button onClick={(e)=>navigate("/Loginrr")} className='mx-[210px] my-20 h-[50px] w-[330px] bg-[#F7685C] rounded-lg text-white font-semibold text-[20px] flex items-center 
              justify-center'><img src={icon} alt="icon" />
          <span className='ml-2'>Join with Google</span>
        </button>
        <div> 
          <h3 className='text-[#A8A8B3] ml-[208px] -mt-7 flex items-center '><img src={li} alt='li'/>
           <span className='ml-3 mr-3'> or join anonymously  </span><img src={li} alt='li'/></h3>
        </div>
        <div>
          <input type="text"  placeholder='Type your secret codename' 
          className='ml-[216px] p-2 mt-7 rounded-lg focus-visible:outline-none border 
           border-[#A8A8B3]   h-[50px] w-[330px] ' onChange={input}/>

        <button className='ml-[216px] my-10 h-[50px] w-[330px] bg-[#30C58D] rounded-lg text-white font-semibold text-[20px] flex items-center 
              justify-center 'onClick={(e)=>navigate("/Note") }><img src={join} alt="icon" />
          <span className='ml-2'>Join with Google</span>
        </button>
        </div>

      </div>

    </div>
  )
}
export default Login;
