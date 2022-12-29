const Contact = () => {
  return (
    <div
      name='contact'
      className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'
    >
      <div className='flex flex-col justify-center max-w-screen-lg p-4 mx-auto h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-400'>
            Contact
          </p>
          <p className='py-6'>Submit the form below to get in touch with me</p>
        </div>

        <div className='flex justify-center items-center'>
          <form
            action='https://getform.io/f/c2afd619-c657-49a5-b5ad-1f0683d56d51'
            method='POST'
            className='flex flex-col w-full h-full'
          >
            <input
              type='text'
              name='name'
              placeholder='Enter your name'
              className='p-2 bg-transparent border-2 rounded-md focus:outline-none text-white'
            />
            <input
              type='email'
              name='email'
              placeholder='Enter your email address'
              className='my-4 p-2 bg-transparent border-2 rounded-md focus:outline-none text-white'
            />
            <textarea
              name='message'
              placeholder='Enter your message'
              rows='10'
              className='p-2 bg-transparent border-2 rounded-md focus:outline-none '
            />
            <button
              type='submit'
              className='text-white bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'
            >
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact;
