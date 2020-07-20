import React from 'react'

export const Operations = ({operations}) => {

    if (operations.length === 0) return null

    const OperationRow = (operation,index) => {

        return(
              <tr key = {index} className={index%2 === 0?'odd':'even'}>
                  <td>{operation.firstNumber}</td>
                  <td>{operation.operator}</td>
                  <td>{operation.secondNumber}</td>
                  <td>{operation.answer}</td>
              </tr>
          )
    }

    const operationTable = operations.map((operation,index) => OperationRow(operation,index))

    return(
        <div className="container">
            <h2>Operations</h2>
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th>First number</th>
                    <th>Operator</th>
                    <th>Second number</th>
                    <th>Answer</th>
                </tr>
                </thead>
                <tbody>
                    {operationTable}
                </tbody>
            </table>
        </div>
    )
}