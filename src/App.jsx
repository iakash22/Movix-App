import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataFromApi } from './utils/Api';
import { getApiConfiguration,getGenres } from "./redux/slices/HomeSlice";
import Header from './components/common/Header/Header.jsx';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Footer from "./components/common/footer/Footer";
import Details from './pages/details/Details';
import Error from './pages/404/Error';
import SearchResult from './pages/searchResults/SearchResult';
import Explore from "./pages/explore/Explore";

const App = () => {
    const dispatch = useDispatch();
    const { url } = useSelector(state => state.home);
    // console.log("url :", url);

    const fetchApiConfig = () => {
        fetchDataFromApi("/configuration").then((res) => {
            // console.log(res);

            const url = {
                backdrop: res.images.secure_base_url + "original",
                poster: res.images.secure_base_url + "original",
                profile: res.images.secure_base_url + "original",
            };

            dispatch(getApiConfiguration(url));
        });
    };
    useEffect(() => {
        fetchApiConfig();
        genresCall();
    }, []);

    const genresCall = async () => {
        let promises = [];
        let endPoints = ["tv", "movie"];
        let allGenres = {};

        endPoints.forEach((url) => {
            promises.push(fetchDataFromApi(`/genre/${url}/list`));
        });

        const data = await Promise.all(promises);
        // console.log(data);
        data.map(({ genres }) => {
            return genres.map((item) => (allGenres[item.id] = item));
        });

        dispatch(getGenres(allGenres));
    };
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:mediaType/:id" element={<Details />} />
                <Route path="/search/:query" element={<SearchResult />} />
                <Route path="/explore/:mediaType" element={<Explore />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App
