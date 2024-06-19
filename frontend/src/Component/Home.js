import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./Loading";
import { Link } from "react-router-dom";

import { MdOutlineAddBox } from "react-icons/md";
import Tableview from "./view/Tableview.js";
import Cardview from "./view/Cardview.js";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [show,setshow] = useState('table')
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/books")
      .then((res) => {
        setBooks(res.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error?.message || "unable to fetched");
        setLoading(false);
      });
  }, []);
  return (
    <div className="p-4 w-full">
      <div className="flex justify-center items-center gap-x-4">
        <button className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-xl" onClick={()=>{setshow('table')}}>Table</button>
        <button className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-xl" onClick={()=>{setshow('card')}}>Card</button>
      </div>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">Books List</h1>
        <Link to="/books/create">
          <MdOutlineAddBox className="text-sky-800 text-4xl" />
        </Link>
      </div>

      {loading ? (<Loading />) : (show==='table') ? (<Tableview books={books} />) : (<Cardview books={books}/>)  }
    </div>
  );
};

export default Home;
