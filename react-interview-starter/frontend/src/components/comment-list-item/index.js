import './comment-list-item.scss';

function CommentListItem(props) {
  return (
    <li className="comment-list__item">
      <div className="comment-list__item-name">{props.comment?.name}</div>
      <div className="comment-list__item-body">
        <p className="comment-list__item-body__message">{props.comment?.body}</p>
      </div>
      <div className="comment-list__item-mail">
        From: <a href={`mailto:${props.comment?.email}`}>{props.comment?.email}</a>
      </div>
    </li>
  );
}

export default CommentListItem;
