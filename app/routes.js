import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './containers/App'
import Dashboard from './containers/Dashboard'
import CreateService from './containers/CreateService'
import Service from './containers/Service'
import FunctionDetail from './containers/FunctionDetail'
import SettingsPage from './components/SettingsPage'
import AddCredentials from './components/AddCredentials'

// TODO: Ideally we have redux-react-router and setup tracking as a side-effect of a routing action
const trackPage = ({ location }) => {
  if (process.env.NODE_ENV !== 'development') {
    window.analytics.page(location.pathname)
  }
}

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Dashboard} onEnter={trackPage} />
    <Route path='/settings' component={SettingsPage} onEnter={trackPage} />
    <Route path='/service/create' component={CreateService} onEnter={trackPage} />
    <Route path='/service/:serviceId' component={Service} onEnter={trackPage} />
    <Route path='/service/:serviceId/function/:functionName' component={FunctionDetail} onEnter={trackPage} />
    <Route path='/add-credentials' component={AddCredentials} onEnter={trackPage} />
    <Route path='*' component={SettingsPage} onEnter={trackPage} />
  </Route>
)
