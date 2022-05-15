import React from 'react';
import './user-list-item.scss';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';

function UserListItem(props) {
  return (
    <li className={clsx('user-list__item', props.active === props.user.id && 'active')}>
      <button
        className="user-list__user-button"
        onClick={() => {
          props.setActiveUser(props.user.id);
          props.setMobileNav({ posts: true, detail: false });
        }}
      >
        {props.user?.username}
      </button>
      <button onClick={() => props.openUserModal(props.user.id)} className="user-list__profile-button">
        <FontAwesomeIcon icon={faUser} />
      </button>
    </li>
  );
}

export default UserListItem;
