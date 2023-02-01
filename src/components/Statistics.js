import { StatisticsList } from './StatisticsList';

export function Statistics({ title, stats }) {
  return (
    title && (
      <section>
        <h2>{title}</h2>
        <StatisticsList key={stats.id} item={stats} />
      </section>
    )
  );
}
