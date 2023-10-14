import React, { useState } from 'react'
import ContentWrapper from '../../common/contentWrapper/ContentWrapper'
import SwitchTabs from '../../common/switchTab/SwitchTabs';
import Carousel from '../../common/carousel/Carousel';
import useFetch from '../../../hooks/useFetch';

const Trending = () => {
    const [endPoints, setEndPoints] = useState('day');
    const {data, loading} = useFetch(`/trending/movie/${endPoints}`); 
    const onTabChange = (tab) => {
        setEndPoints(tab === 'Day' ? 'day' : 'week');
    }
    // console.log("Trending Data :", data);
    return (
        <div className='carouselSection'>
            <ContentWrapper>
                <span className='carouselTitle'>Trending</span>
                <SwitchTabs data={['Day','Week']} onTabChange={onTabChange}/>
            </ContentWrapper>
            <Carousel data={data?.results} loading={loading} endpoint={endPoints} />
        </div>
    )
}

export default Trending
