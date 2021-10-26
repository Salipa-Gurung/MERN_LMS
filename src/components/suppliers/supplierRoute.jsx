import React from 'react'
import { Route } from 'react-router'
import AddSupplier from './addSupplier'
import EditSupplier from './editSupplier'
import SupplierDetail from './supplierDetail'
import SupplierList from './supplierList'

const SupplierRoute = () => {
    return (
        <>
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
        </>
    )
}

export default SupplierRoute
