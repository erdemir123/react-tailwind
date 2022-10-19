import React, { useEffect, useState } from "react";
import AddTodo from "../component/AddTodo";
import axios from "axios";
import ListTodo from "../component/ListTodo";

const Home = () => {
  const [todo, setTodo] = useState([]);
  const url = "https://axios-example-cw.herokuapp.com/api/tutorials";
  const getTodos = async () => {
    try {
      const { data } = await axios.get(url);
      setTodo(data);
    } catch (error) {
      console.log(error);
    }
  };
  ;
  useEffect(() => {
    getTodos();
  }, []);
  return (
    <div>
      <h1 className="pt-2 text-center text-[2rem] font-bold text-slate-300 bg-slate-700 sticky top-0">
        Add Your Tutorial
      </h1>
      <AddTodo get={getTodos}/>
      <ListTodo todo={todo} get={getTodos}/>
    </div>
  );
};

export default Home;
