import { useState } from "react";
import { validate } from "./validation.js";
import style from "./Form.module.css";
import { useDispatch } from "react-redux";
import { loginAction } from "../../redux/actions.js";
import { Link } from "react-router-dom"

const Form = (props) => {
  const dispatch = useDispatch();
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
    dispatch(loginAction(userData.username, userData.password));
      props.login();
    
    
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
          <div className={style.containerButtonSignUp}>
            <span className={style.spanSignUp}>¿Usuario no registrado?</span>
            <Link to="/signup" className={style.buttonSignUp}>SIGN UP</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
