import React, { useEffect, useState } from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import list from './../../public/list.json'
import Cards from './Cards';
import axios from 'axios';
function Freebooks() {

    const [book,setBook]=useState
    ([]);
  useEffect(()=>{
    const getbook=async ()=>{
      try {
        const res= await axios.get("https://book-store-api-vtcd.vercel.app/book");
        // console.log(res.data);
        const data =res.data.filter((data) => data.category === 'Free');
        setBook(data);
      } catch (err){
        console.log("error : ",err);
      }
    }
    getbook();
  },[])

    // const filterdata = list.filter((data) => data.category === 'Free');
    // console.log(filterdata);

    var settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        autoplay: true, // Auto slide enabled
        autoplaySpeed: 3000, // Adjust the speed (in milliseconds) as needed
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    

    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
                <div>
                    <h1 className=' font-semibold text-xl pb-2'>Free Offered Courses</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit tempore itaque quibusdam autem. Commodi obcaecati est beatae minus minima. Molestiae.
                    </p>
                </div>

                <div>
                    <div className="slider-container px-5 mb-10">
                        <Slider {...settings}>
                            {book.map((item)=>(
                                <Cards item={item} key={item.id}/>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Freebooks