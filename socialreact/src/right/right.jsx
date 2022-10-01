import './right.css'
import * as React from 'react';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import axios from "axios";
import { useState } from 'react';
import { Link} from "react-router-dom";

function Right(){
    const [userdatas,setuserdata]=useState([])
    const getUsers = () => {
        axios
          .get("https://dummyjson.com/users")
          .then((user) => {
            setuserdata(user.data.users );
            // console.log(userdatas[0])
          })
    
          .catch((e) => alert(e));
      };
      React.useEffect(()=>{
        getUsers();
      },[])
      // console.log(userdatas)
    return(
        <div className="right">
            <h1>Online friends</h1>
           {userdatas.map((item)=>{
                 return(
                 <Link to={`/profile/${item.id}`} className={'profilelink'}>
                    <Box sx={{ color: 'action.active',margin:3,borderRadius:'50px',background: '#e0e0e0',boxshadow:  '-12px -12px 24px #bebebe,12px 12px 24px #ffffff' }} >
                 <Badge color="success" variant="dot">
                 <Avatar alt="Remy Sharp" src={item.image} sx={{margin:1}}/>
                 </Badge>
                 <span>{item.firstName} {item.LastName}</span>
               </Box>
                 </Link>
                 )
           })}

        </div>
    )
}
export default Right