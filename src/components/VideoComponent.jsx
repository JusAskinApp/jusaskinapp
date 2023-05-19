import Reac from 'react';
import { CardMedia } from '@material-ui/core';
import styled from 'styled-components';

const Container = styled.div`
  width: ${(props) => props.type !== "sm" && "200px"};
  margin-bottom: ${(props) => (props.type === "sm" ? "10px" : "25px")};
  cursor: pointer;
  display: ${(props) => props.type === "sm" && "flex"};
  gap: 10px;
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

const VideoComponent = ({ videos }) => {
 
  return (
    <div className="bg-white p-4 justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <Container>
        {videos.map((video) => (
          <div key={video.title}>
            <CardMedia
            //   style={{ height: "200px", width: "250px", padding: "2px" }}
              component="video"
              src={video.imageIDs[0]}
              alt={video.title}
              controls={true}
            />
            <Details>
          <Title>{video.title}</Title>
        </Details>
        
          </div>
        ))}
        </Container>
      </div>
    </div>
  );
};

export default VideoComponent;
