import logo from '../../assets/logo-footer.png';
import backgroundImage from '../../assets/bg-shadow.png'


const Footer = () => {
    return (
        <div className="text-white relative">
            <div
                className="hero lg:h-[400px] h-[300px] lg:w-4/6 w-5/6 absolute lg:top-[-200px] lg:left-[17%] md:top-[-17%] md:left-[65px] -top-44 left-7 outline outline-2 outline-gray-100 outline-offset-[15px] shadow-[1px_1px_40px] shadow-gray-300"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    borderRadius: '40px',
                }}>
                <div className="hero-overlay bg-transparent"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="space-y-4">
                        <h1 className='md:text-3xl text-xl font-bold'>Subscribe to our Newsletter</h1>
                        <p className='text-sm md:text-base'> Get the latest updates and news right in your inbox!</p>
                        <div>
                            <input className='input bg-white rounded-lg md:rounded-r-none focus:outline-none text-black mb-2 md:mb-0' type="email" placeholder='Enter your email' />
                            <button className='btn bg-[#e5ff00] border-none rounded-lg md:rounded-l-none text-black w-full md:w-0 px-14 '>Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-black mt-60 pt-48'>
                <img className='w-40 mx-auto lg:mt-20' src={logo} alt="" />
                <div className='lg:flex justify-between lg:w-10/12 mx-auto my-5 space-y-5'>
                    <div className='w-80 space-y-3 mx-auto text-center lg:text-left'>
                        <h1 className='text-xl font-bold'>About Us</h1>
                        <p>We are a passionate team dedicated to providing the best services to our customers.</p>
                    </div>
                    <div className='space-y-3 mx-auto text-center lg:text-left'>
                        <h1 className='text-xl font-bold'>Quick Links</h1>
                        <ul className='space-y-2'>
                            <li>Home</li>
                            <li>Fixture</li>
                            <li>Teams</li>
                            <li>Schedules</li>

                        </ul>
                    </div>
                    <div className='w-80 space-y-3 mx-auto text-center lg:text-left'>
                        <h1 className='text-xl font-bold'>Subscribe</h1>
                        <p>Subscribe to our newsletter for the latest updates.</p>
                        <div className='flex '>
                            <input className='input bg-white rounded-r-none focus:outline-none text-black' type="email" placeholder='Enter your email' />
                            <button className='btn bg-[#e5ff00] border-none rounded-l-none text-black'>Subscribe</button>
                        </div>
                    </div>
                </div>
                <h1 className='text-center py-4 border-t-[1px] border-gray-600'>@2024 Your Company All Rights Reserved.</h1>
            </div>
        </div>
    );
};

export default Footer;