import "./center.css";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import Box from '@mui/material/Box';
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import CommentIcon from '@mui/icons-material/Comment';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
var today = new Date();
const imageset=['https://images.unsplash.com/photo-1543328874-afb1164619bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Zm9vdGJhbGwlMjBtZXNzaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60','https://images.unsplash.com/photo-1598121876884-f4573ed0b9f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGZvb3RiYWxsJTIwbWVzc2l8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60','https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vdGJhbGx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60','https://images.unsplash.com/photo-1529900748604-07564a03e7a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGZvb3RiYWxsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_MXIcNRvq3pKF4gDtfkf9_g-G52RpqhBdag&usqp=CAU','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoIwSYJ9Xdhh6zlCF5EWsgaXHgr_VK0LU_9SqcZglETp_vepwn02gOFIYYuM07eIiOOH8&usqp=CAU','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPfM6bvB2ZUbaUzD85NkJMRuvr5LJEj_wi4w&usqp=CAU','https://rukminim1.flixcart.com/image/416/416/poster/9/n/6/small-pers000300-cool-lionel-messi-football-player-poster-original-imaeqjesvuctchy7.jpeg?q=70','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjkLkGqVeEQ0C8RtNHvvIgWl9ZTf-u01xDSA&usqp=CAU']
const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#ff6d75',
  },
  '& .MuiRating-iconHover': {
    color: '#ff3d47',
  },
});
export default function RecipeReviewCard(props) {
  // const [imagecount,setimagecount]=useState(0);
  let imagecount=0
  const [postData, setPostData] = useState([]);
  

  const getPost = () => {
    axios
      .get("https://dummyjson.com/posts")
      .then((post) => {
        // console.log(post.data.posts)
        setPostData( post.data.posts );
        // console.log(postData)
      })
      .catch((e) => alert(e));
  };
  

  
  useEffect(() => {
    getPost();
 
  }, []);

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  return (
    
    <div sx={{display:'flex',flexDirection:'column'}}>
      <List component="nav" aria-label="mailbox folders" >
      <Card sx={{ minWidth: '50%',margin:'auto' }} className={'addpost'} >
      <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" src={props.userdetails.image}>
                
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={props.userdetails.firstName+" "+props.userdetails.lastName}
              subheader={`${today.toLocaleString('default', { month: 'long' })} ${today.getDate()} ,${today.getFullYear()} `}
            />
      <CardContent>

      <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
      <TextField fullWidth label="Add new post here....." id="fullWidth"/>
    </Box>
    <Divider />
      </CardContent>
      <CardActions>
      <Grid container spacing={3}>
  <Grid item xs>
    <Item ><Avatar aria-label="recipe" alt="Remy Sharp" src={require("./photos.png")} sx={{ width: 24, height: 24,margin:'auto' }}/>
    <p>Add media</p>
    </Item>
  </Grid>
  <Grid item xs>
    <Item><Avatar alt="Remy Sharp" src={require("./placeholder.png")}sx={{ width: 24, height: 24 ,margin:'auto'}} />
    <p>Location</p></Item>
  </Grid>
  <Grid item xs>
    <Item><Avatar alt="Remy Sharp" src={require("./tag.png")} sx={{ width: 24, height: 24,margin:'auto' }} />
    <p>Tag</p></Item>
  </Grid>
  <Grid item xs>
    <Item><Avatar alt="Remy Sharp" src={require("./share.png")} sx={{ width: 24, height: 24 ,margin:'auto'}}/>
    <p>Share</p></Item>
  </Grid>
</Grid>
      </CardActions>
    </Card>
    </List>
    
      {postData.map((item) => {
        const { title,body } = item;
        return (
          <Card sx={{ maxWidth: 500 ,margin:'auto'}}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  R
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={title}
              subheader="September 14, 2016"
            />
            <CardMedia
              component="img"
              height="294"
              image={imageset[imagecount]}
              alt="Paella dish"
            />
            {imagecount===8?imagecount=0:imagecount+=1}
            
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {body}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                {<FavoriteIcon />}
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <Button variant="outlined" href={`/comment/${imagecount-1}/${item.id}`} startIcon={<CommentIcon />}>
        Comments
      </Button>
            </CardActions>
          </Card>
        );
      })}
      </div>
  );
}
