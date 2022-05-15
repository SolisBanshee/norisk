import './post-body-message.scss';

function PostBodyMessage(props) {
  return <div className="post-body__message">{props.post?.body}</div>;
}

export default PostBodyMessage;
