import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "./Loading.js";
import Backbutton from "./backbutton.js";
import axios from "axios";

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const handledeletebook = () => {
    setLoading(true)
    axios
      .delete(`http://localhost:5555/books/${id}`)
      .then(() => {
        setLoading(false);
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        console.log(error?.message || "failed to delete");
      });
  };

  return (
    <div className="p-4">
      <Backbutton />
      <h1 className="text-3xl my-4">DeleteBook</h1>
      {loading ? (
        <Loading />
      ) : (
        <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
            <h3 className="text-2xl">Are you sure you want to delete this book</h3>
            <button className="p-4 bg-red-600 text-white m-8 w-full" onClick={handledeletebook}>Yes, Delete it</button>
        </div>
      )}
    </div>
  );
};

export default DeleteBook;
