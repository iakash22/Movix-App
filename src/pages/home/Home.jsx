import React from 'react'
import HeroBanner from '../../components/core/homePage/heroBanner/HeroBanner'
import Trending from '../../components/core/homePage/Trending'
import Popular from '../../components/core/homePage/Popular';
import TopRated from '../../components/core/homePage/TopRated';
import './style.scss'

const Home = () => {
    return (
        <div className="homePage">
            <HeroBanner />
            <Trending />
            <Popular />
            <TopRated />
        </div>
    )
}

export default Home
