import styled from "styled-components";
import "./App.css";
import { Item } from "./components/Item";
import { Input } from "antd";
import { Divider } from "antd";
import { useState } from "react";
import { Button, Radio } from "antd";
// import { DownloadOutlined } from "@ant-design/icons";
import { useTodoContext } from "./context/todoContext";

function App() {
  const { isLoading, todos, createTodos, deleteTodos } = useTodoContext();
  const [items, setItems] = useState(todos);
  const [input, setInput] = useState("");
  if (isLoading) {
    return <h1>loading...</h1>;
  }

  const updateItems = (e) => {
    e.preventDefault();
    if (input != "") {
      createTodos({ title: input, checked: false });
      setInput("");
    }
  };

  const deleteItem = (id) => {
    console.log(id);
    deleteTodos(id);
  };

  return (
    <div className="App">
      <br />
      <h1> Todo List</h1>
      <Divider dashed />

      {todos.map((i, index) => {
        return (
          <Item key={index} id={i._id} text={i?.title} deleteid={deleteItem} />
        );
      })}

      <form>
        <Wrapper>
          <Input
            name="item"
            autoComplete="off"
            onChange={(e) => setInput(e.target.value)}
            value={input}
            placeholder="type here..."
          />
          <Button htmlType="submit" onClick={updateItems} size={"primary"}>
            Add
          </Button>
        </Wrapper>
      </form>
    </div>
    // <h1>hello</h1>
  );
}

const Wrapper = styled.div`
  display: flex;
  width: 50%;
  margin: auto;
  margin-top: 10%;
  /* margin-bottom: 70%; */
  padding-bottom: 10%;
`;

export default App;
