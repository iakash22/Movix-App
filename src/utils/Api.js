import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

const header = {
    Authorization: `bearer ${TMDB_TOKEN}`,
};

export const fetchDataFromApi = async(url,params) => {
    try{
        const data = await axios.get(
            BASE_URL+url,
            {
                headers : header,
                params : params,
            }
        )
        // console.log("Data fetch successfull................", data);
        return data.data;
    }catch(err){
        console.log("Data fetching error.................", err);
        return err;
    }
}