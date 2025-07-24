import React, { useState, useEffect} from "react";
import '../css/list.css'
import EditList from './EditList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const List = ()=> {
    
    const [todo, setTodo] = useState([]);
    
    /*fetch list */
    useEffect(()=> {
        const storedList = JSON.parse(localStorage.getItem("willdoLists")) || [];
        setTodo(storedList);
    }, []);

    const deleteList = (index) => {
        const updatedList = [...todo];
        updatedList.splice(index, 1);
        setTodo(updatedList);
        localStorage.setItem("willdoLists", JSON.stringify(updatedList));
    }

    const updateList = (index, newValue) => {
        const updated = [...todo];
        updated[index] = newValue;
        setTodo(updated);
        localStorage.setItem("willdoLists", JSON.stringify(updated));
    };

    return<>
        
        <table className="listTable">
            <thead>
                {todo.length === 0 ? (
                <tr>
                    <th colSpan="3"></th>
                </tr>
                ) : (
                <tr>
                    <th scope="col">Your list</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                )}
                
            </thead>
            <tbody className="table active">
            {todo.length === 0 ? (
                <tr>
                    <td colSpan="3" style={{ textAlign: 'center', fontStyle: 'italic', backgroundColor: 'transparent', padding: '1em' }}>
                        No will-do yet! ৻(   •̀ ᗜ •́   ৻)
                    </td>
                </tr>) : (
                    todo.map((item, index)=> (
                    <tr key={index} >
                        <td scope="row">{item}</td>
                        <td><EditList item={item} index={index} updateList={updateList}/></td>
                        <td><button onClick={()=> deleteList(index)} 
                                className="iconBtn del">
                                <FontAwesomeIcon icon={faTrash} className="icon"/>
                            </button></td>
                    </tr>
                ))
            )}
            </tbody>
            
        </table>
    </>
};

export default List