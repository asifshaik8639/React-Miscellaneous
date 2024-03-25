import React from 'react';
import { useImmer } from 'use-immer';

import AddTodoComp from './AddTodoComp.js';
import TaskListComp from './TaskListComp.js';
import CustomFormComp from './customFormComp.js';


let initialTodos = [{
                        id: 1,
                        name: 'Milk',
                        checked: false,
                        canEdit: false,
                        canDelete: false
                    },
                    {

                        id: 2,
                        name: 'Coffee',
                        checked: false,
                        canEdit: false,
                        canDelete: false
                    },
                    {

                        id: 3,
                        name: 'Apple',
                        checked: false,
                        canEdit: false,
                        canDelete: false
                    }];

export default function App() {

    let [todos, updateTodos] = useImmer(initialTodos);

    function handleOnClick(inputText) {
        console.log('click on button with id => ');

        if((!!inputText && !!inputText?.trim() !== false && !!inputText?.trim() !== '')) {
            updateTodos((draft) => {
                let newId = draft.length + 1;
                draft.push({
                    id: newId,
                    name: inputText,
                    checked: false,
                    canEdit: false,
                    canDelete: false
                });
            });
        }
    }
    
    function onEditClick(event, toDoId){
     let newTodos =  todos.map((todo) => {
            if(todo.id === toDoId) {
                return {
                    ...todo ,
                    canEdit: true
                };
            } else {
                return todo
            }
        });
        updateTodos(newTodos);
    }

    function onDeleteClick(event, toDoId) {
        let selectedTodo = todos.find((todo) =>  todo.id === toDoId);
        if(!!selectedTodo.checked) {
            let sign = prompt("Are you surely wanted to delete?");

            if (!!sign && sign !== null &&  !!sign?.toLowerCase() === "yes") {
                updateTodos(todos.filter((todo) => todo.id !== toDoId));
            }
            
        } else {
            alert('Please select the checkbox first to proceed further');
        }
    }

    function onCheckBoxChange(updatedtoDo, index){
        let newTodos =  todos.map((todo) => {
            if(todo.id === updatedtoDo.id) {
                return {
                    ...todo ,
                    checked: updatedtoDo.checked
                };
            } else {
                return todo
            }
        });
        updateTodos(newTodos);
    }

    function onEditText(updatedtoDo) {
        let newTodos =  todos.map((todo) => {
            if(todo.id === updatedtoDo.id) {
                return {
                    ...todo ,
                    name: updatedtoDo.name
                };
            } else {
                return todo
            }
        });
        updateTodos(newTodos);

    }

    function onSaveBtnClick(event, toDoId) {
        let newTodos =  todos.map((todo) => {
            if(todo.id === toDoId) {
                return {
                    ...todo ,
                    canEdit: false
                };
            } else {
                return todo
            }
        });
        updateTodos(newTodos);
        
    }

     return(
        <>
            <AddTodoComp handleOnClick={handleOnClick} />

            <TaskListComp
                todos={todos}
                onCheckBoxChange = {onCheckBoxChange}
                onEditClick = {onEditClick}
                onDeleteClick = {onDeleteClick}
                onEditText = {onEditText}
                onSaveBtnClick = {onSaveBtnClick}
            />

            <CustomFormComp />

        </>
     );
}