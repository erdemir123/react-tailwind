import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddTodo = ({ get }) => {
  const [title, setTitle] = useState("");
  const [desc, setDecs] = useState("");
  const url = "https://axios-example-cw.herokuapp.com/api/tutorials";
  const handleClick = (e) => {
    if(title && desc){
        const newTodo = { title: title, description: desc };
        e.preventDefault();
        postTodos(newTodo);
        setTitle("")
        setDecs("")
        
    }
    
  };
  const postTodos = async (newTodo) => {
    try {
      await axios.post(url, newTodo);
      get();
    } catch (error) {
      console.log(error);
    }
  };
  const notify = () => toast.warning("ToDo added!",{
    autoClose:3000,
    closeOnClick:true,
    pauseOnHover:true,
    position:"top-right"
    
  })
  return (
    <div className="block p-6 rounded-lg shadow-xl max-w-xl bg-slate-300 mx-auto my-4">
      <form onSubmit={handleClick}>
        <div className="form-group mb-6">
          <input
            type="text"
            className="form-control block
        w-full
        px-3
        py-1.5
        text-
        font-normal
        text-gray-100
        bg-slate-100 bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        required
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleInput125"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group mb-6">
          <input
            type="Text"
            className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-slate-100 bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleInput126"
            placeholder="Description"
            value={desc}
            onChange={(e) => setDecs(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="
      w-full
      px-6
      py-2.5
      bg-blue-200
      text-slate-600
      font-bold
      text-md
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-slate-600 hover:shadow-lg hover:text-white duration-1000
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
      onClick={notify}
        >
          SUBMİT
        </button>
        <ToastContainer />
      </form>
    </div>
  );
};

export default AddTodo;
