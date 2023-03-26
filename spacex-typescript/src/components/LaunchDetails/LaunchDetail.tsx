import React from "react";

//material ui
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      backgroundColor: "#1F1F1F",
      color: "#fff",
    },
  })
);

function ListDividers({
  missionName,
  launchYear,
  launchSite,
  launchSuccess,
  launchDetails,
  rocketName,
  rocketType,
}: any) {
  const classes = useStyles();

  return (
    <div>
    <List component="nav" className={classes.root} aria-label="mailbox folders" > 
      <ListItem button>
        <ListItemText>Mission : {missionName}</ListItemText>
      </ListItem>
      <Divider />
      <ListItem button divider>
        <ListItemText>Launch year : {launchYear}</ListItemText>
      </ListItem>
      <ListItem button>
        <ListItemText>Launch site : {launchSite.site_name}</ListItemText>
      </ListItem>
      <Divider light />
      <ListItem button>
        <ListItemText>
          Launch Success :
          <span style={{ color: launchSuccess ? "green" : "red" }}>
            {" "}
            {launchSuccess ? "Successful" : "failed"}
          </span>
        </ListItemText>
      </ListItem>
      <Divider light />
      <ListItem button>
        <ListItemText>Rocket Name : {rocketName}</ListItemText>
      </ListItem>
      <Divider light />
      <ListItem button>
        <ListItemText> Rocket Type : {rocketType}</ListItemText>
      </ListItem>
      <Divider light />

      <ListItem button>
        <ListItemText>Launch Details : {launchDetails}</ListItemText>
      </ListItem>
      <Divider light />
    </List>
    </div>
  );
}
export default ListDividers;