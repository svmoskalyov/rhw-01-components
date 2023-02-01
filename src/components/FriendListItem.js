export function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li>
      <span>{isOnline ? 'Online' : 'Offline'}</span>
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </li>
  );
}
