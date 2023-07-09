import { StyledTransactionHystory } from './StyledTransactionHystory';
import TableRow from './TableRow/TableRow';
import PropTypes from 'prop-types'

const TransactionHistory = ({ items }) => {
  return (
    <StyledTransactionHystory>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => {
          return (
            <TableRow
              key={item.id}
              type={item.type}
              amount={item.amount}
              currency={item.currency}
            />
          );
        })}
      </tbody>
    </StyledTransactionHystory>
  );
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          type: PropTypes.string.isRequired,
          amount: PropTypes.string.isRequired,
          currency: PropTypes.string.isRequired
        })
    ).isRequired
}

export default TransactionHistory;
