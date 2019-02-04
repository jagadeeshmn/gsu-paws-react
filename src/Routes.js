import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import GetApplicants from './components/GetApplicants';
import GetStatistics from './components/GetStatistics';
import SignInForm from './components/SignInForm';
import HomePage from './components/HomePage';
import AddDropCourses from './components/AddDropCourses';
import Schedule from './components/Schedule';
import WelcomePaws from './components/WelcomePaws';
import Statistics from './components/Statistics';
import SemesterSelect from './components/SemesterSelect';
import ViewFees from './components/ViewFees';


const Routes = () => (
<BrowserRouter>
<Switch>
    <Route exact path='/'component={WelcomePaws} />
    <Route exact path='/applications' component={GetApplicants} />
    <Route exact path='/statistics' component={Statistics} />
    <Route exact path='/getstats' component={GetStatistics} />
    <Route exact path='/login' component={SignInForm} />
    <Route exact path='/home' component={HomePage} />
    <Route exact path='/semesterselect' component={SemesterSelect} />
    <Route exact path='/viewfees' component={ViewFees} />
    <Route exact path='/AddDropCourses' component={AddDropCourses} />
    <Route exact path='/schedule' component={Schedule} />
</Switch>
</BrowserRouter>
);

export default Routes;