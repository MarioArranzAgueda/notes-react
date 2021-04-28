import React, { useState } from "react";
import "./CreateNote.css";
import { v4 as uuidv4 } from "uuid";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function CreateNote({ addNote }) {
  const [show, setShow] = useState(() => false);
  const [note, setNote] = useState(() => {});

  const handleClose = () => {
    setShow(false);
  };

  const saveNote = () => {
    setShow(false);
    addNote({ id: uuidv4(), note: note });
  };

  const handleShow = () => setShow(true);

  const changeHandler = (event) => {
    setNote(event.target.value);
  };

  return (
    <div className="create-note">
      <p onClick={handleShow}>Crear una nueva nota</p>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Example textarea</label>
            <textarea
              onChange={changeHandler}
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={saveNote}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
