import React, {lazy, Suspense} from 'react';
import {Route, Switch} from 'react-router-dom';
import Header from './components/Header/Header.component';
import Footer from './components/footer/footer.component';
import Spinner from './components/Spinner/Spinner.component';
import './App.css';
 
const Homepage = lazy(() => import('./pages/Homepage/Hompepage.component'));
const ShopPage = lazy(() => import('./pages/Shop/Shop.component'));




function App() {
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

export default App;
