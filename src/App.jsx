import { FriendList } from "friend-list/FriendList";
import friends from "friend-list/friends.json"
import { Profile } from "social-profile/Profile";
import user from "social-profile/user.json"
import { Statistics } from "statistics/Statistics";
import data from "statistics/data.json"
import { TransactionHistory } from "transaction-history/Transaction";
import  transactions from "transaction-history/transactions.json"
import { Container } from "App.styled";
export const App = () => {
  const { username, tag, location, avatar, stats } = user
  // const { name, isOnline } =friends
  return (
    <Container> 
      <FriendList
        friends={friends}
      />
        <Profile
          username={username}
          tag={tag}
          location={location}
          avatar={avatar}
          stats={stats}            
      />
      <Statistics
        title="Upload stats" stats={data}
      />;
       <Statistics
        stats={data}
      />
      <TransactionHistory
        items={transactions}
      />
      
      </Container>
  );
};



