import PropTypes from 'prop-types'
import {FriendCard, OnlineStatus, Avatar, Name } from './FriendList.styled'

export const FriendListItem = ({avatar, name, isOnline}) => {
    return  (
      <FriendCard>
            <OnlineStatus isOnline={isOnline} >{isOnline}</OnlineStatus>
            <Avatar src={avatar} alt="User avatar" width="48" />
            <Name>{name}</Name>
        </FriendCard>
    )
}
FriendListItem.prototype = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}