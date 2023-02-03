import PropTypes from 'prop-types';

export function Statistics({ title, stats }) {
  return (
    title && (
      <section>
        <h2>{title}</h2>
        <ul>
          {stats.map(({ id, label, percentage }) => (
            <li key={id}>
              <span>{label}</span>
              <span>{percentage}</span>
            </li>
          ))}
        </ul>
      </section>
    )
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
