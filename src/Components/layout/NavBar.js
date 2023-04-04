import {Link} from 'react-router-dom';
import styles from './Styling.module.css';
function NavBar(){
    return(
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <h3>logo</h3>
                </div>
                <nav className={styles.navlist}>
                    <ul className={styles.unlist}>
                        <li>
                            <Link to='/home' className={styles.Item}>home</Link>
                        </li>
                        <li>
                            <Link to='/about' className={styles.Item}>about</Link>
                        </li>
                        <li>
                            <Link to='/service' className={styles.Item}>service</Link>
                        </li>
                   </ul>
                </nav>
            </div>
        </header>
    )
}
export default NavBar;