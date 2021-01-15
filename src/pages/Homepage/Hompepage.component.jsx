import React from 'react';
import Header from '../../components/Header/Header.component';
import Head from '../../components/Head/Head.component';
import ShopSection from '../../components/shop_section/shop_section.component';
import Popular from '../../components/popular_section/popular_section.component';
import ITEM from './item';

const Homepage = () => {
    return (
        <>
    
        <Head />
        {
            ITEM.map(item => (
                <ShopSection key={item.id} item={item} />
            ))
        }
        <Popular/>
        
        
        </>

    )
}

export default Homepage;