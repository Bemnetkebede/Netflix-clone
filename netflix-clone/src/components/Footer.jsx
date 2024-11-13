import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import CopyrightIcon from '@mui/icons-material/Copyright';
const Footer = () => {
    return (
        <>
            <div className="space-y-5 text-white font-playfair ">
                <div className='items-start ml-[97px]'>
                    <ul className='flex space-x-7'>
                        <li><FacebookOutlinedIcon /></li>
                        <li><InstagramIcon /></li>
                        <li><YouTubeIcon /></li>
                    </ul>
                </div>
                <div className='flex space-x-8 justify-around opacity-80 font-Playfair text-sm'>
                    <div>
                    <ul className='space-y-5'>
                        <li >Audio Description</li>
                        <li>Inverstor Relations</li>
                        <li>Legal Notice</li>
                    </ul>
                    </div>
                    <ul className='space-y-5'>
                        <li>Help Center</li>
                        <li>Jobs</li>
                        <li>Cookie Preference</li>
                    </ul>
                    <ul className='space-y-5'>
                        <li>Credit Card</li>
                        <li>Term of use</li>
                        <li>Corporate Information</li>
                    </ul>
                    <ul className='space-y-5'>
                        <li>Media Center</li>
                        <li>Privacy</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className=''>
                <span className='ml-[89px] border border-white px-2  text-sm '>service code</span><br/>
                <span className='ml-[85px]'><CopyrightIcon/>
                <span className='text-sm'>1994-2024 Netflix,Inc.</span></span></div>
                
            </div>
        </>
    )
}

export default Footer
