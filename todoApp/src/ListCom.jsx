import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faTrash } from "@fortawesome/free-solid-svg-icons";

const ListCom = (props) => {
  const[line, setLine] = useState(false);
  const cutLine = () => 
  {
      setLine(true);
  }
  return (
    <>
    <div className="display">
      <span onClick={cutLine}>
        <button className="btn">
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </span>
      <li style={{textDecoration : line ? "line-through" : "none"}}>{props.text}</li>
      </div>
    </>
  );
};
export default ListCom;
