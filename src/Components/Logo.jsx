import styles from "./Logo.module.css";
import Logo1 from '../icon.png'
import { Link } from "react-router-dom";

function Logo() {
  return <Link to='/'><img src={Logo1} alt="WorldWise logo" className={styles.logo}/></Link>
}

export default Logo;
