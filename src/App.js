import styled from "styled-components";
import "./App.css";
import { Item } from "./components/Item";
import { Input } from "antd";
import { Divider } from "antd";
import { useState } from "react";
import { Button, Radio } from "antd";
import { DownloadOutlined } from "@ant-design/icons";

function App() {
  const [items, setItems] = useState(["Start your daily routine"]);
  const [input, setInput] = useState("");

  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => index != id);
    });
  };

  const updateItems = (e) => {
    e.preventDefault();
    if (input != "") {
      setItems((prevItems) => {
        return [...prevItems, input];
      });
      setInput("");
    }
  };

  return (
    <div className="App">
      <br />
      <h1> Todo List</h1>
      <Divider dashed />

      {items.map((i, index) => {
        return (
          <Item key={index} index={index} text={i} deleteid={deleteItem} />
        );
      })}

      <form>
        <Wrapper>
          <Input
            name="item"
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
