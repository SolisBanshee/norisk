import './App.scss';
import React from 'react';
import { getUsers } from './services/getUsers';
import { getPosts } from './services/getPosts';
import { getComments } from './services/getComments';
import { getItemsByProp } from './components/utils/getItemsByProp';
import Loader from './components/loader';
import Header from './components/header';
import AppContainer from './components/app-container';
import UserListNavigation from './components/user-list';
import PostList from './components/post-list';
import PostHeader from './components/post-header';
import PostBody from './components/post-body';
import PostFooter from './components/post-footer';
import UserListItem from './components/user-list-item';
import PostListItem from './components/post-list-item';
import PostBodyMessage from './components/post-body-message';
import ListPlaceholder from './components/list-placeholder';
import CommentList from './components/comment-list';
import CommentListItem from './components/comment-list-item';
import UserModal from './components/user-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons/faChevronLeft';

const COMMENTS_LIMIT = 2;

function App() {
  const [init, setInit] = React.useState(false);
  const [users, setUsers] = React.useState([]);
  const [posts, setPosts] = React.useState([]);
  const [userPosts, setUserPosts] = React.useState([]);
  const [comments, setComments] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [activeUser, setActiveUser] = React.useState(1);
  const [activePost, setActivePost] = React.useState();
  const [activePostComments, setActivePostComments] = React.useState([]);
  const [activeUserPost, setActiveUserPost] = React.useState();
  const [commentsOffset, setCommentsOffset] = React.useState(0);
  const [userModalData, setUserModalData] = React.useState(null);
  const [userModalVisible, setUserModalVisible] = React.useState(false);
  const [mobileNav, setMobileNav] = React.useState({ posts: false, detail: false });

  // First param = get Data,  Second param = change Data

  React.useEffect(() => {
    if (!init) {
      // first check if app is initialized
      (async () => {
        const usersRes = await getUsers();
        const postsRes = await getPosts();
        const commentsRes = await getComments();

        // change Boolean to let app know its initialized
        setInit(true);
        if (usersRes && !!usersRes.length) {
          setUsers(usersRes);
        }
        if (postsRes && !!postsRes.length) {
          setPosts(postsRes);
        }
        if (commentsRes && !!commentsRes.length) {
          setComments(commentsRes);
        }
        setLoading(false);
      })();
    }
  }, [init, users, posts, comments, loading]);

  React.useEffect(() => {
    if (posts && !!posts.length && activeUser) {
      const userPosts = getItemsByProp(posts, activeUser, 'userId');
      setUserPosts(userPosts);
      if (userPosts[0]?.id) {
        setActivePost(userPosts[0].id);
      } else {
        setActiveUserPost(null);
        setActivePostComments(null);
      }
      setCommentsOffset(0);
    }
  }, [posts, activeUser]);

  React.useEffect(() => {
    if (posts && !!posts.length && activePost) {
      setActiveUserPost(getItemsByProp(posts, activePost, 'id'));
      setActivePostComments(getItemsByProp(comments, activePost, 'postId'));
      setCommentsOffset(0);
    }
  }, [posts, activePost, comments]);

  const handleOpenUserModal = userId => {
    setUserModalData(getItemsByProp(users, userId, 'id')[0]);
    setUserModalVisible(true);
  };

  const handleCloseUserModal = () => {
    setUserModalVisible(false);
  };

  const handleGetMoreComments = () => {
    setCommentsOffset(commentsOffset + COMMENTS_LIMIT);
  };

  return (
    <div className="App">
      <Header />
      <AppContainer>
        <UserListNavigation>
          <ListPlaceholder>
            <span>User</span>
          </ListPlaceholder>
          {loading && <Loader />}
          {!loading && users && !users.length && <p>Keine Benutzer gefunden.</p>}
          {!loading &&
            users &&
            users.length &&
            users.map(user => {
              return (
                <UserListItem
                  user={user}
                  key={user.id}
                  active={activeUser}
                  activeProfile={activeUser}
                  setActiveUser={setActiveUser}
                  openUserModal={handleOpenUserModal}
                  setMobileNav={setMobileNav}
                ></UserListItem>
              );
            })}
        </UserListNavigation>
        <PostList mobileNav={mobileNav} setActiveUser={setActiveUser}>
          <ListPlaceholder className="post-list-placeholder">
            <button className="list-placeholder-button" onClick={() => setMobileNav({ posts: false, detail: false })}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <span>Posts</span>
          </ListPlaceholder>
          {!loading && userPosts && !userPosts.length && <p className="no-entry">Keine Posts vorhanden.</p>}
          {!loading &&
            userPosts &&
            !!userPosts.length &&
            userPosts.map(post => {
              return (
                <PostListItem key={post.id} post={post} setActivePost={setActivePost} active={activePost} setMobileNav={setMobileNav}>
                  {post.id} {post.title}
                </PostListItem>
              );
            })}
        </PostList>
        {!loading && <PostHeader mobileNav={mobileNav} setMobileNav={setMobileNav} post={activeUserPost?.[0] || {}}></PostHeader>}
        <PostBody mobileNav={mobileNav}>
          {!loading && !activeUserPost && <p>Kein Post vorhanden.</p>}
          {!loading && activeUserPost && !!activeUserPost.length && <PostBodyMessage post={activeUserPost[0]}></PostBodyMessage>}
          <CommentList>
            {!loading &&
              activePostComments &&
              !!activePostComments.length &&
              activePostComments.map((comment, idx) => {
                const maxComments = commentsOffset === 0 ? COMMENTS_LIMIT : commentsOffset * COMMENTS_LIMIT;

                return idx + 1 <= maxComments ? <CommentListItem comment={comment} key={comment.id}></CommentListItem> : <React.Fragment key={comment.id}></React.Fragment>;
              })}
          </CommentList>
        </PostBody>
        <PostFooter
          totalComments={activePostComments?.length}
          disabled={activePostComments?.length <= commentsOffset + COMMENTS_LIMIT}
          c
          getMoreComments={handleGetMoreComments}
          mobileNav={mobileNav}
          setMobileNav={setMobileNav}
        ></PostFooter>
      </AppContainer>
      <UserModal visible={userModalVisible} user={userModalData} closeModal={handleCloseUserModal} />
    </div>
  );
}

export default App;
