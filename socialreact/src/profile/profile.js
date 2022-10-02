import { useParams } from "react-router-dom";
import './profile.css';
import axios from "axios";
import { useState } from "react";
import * as React from 'react';
function Profile() {
    const profid = useParams()
    console.log(profid.profid)
    const [userdatas, setuserdata] = useState([])
    const [profileedit, setprofileedit] = useState()
    const getUsers = () => {
        axios
            .get("https://dummyjson.com/users")
            .then((user) => {
                setuserdata(user.data.users);
                // console.log(userdatas[0])
            })

            .catch((e) => alert(e));
    };
    React.useEffect(() => {
        getUsers();
    }, [])
console.log(userdatas)
    // console.log(profileedit)
    return (
        <div className="container">
            {userdatas.map((item)=>{
                return(
                    item.id==profid.profid?<>
                    <img alt="ayush" src={item.image}></img>
                    <div className="maincontent">
                    <h2>{item.firstName} {item.lastName}</h2>
                    <h4>Birthdate : {item.birthDate}</h4>
                    <h4>Address : {item.address.address}</h4>
                    <h4>Age : {item.age}</h4>
                    <h4>Email : {item.email}</h4>
                    <h4>Gender : {item.gender}</h4>
                    <h4>Maidenanme : {item.maidenName}</h4>
                    <h4>University : {item.university}</h4>
                    <h4>Username : {item.username}</h4>
                    </div>
                    </>:''

                )
            })}
            

        </div>
    )
}
export default Profile