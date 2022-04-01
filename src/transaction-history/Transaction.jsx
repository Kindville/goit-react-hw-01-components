import PropTypes from 'prop-types'
import {TransactionTable, Head, TableRow, TableBody} from 'transaction-history/Transaction.styled'
export const TransactionHistory = ({items}) => {
    return (
        <TransactionTable className="transaction-history">
         <Head>
            <TableRow>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
            </TableRow>
        </Head>

            <tbody>
      {items.map(({ id, type, amount, currency }) => (
            <tr key={id}>
            <TableBody>{type}</TableBody>
            <TableBody>{amount}</TableBody>
            <TableBody>{currency}</TableBody>
            </tr>
    ))
                }
          </tbody>
             </TransactionTable>
      )  
}
TransactionHistory.prototype = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            type: PropTypes.string ,
            amount: PropTypes.string ,
            currency: PropTypes.string,
        })
    ).isRequired
}
