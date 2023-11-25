
import { Button, Modal, Form } from "react-bootstrap";

import { useState } from "react"

// Addition of local type to receive the prop 'expenseItems'
// Add a dynamic block for Form.Select - call getAllPayeeNames()

const ExpenseCreator = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const createExpenseModalBody = () => {

    return (

      <Form>

        <Form.Group className="mb-3" controlId="expenseDescription">
          <Form.Label>Expense Description</Form.Label>
          <Form.Control type="text" placeholder="Enter expense description" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="payeeName">
          <Form.Label>Payee Name</Form.Label>

          <Form.Select aria-label="Default select example">
            <option>Open this select menu</option>

            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="price">
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" placeholder="Enter expense price" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="expenseDate">
          <Form.Label>Expense Date</Form.Label>
          <Form.Control type="date" placeholder="Enter expense price" />
        </Form.Group>

        <Button variant="primary" type="submit">
          New Expense
        </Button>

        <Button variant="secondary" onClick={handleClose}>
            Close
        </Button>
      </Form>
    )
  }

  return (
    <div>

      <Button variant="primary" onClick={handleShow}>
        New Expense Item
      </Button>

      <Modal show={show} onHide={handleClose}>

        <Modal.Header closeButton>
          <Modal.Title>New Expense</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {createExpenseModalBody()}
        </Modal.Body>

      </Modal>
    </div>
  )
}

export { ExpenseCreator }