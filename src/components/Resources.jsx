import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import VideoPlayer from "./VideoPlayer";
import ImageGallery from "./ImageGallery";
import DocumentList from "./DocumentList";
import makeApiCall from "../Api/api";
import { CardMedia } from "@mui/material";
import { padding } from "@mui/system";
//import { videoData, imageData, documentData } from './data';

// const useStyles = makeStyles((theme) => ({
// }));

export default function Resources(props) {
  const [Resources, setResources] = useState([]);
  const [imagesData, setImagesData] = useState({ title: "", urlLinks: [] });
  const [videoData, setVideoData] = useState({ title: "", urlLinks: [] });
  const [documentData, setDocumentData] = useState({ title: "", urlLinks: [] });

  function determineMediaType(url) {
    const videoExtensions = [".mp4", ".avi", ".mov", ".wmv"];
    const imageExtensions = [".jpg", ".jpeg", ".png", ".gif", ".ico"];
    const pdfExtensions = [".pdf"];
    const pptExtensions = [".ppt", ".pptx"];
    const docExtensions = [".doc", ".docx"];
    const textExtensions = [".txt", ".md"];

    const fileExtension = url.substring(url.lastIndexOf(".")).split("?")[0];

    if (videoExtensions.includes(fileExtension)) {
      return "video";
    } else if (imageExtensions.includes(fileExtension)) {
      return "image";
    } else if (pdfExtensions.includes(fileExtension)) {
      return "pdf";
    } else if (pptExtensions.includes(fileExtension)) {
      return "ppt";
    } else if (docExtensions.includes(fileExtension)) {
      return "doc";
    } else if (textExtensions.includes(fileExtension)) {
      return "text";
    } else {
      return null;
    }
  }
  const getResources = async (currentUser) => {
    debugger;
    console.log(props.currentUser);
    console.log(currentUser);
    setVideoData({ title: "", urlLinks: [] });
    setImagesData({ title: "", urlLinks: [] });
    setDocumentData({ title: "", urlLinks: [] });
    try {
      const data = await makeApiCall(
        "https://jusaskin.herokuapp.com/api/blogPosts/getresources",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: currentUser
              ? currentUser.email
              : JSON.parse(JSON.parse(JSON.stringify(localStorage)).userDetail)
                  .email,
          }),
        }
      );
      // let imageObj = { title: '', urlLinks: []};
      // let videoObj =  { title: '', urlLinks: []};
      // let documentObj = { title: '', urlLinks: []};
      // data.forEach((value,index) => {
      //   debugger;
      //   let title = value.title;
      //   value.urlLinks.forEach((url) => {
      //     if (determineMediaType(url) === 'image') {
      //       // imageObj['title'] = title;
      //       imageObj['urlLinks'].push(url)

      //     } else if (determineMediaType(url) === 'video') {
      //       // videoObj['title'] = title;
      //       videoObj['urlLinks'].push(url);

      //     } else if (determineMediaType(url) === 'pdf') {
      //       // documentObj['title'] = title;
      //       documentObj['urlLinks'].push(url);

      //     }
      //   });
      // });
      let imageObj = { title: "", urlLinks: [] };
      let videoObj = { title: "", urlLinks: [] };
      let documentObj = { title: "", urlLinks: [] };

      data.forEach((value, index) => {
        let title = value.title;
        value.urlLinks.forEach((url) => {
          const mediaType = determineMediaType(url);

          if (mediaType === "image") {
            if (imageObj.title === "") {
              imageObj.title = title;
            }
            imageObj.urlLinks.push(url);
          } else if (mediaType === "video") {
            if (videoObj.title === "") {
              videoObj.title = title;
            }
            videoObj.urlLinks.push(url);
          } else if (mediaType === "pdf") {
            if (documentObj.title === "") {
              documentObj.title = title;
            }
            documentObj.urlLinks.push(url);
          }
        });
      });
      // console.log(videoData)
      setImagesData(imageObj);
      setVideoData(videoObj);
      setDocumentData(documentObj);
    } catch (error) {
      // setError(true)
      console.error(error);
    }
  };

  useEffect(() => {
    getResources(props.currentUser);
  }, []);
  return (
    <div>
      {console.log(documentData)}
      {/* {console.log(videoData)} */}
      <Grid container spacing={3} fullWidth maxWidth="md">
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            {" "}
            Video(s){" "}
          </Typography>
          <div
            className={`flex flex-no-wrap xs:flex-col sm:flex-row overflow-x-auto ${
              videoData && videoData.urlLinks && videoData.urlLinks.length < 3
                ? "justify-center"
                : "justify-between"
            }`}
          >
            {/* {videoData && videoData.urlLinks
              ? videoData.urlLinks.map((value, index) => (
                  <CardMedia
                    key={index}
                    style={{ height: "200px", width: "250px", padding: "2px" }}
                    component="video"
                    src={value}
                    alt="ERROR"
                    controls={true}
                  />
                ))
              : ""} */}
            {videoData && videoData.urlLinks
              ? videoData.urlLinks.map((value, index) => (
                  <div key={index}>
                    <h2>{videoData.title}</h2>
                    <CardMedia
                      style={{
                        height: "200px",
                        width: "250px",
                        padding: "2px",
                      }}
                      component="video"
                      src={value}
                      alt="ERROR"
                      controls={true}
                    />
                  </div>
                ))
              : ""}
          </div>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            {" "}
            Document(s){" "}
          </Typography>
          <div
            style={{ height: "180px" }}
            className={`flex flex-no-wrap xs:flex-col sm:flex-row overflow-x-auto `}
          >
            {documentData && documentData.urlLinks
              ? documentData.urlLinks.map((value) => (
                  <DocumentList url={value} title={documentData.title} />
                ))
              : ""}
          </div>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            {" "}
            Image(s){" "}
          </Typography>
          <div
            style={{ height: "180px" }}
            className={`flex flex-no-wrap xs:flex-col sm:flex-row overflow-x-auto `}
          >
            {imagesData && imagesData.urlLinks
              ? imagesData.urlLinks.map((value) => (
                  <ImageGallery
                    type="square"
                    url={value}
                    title={imagesData.title}
                  />
                ))
              : ""}
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
