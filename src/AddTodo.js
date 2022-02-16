import { Button, Grid, Paper, TextField } from "@material-ui/core";
import { useState } from "react";

function AddTodo({ addTodo }) {
  const [title, setTitle] = useState("");

  const onInputChange = (e) => {
    const value = e.target.value;
    setTitle(value);
  };

  const onClickButton = () => {
    addTodo(title);
    setTitle("");
  };

  const enterKeyEventHandler = (e) => {
    if (e.key === "Enter") {
      onClickButton();
    }
  };

  return (
    <Paper style={{ margin: 16, padding: 16 }}>
      <Grid container>
        <Grid xs={11} md={11} item style={{ paddingRight: 16 }}>
          <TextField
            placeholder="할일 추가하기"
            fullWidth
            onChange={onInputChange}
            value={title}
            onKeyPress={enterKeyEventHandler}
          />
        </Grid>
        <Grid xs={1} md={1} item>
          <Button
            fullWidth
            color="secondary"
            variant="outlined"
            onClick={onClickButton}
          >
            +
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}
export default AddTodo;
