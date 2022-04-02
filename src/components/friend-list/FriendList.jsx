import { FriendListItem }  from './FriendListItem'
import PropTypes from 'prop-types'
export const FriendList = ({friends }) => {
    return (
        <ul className="friend-list"> {friends.map(({ id, isOnline, avatar, name }) => (
            <FriendListItem
                key={id}
                isOnline={isOnline}
                avatar={avatar}
                name={name}
            />
        ))}
            </ul>
    )
}

FriendList.prototype = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            isOnline: PropTypes.bool,
            avatar: PropTypes.string,
            name: PropTypes.string,
        })

    ).isRequired, 
}