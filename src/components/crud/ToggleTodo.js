import React from "react";
import { useMutation } from "@apollo/react-hooks";
import { TOGGLE_TODO, GET_TODOS } from "../../assets/variables/queries";

function ToggleTodo(props) {
  const [toggleCompleted] = useMutation(TOGGLE_TODO);
  return (
    <input
      type="checkbox"
      onChange={e =>
        toggleCompleted({
          variables: {
            id: props.item.id,
            is_completed: !props.item.is_completed
          },
          refetchQueries: () => [{ query: GET_TODOS }]
        })
      }
      checked={props.is_completed}
    />
  );
}

export default ToggleTodo;
