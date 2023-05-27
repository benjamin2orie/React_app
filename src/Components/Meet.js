// import { Form } from 'react-router-dom';
import styles from './Meet.module.css';
import shoping from './shoping.jpg';
import shoping2 from './shoping2.jpg';
import shoping3 from  './shoping3.jpg';
import shoping4 from './shoping4.jpg';
import shoping6 from './shoping6.jpg';
import shoping7 from './shoping7.jpg';
import shoping8 from './shoping8.jpg';
import shoping9 from './shoping9.jpg';
import shoping10 from './shoping10.jpg';

// import logo from './greeting.avif';
function Meet() {
    return(
        
        <div className = {styles.head}>
            <div className ={styles.heads}>
            </div>
            <section className ={styles.section}>
                <div className ={styles.sectionContainer}>
                    <div>
                      <img src = {shoping} alt= " male shoe" className = {styles.reduceImageSize1}/>
                      <h3>price: $125</h3>
                    </div>
                    <div>
                      <img src = { shoping2} alt = "male shoe" className = { styles.reduceImageSize2}/>
                      <h3>price: $230</h3>
                    </div>
                    <div>
                      <img src = { shoping3} alt = "male shoe" className = { styles.reduceImageSize3}/>
                      <h3>price: $50</h3>
                    </div>
                    <div>
                      <img src = { shoping4} alt = "male shoe" className = { styles.reduceImageSize4}/>
                      <h3>price: $70</h3>
                    </div>
                    <div>
                      <img src = { shoping6} alt = "male shoe" className = {styles.reduceImageSize5}/>
                      <h3>price: $80</h3>
                    </div>
                    <div>
                      <img src = { shoping7} alt = "male shoe" className = {styles.reduceImageSize6}/>
                      <h3>price: $90</h3>
                    </div>
                    <div>
                      <img src = { shoping8} alt = "male shoe" className = { styles.reduceImageSize7}/>
                      <h3>price: $100</h3>
                    </div>
                    <div>
                      <img src = { shoping9} alt = "female shoe" className = { styles.reduceImageSize8}/>
                      <h3>price: $140</h3>
                    </div>
                    <div>
                      <img src = { shoping10} alt = "female shoe" className = {styles.reduceImageSize9}/>
                      <h3>price: $40</h3>
                    </div>
                </div>
            </section>
            <footer className ={styles.para}>
            <p>copyright &copy; 2023</p>

            </footer>
            
        </div>
        
        
      
    )
}
export default Meet;
