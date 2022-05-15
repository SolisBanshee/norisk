import './post-body.scss';
import clsx from 'clsx';

function PostBody(props) {
  return <div className={clsx('post-body', props.mobileNav.detail && 'mobile-active')}>{props.children}</div>;
}

export default PostBody;
