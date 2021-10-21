import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';

import styles from './App.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import BookList from './components/books/bookList';
import BookDetail from './components/books/bookDetail';
import CreateBook from './components/books/createBook';
import EditBook from './components/books/editForm';
import SupplierDetail from './components/suppliers/supplierDetail';
import SupplierList from './components/suppliers/supplierList'
import AddSupplier from './components/suppliers/addSupplier'
import EditSupplier from './components/suppliers/editSupplier'
import Navbar from './components/navbar/navbar';
import Sidebar from './components/sidebar/sidebar';
import Home from './components/pages/home/home';
import Register from './components/pages/register/register';
import Login from './components/pages/login/login';

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
        <Route path='*'>
          <div className={styles.wrapper}>
            <Sidebar/>
            <div className={styles.main}>

              <Navbar/>
                <Switch>
                  <Route path="/book" exact>
                    <BookList/>
                  </Route>
                  <Route path="/book/create">
                    <CreateBook/>
                  </Route>
                  <Route path="/book/edit/:id">
                    <EditBook/>
                  </Route>
                  <Route path="/book/:id">
                    <BookDetail/>
                  </Route>

                  <Route path="/suppliers" exact>
                    <SupplierList/>
                  </Route>
                  <Route path="/suppliers/create">
                    <AddSupplier/>
                  </Route>
                  <Route path="/supplier/edit/:id">
                    <EditSupplier/>
                  </Route>
                  <Route path="/supplier/:id">
                    <SupplierDetail/>
                  </Route>
                </Switch>
            </div>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
