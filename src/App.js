import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';

import styles from './App.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Navbar from './components/navbar/navbar';
import Sidebar from './components/sidebar/sidebar';
import Home from './components/pages/home/home';
import Register from './components/pages/register/register';
import Login from './components/pages/login/login';
import BookRoute from './components/books/bookRoute';
import SupplierRoute from './components/suppliers/supplierRoute';
import UserRoute from './components/users/UserRoute';

// top: react imports -> third-party import -> css import/styled components -> last: our own module 

function App() {

  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <Home/>
        </Route>
        <Route path='/register'>
          <Register/>
        </Route>
        <Route path='/login'>
          <Login/>
        </Route>
          <div className={styles.wrapper}>
            <Sidebar/>
            <div className={styles.main}>
              <Navbar/>
              <BookRoute/>
              <SupplierRoute/>
              <UserRoute/>
            </div>
          </div>
      </Switch>
    </Router>
  );
}

export default App;
