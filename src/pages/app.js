import React from 'react'
import {AppLayout} from "../components/Layout"
import Login from '../components/login'
import Profile from '../components/profile'
import PrivateRoute from '../components/privateroute';

import {Router} from '@reach/router'


export default function App() {
    return (
        <AppLayout>
            <Router basepath="/app">
                <Login path="/login"></Login>
                <PrivateRoute path="/profile" component={Profile} ></PrivateRoute>
            </Router>
        </AppLayout>
    )
}
