import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import items from '../data/transactions.json';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './Transaction/TransactionHistory';
import Container from './Container/Container';

export const App = () => {
  return (
    <>
      <Container>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <Statistics stats={data} title="Upload stats" />
        <FriendList friends={friends} />
        <TransactionHistory items={items} />
      </Container>
    </>
  );
};
