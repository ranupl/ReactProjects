import React, { useState } from "react";
import ListCom from "./ListCom";

const App = () => {
  const [item, setItem] = useState("");
  const [newItem, setNewItem] = useState([]);
  const itemEvent = (event) => {
    setItem(event.target.value);
  };
  const listOfItems = () => {
    setNewItem((prevalue) => {
      return [...prevalue, item];
    });
    setItem(" ");
  };

  return (
    <>
      <div className="main-div">
        <div className="center-div">
          <h1>TODO LIST</h1>
          <input
            type="text"
            placeholder="add items"
            value={item}
            onChange={itemEvent}
          />
          <button onClick={listOfItems}>+</button>

          <ol>
            {newItem.map((val, index) => {
              return <ListCom text={val} key={index} />;
            })}
          </ol>
        </div>
      </div>
    </>
  );
};
export default App;
