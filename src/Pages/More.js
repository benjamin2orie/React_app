
import styles from './More.module.css';
import logo from './logo.avif';
function More() {
   return(
    <div className={styles.container}>
       <section className={styles.section}>
                <div className={styles.content}>
                    <h4>make remote work</h4>
                    <p className={styles.para}>Get your team in sync, no matter your location.</p>
                    <p>Streamline line processes, create team rituals, and watch productivity soar</p>
                    <h6>Learn more</h6>
                </div>
                <img src ={logo} alt ="logo" className={styles.logo2}/>
            </section>
    </div>
   
   )

}
export default More;