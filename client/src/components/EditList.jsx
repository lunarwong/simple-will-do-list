import React, { useState, useEffect, useRef} from "react";
import '../css/edit-list.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faXmark } from "@fortawesome/free-solid-svg-icons";

const EditList = ({ item, index, updateList })=> {
    const [showEdit, setShowEdit] = useState(false);
    const [listText, setListText] = useState(item);
    
    const editListText = async(e)=> {
        e.preventDefault();
        updateList(index, listText); 
        setShowEdit(false);
    };
    
    let editRef = useRef();

    useEffect(()=> {
        const handler = (e)=> {
            if(editRef.current && !editRef.current.contains(e.target)) {
                setShowEdit(false);
                setListText(item);
            }
        };

        document.addEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);

    }, [item]);

    return<>
        <button className="iconBtn edit" onClick={()=> setShowEdit(true)}><FontAwesomeIcon icon={faPen} className="icon"/></button>
        {showEdit && (
            <div className="editContainer" ref={editRef}>
                <div>
                    <button 
                        className="closeBtn"
                        onClick={()=> {
                                setShowEdit(false);
                                setListText(item);
                            }}>
                                <FontAwesomeIcon icon={faXmark} />
                    </button>
                </div>
                <div>
                    <h3>Edit your list</h3>
                    <form onSubmit={editListText}>
                        <input type="text" required
                            value={listText}
                            onChange={e => setListText(e.target.value)}
                        />
                        <div className="editBoxBtn">
                            <button type="submit" className="updateBtn">Update</button>
                            <button onClick={()=> {
                                setShowEdit(false);
                                setListText(item);
                            }} className="cancelBtn">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        )}
    </>
};

export default EditList