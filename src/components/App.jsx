import { FriendList  } from "components/friend-list/FriendList";
import friends from "data/friends.json"
import { Profile } from "components/social-profile/Profile";
import user from "data/user.json"
import { Statistics } from "components/statistics/Statistics";
import data from "data/data.json"
import { TransactionHistory } from "components/transaction-history/Transaction";
import  transactions from "data/transactions.json"
import { Container } from "components/App.styled";
export const App = () => {
  const { username, tag, location, avatar, stats } = user
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



