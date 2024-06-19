import React from 'react'
import { useEffect,useState } from 'react'
import Loading from './Loading'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Backbutton from './backbutton.js'


const Showbook = () => {
  const [book,setBook] = useState({})
  const [loading,setLoading] = useState(false)
  const {id} = useParams();
  useEffect(()=>{
   setLoading(true)
   axios.get(`http://localhost:5555/books/${id}`)
   .then((res)=>{
    setBook(res.data)
    setLoading(false)
   })
   .catch((error)=>{
       console.log(error?.message || "invalid id");
       setLoading(false)
   })
  },[id])
  return (
    <div className='p-4'>
      <Backbutton/>
      <h1 className='text-3xl my-4'>Show Book</h1>
      {
        loading ? (<Loading/>) :
        (
          <div className='flex flex-col border-2 border-sky-400 rounded-3xl w-fit p-4'>
           <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Id</span>
            <span>{book._id}</span>
            </div>

            <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Title</span>
            <span>{book.title}</span>
            </div>

            <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Author</span>
            <span>{book.author}</span>
            </div>

            <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>publishYear</span>
            <span>{book.publishYear}</span>
            </div>

            <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Created Time</span>
            <span>{book.createdAt}</span>
            </div>
            <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Updated Time</span>
            <span>{book.updatedAt}</span>
            </div>
            
          </div>
        )
      }
    </div>
  )
}

export default Showbook
