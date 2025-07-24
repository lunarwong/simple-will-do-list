import React, { useState, useEffect} from "react";
import '../css/header.css'

const Header = ()=> {
    
    /* random placeholder list sample */
    const inputSamples = ['grocery shopping', 'do assignment labA', 'call mom', 'buy milk', 'work out at 5', 'play new game'];
    const randomIndex = Math.floor(Math.random() * inputSamples.length);
    const getRandomInput = inputSamples[randomIndex];

    
    const [inputValue, setInputValue] = useState('');

    /* add list to local storage */
    
    const addToList = (e) => {
        e.preventDefault();

        const listsArray = JSON.parse(localStorage.getItem("willdoLists")) || [];
        listsArray.push(inputValue);
        localStorage.setItem("willdoLists", JSON.stringify(listsArray));

        setInputValue('');
        window.location.reload();
    }
    
    return (
    <>
        <div className="headerContainer">
            <h1>I will do ...</h1>
            <form onSubmit={addToList}>
                <input type="text" id="listInput" 
                    required autoComplete="off"
                    placeholder={getRandomInput} 
                    value={inputValue}
                    onChange={(e)=> setInputValue(e.target.value)} 
                />
                <button className="addBtn">Add</button>
            </form>

        </div>
    </>
    
    );
};

export default Header