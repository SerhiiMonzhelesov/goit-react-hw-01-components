import PropTypes from 'prop-types';
import { StyledFriend } from './StyledFriend';

const Friend = ({ avatar, name, isOnline }) => {
  return (
    <StyledFriend $isOnline={isOnline}>
      <span className="status"></span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </StyledFriend>
  );
};

Friend.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
};

export default Friend;
