import React, { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.replace('/');
    }, 4000);
  }, []);

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
