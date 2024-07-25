import logo from '../contants/logo.svg'
import note from '../contants/note.svg'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios';


const Loginrr = () => {
    const [email,setemail] =useState("");
    const [password,setpassword] =useState("");
    
    
    const handelsumbit=async(e)=>{
        e.preventDefault();
        const user={email,password};
        try{
          const response = await axios.post("/api/login",user)
          console.log("Login successful",response.data);
            navigate("/Note");
          }catch(error){
            console.log("loginrr error");
          }
    }

    
    const navigate = useNavigate();
    return (
        <div className="lmain flex h-screen w-screen bg-white">

            <div className=" left h-full w-6/12 " >

                <img src={logo} alt="man" className="man-logo ml-[155px] mt-[83px] mb-6" />
                <h1 className=" font-bold text-[40px] ml-[137px]  ">Keep life simple</h1>
                <p className="text-[28px] ml-[137px] text-[#808080] font-[400]  ">Store all your notes in a simple and <br />intuitive app that helps you enjoy what is<br /> most important in life.</p>
            </div>
            <div className="right h-full w-6/12 bg-[#fffdfa] ">
                <div>
                    <img src={note} alt="pen" className='ml-[200px] mt-40' />
                </div>
                <form onSubmit={handelsumbit}>
                <div className='mt-10'>
                    <input type="text" placeholder='Email'
                        className='ml-[216px] p-2 mt-7 rounded-lg focus-visible:outline-none border focus:border-[2.30px]
                  focus:border-[#30C58D]
            border-[#A8A8B3]   h-[50px] w-[330px]  ' onChange={(e)=>setemail(e.target.value)} />


                    <input type="password" placeholder='Password'
                        className='ml-[216px] p-2 mt-7 rounded-lg focus-visible:outline-none border border-[#A8A8B3] focus:border-[2.30px]
                  focus:border-[#30C58D] h-[50px] w-[330px]' onChange={(e)=>setpassword(e.target.value)} />
                    <button className='ml-[216px] my-10 h-[50px] w-[330px] bg-[#30C58D] rounded-lg text-white font-semibold text-[20px] flex items-center 
              justify-center '>
                        <span className='ml-2'>Login</span>    </button>
                    <h1 className='ml-[270px]'>Already on NotePad?<span className='text-[#30C58D] font-medium text-lg  ml-2'><button onClick={(e)=> navigate("/SignUp")} > Sign Up</button></span></h1>

                </div>
                </form>

            </div>

        </div>
    )
}
export default Loginrr;