
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


  return (
    <div>

      <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
          </tbody>
        </Table>      

    </div>
  )

}

export {ExpenseItemsLister}