

import axios from "axios";

const getAllExpenseItems = async () => {

  const response = await axios.get("http://localhost:4000/expenses")

  return response.data;
}

const createNewExpenseItem = () => {

}

export {getAllExpenseItems, createNewExpenseItem}