
// type ExpensesByPayeesModel -> expenseItems

import {Table} from "react-bootstrap"
import IExpenseItem from "../models/expense";

import {getAllPayeeNames, getTotalContributedAmount, getGrandTotalExpenses} from "../services/expense-utils"

type ExpensesByPayeesModel = {

  expenseItems : IExpenseItem[];

}

const ExpensesByPayees = ({expenseItems} : ExpensesByPayeesModel) => {

  return (
    <div>

        <h3>Payee View</h3>

      <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Payee Name</th>
              <th>Price</th>
            </tr>
          </thead>
          
          <tbody>
            {
              getAllPayeeNames(expenseItems).map( (payeeName, index) => {

                  return (
                    <tr>
                      <td>{(index + 1)}</td>
                      <td>{payeeName}</td>
                      <td>{getTotalContributedAmount(payeeName, expenseItems)}</td>
                    </tr>
                  )
              })
            }

            <tr>
              <td></td>
              <td>Grand Total</td>
              <td>{getGrandTotalExpenses(expenseItems)}</td>
            </tr>
          </tbody>

        </Table>      


    </div>
  )

}

export {ExpensesByPayees}