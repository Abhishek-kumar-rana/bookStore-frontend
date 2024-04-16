import React from 'react'
import Home from './Home/Home'
// import {useForm} from 'react-hook-form';

// import Course from './components/Course'
// import {} from 'react-router-dom'
import {Routes,Route, Navigate} from 'react-router-dom'
import Courses from './courses/Courses'
import Signup from './components/Signup'
import Contact from './contact/Contact'
import About from './components/About'
import Aboutus from './About/Aboutus'
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider'

function App() {

  const [authUser,setAuthUser] = useAuth();
    console.log(authUser);
  return (
    <>
   <div className=' dark:bg-slate-900 dark:text-white'>
   <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/course' element={authUser?<Courses/>:<Navigate to='/signup'/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/about' element={<Aboutus/>}/>
       <Route path='/about/signup' element={<Signup/>}/>
      <Route path='/contact/signup' element={<Signup/>}/>
    </Routes>
    <Toaster />  
   </div>


    </>
  )
}

export default App
