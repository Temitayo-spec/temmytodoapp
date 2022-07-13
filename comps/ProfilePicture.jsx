import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectImage, setImage, setImageSrc } from "../store/auth";
import styles from "../styles/profilePicture.module.css";
import Loader from "./Loader";

const ProfilePicture = ({ setPage, isLoading }) => {
  const dispatch = useDispatch();
  const image = useSelector(selectImage);
  const fileRef = useRef();
  const reset = () => {
    fileRef.current.value = "";
    dispatch(setImage(""));
  };
  const onChange = () => {
    const file = fileRef.current.files[0];
    dispatch(setImageSrc(file));
    const reader = new FileReader();
    reader.onload = () => {
      dispatch(setImage(reader.result));
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.profile_picture_ctn}>
        <img
          src={
            image ||
            "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          }
          alt="profile picture"
        />

        <div className={styles.profile_picture_overlay}>
          <div className={styles.profile_picture_overlay_text}>
            <h1>Profile Picture</h1>
            <p>Choose your profile picture</p>

            <input type="file" ref={fileRef} onChange={onChange} />
            <button
              className={styles.upload}
              type="button"
              onClick={() => fileRef.current.click()}
            >
              Upload
            </button>
            <button className={styles.reset} type="button" onClick={reset}>
              Remove
            </button>
          </div>
        </div>
      </div>
      <div className={styles.btn_ctn}>
        <button
          onClick={() => setPage(1)}
          type="button"
          className={styles.back}
        >
          Back
        </button>
        <button className={styles.submit} type="submit">
          Submit <span>{isLoading ? <Loader ml={10} /> : null}</span>
        </button>
      </div>
    </div>
  );
};

export default ProfilePicture;
