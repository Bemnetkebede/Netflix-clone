// import netflix from '../assets/images/netflix.jpeg'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const Header = () => {
    return (
        <>
            <div className="bg-black h-17 sticky font-playfair">
                <div className="flex justify-between items-center py-5 px-10 cursor-pointer text-sm">
                    <div className=''>
                        <ul className="text-white flex space-x-5 items-center ">
                            <li className='w-[100px]'><img src={'https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg'} alt="" /></li>
                            <li >Netflix</li>
                            <li>Home</li>
                            <li >TV Shows</li>
                            <li>Movies</li>
                            <li>Latest</li>
                            <li>My Lists</li>
                            <li>Browse by Languages</li>
                        </ul>
                    </div>
                    <div className='flex'> 
                        <ul className='flex space-x-5 items-center '>
                            <li className='text-white'><SearchIcon/></li>
                            <li className='text-white'><NotificationsIcon/></li>
                            <li className='text-white'><AccountBoxIcon /></li>
                            <li className='text-white'><ArrowDropDownIcon / ></li>
                        </ul>
                    
                        
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header; 