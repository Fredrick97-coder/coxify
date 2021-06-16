import React from 'react'
import Header from './containers/Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ProductListing from './containers/ProductListing'
import ProductDetail from './containers/ProductDetail'
import NotFound from './containers/NotFound'
import './App.css'
// import Menu from './containers/menu'

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        {/* <Menu /> */}
        <Switch>
          <Route path='/' exact component={ProductListing} />
          <Route path='/product/:productId' exact component={ProductDetail} />
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
