import './user-list-navigation.scss';

function UserListNavigation(props) {
  return <nav className="user-list-navigation">{props.children}</nav>;
}

export default UserListNavigation;
