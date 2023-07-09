import StatItem from "components/Statistics/StatItem/StatItem";
import PropTypes from 'prop-types'
import { StyledStatistics } from "./StyledStatistics";

const Statistics = ({ stats, title}) => {
  return (
    <section className="statistics">
      <StyledStatistics>{title && <h2 className="title">{title}</h2>}

      <ul className="stat-list">
        {stats.map(stat => {
          return (
            <StatItem
              key={stat.id}
              label={stat.label}
              percentage={stat.percentage}
            />
          );
        })}
      </ul></StyledStatistics>
    </section>
  );
};

Statistics.propTypes = {
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })).isRequired,
    title: PropTypes.string
};

export default Statistics;
