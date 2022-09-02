import { createSlice } from "@reduxjs/toolkit";
import alertify from 'alertifyjs';


let initialState = {};
if(localStorage.getItem("todoList")){
    initialState = {
        todoList:JSON.parse(localStorage.getItem("todoList")),
        todo:""
    }
}else{
    initialState = {
        todoList:[],
        todo:""
    }
}


export const todoSlicer = createSlice({
    name:"todo",
    initialState,
    reducers:{
        setTodo:(state,value) =>{
            
            state.todo = value.payload;
        },
        addTodo: (state,value) => {
            if(value.payload !=""){
                alertify.set('notifier','position', 'top-left');

                alertify.success('Todo added to list');
                state.todoList.push(value.payload);
                localStorage.setItem("todoList",JSON.stringify(state.todoList));

            }else{
                alertify.set('notifier','position', 'top-left');

                alertify.error('Type something!!');
            }
      
        },
        deleteTodo:(state,value) =>{
            if (value.payload > -1) {
                state.todoList.splice(value.payload, 1); 
                alertify.set('notifier','position', 'top-left');
                alertify.success('Todo deleted from list..');
                localStorage.setItem("todoList",JSON.stringify(state.todoList));
              }
        },
        clearAllTodo:(state) =>{
            if(state.todoList.length > 0){
                state.todoList = [];
                alertify.set('notifier','position', 'top-left');
                alertify.warning("Todo list cleared..")
                localStorage.setItem("todoList",JSON.stringify(state.todoList));
            }else{
                alertify.set('notifier','position', 'top-left');
                alertify.error("Todo list already empty!!")

            }
        },
        updateTodo:(state,index) =>{

            if(state.todo==""){
                alertify.set('notifier','position', 'top-left');
                alertify.error('Type something!!');

            }else{
                state.todoList[index.payload] = state.todo;     
                alertify.set('notifier','position', 'top-left');
                alertify.success('Todo updated');
                localStorage.setItem("todoList",JSON.stringify(state.todoList));
            }
                 
        }
    }
})

export const {setTodo,addTodo, deleteTodo,clearAllTodo,updateTodo} = todoSlicer.actions;

export default todoSlicer.reducer;