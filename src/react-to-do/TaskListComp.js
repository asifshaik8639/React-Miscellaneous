import React from 'react';

export default function TaskListComp({todos, 
    onCheckBoxChange,
    onEditClick, 
    onDeleteClick,
    onEditText,
    onSaveBtnClick}) {

    return(
        <div>
            {todos.map((todo, index) =>
                <div key={todo.id} className='taskItem'>
                    <input 
                        type='checkbox' 
                        checked={todo?.checked}
                        onChange= {(e) => {
                                        onCheckBoxChange({...todo, checked: e.target.checked}, index);
                                  }}
                     />

                    {
                        todo.canEdit ?
                        <div >
                            <input 
                            type='text' 
                            value = {todo?.name}
                            onChange={(e) => {
                                onEditText({
                                    ...todo,
                                    name: e.target.value
                                  });
                            } } />
                            <button className='default-margin' onClick={(e) => onSaveBtnClick(e, todo.id)}>Save</button>
                        </div>
                        :
                        <div>
                            {todo?.name}
                            <button className='default-margin' onClick={(e) => onEditClick(e, todo.id)}>Edit</button>
                        </div>
                    }

                    <button className='default-margin' onClick={(e) => onDeleteClick(e, todo.id)}>Delete</button>
                </div>
            )}
        </div>
    );
}