import React from 'react';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className='not-found'>
      <h2>💩 404 Error: Page not found</h2>
      <p>
        Go to{' '}
        <Link href='/'>
          <a>Home page</a>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
