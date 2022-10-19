import React, { useState } from "react";
import axios from "axios";
import Modal from "./Modal";
import { MdOutlineDeleteForever } from "react-icons/md";
import { ToastContainer } from "react-toastify";
import { FaEdit } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";


const ListTodo = ({ todo, get }) => {
  const url = "https://axios-example-cw.herokuapp.com/api/tutorials";
  const [editData,setEditData]=useState({})
  const deleteTutor = async (id) => {
    try {
      await axios.delete(`${url}/${id}`);
      get();
    } catch (error) {
      console.log(error.message);
    }
  };
  const editTutor = async (id, modaltitle, modaldesc) => {
    try {
      await axios.put(`${url}/${id}`, {
        "title":modaltitle,
        "description":modaldesc
    });
      get();
      console.log({ id, modaltitle, modaldesc });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center ">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 w-full">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden ">
              <table className="min-w-full rounded-lg">
                <thead className="bg-slate-500">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      #Id
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Desc
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 py-4  text-center"
                    >Edit</th>
                  </tr>
                </thead>
                <tbody>
                  {todo.map((item) => {
                    const { id, title, description } = item;
                    return (
                      <tr className="border-2 border-b-slate-300" key={id}>
                        <td className="px-6 py-4 whitespace-nowrap text-md font-bold  text-gray-900">
                          {id}
                        </td>
                        <td className="text-md font-bold text-gray-600  px-6 py-4 whitespace-nowrap">
                          {title}
                        </td>
                        <td className="text-md font-bold text-gray-600  px-6 py-4 whitespace-nowrap">
                          {description}
                        </td>
                        <td className="text-lg text-gray-900 font-light py-4 whitespace-nowrap flex gap-5 justify-center w-100 items-center">
                          <MdOutlineDeleteForever
                            className="text-red-900"
                            onClick={(e) => deleteTutor(id)}
                          />
                          <FaEdit
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                            onClick={()=>setEditData(item)}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <Modal className="text-yellow-600"  editData={editData} editTutor={editTutor}/>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
export default ListTodo;
