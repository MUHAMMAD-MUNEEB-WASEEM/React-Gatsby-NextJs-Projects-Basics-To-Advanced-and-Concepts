import React from 'react';

//importing material ui components
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

//importing logo image
import virusImage from '../../images/virus.png';

//importing styles to use css
import styles from './header.module.css';

//importing cx from classnames so we can use mulitple classes in same tag
import cx from 'classnames';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  color:{
      backgroundColor:  "#36D4C1", 

    },
    textColor:{
        color: "black"
    }

}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <AppBar className={styles.background} position="static">
      <Toolbar>
          <img className={styles.image} src={virusImage} alt="Virus" />
        <Typography variant="h5" className={cx(classes.title, classes.textColor, styles.font)}>
          GLOBAL COVID-19 TRACKER
        </Typography>
      </Toolbar>
    </AppBar>
</div>
  );
}