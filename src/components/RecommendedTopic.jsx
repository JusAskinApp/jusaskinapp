import React,{useState} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  closeButton: {
    position: "absolute",
    top: theme.spacing(1),
    right: theme.spacing(1),
  },
}));
const Container = styled.div`
  width: ${(props) => props.type !== "sm" && "150px"};
  margin-bottom: ${(props) => (props.type === "sm" ? "10px" : "25px")};
  cursor: pointer;
  display: ${(props) => props.type === "sm" && "flex"};
  gap: 10px;
`;

const Image = styled.img`
  width: 100%;
  height: ${(props) => (props.type === "sm" ? "150px" : "150px")};
  background-color: #999;
  flex: 1;
  border-radius: 10px
`;

const Details = styled.div`
  display: flex;
  margin-top: ${(props) => props.type !== "sm" && "5px"};
  gap: 12px;
  flex: 1;
`;

const Texts = styled.div``;

const Title = styled.h1`
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;



const RecommendedTopic = (props) => {
  const classes = useStyles();

  return (
    <div onClick={props.onClick}  style={{ textDecoration: "none" }}>
      <Container type={props.type} style={{ height: "150px", width: "250px", padding: "2px" }}>
        <Image
          style={{marginTop:'8px'}}
          type={props.type}
          src={props.url}
        />
        <Details type={props.type}>
          <Texts>
            <Title>{props.title}</Title>
          </Texts>
        </Details>
      </Container>
     
    </div>
  );
};

export default RecommendedTopic