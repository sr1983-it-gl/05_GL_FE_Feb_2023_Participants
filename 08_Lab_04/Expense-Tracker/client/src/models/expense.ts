

interface IExpenseItem {

  expenseDescription: string,
  payeeName : string,
  price: number,
  date: Date,
  id: number

}

// interface IExpenseCreateItem {

//   expenseDescription: string,
//   payeeName : string,
//   price: number,
//   date: Date,

// }


export type IExpenseCreateItem = Omit<IExpenseItem, "id">

export default IExpenseItem;