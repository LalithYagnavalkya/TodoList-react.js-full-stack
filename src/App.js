import styled from "styled-components";
import "./App.css";
import { Item } from "./components/Item";
import { Input } from "antd";
import { Divider } from "antd";
import { useState } from "react";
import { Button, Radio } from "antd";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
// import { DownloadOutlined } from "@ant-design/icons";
import { useTodoContext } from "./context/todoContext";

function App() {
  const { isLoading, todos, createTodos, deleteTodos, togggleChecks } =
    useTodoContext();
  const [items, setItems] = useState(todos);
  const [input, setInput] = useState("");
  if (isLoading) {
    const antIcon = (
      <LoadingOutlined style={{ fontSize: 120, color: "black" }} spin />
    );

    return (
      <div
        className="spinner"
        style={{
          minHeight: "100vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Spin indicator={antIcon} />
      </div>
    );
  }

  const updateItems = (e) => {
    e.preventDefault();
    if (input != "") {
      createTodos({ title: input, checked: false });
      setInput("");
    }
  };

  return (
    <div className="App">
      <br />
      <h1> Todo List</h1>
      <Divider dashed />

      {todos.map((i, index) => {
        console.log(i);
        return (
          <Item key={index} id={i._id} text={i?.title} checked={i.checked} />
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
