import styles from './Home.module.css';
import {MdWorkspacePremium} from "react-icons/md";
import {MdOutlineDone}     from "react-icons/md";
import {MdOutlineAdd}   from    "react-icons/md"
import {MdOutlineKeyboardArrowUp} from "react-icons/md";
import {MdSms}  from "react-icons/md";
// import catoon from './catoon.jpg';
function HomePage(){
    return(
        <div className = {styles.header}>
            <h3>wellcome to home</h3>
            {/* <img src ={catoon} alt="catoon" className={styles.img}/> */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.card}>
                        <h6>Frontend Engineers</h6>
                        <p>Feedback Board</p>
                    </div>
                    <div className={styles.focus}>
                        <ul>
                            <li>all</li>
                            <li>ui</li>
                            <li>ux</li>
                        </ul>
                        <p>Enhancement <span className={styles.bug}>bug</span></p>
                        <h3 className={styles.feature}>feature</h3>
                    </div>
                    <div className={styles.content1}>
                        <h3>Roadmap <span className={styles.view}>View</span> </h3>
                        <ul className={styles.list}>
                            <li>Planned <span className={styles.space}>2</span></li>
                            <li>In-progress <span className={styles.space1}>3</span></li>
                            <li>Live <span className={styles.space2}>1</span></li>
                        </ul>
                    </div>
                </div>
                <main className={styles.main}>
                    <div className={styles.display}>
                        <p> <span className={styles.design}>{<MdWorkspacePremium className={styles.white}/>}</span>Suggestions
                        <span className={styles.primary}>Sorted by:Most Upvotes{<MdOutlineDone className={styles.short} />}</span>
                        </p>
                        <button className={styles.button}>{< MdOutlineAdd className={styles.add}/>}Add feedback</button>
                    </div>
                    <div className={styles.content}>
                        <div className={styles.back}>
                        {<MdOutlineKeyboardArrowUp className={styles.upper}/>}
                        <h6>11</h6>
                        </div>
                        <h4>Add tags for solutions</h4>
                        <p>Easier to search for solutions based on a specific stack.   
                            <span> {< MdSms className={styles.send}/>} 2</span>
                        </p>
                        <h5>enhancement</h5>
                    </div>

                    <div className={styles.content}>
                        <div className={styles.back}>
                        {<MdOutlineKeyboardArrowUp className={styles.upper}/>}
                        <h6>99</h6>
                        </div>
                        <h4>Add a dark theme option</h4>
                        <p>It would help people with light sensitivities and who prefer dark mode.   
                            <span> {< MdSms className={styles.send2}/>} 4</span>
                        </p>
                        <h5>feature</h5>
                    </div>

                    <div className={styles.content}>
                        <div className={styles.back}>
                        {<MdOutlineKeyboardArrowUp className={styles.upper}/>}
                        <h6>200</h6>
                        </div>
                        <h4>Q&A within the challenge hubs</h4>
                        <p>Challenge-specific Q&A would make for easy reference.  
                            <span> {< MdSms className={styles.send}/>} 1</span>
                        </p>
                        <h5>feature</h5>
                    </div>

                    <div className={styles.content}>
                        <div className={styles.back}>
                            {<MdOutlineKeyboardArrowUp className={styles.upper}/>}
                            <h6>90</h6>
                        </div>
                        <h4>Allow image/video upload to feedback</h4>
                        <p>Images and screencats can enhance comments on solution.  
                            <span> {< MdSms className={styles.send}/>} 2</span>
                        </p>
                        <h5>enhancement</h5>
                    </div>

                    <div className={styles.content}>
                        <div className={styles.back}>
                        {<MdOutlineKeyboardArrowUp className={styles.upper}/>}
                        <h6>89</h6>
                        </div>
                        <h4>Ability to follow others</h4>
                        <p>Stay updated on comments and solutions other people post.   
                            <span> {< MdSms className={styles.send}/>} 5</span>
                        </p>
                        <h5>feature</h5>
                    </div>

                    <div className={styles.content}>
                        <div className={styles.back}>
                        {<MdOutlineKeyboardArrowUp className={styles.upper}/>}
                        <h6>119</h6>
                        </div>
                        <h4>Preview images not loading</h4>
                        <p>Change preview images are missing when you apply filter.  
                            <span> {< MdSms className={styles.send}/>} 0</span>
                        </p>
                        <h5>Bug</h5>
                    </div>
                </main>
            </section>
        </div>
    )
}
export default HomePage;