import React from 'react'
import Signup from './Signup'
import { Link } from 'react-router-dom'
import {useForm} from 'react-hook-form'
import axios  from 'axios'
import toast from 'react-hot-toast'

function Loginpage() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    const userInfo={
        email:data.email,
        password:data.password,
    }

    await axios.post("https://book-store-api-vtcd.vercel.app/user/login",userInfo)
    .then((res)=>{
        console.log(res.data);
        if(res.data){
            // alert("Loggedin successfull..");
            toast.success("Loggedin successfull..");
            document.getElementById('my_modal_3').close();
            window.location.reload();
        }
        localStorage.setItem("Users",JSON.stringify(res.data.user));
    }).catch((error)=>{
        if(error.response){
            console.log("error : "+error);
            // alert("Error : "+error.response.data.message);
            toast.error("Error : "+error.response.data.message);
        }
    })



  }

  // console.log(watch("example")) // watch input value by passing the name of it


  return (
    <>
    <div>
    <dialog id="my_modal_3" className="modal">
  <div className="modal-box dark:text-black ">
  <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" className="btn  btn-sm btn-circle btn-ghost absolute right-2 top-2"
      onClick={() => document.getElementById('my_modal_3').close()} >
        ✕</Link>
   
    <h3 className="font-bold text-lg">Login</h3>

    {/* email */}
    <div className=' mt-4 space-y-2 '> 
        <span>Email </span>
        <br />
        <input 
        type="email"
        placeholder='Enter your email'
        className='w-80 px-3 py-1 border rounded-md outline-none'        
        {...register("email", { required: true })}
        /> <br />
              {errors.email && <span className=' text-red-600 dark:textz-red-500'>This field is required</span>}
    </div>
    {/* password */}
    <div className=' mt-12 space-y-2 ' > 
        <span>Password </span>
        <br />
        <input 
        type="password"
        placeholder='Enter your password'
        className='w-80 px-3 py-1 border rounded-md outline-none'        
        {...register("password", { required: true })}
        /> <br />
              {errors.password && <span className=' text-red-600 dark:textz-red-500'>This field is required</span>}
    </div>

    {/* Button */}
    
     <p className='flex justify-around mt-8 '>
        <button className="btn bg-pink-500 text-white px-3 py-1 rounded-md outline-none hover:bg-pink-600 duration-200" type='submit'>Login</button>
        <Link to="signup" className=' py-4'>Not registered? <span className=' underline text-blue-500 cursor-pointer'>SignUp</span>{" "}
        </Link>  
        
        
    </p>    

    </form>

  </div>
</dialog>
    </div>
    </>
  )
}

export default Loginpage