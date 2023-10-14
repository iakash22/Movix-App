import React,{useState} from 'react'
import Carousel from '../../common/carousel/Carousel'
import ContentWrapper from '../../common/contentWrapper/ContentWrapper'
import useFetch from '../../../hooks/useFetch'
import SwitchTabs from '../../common/switchTab/SwitchTabs'

const TopRated = () => {
    const [endPoints, setEndPoints] = useState('movie')
    const { data, loading } = useFetch(`/${endPoints}/top_rated`);

    // console.log("Top rated data : ", data);

    const onTabChange = (tab) => {
        setEndPoints(tab === "Movies" ? "movie" : "tv");
    };
    return (
        <div className='carouselSection'>
            <ContentWrapper>
                <span className='carouselTitle'>Top Rated</span>
                <SwitchTabs data={["Movies", "TV Shows"]} onTabChange={onTabChange}/>
            </ContentWrapper>
            <Carousel data={data?.results} loading={loading} endpoint={endPoints} />
        </div>
    )
}

export default TopRated
