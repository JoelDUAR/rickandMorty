import { useState } from "react";
import { validate } from "./validation.js";
import style from "./Form.module.css";



const Form = (props) => {
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

  const handleSubmit = (event) => {
    event.preventDefault();
    // eslint-disable-next-line
    props.login(userData);
  };

  return (
    <div className={style.box}>
      <div className={style.mainDiv}>
        <form onSubmit={handleSubmit} className={style.form}>
        <h2 className={style.titulo}>Login</h2>
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
              LOGIN
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
