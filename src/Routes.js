import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import GetApplicants from './components/GetApplicants';
import GetStatistics from './components/GetStatistics';
import SignInForm from './components/SignInForm';
import HomePage from './components/HomePage';
import AddDropCourses from './components/AddDropCourses';


const Routes = () => (
<BrowserRouter>
<Switch>
    <Route exact path='/applications' component={GetApplicants} />
    <Route exact path='/getstats' component={GetStatistics} />
    <Route exact path='/login' component={SignInForm} />
    <Route exact path='/home' component={HomePage} />
    <Route exact path='/AddDropCourses' component={AddDropCourses} />
</Switch>
</BrowserRouter>
);

export default Routes;