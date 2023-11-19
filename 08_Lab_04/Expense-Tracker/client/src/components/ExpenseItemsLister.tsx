
import { Table } from "react-bootstrap"
import IExpenseItem from "../models/expense"

const ExpenseItemsLister = () => {

  // TODO
    // Change the table Headers 
    // Update <tr> to contain expense-item
    // Update Table code and surround <tr> within a loop

  const testExpenseItems : IExpenseItem[] = [
    {
      "expenseDescription": "Internet Expenses",
      "payeeName": "Ramesh",
      "price": 1100,
      "date": new Date(),
      "id": 1
    },
    {
      "expenseDescription": "Bike Maintainence Expenses",
      "payeeName": "Rahul",
      "price": 3500,
      "date": new Date(),
      "id": 2
    },
  ]

  const getExpenseItems = () => {
    return testExpenseItems;
  }

  const formatDate = (dateObj : Date) => {
    
    return dateObj.toDateString()
  }

  return (
    <div>

      <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Expense Description</th>
              <th>Payee Name</th>
              <th>Expense Date</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>

            {
                getExpenseItems().map( (expenseItem, index) => {

                  return (

                    <tr>
                      <td>{(index + 1)}</td>
                      <td>{expenseItem.expenseDescription}</td>
                      <td>{expenseItem.payeeName}</td>
                      <td>{formatDate(expenseItem.date)}</td>
                      <td>{expenseItem.price}</td>
                    </tr>
      
                  )
                })
            }

            
          </tbody>
        </Table>      

    </div>
  )

}

export {ExpenseItemsLister}