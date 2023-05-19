import { Link } from 'react-router-dom';

const NotFound = () => {
  const notFoundStyleHeading = {
    fontSize: '4rem',
    fontWeight: 'bold'
  };

  const notFoundStyleParagraph = {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#666'
  };

  return (
    <main className='container main'>
      <section className='d-flex flex-column justify-content-center align-items-center h-100'>
        <h1 style={notFoundStyleHeading}>404 Not Found</h1>
        <p className='mb-0' style={notFoundStyleParagraph}>
          The page you are looking for does not exist.
        </p>

        <Link
          to='/'
          className='btn btn-dark w-50 fw-700 text-white p-y-4 text-xl mt-5'>
          Return to Home
        </Link>
      </section>
    </main>
  );
};

export default NotFound;
