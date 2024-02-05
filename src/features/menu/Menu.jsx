import { useNavigate } from "react-router-dom";
import styles from "./menu.module.css";
import { Outlet } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import { resetPostSingle } from "../post/postsSlice";
import { loadPosts } from "../post/postsSlice";
import { useEffect, useState } from "react";
import { loadComments } from "../comments/commentsSlice";
import { searchInput } from "../post/postsSlice";
import SideBar from '../sideBar/SideBar'
import { cleanerItem } from "../sideBar/slideBarSlice";

const Menu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const itemClick = useSelector((state) => state.slideBar.itemClicked);
  const keepInput = useSelector((state) => state.posts.keepInput)

  const [isRotated, setIsRotated] = useState(false);
  const selectedPostId = useSelector((state) => state.posts.selectedPost);
  const [valueForm, setValueForm] = useState('')
  const [placeholder, setPlaceholder] = useState("Popular")

  useEffect(() => {
    if(itemClick){
    dispatch(cleanerItem())
    setPlaceholder(itemClick.title ? itemClick.title : "Popular")}
  }, [itemClick])
  
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


  const handleForm = ({target}) => {
    setValueForm(target.value)
    dispatch(searchInput(target.value.split(" ").join("")))
    if (valueForm === '') {
      setPlaceholder("Popular");
    }
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
              className={styles.inputSearch}
              type="text"
              placeholder={`Search Posts In ${placeholder}`}
              onChange={(e) => handleForm(e)}
              value={valueForm}
            />
          </div>
        </nav>
      </div>
      <div style={{display: 'flex', width: '100%', flex: '1'}}><SideBar /><Outlet /></div>
      
    </>
  );
};

export default Menu;
