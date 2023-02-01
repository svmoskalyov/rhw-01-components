export function StatisticsList({ item }) {
  return (
    <ul>
      {item.map(item => (
        <li>
          <span>{item.label}</span>
          <span>{item.percentage}</span>
        </li>
      ))}
    </ul>
  );
}
