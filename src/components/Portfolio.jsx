import dashboard from '../assets/portfolio/dashboard.png';
import cloud from '../assets/portfolio/cloud.png';
import web3 from '../assets/portfolio/web3.png';
import spotify from '../assets/portfolio/spotify.png';
import rmdb from '../assets/portfolio/rmdb.png';
import netflix from '../assets/portfolio/netflix.png';
const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: dashboard,
      demo: 'https://dashboard-shoppy-minhtri.netlify.app/',
      code: 'https://github.com/PhanTriTT/dashboard-shoppy',
    },
    {
      id: 2,
      src: spotify,
      demo: 'https://spotify-minhtri.netlify.app/',
      code: 'https://github.com/PhanTriTT/spotify-clone',
    },
    {
      id: 3,
      src: netflix,
      demo: 'https://netflix-minhtri.netlify.app/',
      code: 'https://github.com/PhanTriTT/netflix-clone',
    },
    {
      id: 4,
      src: web3,
      demo: 'https://kcryptominhtri.000webhostapp.com/',
      code: 'https://github.com/PhanTriTT/web3.0',
    },
    {
      id: 5,
      src: rmdb,
      demo: 'https://react-rmdb-minhtri.netlify.app',
      code: 'https://github.com/PhanTriTT/react-moviedb2021',
    },
    {
      id: 6,
      src: cloud,
      demo: 'https://cloud-app-minhtri.netlify.app/',
      code: 'https://github.com/PhanTriTT/cloud-app-react',
    },
  ];
  return (
    <div
      name='portfolio'
      className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen '
    >
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
            Portfolio
          </p>
          <p className='py-6'>Check out some of my work right here</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 '>
          {portfolios.map(({ id, src, demo, code }) => (
            <div
              key={`portfolio-${id}`}
              className='shadow-md shadow-gray-600 rounded-lg'
            >
              <img
                src={src}
                alt={'Image'}
                className='rounded-md duration-200 hover:scale-105'
              />
              <div className='flex items-center justify-center'>
                <button
                  className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'
                  onClick={() => window.open(demo, '_blank')}
                >
                  Demo
                </button>
                <button
                  className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'
                  onClick={() => window.open(code, '_blank')}
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
