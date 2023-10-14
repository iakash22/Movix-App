import React, { useState } from 'react'
import Carousel from '../../common/carousel/Carousel';
import useFetch from '../../../hooks/useFetch';
import SwitchTabs from '../../common/switchTab/SwitchTabs';
import ContentWrapper from '../../common/contentWrapper/ContentWrapper';

const Popular = () => {
    const [endPoints, setEndPoints] = useState('movie');
    const {data, loading} = useFetch(`/${endPoints}/popular`); 
    const onTabChange = (tab) => {
        setEndPoints(tab === "Movies" ? "movie" : "tv");
    };
    return (
        <div className='carouselSection'>
            <ContentWrapper>
                <span className='carouselTitle'>Popular</span>
                <SwitchTabs data={["Movies", "TV Shows"]} onTabChange={onTabChange}/>
            </ContentWrapper>
            <Carousel data={data?.results} loading={loading} endpoint={endPoints} />
        </div>
    )
}

export default Popular
