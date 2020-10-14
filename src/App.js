import React, { useState } from "react";
import "./App.css";
import ToDoLists from "./ToDoLists";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const App = () => {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const itemEvent = (e) => {
    setInputList(e.target.value);
  };

  const deleteItem = (id) => {
    setItems((oldItems) =>{
      return oldItems.filter((arrElem , index)=>{
        return index !== id;
      })
    })
  };

  const itemList = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
  };

  return (
    <>
      <div className="main-div">
        <div className="center-div">
          <h1>toDo List</h1>

          <div className="static-content">
            <input
              type="text"
              placeholder="Add to Doo.."
              onChange={itemEvent}
            />
            <Button className="plus" onClick={itemList}>
              <AddIcon />
            </Button>
          </div>

          <div className="dynamic-content">
            <ol>
              {items.map((itemVal, index) => {
                return (
                  <ToDoLists
                    key={index}
                    id={index}
                    onSelect={deleteItem}
                    toDoItem={itemVal}
                  />
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
