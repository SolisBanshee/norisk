import './post-footer.scss';
import clsx from 'clsx';

function PostFooter(props) {
  return (
    <div className={clsx('post-footer', props.mobileNav.detail && 'mobile-active')}>
      {props.children}
      {props.totalComments !== undefined && (
        <button className="button" onClick={() => props.getMoreComments()} disabled={props.disabled}>
          {!props.disabled ? 'Weitere Kommentare anzeigen' : 'Keine weiteren Kommentare verfügbar.'}
        </button>
      )}
    </div>
  );
}

export default PostFooter;
