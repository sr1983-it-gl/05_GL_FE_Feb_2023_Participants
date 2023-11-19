import { useEffect } from "react"
import { getAllExpenseItems } from "../services/expense-service"
import { ExpenseItemsLister } from "./ExpenseItemsLister"


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

      <h2>Expense Application</h2>

      <ExpenseItemsLister></ExpenseItemsLister>

    </div>
  )
}

export {ExpenseTrackerHome}