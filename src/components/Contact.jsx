import { useFormik } from 'formik';
import * as yup from 'yup';
const validationSchema = yup.object({
  name: yup
    .string('Enter your name')
    .required('Name is required! Please enter your name.'),
  email: yup
    .string('Enter your email')
    .email('Enter a valid email!')
    .required('Email is required!'),
  message: yup
    .string('Enter your name')
    .required('Message is required! Please enter your message.'),
});
const Contact = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      message: '',
    },
    validationSchema: validationSchema,
  });

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
              id='name'
              type='text'
              name='name'
              className='my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none text-white'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className='p-2 text-red-600 rounded-md'>
                {formik.errors.name}
              </div>
            ) : null}
            <input
              type='email'
              name='email'
              className='my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none text-white'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className='p-2 text-red-600 rounded-md'>
                {formik.errors.email}
              </div>
            ) : null}
            <textarea
              name='message'
              rows='10'
              className='p-2 bg-transparent border-2 rounded-md focus:outline-none my-2'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
            />
            {formik.touched.message && formik.errors.message ? (
              <div className='px-2 text-red-600 rounded-md'>
                {formik.errors.message}
              </div>
            ) : null}
            <button
              type='submit'
              className='text-white bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 my-7 mx-auto flex items-center rounded-md hover:scale-110 duration-300'
              disabled={!formik.errors}
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
