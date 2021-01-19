import React from 'react';
import Header from '../../components/Header/Header.component';
import Head from '../../components/Head/Head.component';
import ShopSection from '../../components/shop_section/shop_section.component';
import Popular from '../../components/popular_section/popular_section.component';
import {selectShopData, selectIsFetching} from '../../redux/shop_data/shop_data.selectors';
import {connect} from 'react-redux';
import Spinner from '../../components/Spinner/Spinner.component';

const Homepage = ({collections, isFetched}) => {
    
    return (
        <>
    
        <Head />
        {
            isFetched ? 
            collections.map(collection => (
                <ShopSection key={collection.id} item={collection} />
            )) : <Spinner />
        }
        <Popular/>
        
        
        </>

    )
}

const mapStateToPorps = state => ({
    collections : selectShopData(state),
    isFetched : selectIsFetching(state)
})

export default connect(mapStateToPorps)(Homepage);