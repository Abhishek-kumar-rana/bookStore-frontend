import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Loginpage from './Loginpage'
import {useForm} from 'react-hook-form'
import axios  from 'axios'


import toast from 'react-hot-toast'


function Signup() {

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = async (data) => {
        const userInfo={
            fullname:data.fullname,
            email:data.email,
            password:data.password,
        }

        await axios.post("https://book-store-api-vtcd.vercel.app/user/signup",userInfo)
        .then((res)=>{
            console.log(res.data);
            if(res.data){
                // alert("signup successful..");
                toast.success('SignUp Successfully!');
                navigate(from,{replace: true});
                
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
      
      
      
    return (
        <>
            <div>
                <div id="my_modal_3" className=" flex h-screen items-center justify-center ">
                    <div className="modal-box dark:text-black dark:bg-white">
                        <form method="dialog"  onSubmit={handleSubmit(onSubmit)}>
                            {/* if there is a button in form, it will close the modal */}
                            <Link to="/" className="btn  btn-md btn-circle btn-ghost absolute right-2 top-2"
                            onClick={() => document.getElementById('my_modal_3').close()}
                            >✕</Link>
                       
                        <h3 className="font-bold text-lg">SignUp</h3>

                        {/* name */}

                        <div className=' mt-4 space-y-2'>
                            <span>Name </span>
                            <br />
                            <input
                                type="text"
                                placeholder='Enter your Name'
                                className='w-80 px-3 py-1 border rounded-md outline-none'
                                {...register("fullname", { required: true })}

                            /> <br />
                            {errors.fullname && <span className=' text-red-600 dark:textz-red-500'>This field is required</span>}
                        </div>

                        {/* email */}
                        <div className=' mt-4 space-y-2'>
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

                        <div className='flex justify-around mt-8 '>
                            <button className="btn bg-pink-500 text-white px-3 py-1 rounded-md outline-none hover:bg-pink-600 duration-200" type='submit'>SignUp</button>
                            <span className=' py-4'>Have account? {" "}
                                <Link to="/" className=' underline text-blue-500 cursor-pointer'
                                    // onClick={() => document.getElementById('my_modal_3').showModal()} 

                                >Login
                                </  Link>
                                {/* <Loginpage/> */}


                            </span>



                        </div>

                        </form>


                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup