import React from "react";
import {useState} from 'react'

function Portfolio() {

    const [inputValue, setInputValue] = useState('');
    const [listItems, setListItems] = useState([]);

    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };

    const handleAddItem = () => {
        setListItems([...listItems, inputValue]);
        setInputValue('');
      };
      return (
        <div className="portfolio">
        <img className="icon" src="https://img.icons8.com/clouds/256/todo-list.png" alt="List"></img> 

    <div className="proj1">
        <h2>
            View and Add Your To-Do list here :
        </h2>

        <h3>
            Here you can add your To-Do
        </h3>
<br />
<br />
       
        <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button className="btn1" onClick={handleAddItem}> Add Your To-Do </button>

<br />
<br />
<br />
<br />

      <ol className="list1">
        {listItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    </div>
    <div>
    </div>
    </div>
</div>  

    );

}
  
export default Portfolio;