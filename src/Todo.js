import {
  Checkbox,
  InputBase,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core";
import { Check, DeleteOutlined } from "@material-ui/icons";
import React, { useState } from "react";

function Todo({ item, deleteTodo, updateTodo }) {
  const { id } = item;
  const [readOnly, setReadOnly] = useState(true);
  const [title, setTitle] = useState(item.title);
  const [done, setDone] = useState(item.done);

  const deleteEventHandler = () => {
    deleteTodo(id);
  };

  const offReadOnlyMode = () => {
    setReadOnly(false);
  };

  const enterKeyEventHandler = (e) => {
    if (e.key === "Enter") {
      setReadOnly(true);
      updateTodo(id, title, done);
    }
  };

  const editEventHandler = (e) => {
    const value = e.target.value;
    setTitle(value);
  };

  const editClickEventHandler = () => {
    setReadOnly(true);
    updateTodo(id, title, done);
  };

  const checkboxEventHandler = (e) => {
    const check = done;
    const { title } = item;
    setDone(!check);
    updateTodo(id, title, !check);
  };

  return (
    <ListItem>
      <Checkbox checked={done} onClick={checkboxEventHandler} />
      <ListItemText>
        <InputBase
          inputProps={{ "aria-label": "naked", readOnly }}
          type="text"
          id={id}
          name={id}
          value={title}
          multiline={true}
          fullWidth={true}
          onClick={offReadOnlyMode}
          onChange={editEventHandler}
          onKeyPress={enterKeyEventHandler}
        />
      </ListItemText>
      <ListItemSecondaryAction>
        {!readOnly ? (
          <IconButton aria-label="Update Todo" onClick={editClickEventHandler}>
            <Check />
          </IconButton>
        ) : null}
        <IconButton aria-label="Delete Todo" onClick={deleteEventHandler}>
          <DeleteOutlined />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

export default Todo;
