import  { useEffect, useState } from 'react'
import axios from '../utility/axios';
import requests from '../utility/request'

const Banner = () => {
    const [Movies , setMovies] = useState(null)
    useEffect(()=> {
        
            const fetchData = async () => {
                try {
                    const request = await axios.get(requests.netflixOriginal)
                    console.log('Request URL:', requests.netflixOriginal);
                    console.log('Response status:', request.status);
                    console.log('Response data:', request.data);
                    console.log(request)
                    if (request?.data?.results && request.data.results.length > 0) {
                        setMovies(request.data.results[Math.floor(Math.random() * request.data.results.length)]);
                    } else {
                        console.error('No valid results found');
                    }}
                catch(error){
                    console.log(error)
                };
                
            }
        fetchData();
    }, [])
        const truncate=(str, n)=>{
            return str?.length > n ? str.slice(0, n) + '...' : str;
        }
    return (
        <>  
            <div
                style={{
                    backgroundImage: `url(http://image.tmdb.org/t/p/original${Movies?.backdrop_path})`

                }}
                
                className="bg-cover bg-center h-[535px] "
                >
                <div className='ml-12 pt-64 space-y-3'>
                    <div className='text-2xl text-white font-bold '>
                    {Movies?.name || Movies?.original_name}
                    </div>
                    <div className='space-x-3'>
                        <button className='bg-white px-12 py-1 text-black hover:bg-sky-200 '>Play</button>
                        <button className='bg-cyan-50 bg-opacity-40 px-12 py-1 text-white hover:bg-sky-200 hover:text-black'>My List</button>
                    </div>
                    <div className='text-white w-96'>
                        {truncate(Movies?.overview, 120)}
                    </div>
                </div>
                <div className=' relative inset-y-2 bottom-0 h-28 bg-custom-gradient z-20'></div>
            </div>
        </>
    )
}

export default Banner
