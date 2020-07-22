import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles((theme) => ({
  
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));


export default function InteractiveList() {
  const classes = useStyles();
  const[data,setData] = React.useState([]);

  useEffect(() =>{
      fetch("https://reqres.in/api/users?page=2")
      .then(res => res.json())
    .then(result =>{
      setData(result.data)
    })
  },[])

  return (
    <div>
        <Grid item xs={12} md={12}>
          <Typography variant="h6" >
            Contact with their Avatar icon
          </Typography>
          <div className={classes.demo}>
            <List>
              {data.map(ele =>{
                return(
                  <ListItem key ={ele.id}>
                  <ListItemAvatar>
                    <Avatar alt="Cindy Baker" src={ele.avatar} >
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={ele.first_name+" "+ele.last_name}
                    secondary={ele.email}
                  />
                  <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="delete" onClick={() => { console.log(ele.id); }}>
                        <EditIcon/>
                    </IconButton>
                    <IconButton edge="end" aria-label="delete" onClick={() => { console.log(ele.id); }}>
                      <DeleteIcon/>
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                )
              })    
              }
            </List>
          </div>
        </Grid>
    </div>
  );
}
