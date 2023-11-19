
// type ExpensesByPayeesModel -> expenseItems

const ExpensesByPayees = () => {

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

      {/* Bring the Table

        <thead>
          <
        </thead>

        <tbody>

        {
          <tr>
          <tr>
        }

        <tr>
        </tr>
        </tbody>
      */}

    </div>
  )

}

export {ExpensesByPayees}