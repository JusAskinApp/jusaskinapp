import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ChatBubbleOutlinedIcon from '@mui/icons-material/ChatBubbleOutlined';
import ShareIcon from '@mui/icons-material/Share';

const Container = styled.div`
  width: ${(props) => props.type !== "sm" && "200px"};
  margin-bottom: ${(props) => (props.type === "sm" ? "10px" : "25px")};
  cursor: pointer;
  display: ${(props) => props.type === "sm" && "flex"};
  gap: 10px;
`;

const Image = styled.img`
  width: 100%;
  height: ${(props) => (props.type === "sm" ? "40px" : "100px")};
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


const Info = styled.div`
  font-size: 14px;
  color: #8BA1A6;
`;

const VideoPlayer = ({ type }) => {
  return (
    <Link to="/video/test" style={{ textDecoration: "none" }}>
      <Container type={type}>
        <Image
          type={type}
          src="https://i9.ytimg.com/vi_webp/k3Vfj-e1Ma4/mqdefault.webp?v=6277c159&sqp=CIjm8JUG&rs=AOn4CLDeKmf_vlMC1q9RBEZu-XQApzm6sA"
        />
        <Details type={type}>
          <Texts>
            <Info><RemoveRedEyeIcon/> 156k   <ChatBubbleOutlinedIcon/> 12k   <ShareIcon/> 1.2k</Info>
            <Title>Test Video</Title>
            
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};

export default VideoPlayer