import FriendsListItem from "../FriendsListItem/FriendsListItem";
import {container, friendsList, friendsItem} from "./FriendsList.module.css"

const FriendsList = ({friends}) => {
    return (
        <div className={container}>
            <ul className={friendsList}>
                {friends.map((item, index) => {
                    return (
                        <li className={friendsItem} key={item.id}>
                        <FriendsListItem allFriends={friends[index]} />
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}

export default FriendsList;