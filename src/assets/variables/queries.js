import { gql } from "apollo-boost";

export const ADD_TODO = gql`
  mutation($text: String!) {
    insert_todo_items(objects: { is_completed: false, text: $text }) {
      affected_rows
    }
  }
`;

export const GET_TODOS = gql`
  {
    todo_items {
      id
      is_completed
      text
    }
  }
`;

export const DELETE_TODO = gql`
  mutation($id: Int!) {
    delete_todo_items(where: { id: { _eq: $id } }) {
      affected_rows
    }
  }
`;

export const TOGGLE_TODO = gql`
  mutation($id: Int!, $is_completed: Boolean!) {
    update_todo_items(
      where: { id: { _eq: $id } }
      _set: { is_completed: $is_completed }
    ) {
      affected_rows
    }
  }
`;
