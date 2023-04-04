import styles from './Footer.module.css';
function Footer(){
    return(
        <div className={styles.footer}>
            <div className={styles.container4}>
                <h3>Company</h3>
                <p>About Us</p>
                <p>Contact Us</p>
                <p>Team</p>
                <p>Careers</p>
                <p>Blog</p>
                <p>Press</p>
            </div>
            <div className={styles.container4}>
                <h3>Product</h3>
                <p>Features</p>
                <p>Pricing</p>
                <p>Security</p>
                <p>Vendors</p>
            </div>
          <div className={styles.container4}>
            <h3>Resources</h3>
            <p>Support</p>
            <p>Request a Demo</p>
            <p>Sitemap</p>
            <p>FAQ</p>
            <p>Bug Report</p>
         </div> 
        </div>
    )

}
export default Footer;