import './post-list.scss';
import clsx from 'clsx';

function PostList(props) {
  return <ul className={clsx('post-list', props.mobileNav.posts && 'mobile-active')}>{props.children}</ul>;
}

export default PostList;
