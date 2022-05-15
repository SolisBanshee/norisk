import './card.scss';
import clsx from 'clsx';

function Card(props) {
  return (
    <li className="card">
      <button className="card_header" onClick={() => props.setActiveUser(props.user.id)}>
        <div className="card_header_id"># {props.user?.id}</div>
        <div className="card_header_username">{props.user?.username}</div>
        <div className="card_header_dropdown">
          {' '}
          <p>{'+'}</p>
        </div>
      </button>
      <div className={clsx('card_body', props.active === props.user.id && 'active')}>
        <div className="card_body_category">User-Data</div>
        <div className="card_body_wrapper">
          <div className="card_body_item">
            Name:
            <br />
            {props.user?.name}
          </div>
          <div className="card_body_item">
            Website:
            <br /> {props.user?.website}
          </div>
          <div className="card_body_item">
            Phone:
            <br /> {props.user?.phone}
          </div>
          <div className="card_body_item">
            {' '}
            E-Mail:
            <br />
            {props.user?.email}
          </div>
        </div>
        <div className="card_body_category">Address</div>
        <div className="card_body_wrapper">
          <div className="card_body_item">Street: {props.user?.address?.street}</div>
          <div className="card_body_item">Suite: {props.user?.address?.suite}</div>
          <div className="card_body_item">Zipcode: {props.user?.address?.zipcode}</div>
          <div className="card_body_item">City: {props.user?.address?.city}</div>
          <div className="card_body_item">
            Geo: {props.user?.address?.geo?.lat} {props.user?.address?.geo?.lng}
          </div>
          <div className="card_body_item btn">get location</div>
        </div>
      </div>
    </li>
  );
}

export default Card;
