import HeroImage from '../assets/heroImage.png';
const About = () => {
  return (
    <div
      name='about'
      className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'
    >
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
            About
          </p>
        </div>
        <div className='flex flex-col md:flex-row justify-center items-center mt-2'>
          <div className='flex-1 hidden md:block'>
            <img
              src={HeroImage}
              alt='my profile'
              className='rounded-2xl mx-auto w-2/3'
            />
          </div>

          <div className='flex-1 flex flex-col items-start ml-2'>
            <h3 className='font-bold text-4xl sm:text-7xl'>About me</h3>
            <p className='text-xl text-gray-500 mt-4'>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>
            <div className='mt-8 flex flex-col gap-4'>
              <p className='text-xl w-full'>
                <span className='w-2/3'>Name : </span>
                <span>Phan Minh Tri</span>
              </p>
              <p className='text-xl w-full'>
                <span className='w-2/3'>Date of birth : </span>
                <span>02/1/2001</span>
              </p>
              <p className='text-xl w-full'>
                <span className='w-2/3'>Address : </span>
                <span>247/33/93 Lac Long Quan,P3,Q11,HCM</span>
              </p>
              <p className='text-xl w-full'>
                <span className='w-2/3'>Email : </span>
                <span>minhtritt01@gmail.com</span>
              </p>
              <p className='text-xl w-full'>
                <span className='w-2/3'>Phone : </span>
                <span>0834790997</span>
              </p>
              <button className='bg-blue-600 mt-4 py-3 px-2 text-lg cursor-pointer rounded-full'>
                DOWNLOADCV
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
