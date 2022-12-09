import React, { useState } from "react";
import ToDoLists from "./ToDoLists";


const App = () => {

  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value)
  };

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList]
    })
    setInputList("");
  };

  const deleteItem = (id) => {
    console.log("delete")
    setItems((oldItems) => {
      return oldItems.filter((arrEle, index) => {
        return index !== id;
      })
    })
  };

  return (
    <>
      <div className="main-div">
        <div className="center-div">

          <h1> ToDo List </h1>

          <input type="text" placeholder="Add a Items" onChange={itemEvent} value={inputList} />

          <button onClick={listOfItems}>+</button>

          <ol>
            {Items.map((itemval, index) => {
              return <ToDoLists key={index}
                id={index}
                text={itemval}
                onSelect={deleteItem}
              />
            })}
          </ol>
        </div>
      </div>
    </>

  );
}

export default App;
