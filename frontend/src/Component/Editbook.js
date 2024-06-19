// import React from 'react'
// import Backbutton from './backbutton'
// import Loading from './Loading'
// import axios from 'axios'
// import { useState,useEffect } from 'react'
// import { useNavigate, useParams } from 'react-router-dom'

// const Editbook = () => {
//   const [title,setTitle] = useState('')
//   const [author,setAuthor] = useState('')
//   const [publishYear,setPublishYear] = useState('')
//   const [loading,setLoading] = useState(false)
//   const navigate = useNavigate()
//   const {id} = useParams()
//   console.log(id);

//   useEffect(()=>{
//     setLoading(true)
//     axios.get(`http://localhost:5555/books/${id}`)
//     .then((res)=>{
//       setAuthor(res.data.author)
//       setPublishYear(res.data.publishYear)
//       setTitle(res.data.title)
//       setLoading(false)
//     })
//     .catch((error)=>{
//       console.log(error?.message || "invalid to fetching data");
//       setLoading(false)
//     })
//   },[id])

//   const handleeditbook = ()=>{
//     const data = {
//       title,
//       author,
//       publishYear
//     }
//     setLoading(true)
//   axios.put(`http://localhost:5555/books/${id}`,data)
//   .then(()=>{
//     alert("Book saved successfully")
//     setLoading(false)
//     navigate('/')
//   })
//   .catch((error)=>{
//     setLoading(false)
//     alert("An error occured")
//     console.log(error?.message || "faild to save book");
//   })
//   }
  
//   return (
//     <div className='p-4'>
//       <Backbutton/>
//       <h1 className='text-3xl my-4'>Edit Book</h1>
//       {
//         loading ? (<Loading/>) :
//         (
//           <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
//             <div className='my-4'>
//                <label className='text-xl mr-4 text-gray-500'>Title</label>
//                <input 
//                type='text'
//                value={title}
//                required
//                onChange={(e)=>setTitle(e.target.value)}
//                className='border-2 border-gray-500 py-2 w-full'
//                />
//             </div>

//             <div className='my-4'>
//                <label className='text-xl mr-4 text-gray-500'>Author</label>
//                <input 
//                type='text'
//                value={author}
//                required
//                onChange={(e)=>setAuthor(e.target.value)}
//                className='border-2 border-gray-500 py-2 w-full'
//                />
//             </div>

//             <div className='my-4'>
//                <label className='text-xl mr-4 text-gray-500'>publish Year</label>
//                <input 
//                type='text'
//                required
//                value={publishYear}
//                onChange={(e)=>setPublishYear(e.target.value)}
//                className='border-2 border-gray-500 py-2 w-full'
//                />
//             </div>
//             <button className='p-2 bg-sky-300 m-8' onClick={handleeditbook}>Save</button>
//           </div>
//         )
//       }
//     </div>
//   )
// }

// export default Editbook
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Backbutton from './backbutton';
import Loading from './Loading';

const Editbook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  
  console.log(id);

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:5555/books/${id}`)
      .then((res) => {
        setAuthor(res.data.author);
        setPublishYear(res.data.publishYear);
        setTitle(res.data.title);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error?.message || "Invalid data fetching");
        setLoading(false);
      });
  }, [id]);

  const handleEditBook = () => {
    const data = {
      title,
      author,
      publishYear
    };
    console.log(title);
    setLoading(true);
    axios.put(`http://localhost:5555/books/${id}`, data)
      .then(() => {
        alert("Book saved successfully");
        setLoading(false);
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        alert("An error occurred");
        console.log(error?.message || "Failed to save book");
      });
  };

  return (
    <div className='p-4'>
      <Backbutton />
      <h1 className='text-3xl my-4'>Edit Book</h1>
      {loading ? (
        <Loading />
      ) : (
        <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
          <div className='my-4'>
            <label className='text-xl mr-4 text-gray-500'>Title</label>
            <input
              type='text'
              value={title}
              required
              onChange={(e) => setTitle(e.target.value)}
              className='border-2 border-gray-500 py-2 w-full'
            />
          </div>

          <div className='my-4'>
            <label className='text-xl mr-4 text-gray-500'>Author</label>
            <input
              type='text'
              value={author}
              required
              onChange={(e) => setAuthor(e.target.value)}
              className='border-2 border-gray-500 py-2 w-full'
            />
          </div>

          <div className='my-4'>
            <label className='text-xl mr-4 text-gray-500'>Publish Year</label>
            <input
              type='text'
              required
              value={publishYear}
              onChange={(e) => setPublishYear(e.target.value)}
              className='border-2 border-gray-500 py-2 w-full'
            />
          </div>
          <button className='p-2 bg-sky-300 m-8' onClick={handleEditBook}>Save</button>
        </div>
      )}
    </div>
  );
};

export default Editbook;
