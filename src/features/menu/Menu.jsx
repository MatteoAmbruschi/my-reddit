import { useNavigate } from "react-router-dom";
import styles from "./menu.module.css";
import { Outlet } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import { resetPostSingle } from "../post/postsSlice";
import { loadPosts } from "../post/postsSlice";
import { useEffect, useState, useRef } from "react";
import { loadComments } from "../comments/commentsSlice";
import { searchInput } from "../post/postsSlice";
import SideBar from '../sideBar/SideBar'

const Menu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const itemClick = useSelector((state) => state.slideBar.itemClicked);
  const keepInput = useSelector((state) => state.posts.keepInput)

  const placeholder = `Search Posts in ${itemClick ? itemClick.title : "Popular"}`;
  const [isRotated, setIsRotated] = useState(false);
  const selectedPostId = useSelector((state) => state.posts.selectedPost);
  const refInput = useRef()

  const handleToHome = (e) => {
    e.preventDefault();
    dispatch(resetPostSingle());
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlerCharging = (e) => {
    e.preventDefault();
    dispatch(loadPosts());
    setIsRotated(true);

    dispatch(loadComments({ subreddit: keepInput, postId: selectedPostId ? selectedPostId.id : null }));


    setTimeout(() => {
      setIsRotated(false);
    }, 2000);
  };

  const [valueForm, setValueForm] = useState()
  const handleForm = ({target}) => {
    setValueForm(target.value)
    dispatch(searchInput(target.value.split(" ").join("")))
  }

  useEffect(() => {
    dispatch(loadPosts());
  }, [keepInput])

  useEffect(() =>{
      setValueForm('')
  }, [itemClick])

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
              ref={refInput}
              className={styles.inputSearch}
              type="text"
              placeholder={placeholder}
              onChange={(e) => handleForm(e)}
              value={valueForm}
            />
          </div>
        </nav>
      </div>
      <div style={{display: 'flex', width: '100%'}}><SideBar /><Outlet /></div>
      
    </>
  );
};

export default Menu;
