import React, { useState } from "react";
import styled from "styled-components";
import "antd/dist/antd.css";
import { Space, Card } from "antd";
import { Checkbox, Button } from "antd";
import { useTodoContext } from "../context/todoContext";

export const Item = ({ text, id, checked }) => {
  const { deleteTodos, togggleChecks } = useTodoContext();

  return (
    <Wrapper>
      <Card className="crd">
        <div className="container">
          <h4> {text}</h4>
          <div>
            {/* {checked? 
            
          } */}
            {/* <Checkbox
              className="check"
              value={check}
              onChange={(e) => {
                e.preventDefault();
                togggleChecks({ id, check });
                setCheck(!check);
              }}
            ></Checkbox> */}
            <Button
              onClick={(e) => {
                e.preventDefault();
                deleteTodos(id);
              }}
              type="primary"
              shape="round"
              size="small"
              className="butn"
            >
              delete
            </Button>
          </div>
        </div>
      </Card>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .crd {
    margin: auto;
    .container {
      display: flex;
      justify-content: space-between;
    }
    div {
      background-color: aliceblue;
    }
    h4 {
      display: inline;
    }
    margin-top: 2%;
    width: 80%;
    .check {
      margin-left: 10px;
      margin-right: 10px;
    }
    .butn {
      height: 100%;
    }
  }
`;
