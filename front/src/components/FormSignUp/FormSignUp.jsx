import { useState } from "react";
import { validate } from "../Form/validation";
import style from "../Form/Form.module.css";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const FormSignUp = (props) => {
  const navigate = useNavigate();
  const URL_BASE = "http://localhost:3001";
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  // eslint-disable-next-line
  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setUserData({ ...userData, [property]: value });
    setErrors(validate({ ...userData, [property]: value }));
  };

  const postUser = async (userdata) => {
    const response = await axios.post(
      `${URL_BASE}/rickandmorty/login`,
      {
        email: userData.username,
    password: userData.password,
      }
    );
 return response.data
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // eslint-disable-next-line

    postUser();
    navigate("/")
  };

  return (
    <div className={style.box}>
      <div className={style.mainDiv}>
        <form onSubmit={handleSubmit} className={style.form}>
          <h2 className={style.titulo}>Sign up</h2>
          <div className={style.containerInput}>
            <label htmlFor="username">Email: </label>
            <input
              type="text"
              name="username"
              value={userData.username}
              onChange={handleInputChange}
              className={errors.username ? style.warning : style.inputBox}
            />
            <span className={style.span}>{errors.username}</span>
          </div>
          <div className={style.containerInput}>
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              name="password"
              value={userData.password}
              onChange={handleInputChange}
              className={errors.password ? style.warning : style.inputBox}
            />
            <span className={style.span}>{errors.password}</span>
          </div>
          <div className={style.containerButton}>
            <button className={style.button} type="submit">
              New User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormSignUp;
