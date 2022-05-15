import './post-list-item.scss';
import clsx from 'clsx';

function PostListItem(props) {
  return (
    <li className={clsx('post-list__item', props.active === props.post.id && 'active')}>
      <button
        className="post-list__post-button"
        onClick={() => {
          props.setActivePost(props.post.id);
          props.setMobileNav({ posts: true, detail: true });
        }}
      >
        <span> {props.post?.title}</span>
      </button>
    </li>
  );
}

export default PostListItem;
