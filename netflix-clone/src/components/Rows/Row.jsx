import { useState , useEffect } from "react";
import axios from '../../utility/axios';
import movieTrailer from 'movie-trailer';
import YouTube from 'react-youTube'


const Row = ({title , fetchUrl , isLarge})=> {
    const [movies , setMoveis ] = useState([]);
    const [trailerUrl , setTrailerUrl] = useState('');
    const baseUrl = "https://image.tmdb.org/t/p/original/";

    useEffect(()=>{
        
            const fetchData = async () =>{
                try{
                    const request = await axios.get(fetchUrl)
                    console.log(request);
                    setMoveis(request.data.results);
            } catch(error){
                console.log(error);
            }
        } 
        fetchData();
    },[fetchUrl])
    const handleClick = (movie) =>{
        if (trailerUrl )
            {
            setTrailerUrl('')
        }
        else {
                movieTrailer( movie?.original_title || movie?.title || movie?.name)
                .then((url)=>{
                        console.log(url)
                        const urlParams = new URLSearchParams(new URL(url).search)
                        setTrailerUrl(urlParams.get('v'));
                    }

                    )
                .catch((error) => console.error("Error finding trailer:", error));

        }
    }

    return (
        <>
            <div className="m-5">
                <h1 className="text-white font-playfair text-2xl my-4 ">{title}</h1>
                <div className="flex overflow-x-scroll  overflow-y-hidden scrollbar-none  ">
                    {movies.map((movie,index) => (
                        <img
                        onClick= {()=>handleClick(movie)}
                        key = {index} 
                        src={`${baseUrl}${isLarge ? movie?.poster_path : movie.backdrop_path
                            }`} 
                            alt={movie.name}
                            className = {`  w-full p-3 transition-transform duration-[450ms] max-h-[100px] ${isLarge ? 'max-h-[250px] hover:scale-110' : 'hover:scale-110 max-h-[100px]'}`} />
                    ))}
                    
                </div>
            </div>
            <div className="px-10">
                    {trailerUrl && <YouTube videoId={trailerUrl}  opts={{height: '300',width: '100%',padding : '50px' , playerVars: {autoplay: 1,mute: 1, }, }}/>}
            </div>
            
        </>
    )
}

export default Row
