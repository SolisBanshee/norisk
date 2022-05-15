import './comment-list.scss';

function CommentList(props) {
  return <ul className="comment-ist">{props.children}</ul>;
}

export default CommentList;
