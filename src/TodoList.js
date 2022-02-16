import {
  AppBar,
  Button,
  Container,
  Grid,
  List,
  Paper,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import AddTodo from "./AddTodo";
import { todo, user } from "./ApiConfig";
import Todo from "./Todo";

function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function callData() {
      try {
        const {
          data: { data },
        } = await todo.call();
        setItems(data);
        setLoading(false);
      } catch (e) {
        window.location.href = "/login";
      }
    }
    callData();
  }, []);

  const addTodo = async (title) => {
    const {
      data: { data },
    } = await todo.add(title);

    setItems(data);
  };

  const deleteTodo = async (id) => {
    const {
      data: { data },
    } = await todo.delete(id);

    setItems(data);
  };

  const updateTodo = async (id, title, done) => {
    const {
      data: { data },
    } = await todo.update(id, title, done);

    setItems(data);
  };

  const signout = () => {
    user.signout();
  };

  return (
    <>
      {loading ? (
        <h1> 로딩중...</h1>
      ) : (
        <div>
          <AppBar position="static">
            <Toolbar>
              <Grid justifyContent="space-between" container>
                <Grid item>
                  <Typography variant="h6">오늘의 할일</Typography>
                </Grid>
                <Grid>
                  <Button color="inherit" onClick={signout}>
                    로그아웃
                  </Button>
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
          <Container maxWidth="md">
            <AddTodo addTodo={addTodo} />
            {items.length > 0 && (
              <Paper style={{ margin: 16 }}>
                <List>
                  {items.map((item) => (
                    <Todo
                      item={item}
                      key={item.id}
                      deleteTodo={deleteTodo}
                      updateTodo={updateTodo}
                    />
                  ))}
                </List>
              </Paper>
            )}
          </Container>
        </div>
      )}
    </>
  );
}

export default App;
