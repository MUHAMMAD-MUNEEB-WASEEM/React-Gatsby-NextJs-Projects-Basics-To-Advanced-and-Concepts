import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

import styles from './Launches.module.css';
import cx from 'classnames';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
    backgroundColor: "#1F1F1F",
    border: "white",
    alignItems: "center",
    marginBottom: 25,
    marginLeft: 50,
    marginRight: 50,
  },

  pos: {
    marginBottom: 12,
  },
  text: {
    color: "white",
  },
  bord: {
    border: 1,
    color: "white",

  },

});

export default function OutlinedCard({
  flight_number,
  mission_name,
  launch_year,

  launch_success,
}: any) {
  const classes = useStyles();

  return (
    <Card className={cx(classes.root, styles.border)} variant="outlined">
      <CardContent>
        <Typography variant="h4" gutterBottom className={classes.text}>
        {flight_number}. Mission: <span  style={{ color: launch_success ? "green" : "red" }}>{mission_name}</span>
        </Typography>
        <Typography variant="h6" className={classes.text}>Flight Number : {flight_number}</Typography>

        <Typography variant="h6" className={classes.text}>Launch year : {launch_year}</Typography>
        <Typography variant="h6" className={classes.text}>
          Launch success :{" "}
          <span style={{ color: launch_success ? "green" : "red" }}>
            {launch_success ? "Successful " : "Failed"}
          </span>
        </Typography>
      </CardContent>
      <div className={styles.button}>
      <CardActions >
        <Link to={`/${flight_number}`} style={{ textDecoration: "none" }}>
          <button className={styles.btn}>Launch Details</button>
        </Link>
      </CardActions>
      </div>
    </Card>
  );
}
