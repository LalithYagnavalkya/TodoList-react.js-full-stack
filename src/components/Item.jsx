import React from "react";
import styled from "styled-components";
import "antd/dist/antd.css";
import { Space, Card } from "antd";
import { Checkbox, Button } from "antd";

export const Item = ({ text, index, deleteid }) => {
  return (
    <Wrapper>
      <Card className="crd">
        <h4>{text}</h4>
        <div>
          <Checkbox
            className="check"
            onChange={(e) => {
              e.target.checked = true;
            }}
          ></Checkbox>
          <Button
            onClick={() => {
              deleteid(index);
            }}
            type="primary"
            shape="round"
            size="small"
          >
            delete
          </Button>
        </div>
      </Card>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .crd {
    margin: auto;
    div {
      display: inline;
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
  }
`;
