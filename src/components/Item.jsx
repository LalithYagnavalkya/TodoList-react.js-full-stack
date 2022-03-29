import React from "react";
import styled from "styled-components";
import "antd/dist/antd.css";
import { Space, Card } from "antd";
import { Checkbox, Button } from "antd";

export const Item = ({ text, id, deleteid }) => {
  return (
    <Wrapper>
      <Card className="crd">
        <div className="container">
          <h4>{text}</h4>
          <div>
            <Checkbox
              className="check"
              onChange={(e) => {
                e.target.checked = true;
              }}
            ></Checkbox>
            <Button
              onClick={(e) => {
                e.preventDefault();
                console.log(id);
                deleteid(id);
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
