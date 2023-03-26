import React from 'react';
import './App.css';

//importing button design from material ui library
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';

//importing grid component from material ui
import Grid from '@material-ui/core/Grid';

//importing for the app bar
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


//for send icon button
//go to main material ui website, click on get started and then go to components
//for different designed components

//This is like css, we can add different properties to it and we can call it in components with
//<button className ={classes.propertyname}>Text</button>
//Let say I have created property backgroundColor: black, now if I want to make background color black
//of only send button, then in send button tag, I call property like className={class.backgroundColor}
//so simple it is 
const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
    //Add below two properties for app bar
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    //self made property
    loginButtoncolor: {
      backgroundColor: "red"
    },
}));

function App() {
  
  const classes = useStyles();//send button use classes property, so if not defined it, it cannot be used,
  //so above copy/paste usestyle from material ui send icon button component and use it here in classes. 
  //All thing is from send icon button


  return (
    <div>

      <div className={classes.root}>
            <AppBar position="static">
              <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                  News
                </Typography>
                <Button color="inherit" className={classes.loginButtoncolor}>Login</Button>
              </Toolbar>
            </AppBar>
       </div>
      
      
      <div>
        Hello World
        <br/>
      </div>
      
      <div>
        <Button variant="contained" color="primary">Hello button from material ui</Button>
      </div>
      
      <div>
      
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          endIcon={<Icon>send</Icon>}
        >
          Send
        </Button>
        <hr/>

      </div>

      <div>
        <Grid container spacing={3}>

          <Grid item xs={12} style={{backgroundColor:"#303F9F"}}>
            <p style={{color:"white"}}>Hello world 1</p>
          </Grid>

          <Grid item xs={6} style={{backgroundColor:"green"}}>
            <p style={{color:"white"}}>Hello world 2</p>
          </Grid>
          <Grid item xs={6} style={{backgroundColor:"orange"}}>
            <p style={{color:"white"}}>Hello world 3</p>
          </Grid>
          
          <Grid item xs={4} style={{backgroundColor:"red"}}>
            <p style={{color:"white"}}>Hello world 4</p>
          </Grid>
          <Grid item xs={4} style={{backgroundColor:"green"}}>
            <p style={{color:"white"}}>Hello world 5</p>
          </Grid>
          <Grid item xs={4} style={{backgroundColor:"blue"}}>
            <p style={{color:"white"}}>Hello world 6</p>
          </Grid>
        
        </Grid>
      </div>
    
    </div>
  );
}

export default App;
