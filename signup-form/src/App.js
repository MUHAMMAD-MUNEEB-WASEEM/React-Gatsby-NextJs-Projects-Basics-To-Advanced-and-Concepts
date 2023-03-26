import './App.css';
import UserFormWithFormikValidationContext from './components/UserFormWithFormikValidationContext';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: "black",
    alignItems: "center",
    textAlign: "center",
    fontWeight: "bolder",
    fontSize: 30,
  },
  back: {
    backgroundColor: "orange",
  }
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
        <AppBar position="static" className={classes.back}>
             <Toolbar>
                        
                 <Typography variant="h6" className={classes.title}>
                   SIGNUP FORM
                  </Typography>
                        
                  </Toolbar>
        </AppBar>
      <UserFormWithFormikValidationContext />
    </div>
  );
}

export default App;
