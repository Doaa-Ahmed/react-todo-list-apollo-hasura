import React from "react";
import TodoItem from "./TodoItem";
import DeleteTodo from "./crud/DeleteTodo";
import AddTodo from "./crud/AddTodo";
import ToggleTodo from "./crud/ToggleTodo";
import { GET_TODOS } from "../assets/variables/queries";
import { useQuery } from "@apollo/react-hooks";

function TodoList() {
  const { loading, error, data } = useQuery(GET_TODOS);
  if (loading) return <p>loading ...</p>;
  else if (error) return <p>ERROR !!!</p>;
  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <AddTodo></AddTodo>
        </div>
      </div>
      <div className="row">
        <div className="col-md-11">
          <ul className="todo-list">
            {data.todo_items &&
              data.todo_items.map((item, key) => {
                return (
                  <li key={key} className="todo-item">
                    <div className="row">
                      <div className="col-sm-1">
                        <ToggleTodo item={item}></ToggleTodo>
                      </div>
                      <div className="col-sm-4">
                        <TodoItem item={item} />
                      </div>
                      <div className="col-sm-2">
                        <DeleteTodo id={item.id}></DeleteTodo>
                      </div>
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
