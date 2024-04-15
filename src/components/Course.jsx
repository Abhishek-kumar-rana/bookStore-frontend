import React, { useEffect, useState } from 'react';
// import list from './../../public/list.json';
import { Link } from 'react-router-dom';
import Cards from './Cards';
import axios from 'axios'


function Course() {

   const [book,setBook]=useState([]);
  useEffect(()=>{
    const getbook=async ()=>{
      try {
        const res= await axios.get("https://book-store-api-vtcd.vercel.app/book");
        console.log(res.data);
        setBook(res.data);
      } catch (err){
        console.log("error : ",err);
      }
    }
    getbook();
  },[])



  return (
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
      <div className=' items-center justify-center text-center'>
        <h1 className=' pt-20 text-2xl md:text-4xl'>We are delighted to have you <span className='text-pink-500'> Here! :)</span></h1>
        <p className='mt-12'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa velit accusantium, repellendus ratione adipisci assumenda nihil vero inventore corrupti autem laudantium quam debitis sit. Quaerat ex adipisci aliquid nobis voluptatum Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, iusto!
        </p>
        <Link to="/">
          <button className='mt-6 bg-pink-500 text-white px-3 py-2 rounded-md hover:bg-pink-700 duration-300'>Back</button>
        </Link>
      </div>
      <div className='mt-12 grid grid-cols-1 md:grid-cols-4 gap-4'>
        {
          book.map((item) => (
            <Cards key={item.id} item={item} />
          ))
        }
      </div>
    </div>
  );
}

export default Course;
