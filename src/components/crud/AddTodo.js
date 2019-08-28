import React, { useState } from "react";
import { ADD_TODO, GET_TODOS } from "../../assets/variables/queries";
import { useMutation } from "@apollo/react-hooks";

function AddTodo() {
  const [addItem] = useMutation(ADD_TODO);
  const [text, setText] = useState("");

  return (
    <div className="head">
      <div className="row">
        <div className="col-sm-4">
          <input
            type="text"
            value={text}
            id="newItem"
            placeholder="new item"
            onChange={e => {
              setText(e.target.value);
            }}
          />
        </div>
        <div className="col-sm-2">
          <button
            className="btn btn-primary"
            onClick={() =>
              addItem({
                variables: { text: text },
                refetchQueries: () => [{ query: GET_TODOS }]
              })
            }
          >
            <i className="fa fa-plus" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
