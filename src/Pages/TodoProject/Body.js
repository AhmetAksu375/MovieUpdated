import React, { useEffect, useState } from "react";
import "./body.css";
import { useSelector,useDispatch } from "react-redux";
import {deleteTodo, updateTodo} from "../../Redux/Counters/todoCounter";
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Zoom';

export default function Body() {

  const todoList = useSelector((state) => state.todo.todoList);
    const dispatch = useDispatch();
    function deleteTodoFromList(index){
        
        setTimeout(() =>{
            dispatch(deleteTodo(index))
         },100)
    }
 
  return (
    <>
     <div className="flex flex-col todo-col mt-8 h-screen pb-12  align-center w-full">
    <div className="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg bg-slate-300">
            <table className="min-w-full">
                <thead>
                    <tr>
                        <th
                            className="px-10 py-3 text-md font-bold leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-slate-100 ">
                            Id</th>
                        <th
                            className="todoPadding py-3 text-md font-bold leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-slate-100">
                            Todo</th>
                      
                        <th
                            className="px-6 py-3 text-md font-bold leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-slate-100">
                            Edit</th>
                        <th
                            className="px-6 py-3  text-md font-bold leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-slate-100">
                            Delete</th>
                    </tr>
                </thead>
                {todoList &&(
                    todoList.map((todo,index)=>(

                        
                         <tbody className="bg-slate-100 duration" key={index}>
                            <Bounce bottom big className="tableRow duration-300"> 
                        <tr>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 bg-slate-100">
                                <div className="flex items-center ">
                                   
    
                                    <div className="ml-4 ">
                                        <div className="text-sm font-medium leading-5 text-gray-900">
                                           {index+1}
                                        </div>
                                    </div>
                                </div>
                            </td>
    
                            <td className="px-12 py-4 whitespace-no-wrap border-b border-gray-200 w-2/4 bg-slate-100">
                                <div className="text-sm px-12 leading-5 text-gray-500 font-medium text-lg">{todo}</div>
                            </td>
    
                          
    
                            <td
                                className="px-2 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200 bg-slate-100">
                               <button onClick={() => dispatch(updateTodo(index))} className="bg-sky-400 text-slate-50 ease-out duration-200 hover:bg-sky-300 hover:text-slate-800 font-semibold rounded-lg h-12 w-24 shadow-lg ">
                                    Update
                               </button>
                            </td>
                            <td
                                className="px-2 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200 bg-slate-100">
                                <button id={`btn${index}`} onClick={() => deleteTodoFromList(index)}  className="bg-red-400 text-slate-50 ease-in duration-200 font-semibold hover:bg-red-300 hover:text-slate-800 rounded-lg h-12 w-24 shadow-lg ">
                                    Delete
                                </button>
                              
                            </td>
                        </tr>
                        </Bounce>
                    </tbody>
                      
                    ))
                )}
            </table>
        </div>
    </div>
</div>
   
    </>
   
  );
}


