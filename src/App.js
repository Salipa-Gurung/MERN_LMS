import { useEffect, useState } from 'react';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';

import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css'

import BookList from './components/books/bookList';
import BookDetail from './components/books/bookDetail';
import CreateBook from './components/books/createBook';
import EditBook from './components/books/editForm';
import SupplierDetail from './components/suppliers/supplierDetail';
import SupplierList from './components/suppliers/supplierList'
import AddSupplier from './components/suppliers/addSupplier'
import EditSupplier from './components/suppliers/editSupplier'

// top: react imports -> third-party import -> css import/styled components -> last: our own module 

function App() {
// const [data,setData] = useState([])

  useEffect(()=>{
    // axios.get('http://localhost:5000/test')
    //   .then((res)=>{
    //     setData(res.data.data)
    //   })
  },[])

  return (
    <Router>
      <header className="navbar bg-light p-3">
        <span>NavBar</span>
        <button className="btn btn-danger">Log out</button>
      </header>
      <main className="p-5">
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
      </main>

    </Router>
  );
}

export default App;
