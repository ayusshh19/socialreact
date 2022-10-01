import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import "./comments.css";
import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

const imageset = [
  "https://images.unsplash.com/photo-1543328874-afb1164619bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Zm9vdGJhbGwlMjBtZXNzaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1598121876884-f4573ed0b9f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGZvb3RiYWxsJTIwbWVzc2l8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vdGJhbGx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1529900748604-07564a03e7a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGZvb3RiYWxsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_MXIcNRvq3pKF4gDtfkf9_g-G52RpqhBdag&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoIwSYJ9Xdhh6zlCF5EWsgaXHgr_VK0LU_9SqcZglETp_vepwn02gOFIYYuM07eIiOOH8&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPfM6bvB2ZUbaUzD85NkJMRuvr5LJEj_wi4w&usqp=CAU",
  "https://rukminim1.flixcart.com/image/416/416/poster/9/n/6/small-pers000300-cool-lionel-messi-football-player-poster-original-imaeqjesvuctchy7.jpeg?q=70",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjkLkGqVeEQ0C8RtNHvvIgWl9ZTf-u01xDSA&usqp=CAU",
];

function Comments() {
  const [userdatas, setuserdata] = useState([]);
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
  }, []);
  const [commentsdata, setcommentsdata] = useState();
  const { imgid, postid } = useParams();
  console.log(imgid, postid);
  const getcomments = () => {
    axios.get("https://dummyjson.com/comments").then((comment) => {
      setcommentsdata(comment.data.comments);
      // console.log(comment.data.comments)
    });
  };
  console.log(commentsdata);
  useEffect(() => {
    getcomments();
  }, []);
  return (
    <div className="container1">
      <img src={imageset[imgid]} alt="" srcset="" />
      <div className="comments">
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          {commentsdata?.map((item)=>{
            return(
            item.id==postid?<ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt={item.user.username} src="/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary={"    "+item.user.username}
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    To Ayush and AyuBook co.    
                  </Typography>
                  {item.body}
                </React.Fragment>
              }
            />
            <Divider variant="inset" component="li" />
          </ListItem>
          :''
          )
          })}

        </List>
      </div>
    </div>
  );
}
export default Comments;
