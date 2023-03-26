  
import React, { useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Drawer } from "@material-ui/core";
import { NavLink, Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import logo from './logo.png';
import styles from './Navbar.module.css';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },

    Navbar: {
      backgroundColor: "transparent",
    },
    ScrollNavbar: {
      backgroundColor: "#141414",
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    // title: {
    //   flexGrow: 1,
    // },
    NavBar__button: {
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },

      color: "#fff",
      paddingBottom: "0.4rem",
      padding: " 0 4rem",
      textTransform: "capitalize",
      textAlign: "center",
      fontFamily: "montserrate",
      fontWeight: "bolder",
      fontSize: 22,
      "&:hover": {
        color: "lightgrey",
      },
    },
    drawer__list: {
      backgroundColor: "black",
      height: "100%",
      width: "100vw",
      display: "flex",
      flexDirection: "column",
    },
    dlinks: {
      width: "100%",
      height: "10vh",
      backgroundColor: "transparent",
      border: "none",
      color: "#fff",
      fontSize: "1.7rem",
      "&:hover": {
        backgroundColor: "white",
        color: "black",
      },
    },
    drawer__header: {
      display: "flex",
      borderBottom: "1px solid white",
    },
    drawer__links: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      flex: 0.5,
    },
    activeLink: {
      borderBottom: "2px solid white",
    },
  })
);

export default function ButtonAppBar() {
  const classes = useStyles();
  const [open, setOpen] = useState<boolean>(false);
  const [nScroll, setNscroll] = useState<boolean>(false);
  const changBackground = () => {
    if (window.scrollY > 80) {
      setNscroll(true);
    } else {
      setNscroll(false);
    }
  };
  window.addEventListener("scroll", changBackground);

  return (
    <div className={classes.root}>
      <AppBar
        className={nScroll ? classes.ScrollNavbar : classes.Navbar}
        position="fixed"
      >
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={() => setOpen(!open)}
          >
            <MenuIcon />
          </IconButton>
          <Link to='/' >
          <img className= {styles.headlogo} src={logo} alt=""/>
          </Link>

          {MenuItems.map((menu) => (
            <NavLink
              to={menu.url}
              style={{ textDecoration: "none" }}
              activeClassName={classes.activeLink}
              end={menu.url === "/"}
            >
              <Typography className={classes.NavBar__button} color="inherit">
                {menu.title}
              </Typography>
            </NavLink>
          ))}
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <div className={classes.drawer__list}>
          <div className={classes.drawer__header}>
            <IconButton
              style={{ color: "white" }}
              onClick={() => setOpen(false)}
            >
              <ArrowBackIcon />
            </IconButton>

            <Link to='/' >
          <img className= {styles.headlogo} src={logo} alt="menulogo"/>
          </Link>
          </div>

          <div className={classes.drawer__links}>
            {MenuItems.map((menu) => (
              <Link to={menu.url}>
                <button
                  className={classes.dlinks}
                  onClick={() => setOpen(false)}
                >
                  {menu.title}
                </button>
              </Link>
            ))}
          </div>
        </div>
      </Drawer>
    </div>
  );
}