
import { Button, Modal } from "react-bootstrap";

import { useState } from "react"

const ExpenseCreator = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>

      <Button variant="primary" onClick={handleShow}>
        New Expense Item
      </Button>

      <Modal show={show} onHide={handleClose}>

        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>

        <Modal.Body>

          {/* Payee Name */}
          {/* Expense Description */}
          {/* price */}
          {/* Expense Date */}
          Woohoo, you are reading this text in a modal!
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>

      </Modal>
    </div>
  )
}

export { ExpenseCreator }