import { Avatar } from "@mui/material";
import { height } from "@mui/system";
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

    console.log(profileedit)
    return (
        <div className="container">
            {userdatas.map((item)=>{
                return(
                    item.id==profid.profid?<>
                    <img alt="ayush" src={item.image}></img></>:''
                )
            })}
            

        </div>
    )
}
export default Profile