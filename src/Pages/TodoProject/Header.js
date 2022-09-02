import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo,clearAllTodo,setTodo } from "../../Redux/Counters/todoCounter";

export default function Header() {
  const todo = useSelector((state) => state.todo.todo);
  const dispatch = useDispatch();
  const input = useRef();
  function clearInput() {
    input.current.value = "";
    dispatch(setTodo(""));
  }

  return (
    <div className="grid pt-12 px-2 input-grid sm:w-full w-full">
      <div className="sm:flex w-full  items-center border-b border-gray-500 py-2">
        <input
          ref={input}
          onChange={(e) => dispatch(setTodo(e.target.value))}
          className="input appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none sm:shadow-none  shadow-lg" 
          type="text"
          placeholder="Todo..."
          aria-label="Full name"
        />
        <button
          onClick={() => dispatch(addTodo(todo))}
          className="flex-shrink-0 h-12 rounded-lg w-24 bg-sky-500 hover:bg-sky-400 hover:text-slate-800 font-semibold border-sky-500 ease-out duration-200 hover:border-sky-400 text-sm border-4 text-white py-1 px-2 rounded shadow-lg "
          type="button"
        >
          Add
        </button>
        <button
          onClick={() => clearInput()}
          className="flex-shrink-0 ml-3 h-12 rounded-lg w-24 bg-red-500 hover:bg-red-400 hover:text-slate-800 font-semibold border-red-500 ease-out duration-200 hover:border-red-400 text-sm border-4 text-white py-1 px-2 rounded shadow-lg "
          type="button"
        >
          Clear
        </button>
        <button
          onClick={() => dispatch(clearAllTodo())}
          className="clearlAllBtn flex-shrink-0 ml-3 h-12 rounded-lg w-24 bg-amber-500 hover:bg-amber-400 hover:text-slate-800 font-semibold border-amber-500 ease-out duration-200 hover:border-amber-400 text-sm border-4 text-white py-1 px-2 rounded shadow-lg "
          type="button"
        >
          Empty
        </button>
      </div>
    </div>
  );
}
