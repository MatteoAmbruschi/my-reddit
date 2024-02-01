import { useNavigate } from "react-router-dom";
import styles from "./menu.module.css";
import { Outlet } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import { resetPostSingle } from "../post/postsSlice";
import { cleaner } from "../sideBar/slideBarSlice";
import { loadPosts } from "../post/postsSlice";
import { useEffect, useState } from "react";
import { loadComments } from "../comments/commentsSlice";
import { searchInput } from "../post/postsSlice";

const Menu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const itemClick = useSelector((state) => state.slideBar.itemClicked);
  const keepInput = useSelector((state) => state.posts.keepInput)

  const placeholder = `Search Posts in ${itemClick ? itemClick.title : "Home"}`;
  const [isRotated, setIsRotated] = useState(false);
  const selectedPostId = useSelector((state) => state.posts.selectedPost);

  const handleToHome = (e) => {
    e.preventDefault();
    dispatch(resetPostSingle());
    dispatch(cleaner());
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlerCharging = (e) => {
    e.preventDefault();
    dispatch(loadPosts(keepInput ? keepInput : 'popular'));
    setIsRotated(true);

    dispatch(loadComments({ subreddit: keepInput, postId: selectedPostId ? selectedPostId.id : null }));


    setTimeout(() => {
      setIsRotated(false);
    }, 2000);
  };

  const handleForm = ({target}) => {
    dispatch(searchInput(target.value.split(" ").join("")))
  }

  useEffect(() => {
    dispatch(loadPosts(keepInput ? keepInput : 'popular'));
  }, [keepInput])

  return (
    <>
      <div className={styles.menuBar}>
        <nav className={styles.container}>
          <div
            className={styles.singleLink}
            onClick={handleToHome}
          >
            <img
              className={styles.imgLogo}
              src="reddit.png"
              alt="reddit logo"
            />
          </div>
          <div
            className={`${styles.containerImg} ${
              isRotated ? styles.rotateDown : ""
            }`}
            onClick={handlerCharging}
          >
            <img
              src="arrow.png"
              alt="charing"
            />
          </div>
          <div
            className={styles.singleLink}
            style={{ width: "50%" }}
          >
            <input
              className={styles.inputSearch}
              type="text"
              placeholder={placeholder}
              onChange={(e) => handleForm(e)}
            />
          </div>
        </nav>
      </div>
      <Outlet />
    </>
  );
};

export default Menu;
