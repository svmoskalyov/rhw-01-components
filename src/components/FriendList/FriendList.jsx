import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { FriendListItem } from './FriendListItem';

export function FriendList({ friends }) {
  return (
    <Box as="section" mx="auto" my={6} width={200} bg="white">
      <ul>
        {friends.map(({ id, avatar, name, isOnline }) => (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        ))}
      </ul>
    </Box>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
};
