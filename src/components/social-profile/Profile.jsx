import PropTypes from 'prop-types'
import { Username, UserInfo, UserLocation, Wrapper, ProfileCard, CardDescription, Avatar, ColumnInfo, LabelName, Quantity } from './Profile.styled'

export const Profile = ({username, tag, location, avatar, stats}) => {
    return <ProfileCard>
  <CardDescription >
    <Avatar
      src={avatar} 
      alt="User avatar"
    />
    <Username>{username}</Username>
    <UserInfo>{tag}</UserInfo>
    <UserLocation>{location}</UserLocation>
  </CardDescription>
        <Wrapper>
    <ColumnInfo>
      <LabelName>Followers</LabelName>
      <Quantity>{stats.followers}</Quantity>
    </ColumnInfo>
    <ColumnInfo>
      <LabelName>Views</LabelName>
      <Quantity>{stats.views}</Quantity>
    </ColumnInfo>
    <ColumnInfo>
      <LabelName>Likes</LabelName>
      <Quantity>{stats.likes}</Quantity>
    </ColumnInfo>
        </Wrapper>
     </ProfileCard>
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  // stats: PropTypes.string.isRequired,
  // {
  //   followers: PropTypes.string.isRequired,
  //   views: PropTypes.string.isRequired,
  //   likes: PropTypes.string.isRequired,
  //   }
}