import React from 'react';
import './user-modal.scss';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';
import LeafletMap from '../leaftlet-map';

function UserModal(props) {
  return (
    <React.Fragment>
      <div className={clsx('profile-overlay', props.visible && 'active')} onClick={() => props.closeModal()}></div>
      <div className={clsx('profile-overlay__wrapper', props.visible && 'active')}>
        {props.user && (
          <React.Fragment>
            <button className="close-btn" onClick={() => props.closeModal()}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <div className="profile-overlay__header">Username : {props.user?.username}</div>
            <div className="profile-overlay__body">
              <div className="profile-overlay__body__category">User-Data</div>
              <div className="profile-overlay__body__wrapper">
                <div className="profile-overlay__body__item">Name : {props.user?.name}</div>
                <a className="profile-overlay__body__item" target="_blank" rel="noreferrer" href="{props.user?.website}">
                  Website : {props.user?.website}
                </a>
                <a className="profile-overlay__body__item" target="_blank" rel="noreferrer" href={props.user?.phone}>
                  Tel: {props.user?.phone}
                </a>
                <a className="profile-overlay__body__item" href={`mailto:${props.user?.email}`}>
                  E-Mail: {props.user?.email}
                </a>
              </div>
              <div className="profile-overlay__body__category">Company-Information</div>
              <div className="profile-overlay__body__wrapper">
                <div className="profile-overlay__body__item">Name: {props.user?.company?.name}</div>
                <div className="profile-overlay__body__item">BS: {props.user?.company?.bs}</div>
                <div className="profile-overlay__body__item">CatchPhrase: {props.user?.company?.catchPhrase}</div>
              </div>
              <div className="profile-overlay__body__category">Address-Information</div>
              <div className="profile-overlay__body__wrapper">
                <div className="profile-overlay__body__item">Street: {props.user?.address?.street}</div>
                <div className="profile-overlay__body__item">Suite: {props.user?.address?.suite}</div>
                <div className="profile-overlay__body__item">Zipcode: {props.user?.address?.zipcode}</div>
                <div className="profile-overlay__body__item">City: {props.user?.address?.city}</div>
                <div className="profile-overlay__body__item">
                  Geo: lat: {props.user?.address?.geo?.lat} lng:{props.user?.address?.geo?.lng}
                </div>
              </div>
            </div>
            <div className="profile-overlay__footer">
              <div className="profile-overlay__footer-map">
                <LeafletMap
                  key={JSON.stringify([props.user?.address?.geo?.lat, props.user?.address?.geo?.lng])}
                  latlng={[props.user?.address?.geo?.lat, props.user?.address?.geo?.lng]}
                />
              </div>
            </div>
          </React.Fragment>
        )}
      </div>
    </React.Fragment>
  );
}

export default UserModal;
