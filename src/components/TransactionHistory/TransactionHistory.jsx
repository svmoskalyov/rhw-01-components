import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import {
  TransactionTable,
  Title,
  Row,
  Data,
} from './TransactionHistory.styles';

export function TransactionHistory({ items }) {
  return (
    <Box as="section" mx="auto" my={6} width={800} boxShadow="0 0 4px #a4a2a2">
      <TransactionTable>
        <thead>
          <tr>
            <Title>Type</Title>
            <Title>Amount</Title>
            <Title>Currency</Title>
          </tr>
        </thead>

        <tbody>
          {items.map(({ id, type, amount, currency }) => (
            <Row key={id}>
              <Data>{type}</Data>
              <Data>{amount}</Data>
              <Data>{currency}</Data>
            </Row>
          ))}
        </tbody>
      </TransactionTable>
    </Box>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
