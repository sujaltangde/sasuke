import React from 'react'
import { Link } from 'react-router-dom'


export const Home = () => {
  return (
   <>
    
   <div className='min-h-screen pt-12 text-black'>


    <div className='flex justify-between items-center'>


      <div className='px-12 pt-12 w-1/2'>
      <img className='rounded-2xl' src="https://media.gettyimages.com/id/185123904/photo/emptying-food-leftovers-into-rubbish-bin.jpg?s=612x612&w=0&k=20&c=h5P4dxCcFNTEUVPpoU_aWPrJoP1N4O4kH15ghQgwMoU=" alt="" />
     
      </div>
      <div className=' w-1/2'>
              <div className='pt-12 '>
                <p className='text-green-600 text-8xl font-bold' >Reduce Food Waste</p>
              </div>
              <div className='pt-8'>
                <span className='bg-green-500 text-green-900 font-semibold px-12 py-2 text-2xl rounded-xl italic'>
                  Save Environment
                </span>
              </div>

              <div className='pt-8 text-black'>

              RotiRakshak is dedicated to combating food waste and hunger by connecting surplus food from businesses with those in need. Our platform aims to create a sustainable solution for food redistribution, ensuring that no edible food goes to waste while also supporting communities in need.

              </div>

              <div className='pt-6'>
                <Link to="/about" className='px-7 bg-green-800 text-white py-2 font-bold rounded-xl'>Read More</Link>
              </div>

      </div>
    </div>

   </div>
   
   </>
  )
}
