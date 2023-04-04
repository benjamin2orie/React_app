
import React, {useState, useCallback} from 'react';
import styles from './About.module.css';
import More from './More';
import Footer from './Footer';
import {MdOutlineDone}     from "react-icons/md";

import {MdSend} from 'react-icons/md';
function AboutPage(){
    /* defining the stae of login input here */
    const useToggle =(initialState = false) =>{
    const[state, setState] = useState(initialState)
    const toggle = useCallback(() => setState((state) => !state), []);
    return [state, toggle];
   }
   const[toggle, setToggle]= useToggle();
   /* giving rules in input validation */

   /* defining the state of register here */

   const useToggles =(initialStates = false) =>{
    const[state, setStates] = useState(initialStates)
    const toggles = useCallback(() => setStates((state) => !state), []);
    return [state, toggles];
   }
   const[toggles, setToggles]= useToggles();

//    Validating input field
   
    return(
        <div className={styles.headers}>
            <header className={styles.head}>
                <div className={styles.container}>
                    <p>snap</p>
                    <ul>
                        <li>Features <span>{<MdOutlineDone className={styles.arrow}/>}</span></li>
                        <li>Career <span>{<MdOutlineDone/>}</span></li>
                        <li>Company</li>
                        <li>About</li>
                    </ul>
                    <div className={styles.login}>
                     <button className={styles.btn} onClick={setToggle}>login</button>
                     <button className={styles.button} onClick={setToggles}>register</button>
                    </div>
                </div>
               
            </header>
            {toggle &&(
                <form className={styles.center}>
                <input type="text" placeholder="enter email" className={styles.emailInput}/><br/>
                <input type="password" placeholder="enter password" className={styles.password}/><br/>
                <button type="submit" className={styles.button1}>login</button>
            </form>
            )}
            {toggles &&(
                <form className={styles.register}>
                <input type="text" className={styles.fullName} placeholder="enter full name"/><br/>
                <input type="text" placeholder="enter email" className={styles.email}/><br/>
                <input type="text" placeholder="password" className={styles.password2}/><br/>
                <input type="date" className={styles.date}/><br/>
                 <button type="submit" className={styles.btn2}><MdSend/></button>
               </form>
            )}
            <More/>
            <Footer/>
            
        </div>
        
    )
}
export default AboutPage;