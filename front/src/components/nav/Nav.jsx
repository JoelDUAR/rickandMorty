import React from "react";
import style from './Nav.module.css'
import SearchBar from '../searchBar/SearchBar'
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';


class Nav extends React.Component {
// eslint-disable-next-line
constructor(props) {
  super(props);
}

render(){
  return (
    <div className={style.containerNav}>
      <div className={style.containerImg}>
        <img className={style.Logo} src={Logo} alt="Logo" />
      </div>
      
      <div className={style.containerLinks}>
      <Link to="/home">
            <span className={style.Links}>Home</span>
          </Link>
          <Link to="/about">
            <span className={style.Links}>About</span>
          </Link>
          <Link to="/favorites">
            <span className={style.Links}>Favorites</span>
          </Link>
          <Link to="/" onClick={()=>this.props.logout()}><span className={style.Links}>Logout</span></Link>
      </div>
      <div className={style.containerSearch}>
        <SearchBar onSearch={this.props.onSearch}/>
      </div>
      </div>
)
}
}

export default Nav;