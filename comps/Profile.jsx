import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/profile.module.css";
import Loader from "./Loader";
import { setImageSrc } from "../store/auth";
import { getUser, userDetails, updateUser } from "../store/auth";
import { useEffect } from "react";

const Profile = () => {
  const dispatch = useDispatch();

  const user = useSelector(userDetails);
  const isLoading = useSelector((state) => state.auth.isLoading);
  const [image, setImage] = useState(user?.data?.image);
  const [input, setInput] = useState({
    name: user?.data?.name,
    email: user?.data?.email,
    // password: user?.data?.password,
  });

  const onChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const fileRef = useRef();
  const reset = () => {
    setImage(user?.data?.image);
  };
  const onFileInputChange = () => {
    const file = fileRef.current.files[0];
    dispatch(setImageSrc(file));
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
      console.log(reader.result)
    };
    reader.readAsDataURL(file);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append(
      "image", fileRef.current.files[0]
    );
    formData.append("name", input.name);
    formData.append("email", input.email);
    // formData.append("password", input.password);
    dispatch(updateUser(formData));
  };

  return (
    <div className={styles.wrapper}>
      <h1>Profile</h1>

      <div className={styles.inner}>
        <div className={styles.profile_picture_ctn}>
          <img
            src={
              image?.includes("data:image")
                ? image
                : `
              data:image/jpeg;base64,${image}
              `
            }
            alt="profile picture"
          />

          <div className={styles.profile_picture_overlay}>
            <div className={styles.profile_picture_overlay_text}>
              <p>Choose your profile picture</p>

              <input type="file" ref={fileRef} onChange={onFileInputChange} />
              <button
                className={styles.upload}
                type="button"
                onClick={() => fileRef.current.click()}
              >
                Change
              </button>
              <button className={styles.reset} type="button" onClick={reset}>
                Remove
              </button>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className={styles.form}>
          <div className={styles.input_ctn}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={input.name}
              onChange={onChange}
            />
          </div>
          <div className={styles.input_ctn}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={input.email}
              onChange={onChange}
            />
          </div>
          {/* <div className={styles.input_ctn}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={input.password}
              onChange={onChange}
            />
          </div> */}
          <div className={styles.button_ctn}>
            <button className={styles.submit} type="submit">
              Submit <span>{isLoading ? <Loader ml={10} /> : null}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
