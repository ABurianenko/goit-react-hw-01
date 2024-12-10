// import PropTypes from 'prop-types';
import {friendsAvatar, friendsName, isOnline, isOffline} from './FriensListItem.module.css'

const FriendsListItem = ({allFriends}) => {
    const {avatar,name,isOnline: isTrue,id} = allFriends;
    return (
        <div key={id}>
            <img className={friendsAvatar} src={avatar} alt={name} width="48" />
            <p className={friendsName}>{name}</p>
            {isTrue ? <p className={isOnline}>Online</p> : <p className={isOffline}>Offline</p>}
        </div>
    )
}

// FriendsListItem.propTypes = {
//     friend: PropTypes.shape({
//         avatar: PropTypes.string.isRequired,
//         name: PropTypes.string.isRequired,
//         isOnline: PropTypes.bool.isRequired,
//     })
// };

export default FriendsListItem;