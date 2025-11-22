import { Modal, Button } from "react-bootstrap";

export default function DeleteAssignment(
  {show, handleClose, onDelete} :
  {show: boolean, handleClose: () => void, onDelete: () => void}
) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          Delete Assignment
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Are You Sure?
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}> Cancel </Button>
        <Button variant="primary" onClick={() => {onDelete(); handleClose();}}> Ok </Button>
      </Modal.Footer>
    </Modal>
  );
}