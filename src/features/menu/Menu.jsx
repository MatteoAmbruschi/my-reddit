import { Link, useNavigate } from "react-router-dom";
import styles from "./menu.module.css";
import { Outlet } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import { resetPostSingle } from "../post/postsSlice";
import { cleaner } from "../sideBar/slideBarSlice";
import { loadPosts } from "../post/postsSlice";
import { useState } from "react";

const Menu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const itemClick = useSelector((state) => state.slideBar.itemClicked);

  const placeholder = `Search Posts in ${itemClick ? itemClick.title : "Home"}`;
  const [isRotated, setIsRotated] = useState(false);

  const handleToHome = (e) => {
    e.preventDefault();
    dispatch(resetPostSingle());
    dispatch(cleaner());
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlerCharging = (e) => {
    e.preventDefault();
    dispatch(loadPosts());
    setIsRotated(true);

    setTimeout(() => {
      setIsRotated(false);
    }, 2000);
  };

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
            />
          </div>
        </nav>
      </div>
      <Outlet />
    </>
  );
};

export default Menu;
