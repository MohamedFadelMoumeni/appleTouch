import React, {lazy, Suspense, useEffect} from 'react';
import {Route, Switch} from 'react-router-dom';
import { connect } from 'react-redux';
import {fetchCollectionsStart} from './redux/shop_data/shop_data.actions';
import {checkUserSession} from './redux/currentUser/currentUser.actions';

import Header from './components/Header/Header.component';
import Footer from './components/footer/footer.component';
import Spinner from './components/Spinner/Spinner.component';

import './App.css';
import Homepage from './pages/Homepage/Hompepage.component';
const ShopPage = lazy(() => import('./pages/Shop/Shop.component'));
const CheckOutPage = lazy(() => import('./pages/checkout-page/checkout-page.component'))

function App({fetchCollectionsStart, checkUserSession}) {
 
    useEffect(() => {
      fetchCollectionsStart();
        checkUserSession()
      }, [fetchCollectionsStart, checkUserSession])
     
      return (
      <>
        <Suspense fallback={<Spinner />}>
        <div className="app">
          <Header />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route  path={`/shop`} component={ShopPage} />
            <Route exact path={`/checkout`} component={CheckOutPage}/>
          </Switch>
          <Footer />
        </div>
        </Suspense>
    
        
      </>
       
    
      );
}
const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart : () => dispatch(fetchCollectionsStart()),
    checkUserSession : () => dispatch(checkUserSession())
  })

  export default connect(null, mapDispatchToProps)(App);