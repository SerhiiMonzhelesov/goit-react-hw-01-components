import PropTypes from 'prop-types'

const TableRow = ({ type, amount, currency }) => {
    return <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
}

TableRow.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired
}

export default TableRow;