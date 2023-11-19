import { useEffect } from "react"
import { getAllExpenseItems } from "../services/expense-service"


const ExpenseTrackerHome = () => {

  useEffect( () => {

    const getAllExpenseItemsInvoker = () =>  {

      // Call the function - getAllExpenseItems
      // await / async
      // log data
      // verify - 5 expense items

    }

    getAllExpenseItemsInvoker();
  })

  return (
    <div>
      Expense Tracker Home
    </div>
  )
}

export {ExpenseTrackerHome}