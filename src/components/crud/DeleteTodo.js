import React from "react";
import { useMutation } from "@apollo/react-hooks";
import { DELETE_TODO, GET_TODOS } from "../../assets/variables/queries";

function DeleteTodo(props) {
  const [deleteItem] = useMutation(DELETE_TODO);
  return (
    <button
      type="button"
      className="btn btn-danger btn-sm"
      onClick={() =>
        deleteItem({
          variables: { id: props.id },
          refetchQueries: () => [{ query: GET_TODOS }]
        })
      }
    >
      <i className="fa fa-trash" />
    </button>
  );
}

export default DeleteTodo;
