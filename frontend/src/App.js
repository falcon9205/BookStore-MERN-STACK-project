import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './Component/Home'
import CreateBook from './Component/CreateBook'
import DeleteBook from './Component/DeleteBook'
import Editbook from './Component/Editbook'
import Showbook from './Component/Showbook'

const App = () => {
  return (
    <>
     <Routes>
         <Route path = '/' element={<Home/>}/>
         <Route path = '/books/create' element={<CreateBook/>}/>
         <Route path = '/books/delete/:id' element={<DeleteBook/>}/>
         <Route path = '/books/details/:id' element={<Showbook/>}/>
         <Route path = '/books/edit/:id' element={<Editbook/>}/>
     </Routes>
    </>
  )
}

export default App
