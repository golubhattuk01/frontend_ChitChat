import PostBox from "./PostBox";
import "../styles/postbox.css";
const PostLoad = ({ Posts, user }) => {
  if (!Posts || Posts.length === 0) {
    return <h1>No Post Available</h1>;
  }

  return (
    <div className="post_card">
      {Posts.map((item) => (
        <PostBox element={item} user={user} key={item._id} />
      ))}
    </div>
  );
};
export default PostLoad;
