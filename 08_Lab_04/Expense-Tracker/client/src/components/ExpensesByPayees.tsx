
// type ExpensesByPayeesModel -> expenseItems

import {Table} from "react-bootstrap"
import IExpenseItem from "../models/expense";

type ExpensesByPayeesModel = {

  expenseItems : IExpenseItem[];

}

const ExpensesByPayees = ({expenseItems} : ExpensesByPayeesModel) => {

  const getAllPayeeNames = () : string[] => {

    const uniquePayeeNames : string[] = [];
  
    expenseItems.forEach( (expenseItem) => {
  
      let payeeName = expenseItem.payeeName;
      if (!uniquePayeeNames.includes(payeeName)){
  
        uniquePayeeNames.push(payeeName);
      }
    })
  
    return uniquePayeeNames;
  } 


  const getTotalContributedAmount = (payeeName : string) => {

    let totalExpense = 0;

    expenseItems.forEach((expenseItem) => {

      if (expenseItem.payeeName === payeeName){
        totalExpense += expenseItem.price;
      }
    })

    return totalExpense;

  }

  const getGrandTotalExpenses = () => {

    let totalExpense = 0;

    expenseItems.forEach((expenseItem) => {

        totalExpense += expenseItem.price;
    })
    return totalExpense;   

  }

  return (
    <div>

        <h2>Expenses By Payees - Summary</h2>

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
              getAllPayeeNames().map( (payeeName, index) => {

                  return (
                    <tr>
                      <td>{(index + 1)}</td>
                      <td>{payeeName}</td>
                      <td>{getTotalContributedAmount(payeeName)}</td>
                    </tr>
                  )
              })
            }

            <tr>
              <td></td>
              <td>Grand Total</td>
              <td>{getGrandTotalExpenses()}</td>
            </tr>
          </tbody>

        </Table>      


    </div>
  )

}

export {ExpensesByPayees}