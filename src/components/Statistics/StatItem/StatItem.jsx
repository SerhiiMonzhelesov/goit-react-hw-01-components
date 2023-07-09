import PropTypes from 'prop-types';
import { StyledStatItem } from './StyledStatItem';
import { getRandomHecColor } from 'helpers/RandomHexColor';


const StatItem = ({ label, percentage }) => {
  const bgColor = getRandomHecColor();

  return (
    <StyledStatItem $bgColor={bgColor}>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </StyledStatItem>
  );
};

StatItem.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
};

export default StatItem;
