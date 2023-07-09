import Friend from 'components/FriendList/Friend/Friend';
import PropTypes from 'prop-types';
import { StyledFriendList } from './StyledFriendList';

const FriendList = ({ friends }) => {
  return (
    <StyledFriendList>
      {friends.map(friend => {
        return (
          <Friend
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        );
      })}
    </StyledFriendList>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendList;
