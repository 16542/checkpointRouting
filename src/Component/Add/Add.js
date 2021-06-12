import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
function Add({ addMovie }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: "",
  });

  const handleChange = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        New Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>TITLE</h5>
          <input name="title" value={newMovie.title} onChange={handleChange} />
          <br />
          <h5>DESCRIPTION</h5>
          <input
            name="description"
            value={newMovie.description}
            onChange={handleChange}
          />
          <br />
          <h5>URL</h5>
          <input
            name="posterURL"
            value={newMovie.posterURL}
            onChange={handleChange}
          />
          <br />
          <h5>Rating</h5>
          <input
            name="rating"
            value={newMovie.rating}
            onChange={handleChange}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              addMovie(newMovie);
              setNewMovie({
                title: "",
                description: "",
                posterURL: "",
                rating: "",
              });
              handleClose();
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Add;
