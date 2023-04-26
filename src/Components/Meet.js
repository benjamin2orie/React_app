// import { Form } from 'react-router-dom';
import styles from './Meet.module.css';
import logo from './logo.avif';
function Meet() {
    return(
        
        <header className = {styles.head}>
            <div className ={styles.heads}>
                <p>This is my react project project so as a front-end developers</p>
            </div>
            <img src ={logo} alt = "background" />
        </header>
      
    )
}
export default Meet;