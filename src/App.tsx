import Header from './components/Header';
import Footer from './components/Footer';
import CreateUser from './pages/CreateUser';
import UserList from './pages/UserList';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        headerFooterSpace: theme.mixins.toolbar
    }),
);

function App() {

  const classes = useStyles();
  return (
    <Router>
      <Header/>      
      <div className={classes.headerFooterSpace} />
      <Switch>
        <Route exact path={["/", "/CreateUser"]}>
          <CreateUser/>
        </Route>
        <Route exact path="/UserList">
          <UserList />
        </Route>
      </Switch>    
      <div className={classes.headerFooterSpace} />       
      <Footer/>      
      
    </Router>
  );
}

export default App;
