import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { Title, StatList, Item, Label, Percentage } from './Statistics.styled';

export function Statistics({ title, stats }) {
  return (
    title && (
      <Box
        as="section"
        mx="auto"
        my={6}
        width={400}
        bg="white"
        borderRadius={4}
        boxShadow="0 0 4px #a4a2a2"
      >
        <Title>{title}</Title>
        <StatList>
          {stats.map(({ id, label, percentage }) => (
            <Item key={id}>
              <Label>{label}</Label>
              <Percentage>{percentage}%</Percentage>
            </Item>
          ))}
        </StatList>
      </Box>
    )
  );
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
