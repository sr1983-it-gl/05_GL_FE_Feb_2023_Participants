
import { Button, Modal, Form } from "react-bootstrap";

import { useState } from "react"
import IExpenseItem, { IExpenseCreateItem } from "../models/expense";

import {getAllPayeeNames} from "../services/expense-utils";

import {FormEvent, useRef} from "react"

import {createNewExpenseItem} from "../services/expense-service"

// Addition of local type to receive the prop 'expenseItems'
// Add a dynamic block for Form.Select - call getAllPayeeNames()

type ExpenseCreatorModel = {

  expenseItems : IExpenseItem[];
  refresh : (newExpenseItem : IExpenseItem) => void
}

const ExpenseCreator = ({expenseItems, refresh} : ExpenseCreatorModel) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const expenseDescriptionRef = useRef<HTMLInputElement>(null);
  const payeeNameRef = useRef<HTMLSelectElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);
  const expenseDateRef = useRef<HTMLInputElement>(null);

  // Add support for onSubmit
  // handleFormSubmission / handleNewExpense
  // Usage of useRef hooks [4]
 // Implementation of handleNewExpense -> 
 // print to console
 // Final line of code - handleClose

  const handleExpenseCreate = async (event : FormEvent<HTMLFormElement>) => {

    event.preventDefault();

    const expenseDescription =
      (expenseDescriptionRef?.current?.value as string) 
    
    const payeeName = 
      (payeeNameRef?.current?.value as string)

    const price =
      parseFloat((priceRef?.current?.value as string));

    const expenseDate 
      = new Date((expenseDateRef?.current?.value as string));

    console.log("Collected data ")
    console.log(expenseDescription);
    console.log(payeeName);
    console.log(price);
    console.log(expenseDate);

    // Server Method

    const newExpenseItemObj : IExpenseCreateItem = {
      expenseDescription : expenseDescription,
      payeeName : payeeName,
      price : price,
      date : expenseDate
    }

    const response = await createNewExpenseItem(newExpenseItemObj)

    // Point - New Expense Created

    refresh(response)

    console.log("Response is");
    console.log(response);

    // Call the  createNewExpense
    // Create object of type IExpenseCreateItem
    // Log the response
    // Response [id attribute -> unique value]

    handleClose();
  }

  const createExpenseModalBody =  () => {

    return (

      <Form onSubmit={handleExpenseCreate}>

        <Form.Group className="mb-3" controlId="expenseDescription">
          <Form.Label>Expense Description</Form.Label>
          <Form.Control type="text" placeholder="Enter expense description" ref={expenseDescriptionRef}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="payeeName">
          <Form.Label>Payee Name</Form.Label>

          <Form.Select aria-label="Default select example" ref={payeeNameRef}>
            <option>SELECT A PAYEE</option>

            {
                getAllPayeeNames(expenseItems).map( (payeeName) => {

                  return (
                    <option value={payeeName}>{payeeName}</option>
                  )
                })
            }

          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="price">
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" placeholder="Enter expense price" ref={priceRef}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="expenseDate">
          <Form.Label>Expense Date</Form.Label>
          <Form.Control type="date" ref={expenseDateRef} />
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