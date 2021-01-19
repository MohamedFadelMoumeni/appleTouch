import React, {lazy, Suspense, useEffect} from 'react';
import {Route, Switch} from 'react-router-dom';
import { connect } from 'react-redux';
import {fetchCollectionsStart} from './redux/shop_data/shop_data.actions';

import Header from './components/Header/Header.component';
import Footer from './components/footer/footer.component';
import Spinner from './components/Spinner/Spinner.component';

import './App.css';
const Homepage = lazy(() => import('./pages/Homepage/Hompepage.component'));
const ShopPage = lazy(() => import('./pages/Shop/Shop.component'));




function App({fetchCollectionsStart}) {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart])
 
  return (
    <Suspense fallback={<Spinner />}>
    <div className="app">
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route  path="/shop" component={ShopPage} />
      </Switch>
      <Footer />
     
    </div>
    </Suspense>
    
   

  );
}
const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart : () => dispatch(fetchCollectionsStart())
})

export default connect(null, mapDispatchToProps)(App);
