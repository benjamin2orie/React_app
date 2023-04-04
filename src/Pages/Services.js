
import styles from './Service.module.css';
import  {useEffect, useState} from 'react';
import Axios from 'axios';
import {MdPhone} from  'react-icons/md';
import {MdEmail} from 'react-icons/md';
import { MdLocationOn } from 'react-icons/md';
// import { MdOpencity } from 'react-icons/md';
// import axios from 'react'
// const user ={
//     name: 'john doe',
//     color: 'red',
//     age:  34,
//     occupation: 'teaching',
//     fontSize: 30
// }
// const products =[
//     {title: 'cabbage', id: 1, producer: 'perish nigerial ltd'},
//     {title: 'garlic', id: 2, producer: 'wad company nigeria ltd'},
//     {title: 'apple', id: 3, producer: 'allied nigerial ltd'},
// ];
function ServicesPage(){
    // const listIems= products.map(product =>
    //     <li className={styles.list} key={product.id}>{product.title} {product.producer}</li>
    // )
    // const [count, setcount] = useState(0);
    // function Handlers(){
    //     setcount(count + 1);

    // }
    const [users, setUsres] = useState({})
   const fetchUsers =async () =>{
    const {data}  = await Axios.get("https://randomuser.me/api/")
    // console.log(data)
    const users = data.results[0]
    setUsres(users)

   }
   useEffect(() =>{
    fetchUsers()
   }, [])
    return(
        <div className={styles.containerx}>
            <div className={styles.randomUsers}>
               <div className={styles.imageUsers}>
                <h2>random users app</h2>
                 <img src = {users.picture?.large} alt="this contain a pics of all random users" className={styles.img}/>
                 <p>{users.name?.title}.{users.name?.first} {users.name?.last}</p>
                </div>
                <section className={styles.section}>
                    <div>
                        <p><MdEmail className={styles.mail}/> {users.email}</p>
                        <p><MdPhone className={styles.call}/>{users.phone}</p>
                        <p><MdLocationOn className={styles.location}/> {users.location?.city}</p>
                    </div>
                    <div>
                        <p>Registered date: {users.registered?.date}, {users.registered?.age}</p>
                        <p>Gender: {users.gender}</p>
                        <p>Cell: {users.cell}</p>
                        <p>Dob: {users.dob?.date}</p>
                        <p>Age: {users.dob?.age}</p>
                        <p>Id: {users.id?.name} {users.id?.value}</p>
                        <p>Coordinates latitude: {users.location?.coordinates.latitude}</p>
                        <p>Coordinates longitude: {users.location?.coordinates.longitude}</p>
                        <p>Country: {users.location?.country}</p>
                        <p>Post code: {users.location?.postcode}</p>
                        <p>State: {users.location?.state}</p>
                        <p>Street number: {users.location?.street.number}</p>
                        <p>Street name: {users.location?.street.name}</p>
                        <p>Time zone : {users.location?.timezone.description}</p>
                        <p>Time zone offset: {users.location?.timezone.offset}</p>
                        <p>Login: {users.login?.uuid}</p>
                        <p>Nat: {users.nat}</p>
                    </div>
                </section>
           
            </div>
           
          <button className={styles.button} onClick={fetchUsers}>Get more users</button>
            
            
        </div>
    )
}
export default ServicesPage;