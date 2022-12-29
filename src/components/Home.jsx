import HeroImage from '../assets/heroImage.png';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-scroll';
const Home = () => {
  return (
    <div
      name='home'
      className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'
    >
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
          <h2 className='text-4xl sm:text-7xl text-white font-bold'>
            I'm a Full Stack Developer
          </h2>
          <p className='text-gray-500 py-4 max-w-md'>
            I have 8 years of experience building and designing software.
            Currently, I love to work on web application using technologies like
            React, Tailwind, Nodejs, Express and Mongoose
          </p>

          <div>
            <Link to={'portfolio'} smooth duration={500}>
              <button className='group text-white rounded-md w-fit px-6 py-3 my-2 flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                Portfolio
                <span className='group-hover:rotate-90'>
                  <MdOutlineKeyboardArrowRight size={25} className='ml-1' />
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt='my profile'
            className='rounded-2xl md:w-full mx-auto w-2/3'
          />
        </div>
      </div>
    </div>
  );
};
export default Home;
