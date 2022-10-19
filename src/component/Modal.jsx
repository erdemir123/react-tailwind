import React, { useState } from 'react'

const Modal = ({editTutor,editData}) => {
    const [modaltitle, setModalTitle] = useState("")
    const [modaldesc, setModaldesc] = useState("")
    const editClick=(e)=>{
        editTutor(editData.id,modaltitle,modaldesc)
        
    }
    
  return (
    <div>
               <div className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto mt-50" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog relative w-auto pointer-events-none">
            <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
              <div className="modal-header flex flex-shrink-0 flex-col items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                <h5 className="text-xl font-medium leading-normal text-gray-800 bg-slate-400 w-full py-5 text-center" id="exampleModalLabel">EDİT TUTORİALS</h5>
                <button type="button" className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline" data-bs-dismiss="modal" aria-label="Close" />
                <input
            type="text"
            className="form-control block
        w-full
        px-3
        py-1.5
        text-
        font-normal
        text-gray-500
        bg-slate-100 bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        required
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="TİTLE..."
            value={modaltitle}
            onChange={(e) => setModalTitle(e.target.value)}
          />
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
        mt-5
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="desc"
            value={modaldesc}
            onChange={(e) => setModaldesc(e.target.value)}
          />
              </div>
              <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
              <button type="button" className="px-6
          py-2.5
          bg-purple-600
          text-purple-500
          font-bold
          text-sm
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-purple-700 hover:shadow-lg hover:text-white
          focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-purple-800 active:shadow-lg
          transition
          duration-150
          ease-in-out" data-bs-dismiss="modal">Close</button>
                <button type="button" className="px-6
      py-2.5
      bg-blue-600
      text-blue-500
      font-bold
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg hover:text-white
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out
      ml-1" onClick={editClick}>Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Modal