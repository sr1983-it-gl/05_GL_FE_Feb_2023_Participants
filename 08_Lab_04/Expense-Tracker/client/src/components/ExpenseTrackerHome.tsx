import { useEffect } from "react"
import { getAllExpenseItems } from "../services/expense-service"


const ExpenseTrackerHome = () => {

  useEffect( () => {

    const getAllExpenseItemsInvoker = async () =>  {

      const response = await getAllExpenseItems();

      console.log("Response is");
      console.log(response);
      // Call the function - getAllExpenseItems
      // await / async
      // log data
      // verify - 5 expense items

    }

    getAllExpenseItemsInvoker();
  }, [])

  return (
    <div>
      Expense Tracker Home
    </div>
  )
}

export {ExpenseTrackerHome}