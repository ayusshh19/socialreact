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

var today = new Date();
export default function RecipeReviewCard(props) {
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
          <Card sx={{ maxWidth: 450 ,margin:'auto'}}>
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
              image="https://img.olympicchannel.com/images/image/private/t_16-9_360-203_2x/f_auto/v1538355600/primary/ngdjbafv3twathukjbq2"
              alt="Paella dish"
            />
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
            </CardActions>
          </Card>
        );
      })}
      </div>
  );
}
