import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  makeStyles,
  Typography
} from "@material-ui/core";
import { Close } from "@material-ui/icons";
const Container = styled.div`
  width: ${(props) => props.type !== "sm" && "120px"};
  margin-bottom: ${(props) => (props.type === "sm" ? "10px" : "25px")};
  cursor: pointer;
  display: ${(props) => props.type === "sm" && "flex"};
  gap: 10px;
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
const Image = styled.img`
  width: 100%;
  height: ${(props) => (props.type === 'sm' ? '100px' : '120px')};
  background-color: #999;
  flex: 1;
  border-radius: 10px;
  overflow: "hidden";
`;
const Info = styled.p`
  font-size: 14px;
  margin: 0;
  color: gray;
`;
const useStyles = makeStyles((theme) => ({
  closeButton: {
    position: "absolute",
    top: theme.spacing(1),
    right: theme.spacing(1),
  },
}));
const DocumentList = ({ type, url,title}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div style={{ textDecoration: "none" }}>
        {/* <p>{title}</p> */}
      <Container type={type} style={{padding:"2px"}}>
        <Image
          type={type}
          src="https://firebasestorage.googleapis.com/v0/b/jusaskinapp.appspot.com/o/pdf-2127829_640-e5a270e7-d787-460d-b269-5af740b35ddd.png?alt=media&token=38953411-e32f-41fb-970c-d617b38749f6"
          onClick={handleOpen}
        />
        <Details>
          <Texts>
            
            <Title>{title}</Title>
           
          </Texts>
        </Details>
      
      </Container>
      <Dialog 
      open={open} 
      onClose={handleClose}
      fullWidth={true} maxWidth="lg"
       resizable={true}>
        <DialogTitle>
          Document Preview
          <IconButton className={classes.closeButton} onClick={handleClose}>
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          {/* <iframe resizable="true" src={url} width="1000vh" height="600"></iframe> */}
          <embed src={url} resizable="true" type="application/pdf" width="1000vh" height="600" />

        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DocumentList