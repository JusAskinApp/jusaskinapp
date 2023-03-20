import React, { Component } from 'react';
import FileViewer from 'react-file-viewer';
export default function FileViewerComp (props) {
    return (
      <FileViewer
        fileType={props.type}
        filePath={props.url}
        />
    );
}