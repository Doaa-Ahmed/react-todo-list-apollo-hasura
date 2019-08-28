import React from "react";

function TodoItem(props) {
  var itemClass = props.item.is_completed === true ? "done" : "undone";
  return (
    <label className={itemClass}>
      <div className="form-check-label">{props.item.text}</div>
    </label>
  );
}

export default TodoItem;
