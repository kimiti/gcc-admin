import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import firebase from "../../firebase";

import { Button, Form } from "react-bootstrap";
const UploadVideo = () => {
  const storageRef = firebase.storage().ref();

  const [videoTitle, setVideoTitle] = useState("");
  const [file, setFile] = useState();

  const changeHandler = (event) => {
    setFile(event.target.files[0]);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const filePath = `dvds/${uuidv4()}.mp4`;

    var saveDataRef = firebase.database().ref("videos").child("dvds");
    var uploadTask = storageRef.child(filePath).put(file);

    uploadTask.on(
      "state_changed",
      (snap) => {
        console.log(snap);
      },
      (err) => {
        console.log("Upload error:", err);
      },
      () => {
        uploadTask.snapshot.ref.getDownloadURL().then((downloadUrl) => {
          console.log(downloadUrl);
          saveDataRef.update({
            timestamp: firebase.database.ServerValue.TIMESTAMP,
            videotitle: videoTitle,
            videourl: downloadUrl,
          });
        });
      }
    );

    // storageRef
    //   .child(filePath)
    //   .put(file)
    //   .then((snapshot) => {
    //     console.log("Uploaded a blob or file!");
    //   });
  };

  return (
    <div className="mt-5">
      <Form onSubmit={onSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Video Title</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter name of video"
            required
            value={videoTitle}
            onChange={(e) => setVideoTitle(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.File
            label=" Video input"
            type="file"
            name="file"
            onChange={changeHandler}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Upload Video
        </Button>
      </Form>
    </div>
  );
};

export default UploadVideo;
