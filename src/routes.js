import React from 'react'
import { Provider } from 'react-redux'
import { Route, IndexRoute } from 'react-router'
import App from 'containers/App'
import Login from 'containers/Login'
import Main from 'containers/Main'
import Home from 'containers/Home'
import Counter from 'containers/Counter'
import SignUp from 'containers/SignUp'
import SignUpChild1 from 'containers/signup/SignUpChild1'
import SignUpChild2 from 'containers/signup/SignUpChild2'
import List from 'components/List'
import PostList from 'containers/post/PostList'
import TimeLine from 'containers/TimeLine'
import Countries from 'components/Countries'
import NotFound from 'containers/NotFound'
import SampleParent from 'components/SampleParent'
import SampleChild from 'components/SampleChild'
import {fetchData} from 'actions/actions'

export function getRoutes(store) {
  const loadData = function() {
    store.dispatch(fetchData('https://restcountries.eu/rest/v1/all'));
  };

  const routes = (
    <Route path="/" component={App} >
      <IndexRoute component={Main} />
      <Route path="login" component={Login} />
      <Route path="main" component={Main} />
      <Route path="signup" component={SignUp}>
        <IndexRoute component={SignUpChild1} />
        <Route path="signup/child1" component={SignUpChild1} />
        <Route path="signup/child2" component={SignUpChild2} />
      </Route>
      <Route path="home" component={Home} />
      <Route path="counter" component={Counter} />
      <Route path="list/:id" component={List} />
      <Route path="postlist" component={PostList} />
      <Route path="timeline" component={TimeLine} />
      <Route path="countries" component={Countries} onEnter={loadData} />
      <Route path="SampleParent" component={SampleParent} />
      <Route path="SampleChild" component={SampleChild} />
      <Route path="*" component={NotFound} />
    </Route>
  )
  return routes
}
