
import IExpenseItem from "../models/expense";
import {getGrandTotalExpenses, getTotalContributedAmount, getAllPayeeNames} from "../services/expense-utils";

import {Table} from "react-bootstrap"

type PendingExpensesByPayeesModel = {

  expenseItems : IExpenseItem[];
}

const PendingExpensesByPayees = ({expenseItems} : PendingExpensesByPayeesModel) => {

  const getPendingAmount = (payeeName : string) => {

    // 900
    const grandTotal = getGrandTotalExpenses(expenseItems);

    // 450
    const splitUpAmount = grandTotal / 2;

    // 100
    const totalContributionByPayee = getTotalContributedAmount(payeeName, expenseItems);

    if (totalContributionByPayee >= splitUpAmount){

      return 0;
    }else{
      return (splitUpAmount - totalContributionByPayee);
    }

    // Algorithm
    // TODO
  }

  return (
    <div>

        <h3>Pending Amount - View</h3>

    <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Payee Name</th>
              <th>Pending Amount</th>
            </tr>
          </thead>
          
          <tbody>
            {
              getAllPayeeNames(expenseItems).map( (payeeName, index) => {

                  return (
                    <tr>
                      <td>{(index + 1)}</td>
                      <td>{payeeName}</td>
                      <td>{getPendingAmount(payeeName)}</td>
                    </tr>
                  )
              })
            }

          </tbody>

        </Table>   
    </div>
  )
}

export {PendingExpensesByPayees}