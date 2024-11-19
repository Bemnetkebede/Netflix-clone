import requests from "../../utility/request"
import Row from './Row'
const RowList = () => {
    return (
        <>
            <Row
                title= 'NETFLIX ORIGINALS'
                fetchUrl = {requests.netflixOriginal}
                isLarge ='true'
            />
            <Row
                title= 'Trending Now'
                fetchUrl = {requests.Trending}
            />
            <Row
                title= 'Top Rated'
                fetchUrl = {requests.topRated}
            />
            <Row
                title= 'Action Movies'
                fetchUrl = {requests.actionMoveis}
                
            />
            <Row
                title= 'Comedy Movies'
                fetchUrl = {requests.comedyMovies}
                
            />
            <Row
                title= 'Horror Movies'
                fetchUrl = {requests.horrorMovies}
                
            /> 
            
            <Row
                title= 'Romance Movies'
                fetchUrl = {requests.romanceMovies}
                
            />
            
            <Row
                title= 'TvShows'
                fetchUrl = {requests.tvShow}
                
            />
            <Row
                title= 'Documentaries'
                fetchUrl = {requests.documentries}
                
            /> 
            
        </>
    )
}

export default RowList