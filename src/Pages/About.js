
import React, {useState, useCallback} from 'react';
import {useForm} from 'react-hook-form'
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
    const {register, handleSubmit, formState: {errors} } = useForm();
    const onSubmit =(data) => console.log(data);
   
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
                     <button className={styles.btn} onClick={setToggle}>Login</button>
                     <button className={styles.button} onClick={setToggles}>Register</button>
                    </div>
                </div>
            </header>
            {toggle &&(
                <form className={styles.center}onSubmit={handleSubmit(onSubmit)}>
                <input type="email" name="email" placeholder="enter email" className={styles.emailInput}
                    aria-invalid ={errors.name ? "true" : "false"}
                    {...register ('email', {required: true, minLength: 5, maxLength: 30})}
                /><br/>
                {errors.email && errors.email.type === "required"&&(<p role="alert" style={{color: 'red', paddingLeft: '5em', paddingTop: '1em'}}>Please fill out this field</p>)}
                {errors.email && errors.email.type === "minLength"&&(<p role="alert" className={styles.message}>The email must be atleast 5 characters</p>)}
                {errors.email && errors.email.type === "maxLength" &&(<p role="alert" className={styles.maxLength}>User email should not be more than 30 characters</p>)}

                <input type="password" name ="password" placeholder="enter password" className={styles.password}
                    aria-invalid={ errors.name ? "true" : "false"}
                    {...register ('password', {required : true, minLength : 5, maxLength : 12})}
                /><br/>
                { errors.password && errors.password.type === "required" &&(<p role="alert" style={{color: 'red', fontSize: '20px', paddingTop: '1em', marginLeft: '5em'}}>Please this input is required!</p>)}
                { errors.password && errors.password.type === "minLength" &&(<p role="alert" className ={styles.msg}>User password must be atleast 5 characters</p>)}
                { errors.password && errors.password.type === "maxLength" &&(<p role ="alert"className ={styles.msg2}>User password should not be more than 12 characters</p>)}
                <button type="submit" className={styles.button1}onSubmit={handleSubmit(onSubmit)}>login</button>
            </form>
            )}
            {toggles &&(
                <form className={styles.register} onSubmit ={handleSubmit(onSubmit)}>
                <input type="text" name ="fullName" className={styles.fullName} placeholder="enter full name"
                aria-invalid ={ errors.name ? "true" : "false"}
                { ...register ("fullName", {required : true, minLength : 5, maxLength: 30})}
                /><br/>
                { errors.fullName && errors.fullName.type === "required" &&(<p role ="alert" className={styles.needed}>please this input is required</p>)}
                { errors.fullName && errors.fullName.type === "minLength"&&(<p role="alert" className={styles.minLengths}>user full name must be atlesat 8 characters</p>)}
                { errors.fullName && errors.fullName.type === "maxLength" &&(<p role="alert" className={styles.maxLengths}>user name should not be more than 30 characters</p>)}

                <input type="text" name ="email"placeholder="enter email" className={styles.email}
                aria-invalid={errors.name ? "true" : "false"}
                { ...register ("email", {required: true, minLength : 8, maxLength: 30})}
                /><br/>
                { errors.email && errors.email.type === "required"&&(<p role= "alert" className={styles.needed}>this is required</p>)}
                { errors.email && errors.email.type === "minLength" &&(<p role= "alert" className={styles.minLengths}>User email must be atleasr 12 characters</p>)}
                { errors.email && errors.email.type === "maxLength" &&(<p role ="alert" className={styles.maxLengths}>user email should not be more than 30 characters</p>)}
                
                <input type="text" name ="password"placeholder="password" className={styles.password2}
                aria-invalid={errors.name ? "true" : "false"}
                {...register("password", {required : true, minLength: 8, maxLength: 15})}
                /><br/>
                { errors.password && errors.password.type === "required" &&(<p role="alert" className={styles.needed}>This field is required</p>)}
                { errors.password && errors.password.type === "minLength" &&(<p role="alert" className={styles.minLengths}>password should be atleast 8 characters</p>)}
                { errors.password && errors.password.type === "maxLength" &&(<p role="alert" className={styles.maxLengths}>User password should not be more than 15 characters</p>)}

                <input type="date" name= "date" className={styles.date}
                /><br/>
                 <button type="submit" className={styles.btn2}><MdSend/></button>
               </form>
            )}
            <More/>
            <Footer/>
            
        </div>
        
    )
}
export default AboutPage;