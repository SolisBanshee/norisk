import './post-header.scss';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons/faChevronLeft';

function PostHeader(props) {
  return (
    <div className={clsx('post-header', props.mobileNav.detail && 'mobile-active')}>
      <button className="post-header__button" onClick={() => props.setMobileNav({ posts: true, detail: false })}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      {props?.post?.title}{' '}
    </div>
  );
}

export default PostHeader;
