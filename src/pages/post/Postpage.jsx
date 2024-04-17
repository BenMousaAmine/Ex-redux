import { useSelector, useDispatch } from "react-redux";
import { fetchAllposts, getAllPosts } from "../../store/post/postsSlice";
import { useEffect } from "react";

const Postpage = () => {
  const dispatch = useDispatch();
  const posts = useSelector(getAllPosts);

  useEffect(() => {
    dispatch(fetchAllposts(10));
  }, []);

  return (
    <>
      <h1>Posts</h1>
      {posts.length > 0 &&
        posts.map((p) => (
          <div key={p.id}>
            <h2>{p.title}</h2>
            <p>{p.content}</p>
          </div>
        ))}
    </>
  );
};

export default Postpage;
