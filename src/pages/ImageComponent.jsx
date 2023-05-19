import React, { useState } from 'react';
import { Dialog, DialogContent, DialogTitle, IconButton } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import styled from 'styled-components';

const Container = styled.div`
  width: 250px;
  margin-bottom: 25px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  width: 100%;
  height: 150px;
  background-color: #999;
  border-radius: 10px;
`;

const Details = styled.div`
  margin-top: 5px;
  text-align: left;
`;

const Title = styled.h1`
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const Info = styled.div`
  font-size: 14px;
  color: #8ba1a6;
`;

const ImageComponent = ({ title, imageSrc}) => {
  const [open, setOpen] = useState(false);

  const trimmedTitle = title.length > 44 ? title.substring(0, 44) + '...' : title;


  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Container>
        <Image src={imageSrc} onClick={handleOpen} />
        <Details>
          <Title>{trimmedTitle}</Title>
          {/* <Info>{creator}</Info> */}
        </Details>
      </Container>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          Image Preview
          <IconButton onClick={handleClose}>
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Image src={imageSrc} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ImageComponent;
